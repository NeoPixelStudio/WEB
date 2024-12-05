document.addEventListener("DOMContentLoaded", function() {
    //Mapa
    //Where the view starts
    var map = L.map("mapa_cc").setView([18.4178, -69.6537], 8);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    var co2_icon = L.icon({
        iconUrl: './src/map/co2.svg',
    
        iconSize:     [45, 95], // size of the icon
    });

    //Add spoted locations

    d3.csv ("./data/cambio_climatico.csv").then (function(data) {
        for (var i = 0; i < data.length; i++) {
            var longitude = data[i].longitude;
            var latitude = data[i].latitude;
            var co2 = data[i].CO2;
            var co2_person = data[i].CO2_Person;
            var CH4 = data[i].CH4;
            var N2O = data[i].N2O;
            var HFCs = data[i].HFCs;
            var SF6 = data[i].SF6;
            var NF3 = data[i].NF3;
            var info = "<div class='ecological_footprint'><span>CO2(Toneladas): </span><p>" + co2 + "</p>" + "<span>CO2/Habitante: </span><p>" + co2_person + "</p>" + "<span>CH4(Toneladas): </span><p>" + CH4 + "</p>" + "<span>N2O(Toneladas): </span><p>" + N2O + "</p>" + "<span>HFCs(Toneladas): </span><p>" + HFCs + "</p>" + "<span>SF6(Toneladas): </span><p>" + SF6 + "</p>" + "<span>NF3(Toneladas): </span><p>" + NF3 + "</p>" + "</div>";
            L.marker([longitude, latitude], {icon: co2_icon}).addTo(map).bindPopup(info).openPopup();
        }
    });
});