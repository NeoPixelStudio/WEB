var sky = document.querySelector('#sky');

//Creación de capa ss_space
var x = document.createElement("div");
x.className = "ss_space";
sky.insertBefore(x, sky.firstChild);

//Creación de capa s_space

var w = document.createElement("div");
w.className = "s_space";
sky.insertBefore(w, sky.firstChild);

//Agregado de ShoothingStars  

var y = document.createElement("div");
y.className = "s_star";
document.querySelector('.ss_space').appendChild(y);

var v = document.createElement("div");
v.className = "s_star";
document.querySelector('.ss_space').appendChild(v);

var u = document.createElement("div");
u.className = "s_star";
document.querySelector('.ss_space').appendChild(u);

//Creación de Estrellas

var z = {};
var stars = 200;

for (i = 0; i <= stars; i++) {
    z["star" + i] = document.createElement("div");
    z["star" + i].className = "star";
    document.querySelector('.s_space').appendChild(z["star" + i]);
}

//Animación de Estrellas

var s = document.querySelectorAll('.star');

for (i = 0; i <= stars; i++) {
    s[i].style.animationDelay = (Math.random(1) * 2) + "s";
    s[i].style.top = (Math.random(1) * 99) + "%";
    s[i].style.left = (Math.random(1) * 99) + "%";
}

//Animación de Estrellas Fugaces

var st = document.querySelectorAll('.s_star');

for (i = 0; i < st.length; i++) {
    st[i].style.animationDelay = (Math.random(1) * 10) + "s";
    st[i].style.top = Math.random(1) * 100 + "%";
    st[i].style.left = Math.random(1) * 100 + "%";
}