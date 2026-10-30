//Open chat link to whatsapp
document.getElementById('whatsapp').addEventListener('click', function() {
    document.getElementById('whatsapp-open').style.display = 'flex';
    document.getElementById('whatsapp').style.display = 'none';
})

document.getElementById('close_whatsapp').addEventListener('click', function() {
    document.getElementById('whatsapp-open').style.display = 'none';
    document.getElementById('whatsapp').style.display = 'block';
})

//Activate Classic Option
document.getElementById("classic_button").addEventListener("click", function() {
    var interactive_elems = document.getElementsByClassName("interactive");
    for (var i = 0; i < interactive_elems.length; i++) {
        interactive_elems[i].style.display = "none";
    }
    document.getElementById("classic").style.display = "block";
    document.getElementById("ai").style.display = "block";
    document.getElementById("parallax").scrollIntoView();
    document.getElementById('parallax__layer__7').style.transform = 'translateZ(0px) scale(2)';
    document.getElementById('parallax__layer__7').style.top = '335vh';
});

//Activate trigger animation
function trigger() {

    window.scrollTo(0, 0);

    var trigger = document.createElement('div');
    trigger.id = 'trigger';
    document.body.appendChild(trigger);
    document.getElementById("trigger").style.display = "block";

    var enter = document.createElement('div');
    enter.id = 'enter';
    enter.className = 'bounce';
    document.getElementById('trigger').appendChild(enter);

    var footer_creation = document.createElement('div');
    footer_creation.className = 'footer';
    document.getElementById('trigger').appendChild(footer_creation);
    var footer = document.querySelectorAll('.footer');

    var logoFooter_creation = document.createElement('div');
    logoFooter_creation.className = 'logo-footer';
    footer[2].appendChild(logoFooter_creation);
    var logoFooter = document.querySelectorAll('.logo-footer');

    var mail_creation = document.createElement('div');
    mail_creation.className = 'mail';
    footer[2].appendChild(mail_creation);
    var mail = document.querySelectorAll('.mail');

    var icon_creation = document.createElement('div');
    icon_creation.className = 'icon';
    mail[2].appendChild(icon_creation);

    var nameEmail_creation = document.createElement('div');
    nameEmail_creation.className = 'nameEmail';
    mail[2].appendChild(nameEmail_creation);
    var nameEmail = document.querySelectorAll('.nameEmail');

    var mailName_creation = document.createElement('p');
    mailName_creation.innerText = "staff@neopixel.studio";
    nameEmail[2].appendChild(mailName_creation);

    var numero_creation = document.createElement('div');
    numero_creation.className = 'numero';
    footer[2].appendChild(numero_creation);
    var numero = document.querySelectorAll('.numero');

    var icon2_creation = document.createElement('div');
    icon2_creation.className = 'icon';
    numero[2].appendChild(icon2_creation);

    var number_creation = document.createElement('div');
    number_creation.className = 'number';
    numero[2].appendChild(number_creation);
    var number = document.querySelectorAll('.number');

    var numberDigit_creation = document.createElement('p');
    numberDigit_creation.innerText = "+593 996639450";
    number[2].appendChild(numberDigit_creation);

    var copyright_creation = document.createElement('div');
    copyright_creation.className = 'copyright';
    footer[2].appendChild(copyright_creation);
    var copyright = document.querySelectorAll('.copyright');

    var copyrightName_creation = document.createElement('p');
    copyrightName_creation.innerText = "copyright © 2022 NeoPixelStudio";
    copyright[2].appendChild(copyrightName_creation);

    document.querySelector('#enter').addEventListener('click', function() {
        location.href = './index.html'
    });

    loadInteractive3D();
}

var interactive3DLoading = false;
var interactive3DLoaded = false;

function loadInteractive3D() {
    if (interactive3DLoading || interactive3DLoaded) {
        return;
    }

    interactive3DLoading = true;
    var scripts = [
        './js/three.min.js',
        './js/GLTFLoader.js',
        './js/interactive-3d.js'
    ];

    function loadNextScript(index) {
        if (index === scripts.length) {
            interactive3DLoaded = true;
            interactive3DLoading = false;
            return;
        }

        var script = document.createElement('script');
        script.src = scripts[index];
        script.onload = function() {
            loadNextScript(index + 1);
        };
        script.onerror = function() {
            interactive3DLoading = false;
            console.error('Unable to load the interactive 3D experience: ' + scripts[index]);

            var message = document.createElement('p');
            message.textContent = 'No se pudo cargar la experiencia interactiva. Recarga la página e inténtalo de nuevo.';
            message.style.cssText = 'position:fixed;z-index:10001;top:1rem;left:1rem;right:1rem;padding:1rem;background:#fff;color:#000;text-align:center;';
            document.body.appendChild(message);
        };
        document.body.appendChild(script);
    }

    loadNextScript(0);
}

//Unblock page and effects
function unlock() {

    var time_effect1 = 3000;
    var time_effect2 = 5000;

    document.getElementById("parallax").style.overflowY = "scroll";
    $(".choose").animate({
        opacity: "0",
    }, time_effect1);
    $('.choose').hide(time_effect1);

    function arrow_down() {
        document.querySelector(".down_arrow").style.display = "flex";
        document.querySelector("#ai_trigger").style.display = "block";
        $(".down_arrow").animate({
            opacity: "0",
        }, time_effect2);

        $('.down_arrow').hide(time_effect2);
    };
    setTimeout(arrow_down, time_effect1);

    document.getElementById("ai_trigger").addEventListener("click", function() {
        $("#ai_trigger").animate({
            opacity: "0",
        }, time_effect1);

        $('#ai_trigger').hide(time_effect1);
    })
}