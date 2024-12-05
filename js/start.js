window.onload = function() {
    //Back to the start
    window.scrollTo(0, 0);

    //loader page
    setTimeout(function() {
        document.querySelector(".loader").style.display = 'none';
    }, 2000);

    //Time to open whatsapp
    setTimeout(function() {
        document.querySelector("#whatsapp").style.display = 'block';
    }, 15000);

    //Pop up for avoided zones space

    /*document.getElementById("sky").addEventListener("scroll", checkScrollTop);*/

    // Función para mostrar el popup
    /*function showPopuptoDown() {
        var popup = document.getElementById('popup_container');
        popup.style.display = 'grid';
    }*/

    // Función para comprobar si se ha llegado al punto más alto de la página
    /*
    function checkScrollTop() {
        var skyposition = document.getElementById("sky").scrollTop;
        var skyheigth = document.getElementById("sky").offsetHeight;
        if (skyposition < skyheigth * 0.05) {
            setTimeout(function () {
                showPopuptoDown()
            }, 5000);
        }
    }
    */

    //Pop up for avoided zones land
    //Por crear.......
}