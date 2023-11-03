document.addEventListener("DOMContentLoaded", function () {
    const togglerb = document.getElementById('togglerb');
    const menu = document.getElementById('menu');
    const abrir = togglerb.querySelector('.abrir');
    const cerrar = togglerb.querySelector('.cerrar');

    togglerb.addEventListener('click', () => {
        menu.classList.toggle('active');
        abrir.style.display = menu.classList.contains('active') ? 'none' : 'block';
        cerrar.style.display = menu.classList.contains('active') ? 'block' : 'none';
    })
})


function facebook(){
    window.open("https://www.facebook.com/pardouchija");
}
function twitter(){
    window.open("https://twitter.com/PauloPardo16");
}
function git(){
    window.open("https://github.com/paulopardo16");
}
function instagram(){
    window.open("https://www.instagram.com/alejitto_1999/?hl=es");
}

function home(){
    window.location.assign("../index.html");
}

function quees(){
    window.location.assign("pantallas/quees.html");
}

function comoqui(){
    window.location.assign("pantallas/comoqui.html");
}

function tipos(){
    window.location.assign("pantallas/tipos.html");
}

function recomendaciones(){
    window.location.assign("pantallas/recomendaciones.html");
}