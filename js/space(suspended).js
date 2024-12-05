//Creación de capa space

var x = document.createElement("div");
x.className = "space";
document.querySelector('#space').appendChild(x);

//Creación de capa space2  

var w = document.createElement("div");
w.className = "space2";
document.querySelector('#space').appendChild(w);

//Agregado de ShoothingStars  

var y = document.createElement("div");
y.className = "s_star2";
document.querySelector('.space').appendChild(y);

var v = document.createElement("div");
v.className = "s_star2";
document.querySelector('.space').appendChild(v);

var u = document.createElement("div");
u.className = "s_star2";
document.querySelector('.space').appendChild(u);

var r = document.createElement("div");
r.className = "s_star2";
document.querySelector('.space').appendChild(r);

var s = document.createElement("div");
s.className = "s_star2";
document.querySelector('.space').appendChild(s);

//Creación de Estrellas

var z = {};
var stars = 800;

for (i = 0; i <= stars; i++) {
    z["star2" + i] = document.createElement("div");
    z["star2" + i].className = "star2";
    document.querySelector('.space2').appendChild(z["star2" + i]);
}

//Animación de Estrellas

var s = document.querySelectorAll('.star2');

for (i = 0; i <= stars; i++) {
    s[i].style.animationDelay = (Math.random(1) * 2) + "s";
    s[i].style.top = (Math.random(1) * 99) + "%";
    s[i].style.left = (Math.random(1) * 99) + "%";
}

//Animación de Estrellas Fugaces

var st = document.querySelectorAll('.s_star2');

for (i = 0; i < st.length; i++) {
    st[i].style.animationDelay = (Math.random(1) * 10) + "s";
    st[i].style.top = Math.random(1) * 100 + "%";
    st[i].style.left = Math.random(1) * 100 + "%";
}