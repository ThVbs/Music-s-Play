const player = document.getElementById('player');
const musicaSrc = document.getElementById('musica-src');
const musicaTitulo = document.getElementById('musica-titulo');
const artistaNome = document.getElementById('artista-nome');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let playlist = [
    { titulo: 'Música 1', artista: 'Artista 1', src: 'musica1.mp3' },
    { titulo: 'Música 2', artista: 'Artista 2', src: 'musica2.mp3' },
    { titulo: 'Música 3', artista: 'Artista 3', src: 'musica3.mp3' }
];

let currentIndex = 0; // Índice da música atual

// Função para tocar a música com base no índice
function tocarMusica(index) {
    currentIndex = index;
    musicaSrc.src = playlist[currentIndex].src;
    musicaTitulo.textContent = playlist[currentIndex].titulo;
    artistaNome.textContent = playlist[currentIndex].artista;
    player.load(); // Recarrega o player para carregar a nova música
    player.play();
    playPauseBtn.textContent = 'Pausar'; // Atualiza o botão para 'Pausar'
}

// Função para alternar entre tocar/pausar
function togglePlayPause() {
    if (player.paused) {
        player.play();
        playPauseBtn.textContent = 'Pausar';
    } else {
        player.pause();
        playPauseBtn.textContent = 'Tocar';
    }
}

// Função para pular para a próxima música
function proximaMusica() {
    currentIndex = (currentIndex + 1) % playlist.length; // Se atingir o final, vai para o início
    tocarMusica(currentIndex);
}

// Função para ir para a música anterior
function musicaAnterior() {
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length; // Vai para o final se for a primeira
    tocarMusica(currentIndex);
}

// Adiciona os eventos aos botões
playPauseBtn.addEventListener('click', togglePlayPause);
nextBtn.addEventListener('click', proximaMusica);
prevBtn.addEventListener('click', musicaAnterior);

// Inicializa a primeira música
tocarMusica(currentIndex);
