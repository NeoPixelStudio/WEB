d3.csv ("./data/dataset.csv").then ( function(datos) {
    window.datosGlobal = datos;

    var elementoUl = d3.select("body").append('ul');

/*
    //Definición de Escala Tamaño
    var escalaTamanio = d3.scaleLinear()
        //.domain([0,3000]) //dominio fijo - en desuso
        .domain(d3.extent(datos, function(d) {return d.votantes}))
        .range(["15px", "50px"])

    //Definición de Escala Color
    var escalaColor = d3.scaleLinear()
        //.domain([0,10]) //dominio fijo - en desuso
        .domain(d3.extent(datos, function(d) {return d.mediaAutoubicacion}))
        .range(["red", "green", "blue"])
*/

    elementoUl
        .selectAll('li') //Selección de tantas Li como haga falta
        .data(datos) //Join
        .enter() //aplicar cambios
        .append('li') //agregar li
        .attr('id', function(d) {return d.id})
        .text( function(d) {return d.latitude}) //agregar texto según los datos leídos
        //.style("font-size", function(d) {return escalaTamanio(d.votantes)})
        //.style("color", function(d) {return escalaColor(d.mediaAutoubicacion)})
})


