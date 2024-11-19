// Lista de músicas
const musicList = [
    {
        title: "Além do Dinheiro",
        artist: "Filipe Ret",
        src: "/Musics_Play/MUSICAS/ALÉM DO DINHEIRO AUDIO- FILIPE RET.mp3",
        albumArt: "/Musics_Play/imagens/img_alemDoDinheiro.jpg"
    },

    {
        title: "Nós Combina",
        artist: "Filipe Ret",
        src: "/Musics_Play/MUSICAS/NÓS COMBINA AUDIO- FILIPE RET.mp3",
        albumArt: "/Musics_Play/imagens/img_noís combina né.jpg"
    },

    {
        title: "Good Vibe",
        artist: "Filipe Ret",
        src: "/Musics_Play/MUSICAS/GOOD VIBE AUDIO- FILIPE RET.mp3",
        albumArt: "/Musics_Play/imagens/goooood vibesss.jpg"
    },
    // {
    //     title: "Me Gusta",
    //     artist: "Anitta",
    //     src: "/Musics_Play/MUSICAS/ME GUSTA AUDIO- ANITTA.mp3",
    //     albumArt: "/Musics_Play/imagens/imagens_mi gusta anitta.jpg"
    // }
];

// Controle da música atual
let currentMusicIndex = 0;

// Elementos HTML
const audioPlayer = document.getElementById("audioPlayer");
const audioSource = document.getElementById("audioSource");
const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");
const albumArt = document.getElementById("albumArt");

// Função para carregar a música
function loadMusic(index) {
    const music = musicList[index];
    audioSource.src = music.src;
    audioPlayer.load(); // Recarrega o áudio com o novo src
    songTitle.textContent = music.title;
    songArtist.textContent = music.artist;
    albumArt.src = music.albumArt;
}

// Função para carregar a próxima música
function loadNextSong() {
    currentMusicIndex = (currentMusicIndex + 1) % musicList.length; // Vai para a próxima música
    loadMusic(currentMusicIndex);
    audioPlayer.play(); // Começa a tocar a próxima música
}

// Função para carregar a música anterior
function loadPreviousSong() {
    currentMusicIndex = (currentMusicIndex - 1 + musicList.length) % musicList.length; // Volta para a música anterior
    loadMusic(currentMusicIndex);
    audioPlayer.play(); // Começa a tocar a música anterior
}

// Inicializa o player com a primeira música
loadMusic(currentMusicIndex);

// Eventos de navegação
document.getElementById("nextBtn").addEventListener("click", loadNextSong);
document.getElementById("previousBtn").addEventListener("click", loadPreviousSong);

// Recarregar a música após término para reproduzir automaticamente a próxima
audioPlayer.addEventListener("ended", loadNextSong);
