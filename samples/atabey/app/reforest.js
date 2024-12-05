document.addEventListener("DOMContentLoaded", function() {
    //Mapa
    //Where the view starts
    var map = L.map("mapa_r").setView([18.4178, -69.6537], 8);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);


    var tree_icon = L.icon({
        iconUrl: './src/map/tree_icon.svg',
        shadowUrl: './src/map/tree_icon_shadow.svg',
    
        iconSize:     [45, 95], // size of the icon
        shadowSize:   [40, 55], // size of the shadow
    });

    //Add spoted locations

    d3.csv ("./data/reforestacion_1.csv").then (function(data) {
        for (var i = 0; i < data.length; i++) {
            var longitude = data[i].longitude;
            var latitude = data[i].latitude;
            var totalplantado = data[i].total_plantado;
            //Get headers
            var headerNames = d3.keys(data[0]);
            var totalplantado1 = data[i][headerNames[2]];
            var totalplantado2 = data[i][headerNames[3]];
            var superficierepoblada = data[i][headerNames[4]];
            var marcoplatancion = data[i][headerNames[5]];
            //Add
            /*var info = "<div class='forest'><span>Total Plantado: </span><p>" + totalplantado + "</p>" + "<span>Total " + headerNames[2] + ": </span><p>" + totalplantado1 + "</p>" + "<span>Total " + headerNames[3] + ": </span><p>" + totalplantado2 + "</p>" + "<span>Total " + headerNames[4] + ": </span><p>" + superficierepoblada + "</p>" + "<span>Total " + headerNames[5] + ": </span><p>" + marcoplatancion + "</p> </div>";*/
            var info2 = "<div class='forest'><span>Total Plantado: </span><p>" + totalplantado + "</p>" + "<span>Total " + headerNames[2] + ": </span><p>" + totalplantado1 + "</p>" + "<span>Total " + headerNames[3] + ": </span><p>" + totalplantado2 + "</p>" + "<span>Total " + headerNames[4] + ": </span><p>" + superficierepoblada + "</p>" + "<span>Total " + headerNames[5] + ": </span><p>" + marcoplatancion + "</p> </div>";
            /*L.marker([longitude, latitude], {icon: tree_icon}).addTo(map).bindPopup(info).openPopup();*/
            L.marker([longitude, latitude], {icon: tree_icon}).addTo(map).bindPopup(info2).openPopup();
        }
    });
});