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
        location.href = './office.html'
    });
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

/****************************/


//Global variables
var _docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
var _docWidth = (document.width !== undefined) ? document.width : document.body.offsetWidth;

/**Add to Doc & Measure**/

let container;
container = document.querySelector('#bld_nxs');

var scene = new THREE.Scene();

var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

/***Loader***/

let loader = new THREE.GLTFLoader();
loader.load("../resourses/3D/scene_min.gltf", function(gltf) {
    scene.add(gltf.scene);
    renderer.render(scene, camera);
})

/***Camera Perspective***/

const fov = 50;
const aspect = container.clientWidth / container.clientHeight;
const near = 10;
const far = 5000;
var cam_angle_init = -0.35;
camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

// Camera Height
const cam_height_init = 1200;
camera.position.set(0, cam_height_init, 2000);
camera.rotation.set(cam_angle_init, 0, 0);


/***lights***/

var light = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.25);
light.position.set(0, 1, -1);

scene.add(light);

const ambient = new THREE.AmbientLight(0xFFFFFF, 0.75);
scene.add(ambient);

/***Animation Height, Angle, Zoom***/

// Render
function render() {
    requestAnimationFrame(render);

    // Angle & Height

    const speed_cam_change = 750;
    const speed_angle_change = 0.004;
    const speed_height_change = 7;

    var cam_angle = -0.35;
    /*Breakpoint*/
    const b = 0;

    if (window.pageYOffset > 0 && $('#classic:visible').length == 0) {
        document.getElementById('whatsapp').style.display = 'none';
        document.getElementById('enter').style.display = 'block';
        camera.position.y = cam_height_init - (window.pageYOffset * speed_height_change);
        cam_angle += (window.pageYOffset * speed_angle_change);
        camera.rotation.set(cam_angle, 0, 0);
        var scrolled = (window.pageYOffset / speed_cam_change) + 1;
        transformValue = 'scale(' + scrolled + ')';
        container.style.transform = transformValue;
        $("html, body").animate({ scrollTop: $('#trigger').offset().top }, 4500);
        //Animation align landscape
        $("#parallax__layer__1").animate({ top: "500vh" }, 1000);
        $("#parallax__layer__2").animate({ top: "475vh" }, 1000);
        $("#parallax__layer__3").animate({ top: "475vh" }, 1000);
        $("#parallax__layer__4").animate({ top: "460vh" }, 1000);
        $("#parallax__layer__5").animate({ top: "475vh" }, 1000);
        $("#parallax__layer__6").animate({ top: "465vh" }, 1000);
        $("#parallax__layer__7").animate({ top: "465vh" }, 1000);
        $("#parallax__layer__8").animate({ top: "423vh" }, 1000);
        $("#parallax__layer__ground1").animate({ top: "410vh" }, 1000);
        $("#floor1").animate({ height: "15vh" }, 1000);
        $("#parallax__layer__ground2").animate({ top: "425vh" }, 1000);
        $("#floor2").animate({ height: "15vh" }, 1000);
        $("#parallax__layer__ground3").animate({ top: "435vh" }, 1000);
        $("#floor3").animate({ height: "15vh" }, 1000);
        $("#parallax__layer__ground4").animate({ top: "440vh" }, 1000);
        $("#floor4").animate({ height: "15vh" }, 1000);
        /*console.log(cam_angle);*/
        /*console.log(camera.position.y);*/
        /*console.log(scrolled);*/
        if (cam_angle > b) {
            camera.rotation.set(-0.02, 0, 0);
            camera.position.y = 600;
            document.getElementById("parallax").style.overflowY = "hidden";
            document.body.style.overflowY = "hidden";
        }
    } else {
        camera.rotation.set(cam_angle_init, 0, 0);
        camera.position.y = cam_height_init;
        container.style.transform = "scale(1)";
    }

    renderer.render(scene, camera);
}

render();

/***Resize***/

window.addEventListener('resize', onWindowResize);

function onWindowResize() {

    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    renderer.setSize(canvasWidth, canvasHeight);

    camera.aspect = canvasWidth / canvasHeight;
    camera.updateProjectionMatrix();

    render();
}