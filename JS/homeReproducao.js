// Lista de músicas com informações como nome, artista e imagem
const musicList = [
    {
        name: 'Baby ft. Ludacris',
        artist: 'Justin Bieber',
        cover: '/Musics_Play/imagens/img_justin_bieber.jpg'
    },
    {
        name: 'Barbi',
        artist: 'MC Tuto',
        cover: '/Musics_Play/imagens/barbi.jpg.jpg'
    },
    {
        name: 'Blinding Lights',
        artist: 'The Weeknd',
        cover: '/Musics_Play/imagens/blinding_lights.jpg'
    }
    // Adicione mais músicas conforme necessário
];

let currentMusicIndex = 0; // Índice da música atual

// Função para atualizar a música exibida
function updateMusic() {
    const music = musicList[currentMusicIndex];
    document.getElementById('music-name').textContent = music.name;
    document.getElementById('music-artist').textContent = music.artist;
    document.getElementById('music-cover').src = music.cover;
}

// Função para passar para a próxima música
function nextMusic() {
    currentMusicIndex = (currentMusicIndex + 1) % musicList.length; // Avança para a próxima música (volta para a primeira no final)
    updateMusic();
}

// Configura o evento de clique para o botão "Próxima música"
document.getElementById('next-music').addEventListener('click', nextMusic);

// Atualiza a música inicialmente
updateMusic();
