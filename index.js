document.addEventListener("DOMContentLoaded", function carrossel() {
    const carrosselWrapper = document.getElementById('carrossel-wrapper');
    let currentIndex = 0;

    function proximoSlide() {
        currentIndex = (currentIndex + 1) % 3;
        atualizarCarrossel();
    }

    function atualizarCarrossel() {
        const translation = -currentIndex * 100 + '%';
        carrosselWrapper.style.transform = `translateX(${translation})`;
    }

    setInterval(proximoSlide, 5000); 
});


// + e -  

const aumentar = document.getElementById("mais")
const diminuir = document.getElementById("menos")
const contador = document.getElementById("contador")
let cont = 1

contador.innerHTML = cont
aumentar.addEventListener('click', () => {
    cont = cont + 1;
    contador.innerHTML = cont
    
})


diminuir.addEventListener('click', () => {
    if (cont == 0) return
    cont = cont - 1;
    contador.innerHTML = cont
})

//add ao carrinho 

const carrinho = document.getElementById("adicionar")
const produtos = []


carrinho.addEventListener('click', () => {

})
