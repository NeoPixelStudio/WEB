(function () {
    "use strict";

    var regalo = document.getElementById("regalo");

    document.addEventListener('DOMContentLoaded', function () {
        //Mapa
        var map = L.map('mapa').setView([-2.898938, -79.010571], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-2.898938, -79.010571]).addTo(map)
            .bindPopup('Ubicación')
            .openPopup()
        // .bindPopup("Es un Popup")
        // .openTooltip();
        //Campos datos usuario
        var nombre = document.querySelector('#nombre');
        var apellido = document.querySelector('#apellido');
        var email = document.querySelector('#email');
        //Campos pases
        var pase_dia = document.querySelector('#pase_dia');
        var pase_dosdias = document.querySelector('#pase_dosdias');
        var pase_completo = document.querySelector('#pase_completo');
        //Botones y divs
        var calcular = document.querySelector('#calcular');
        var errorDiv = document.querySelector('#error');
        var botonRegistro = document.querySelector('#btnRegistro');
        var lista_Productos = document.querySelector('#lista_productos');
        var suma = document.querySelector('#suma_total');
        //Extras
        var camisas = document.querySelector('#camisa_evento');
        var etiquetas = document.querySelector('#etiquetas');

        if (document.getElementById('calcular')) {

            calcular.addEventListener('click', calcularMontos);

            pase_dia.addEventListener('blur', mostrarDias);
            pase_dosdias.addEventListener('blur', mostrarDias);
            pase_completo.addEventListener('blur', mostrarDias);

            nombre.addEventListener('blur', validar);
            apellido.addEventListener('blur', validar);
            email.addEventListener('blur', validar);
            email.addEventListener('blur', validarMail);

            function validar() {
                if (this.value == "") {
                    errorDiv.style.display = 'block';
                    errorDiv.innerHTML = "Este campo no puede estar vacio";
                    this.style.border = "1px solid red";
                    errorDiv.style.color = "red";
                    errorDiv.style.fontSize = ".5em";
                } else {
                    errorDiv.style.display = "none";
                    this.style.border = "1px solid  #ccc";
                }
            };

            function validarMail() {
                if (this.value.indexOf("@") > -1) {
                    errorDiv.style.display = "none";
                    this.style.border = "1px solid  #ccc";
                } else {
                    errorDiv.style.display = 'block';
                    errorDiv.innerHTML = "Debe introducir un correo válido";
                    this.style.border = "1px solid red";
                    errorDiv.style.color = "red";
                    errorDiv.style.fontSize = ".5em";
                }
            };


            function calcularMontos(event) {
                event.preventDefault();
                if (regalo.value === " ") {
                    alert("Debes elegir un regalo");
                    regalo.focus();
                } else {
                    var boletoDia = parseInt(pase_dia.value, 10) || 0,
                        boleto2Dias = parseInt(pase_dosdias.value, 10) || 0,
                        boletoCompleto = parseInt(pase_completo.value, 10) || 0,
                        cantCamisas = parseInt(camisas.value, 10) || 0,
                        cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

                    var totalPagar = (boletoDia * 30) + (boleto2Dias * 45) + (boletoCompleto * 50) + (cantCamisas * 10) * .93 + (cantEtiquetas * 2);

                    var listadoProductos = [];

                    if (boletoDia >= 1) {
                        listadoProductos.push(boletoDia + " Pases por día");
                    }
                    if (boleto2Dias >= 1) {
                        listadoProductos.push(boleto2Dias + " Pases por 2 días");
                    }
                    if (boletoCompleto >= 1) {
                        listadoProductos.push(boletoCompleto + " Pases completos");
                    }
                    if (cantCamisas >= 1) {
                        listadoProductos.push(cantCamisas + " Camisas");
                    }
                    if (cantEtiquetas >= 1) {
                        listadoProductos.push(cantEtiquetas + " Etiquetas");
                    }

                    lista_Productos.style.display = "block"
                    lista_Productos.innerHTML = " ";
                    for (var i = 0; i < listadoProductos.length; i++) {
                        lista_Productos.innerHTML += listadoProductos[i] + "<br/>";
                    }

                    suma.innerHTML = "$ " + totalPagar.toFixed(2);

                }
            }

            function mostrarDias() {
                document.getElementById('eventos').style.display = 'block'
                var boletoDia = parseInt(pase_dia.value, 10) || 0,
                    boleto2Dias = parseInt(pase_dosdias.value, 10) || 0,
                    boletoCompleto = parseInt(pase_completo.value, 10) || 0;

                var diasElegidos = [];

                if (boletoDia > 0) {
                    diasElegidos.push('viernes');
                }
                if (boleto2Dias > 0) {
                    diasElegidos.push('viernes', 'sabado');
                }
                if (boletoCompleto > 0) {
                    diasElegidos.push('viernes', 'sabado', 'domingo');
                }
                for (var i = 0; i < diasElegidos.length; i++) {
                    document.getElementById(diasElegidos[i]).style.display = 'grid';
                }
            }

        }
    });
})()


//DOM CONTENT LOADED

$(function () {

    //Lettering

    $('.nombre-sitio').lettering();

    //Menu Fijo

    var windowHeight = $(window).height();
    var barraAltura = $('.barra').innerHeight();

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > windowHeight) {
            $('.barra').addClass('fixed');
            $('body').css({ 'margin-top': barraAltura + 'px' });
        } else {
            $('.barra').removeClass('fixed');
            $('body').css({ 'margin-top': '0px' })
        }
    })

    //Menu Responsive

    $('.menu-mobile').on("click", function () {
        $('.navegacion-principal').slideToggle();
    })

    //Programa de Conferencias

    $('.programa-evento .info-curso:first').show();
    $('.menu-programa a:first').addClass('activo')

    $('.menu-programa a').on('click', function () {
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        var enlace = $(this).attr('href');
        $('.ocultar').fadeOut(1000);
        $(enlace).delay(1000).fadeIn(1000);
        return false;
    })

    //Animate Numbers

    $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6 }, 2400);
    $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15 }, 2400);
    $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3 }, 1200);
    $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 9 }, 3000);

    //Countdown

    $(".cuenta-regresiva").countdown('2022/06/31 10:00:00', function (event) {
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    })
})


// var regalo = document.getElementById('regalo');
// (function() {
//     'use strict';

//     document.addEventListener('DOMContentLoaded', function(){
//         var calcular = document.getElementById('calcular');
//         var errorDiv = document.getElementById('error');

//         calcular.addEventListener('click', calcularMontos);

//         function calcularMontos(event) {
//             event.preventDefault();
//             console.log(regalo.value);
//         }
//     });// DOM content loaded
// })();