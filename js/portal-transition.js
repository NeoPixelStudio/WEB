var portalTransitionInProgress = false;

function enterPortal() {
    var target = document.getElementById('about_us');
    var overlay = document.getElementById('portal-transition');

    if (!target || !overlay) {
        console.error('Unable to start the portal transition: required page elements are missing.');
        return;
    }

    if (portalTransitionInProgress) {
        return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        target.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'nearest' });
        return;
    }

    portalTransitionInProgress = true;
    overlay.classList.add('is-visible');

    window.setTimeout(function() {
        target.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
        waitForPortalScrollToStop(function() {
            overlay.classList.remove('is-visible');
            window.setTimeout(function() {
                portalTransitionInProgress = false;
            }, 1150);
        });
    }, 1150);
}

function waitForPortalScrollToStop(onComplete) {
    var previousY = window.pageYOffset;
    var stableFrames = 0;

    function checkPosition() {
        var currentY = window.pageYOffset;
        if (Math.abs(currentY - previousY) < 1) {
            stableFrames++;
        } else {
            stableFrames = 0;
        }

        previousY = currentY;
        if (stableFrames >= 10) {
            onComplete();
        } else {
            window.requestAnimationFrame(checkPosition);
        }
    }

    window.requestAnimationFrame(checkPosition);
}
