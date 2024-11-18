// Lista de músicas
const musicList = [
    {
        title: "Baby",
        artist: "Justin Bieber",
        src: "/Musics_Play/MUSICAS/Justin Bieber - Baby ft. Ludacris.mp3",
        albumArt: "/Musics_Play/imagens/img_justin bieber.jpg"
    },

    {
        title: "Barbie",
        artist: "MC Tuto",
        src: "/Musics_Play/MUSICAS/Barbie.mp3.mp3",
        albumArt: "/Musics_Play/imagens/barbi.jpg.jpg"
    },

    {
        title: "Então como que é? ",
        artist: "MC Tuto",
        src: "/Musics_Play/MUSICAS/Então como que é musica.mp3",
        albumArt: "/Musics_Play/imagens/ENTÃO COMO QUE É REPRODUÇÃO.jpg"
    },

    {
        title: "Espresso",
        artist: "Sabrina Carpenter",
        src: "/Musics_Play/MUSICAS/espresso.mp3",
        albumArt: "/Musics_Play/imagens/ESPRESSO REPRODUÇÃO.jpg"
    },
    
    {
        title: "Up",
        artist: "Cardi B",
        src: "/Musics_Play/MUSICAS/cardi b up.mp3",
        albumArt: "/Musics_Play/imagens/UP REPRODUÇÃO.jfif"
    },

    {
        title: "Wap",
        artist: "Cardi B",
        src: "/Musics_Play/MUSICAS/wap cardi.mp3",
        albumArt: "/Musics_Play/imagens/WAP REPRODUÇÃO.avif"
    },
  
    {
        title: "Water",
        artist: "Tyla",
        src: "/Musics_Play/MUSICAS/water.mp3",
        albumArt: "/Musics_Play/imagens/WATER REPRODUÇÃO.jfif"
    },

    {
        title: "Saveiro",
        artist: "Kaique e Felipe",
        src: "/Musics_Play/MUSICAS/saveiro.mp3",
        albumArt: "/Musics_Play/imagens/SAVEIRO LUAN.png"
    },
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
