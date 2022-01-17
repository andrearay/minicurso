const imagem1 = document.getElementById('img1');
const imagem2 = document.getElementById('img2');
const imagem3 = document.getElementById('img3');

const nomeDoPersonagem1 = document.querySelector('#nomeUm');
const especie1 = document.querySelector('#especieUm');
const condicao1 = document.querySelector('#statusUm');

const nomeDoPersonagem2 = document.querySelector('#nomeDois');
const especie2 = document.querySelector('#especieDois');
const condicao2 = document.querySelector('#statusDois');

const nomeDoPersonagem3 = document.querySelector('#nomeTres');
const especie3 = document.querySelector('#especieTres');
const condicao3 = document.querySelector('#statusTres');
const botao = document.querySelector('button');

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem1 = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application-json'
        }
    }).then((response) => response.json()).then((data) =>{
        imagem1.src = data.image;
        imagem1.alt = data.name;
        nomeDoPersonagem1.innerHTML = data.name;
        especie1.innerHTML = data.species;
        condicao1.innerHTML = data.status;
        
    });
    
}

pegarPersonagem2 = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application-json'
        }
    }).then((response) => response.json()).then((data) =>{
        imagem2.src = data.image;
        imagem2.alt = data.name;
        nomeDoPersonagem2.innerHTML = data.name;
        especie2.innerHTML = data.species;
        condicao2.innerHTML = data.status;
        
    });
    
}

pegarPersonagem3 = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application-json'
        }
    }).then((response) => response.json()).then((data) =>{
        imagem3.src = data.image;
        imagem3.alt = data.name;
        nomeDoPersonagem3.innerHTML = data.name;
        especie3.innerHTML = data.species;
        condicao3.innerHTML = data.status;
        
    });
    
}

//Chama tudo
pegaPersonagens = () => {
    pegarPersonagem1();
    pegarPersonagem2();
    pegarPersonagem3();
}

botao.onclick = pegaPersonagens;