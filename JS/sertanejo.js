// Seleciona todos os botões "Tocar" na playlist
const playButtons = document.querySelectorAll('.tocar');

// Seleciona o elemento <audio> que será utilizado para tocar a música
const audioPlayer = new Audio();

// Função para tocar a música
function playMusic(src) {
    audioPlayer.src = src; // Define a fonte da música
    audioPlayer.play(); // Inicia a reprodução
}

// Adiciona um evento de clique para cada botão "Tocar"
playButtons.forEach((button, index) => {
    // Defina o caminho do arquivo de áudio para cada música na playlist
    let musicSrc;
    switch (index) {
        case 0:
            musicSrc = '/Musics_Play/MUSICAS/24 HORAS POR DIA AUDIO- LUDMILLA.mp3'; // Substitua pelo caminho real do arquivo de música 1
            break;
        case 1:
            musicSrc = '/Musics_Play/MUSICAS/Musica2.mp3'; // Substitua pelo caminho real do arquivo de música 2
            break;
        case 2:
            musicSrc = '/Musics_Play/MUSICAS/Musica3.mp3'; // Substitua pelo caminho real do arquivo de música 3
            break;
        default:
            musicSrc = ''; // Para outras músicas
    }

    // Quando o botão "Tocar" for clicado, chama a função para tocar a música
    button.addEventListener('click', () => {
        playMusic(musicSrc); // Chama a função playMusic com o caminho da música
    });
});

// Adiciona funcionalidade para o botão "Adicionar" (caso deseje implementar)
const addButtons = document.querySelectorAll('.adicionar');
addButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Música adicionada à sua lista!');
        // Lógica para adicionar a música à playlist do usuário (ex: adicionar ao banco de dados ou armazenar em localStorage)
    });
});
