(function () {
    var shipContainer = document.getElementById('global_ship_container');
    var ship = document.getElementById('lottie_spaceship');
    var destination = document.getElementById('atmosphere');
    var scrollContainer = document.getElementById('sky');
    var parallaxContainer = document.getElementById('parallax');
    var flightInProgress = false;

    if (!shipContainer || !ship || !destination || !scrollContainer || !parallaxContainer) {
        return;
    }

    function easeInOut(progress) {
        return progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    }

    function animateFlight() {
        if (flightInProgress) {
            return;
        }

        var startRect = ship.getBoundingClientRect();
        var startScroll = scrollContainer.scrollTop;
        var startParallaxScroll = parallaxContainer.scrollTop;

        var destinationRect = destination.getBoundingClientRect();
        var containerRect = scrollContainer.getBoundingClientRect();
        var destinationTop = startScroll + destinationRect.top - containerRect.top;
        var targetScroll = Math.max(
            0,
            Math.min(
                scrollContainer.scrollHeight - scrollContainer.clientHeight,
                destinationTop + destination.offsetHeight - scrollContainer.clientHeight
            )
        );

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            var reducedMotionSnapType = scrollContainer.style.scrollSnapType;
            scrollContainer.style.scrollSnapType = 'none';
            parallaxContainer.scrollTop = 0;
            scrollContainer.scrollTo({ top: targetScroll, behavior: 'auto' });
            scrollContainer.style.scrollSnapType = reducedMotionSnapType;
            return;
        }

        flightInProgress = true;

        var originalScrollSnapType = scrollContainer.style.scrollSnapType;
        var flightShip = ship.cloneNode(true);
        var startTime;
        var cloneStartTime;
        var scrollDuration = 1500;
        var startX = startRect.left;
        var startY = startRect.top;
        var targetX = (window.innerWidth - startRect.width) / 2;
        var targetY = (window.innerHeight - startRect.height) / 2;

        flightShip.removeAttribute('id');
        flightShip.setAttribute('aria-hidden', 'true');
        flightShip.style.position = 'fixed';
        flightShip.style.zIndex = '9999';
        flightShip.style.pointerEvents = 'none';
        flightShip.style.margin = '0';
        flightShip.style.maxWidth = 'none';
        flightShip.style.maxHeight = 'none';
        flightShip.style.width = startRect.width + 'px';
        flightShip.style.height = startRect.height + 'px';
        flightShip.style.transform = window.getComputedStyle(ship).transform;
        flightShip.style.left = startX + 'px';
        flightShip.style.top = startY + 'px';
        document.body.appendChild(flightShip);
        shipContainer.style.pointerEvents = 'none';
        window.requestAnimationFrame(waitForFlightShip);

        function finishFlight() {
            flightShip.remove();
            ship.style.visibility = '';
            shipContainer.style.pointerEvents = '';
            scrollContainer.style.scrollSnapType = originalScrollSnapType;
            flightInProgress = false;
        }

        function waitForFlightShip(timestamp) {
            if (cloneStartTime === undefined) {
                cloneStartTime = timestamp;
            }

            if (flightShip.shadowRoot && flightShip.shadowRoot.querySelector('svg')) {
                ship.style.visibility = 'hidden';
                scrollContainer.style.scrollSnapType = 'none';
                window.requestAnimationFrame(animateScroll);
                return;
            }

            if (timestamp - cloneStartTime > 10000) {
                finishFlight();
                console.error('Unable to start the spaceship flight: the Lottie clone did not finish loading.');
                return;
            }

            window.requestAnimationFrame(waitForFlightShip);
        }

        function animateScroll(timestamp) {
            if (startTime === undefined) {
                startTime = timestamp;
            }

            var progress = Math.min((timestamp - startTime) / scrollDuration, 1);
            var easedProgress = easeInOut(progress);
            var shake = (1 - progress) * 4;

            scrollContainer.scrollTop = startScroll + (targetScroll - startScroll) * easedProgress;
            parallaxContainer.scrollTop = startParallaxScroll * (1 - easedProgress);
            flightShip.style.left = startX + (targetX - startX) * easedProgress + Math.sin(timestamp / 24) * shake + 'px';
            flightShip.style.top = startY + (targetY - startY) * easedProgress + Math.cos(timestamp / 31) * shake + 'px';

            if (progress < 1) {
                window.requestAnimationFrame(animateScroll);
                return;
            }

            var exitStartTime;
            var exitStartX = targetX;
            var exitStartY = targetY;
            var exitEndX = targetX;
            var exitEndY = -startRect.height - 20;
            var takeoffDelay = 1500;
            var takeoffStartTime;
            var exitDuration = 3500;

            function animateTakeoff(timestamp) {
                if (takeoffStartTime === undefined) {
                    takeoffStartTime = timestamp;
                }

                var elapsed = timestamp - takeoffStartTime;
                var progress = Math.min(elapsed / takeoffDelay, 1);
                flightShip.style.left = targetX + 'px';
                flightShip.style.top = targetY + 'px';

                if (progress < 1) {
                    window.requestAnimationFrame(animateTakeoff);
                    return;
                }

                flightShip.style.left = targetX + 'px';
                flightShip.style.top = targetY + 'px';
                window.requestAnimationFrame(animateExit);
            }

            function animateExit(exitTimestamp) {
                if (exitStartTime === undefined) {
                    exitStartTime = exitTimestamp;
                }

                var exitProgress = Math.min((exitTimestamp - exitStartTime) / exitDuration, 1);
                var easedExitProgress = easeInOut(exitProgress);
                var shake = (1 - exitProgress) * 3;

                flightShip.style.left = exitStartX + (exitEndX - exitStartX) * easedExitProgress + Math.sin(exitTimestamp / 24) * shake + 'px';
                flightShip.style.top = exitStartY + (exitEndY - exitStartY) * easedExitProgress + Math.cos(exitTimestamp / 31) * shake + 'px';

                if (exitProgress < 1) {
                    window.requestAnimationFrame(animateExit);
                    return;
                }

                finishFlight();
            }

            window.requestAnimationFrame(animateTakeoff);
        }

    }

    shipContainer.addEventListener('click', animateFlight);
})();
