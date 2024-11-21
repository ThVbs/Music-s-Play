// Lista de músicas
const musicList = [
    {
        title: "Café da Manhã",
        artist: "Luísa Sonza",
        src: "/Musics_Play/MUSICAS/CAFÉ DA MANHÃ AUDIO- LUISA SONZA.mp3",
        albumArt: "/Musics_Play/imagens/imagens_cafe da manha.jpg"
    },

    {
        title: "Modo Turbo",
        artist: "Luísa Sonza",
        src: "/Musics_Play/MUSICAS/MODO TURBO AUDIO- LUISA.mp3",
        albumArt: "/Musics_Play/imagens/imagens_modo turbo.jpg"
    },

    {
        title: "Toma",
        artist: "Luísa Sonza",
        src: "/Musics_Play/MUSICAS/TOMA AUDIO- LUISA SONZA.mp3",
        albumArt: "/Musics_Play/imagens/img_toma.jpg.png"
    },

    {
        title: "Combatchy ",
        artist: "Luísa Sonza",
        src: "/Musics_Play/MUSICAS/Combatchy_Luisa.mp3",
        albumArt: "/Musics_Play/imagens/Anitta_-_Combatchy.jpg"
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
