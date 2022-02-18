const elegido = JSON.parse(localStorage.getItem('video'));
console.log(elegido);
const contenedor = document.getElementById('allInfo')
window.addEventListener('DOMContentLoaded', mostrarinfo());
async function mostrarinfo(){
    
    elegido.forEach(element => {
        const{id, title, thumbnail, short_description, genre}=element
        contenedor.innerHTML=`
        <h1 class="titulo" id="titulo"> ${title}</h1>
            <div id="imagenCont" class="imagenCont">
            <img class="imagen" src="${thumbnail}" >
            <p class="genero">${genre}</p>
            <p class="info" id="info">
                ${short_description}
            </p>
        `
    });









}
