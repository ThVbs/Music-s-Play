// Lista de músicas
const musicList = [
    {
        title: "Sou Eu",
        artist: "Ludmilla",
        src: "/Musics_Play/MUSICAS/SOU EU AUDIO- LUDMILLA.mp3",
        albumArt: "/Musics_Play/imagens/img_SOU EU.jpg"
    },

    {
        title: "24 Horas por dia",
        artist: "Ludmilla",
        src: "/Musics_Play/MUSICAS/24 HORAS POR DIA AUDIO- LUDMILLA.mp3",
        albumArt: "/Musics_Play/imagens/24 horas por dia.png"
    },
    
    {
        title: "Favela Chegou",
        artist: "Ludmilla",
        src: "/Musics_Play/MUSICAS/FAVELA CHEGOU AUDIO- LUDMILLA.mp3",
        albumArt: "/Musics_Play/imagens/FAVELA CHEGOU.JPG"
    },

    {
        title: "Bom",
        artist: "Ludmilla",
        src: "/Musics_Play/MUSICAS/BOM AUDIO- LUDMILLA.mp3",
        albumArt: "/Musics_Play/imagens/Ludmilla_-_Bom.jpg"
    },

    {
        title: "Macetando",
        artist: "Ludmilla",
        src: "/Musics_Play/MUSICAS/MACETANDO AUDIO- LUDMILLA.mp3",
        albumArt: "/Musics_Play/imagens/macetando macetando.png"
    }
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
