//Menu Fijo

var windowHeight = $(window).height();
var barraAltura = $(".barra").innerHeight();

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > windowHeight + windowHeight * 0.05) {
    $(".barra").addClass("fixed");
    $(".logo2").addClass("min");
  } else {
    $(".barra").removeClass("fixed");
    $(".logo2").removeClass("min");
  }
});

//Menu Responsive

$(".menu-mobile").on("click", function () {
  $(".navegacion-principal").slideToggle();
});

//Slide map legeds
$(document).ready(function(){
  $("#indclimaticos").click(function(){
    $("#rindclimaticos").slideToggle(1000,"swing");
    $("#indclimaticos").toggleClass("active");
  });
});

$(document).ready(function(){
  $("#indreforestacion").click(function(){
    $("#rindreforestacion").slideToggle(1000,"swing");
    $("#indreforestacion").toggleClass("active");
  });
});

$(document).ready(function(){
  $("#indmitigacion").click(function(){
    $("#rindmitigacion").slideToggle(1000,"swing");
    $("#indmitigacion").toggleClass("active");
  });
});

$(document).ready(function(){
  $("#indsuperficie").click(function(){
    $("#rindsuperficie").slideToggle(1000,"swing");
    $("#indsuperficie").toggleClass("active");
  });
});

$(document).ready(function(){
  $("#indinventario").click(function(){
    $("#rindinventario").slideToggle(1000,"swing");
    $("#indinventario").toggleClass("active");
  });
});