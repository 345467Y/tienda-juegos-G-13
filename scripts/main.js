function abrir(){
    document.getElementById("opc").style.display="block";
}
function cerrar(){
    document.getElementById("opc").style.display="none";
}


async function getJuegos (){
    try {
        const resp = await fetch('http://localhost:4000/juegos');
        const juegos = await resp.json()
        return juegos
    }catch (error){
        return console.log(error);
    }
  }
mostrarJuegos();
//////////////////////////LOS JUEGOS GRATIS ESTAN DEL 1 AL 15////////////////////////////
const cartasCont = document.getElementById('cartas');
const cartasCont2 = document.getElementById('cartas2');

async function mostrarJuegos(){
    const juegos = await getJuegos()
    console.log(juegos);
    juegos.forEach(element => {
        const {id, title, thumbnail,game_url} = element  
        if (id<=8){
            cartasCont.innerHTML+=`
        <div class="juegosImg">
        <a href="${game_url}" target="_blank">${title}
        <img class="cartaImg" src="${thumbnail}">
        </a>
        </div>
        `
        }else if (id>15){
            cartasCont2.innerHTML+=`
            <div class="juegosImg2">
            <img class="cartaImg2" src="${thumbnail}" onclick="infoGames(${id})">
            </div>`
        }
    });
}

async function infoGames(id){
    const juegos = await getJuegos()
    const result = juegos.filter((movie)=> movie.id === id)
    localStorage.setItem('video', JSON.stringify(result))
    window.location.href = './infoJuegos.html'
}