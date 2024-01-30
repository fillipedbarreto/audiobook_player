//CODIGO DA AULA: intensivojs15

const botaoPlayPause = document.getElementById(`play-pause`);
const botaoAvancar = document.getElementById(`proximo`);
const botaoRetornar = document.getElementById(`anterior`);
const audioCapitulo = document.getElementById(`audio-capitulo`);
const tituloCapitulo = document.getElementById(`capitulo`);

const numeroCapitulos = 10;
let capituloAtual = 1;
let taTocado = 0;

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove(`bi-play-fill`);
    botaoPlayPause.classList.add(`bi-pause-fill`);
    taTocado = 1;
}
function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.add(`bi-play-fill`);
    botaoPlayPause.classList.remove(`bi-pause-fill`);
    taTocado = 0;
}

function tocarOuPausar() {
    if (taTocado === 0) {
        tocarFaixa();
    } else {
        pausarFaixa();
    }
}

function proximaFaixa() {
    if (capituloAtual === 10) {
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1;
    }

    audioCapitulo.src = `./assets/books/dom-casmurro/${capituloAtual}.mp3`;
    tituloCapitulo.innerText = `Capítulo ${capituloAtual}`;
    tocarFaixa();
}

function voltarFaixa() {
    if (capituloAtual === 1) {
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual - 1;
    }

    audioCapitulo.src = `./assets/books/dom-casmurro/${capituloAtual}.mp3`;
    tituloCapitulo.innerText = `Capítulo ${capituloAtual}`;
    tocarFaixa();
}

botaoPlayPause.addEventListener(`click`, tocarOuPausar);
botaoAvancar.addEventListener(`click`, proximaFaixa);
botaoRetornar.addEventListener(`click`, voltarFaixa);