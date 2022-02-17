
async function getJuegos (){
    try {
        const resp = await fetch('http://localhost:3000/juegos');
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
        <a href="${game_url}"">${title}</a>
        <img class="cartaImg" src="${thumbnail}">
        </div>
        `
        }else if (id>15){
            cartasCont2.innerHTML+=`
            <div class="juegosImg2">
            <a href="${game_url}"">
            <img class="cartaImg2" src="${thumbnail}">
            </a>
            </div>`
        }
    });
}
 
