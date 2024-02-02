//CODIGO DA AULA: intensivojs15

const botaoPlayPause = document.getElementById(`play-pause`);
const botaoAvancar = document.getElementById(`proximo`);
const botaoRetornar = document.getElementById(`anterior`);
const audioCapitulo = document.getElementById(`audio-capitulo`);
const tituloCapitulo = document.getElementById(`capitulo`);
const progress = document.getElementById(`progress`);
const elapsedTime = document.getElementById(`current-time`);
const totalTime = document.getElementById(`total-time`);

const numeroCapitulos = 10;
let capituloAtual = 1;
let taTocado = 0;
totalTime.innerText =  `${formatSecondsAsTime(audioCapitulo.duration)}`;
elapsedTime.innerText =  `${formatSecondsAsTime(audioCapitulo.currentTime)}`


function tocarFaixa() {
    audioCapitulo.play();
    taTocado = 1;
}

function pausarFaixa() {
    audioCapitulo.pause();
    taTocado = 0;
}

function pressPlayPause() {
    if (taTocado === 0) {
        botaoPlayPause.classList.add(`bi-play-circle`);
        botaoPlayPause.classList.remove(`bi-play-circle-fill`);
    } else {
        botaoPlayPause.classList.add(`bi-pause-circle`);
        botaoPlayPause.classList.remove(`bi-pause-circle-fill`);
    }
}

function releasePlayPause() {
    if (taTocado === 0) {
        botaoPlayPause.classList.remove(`bi-play-circle`);
        botaoPlayPause.classList.add(`bi-pause-circle-fill`);
        tocarFaixa();
    } else {
        botaoPlayPause.classList.remove(`bi-pause-circle`);
        botaoPlayPause.classList.add(`bi-play-circle-fill`);
        pausarFaixa();
    }
}

function outPlayPause() {
    if (taTocado === 0) {
        botaoPlayPause.classList.remove(`bi-play-circle`);
        botaoPlayPause.classList.add(`bi-play-circle-fill`);
    } else {
        botaoPlayPause.classList.remove(`bi-pause-circle`);
        botaoPlayPause.classList.add(`bi-pause-circle-fill`);
    }
}

function pressAvancar() {
    botaoAvancar.classList.add(`bi-fast-forward-fill`);
    botaoAvancar.classList.remove(`bi-fast-forward`);
}

function releaseAvancar() {
    botaoAvancar.classList.remove(`bi-fast-forward-fill`);
    botaoAvancar.classList.add(`bi-fast-forward`);
    
    if (capituloAtual === 10) {
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1;
    }

    audioCapitulo.src = `./assets/books/dom-casmurro/${capituloAtual}.mp3`;
    tituloCapitulo.innerText = `Capítulo ${capituloAtual}`;
    tocarFaixa();
}

function outAvancar() {
    botaoAvancar.classList.remove(`bi-fast-forward-fill`);
    botaoAvancar.classList.add(`bi-fast-forward`);
}

function pressVoltar() {
    botaoRetornar.classList.add(`bi-rewind-fill`);
    botaoRetornar.classList.remove(`bi-rewind`);
}

function releaseVoltar() {
    botaoRetornar.classList.remove(`bi-rewind-fill`);
    botaoRetornar.classList.add(`bi-rewind`);

    if (capituloAtual === 1) {
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual - 1;
    }

    audioCapitulo.src = `./assets/books/dom-casmurro/${capituloAtual}.mp3`;
    tituloCapitulo.innerText = `Capítulo ${capituloAtual}`;
    tocarFaixa();
}

function outVoltar() {
    botaoRetornar.classList.remove(`bi-rewind-fill`);
    botaoRetornar.classList.add(`bi-rewind`);
}

function changeIcon(iconAdd, iconRemove) {
    botaoRetornar.classList.add(iconAdd);
    botaoRetornar.classList.remove(iconRemove);
}

audioCapitulo.onloadedmetadata = function () {
    progress.max = audioCapitulo.duration;
    totalTime.innerText =  `${formatSecondsAsTime(audioCapitulo.duration)}`;
    progress.value = audioCapitulo.currentTime;
}

if (audioCapitulo.play()) {
    setInterval(() => {
        progress.value = audioCapitulo.currentTime;
        elapsedTime.innerText = `${formatSecondsAsTime(audioCapitulo.currentTime)}`;
    }, 500)
}

progress.onchange = function() {
    audioCapitulo.play();
    audioCapitulo.currentTime = progress.value;
}

function formatSecondsAsTime(secs) {
    var hr  = Math.floor(secs / 3600);
    var min = Math.floor((secs - (hr * 3600))/60);
    var sec = Math.floor(secs - (hr * 3600) -  (min * 60));
    if (min < 10){ 
      min = "0" + min; 
    }
    if (sec < 10){ 
      sec  = "0" + sec;
    }
    if (hr === 0) {
        return min + ':' + sec;
    } else {
        return hr + ':' + min + ':' + sec;
    }
    
}

botaoPlayPause.addEventListener(`mousedown`, pressPlayPause);
botaoPlayPause.addEventListener(`mouseup`, releasePlayPause);
botaoPlayPause.addEventListener(`mouseout`, outPlayPause);
botaoAvancar.addEventListener(`mousedown`, pressAvancar);
botaoAvancar.addEventListener(`mouseup`, releaseAvancar);
botaoAvancar.addEventListener(`mouseout`, outAvancar);
botaoRetornar.addEventListener(`mousedown`, pressVoltar);
botaoRetornar.addEventListener(`mouseup`, releaseVoltar);
botaoRetornar.addEventListener(`mouseout`, outVoltar);
