// Lista de músicas
const musicList = [
    { name: 'Além do Dinheiro - Filipe Ret', file: '/Musics_Play/MUSICAS/ALÉM DO DINHEIRO AUDIO- FILIPE RET.mp3' },
    { name: 'Good Vibe - Filipe Ret', file: '/Musics_Play/MUSICAS/GOOD VIBE AUDIO - FILIPE RET.mp3' },
    { name: 'Nova Música - Artista X', file: '/Musics_Play/MUSICAS/nova-musica.mp3' },  // Nova música
    { name: 'Outra Música - Artista Y', file: '/Musics_Play/MUSICAS/outra-musica.mp3' }  // Outra música
  ];
  
  // Variáveis de controle
  let currentTrackIndex = 0;
  const audio = document.getElementById('audio');
  const trackName = document.getElementById('track-name');
  const playPauseButton = document.getElementById('play-pause');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const playlist = document.getElementById('playlist');
  
  // Função para carregar a música
  function loadTrack(index) {
    currentTrackIndex = index;
    const track = musicList[currentTrackIndex];
    trackName.textContent = track.name;
    audio.src = track.file;
    audio.load(); // Atualiza a fonte e recarrega o áudio
  }
  
  // Função para tocar ou pausar a música
  function togglePlayPause() {
    if (audio.paused) {
      audio.play();
      playPauseButton.textContent = 'Pausar';
    } else {
      audio.pause();
      playPauseButton.textContent = 'Tocar';
    }
  }
  
  // Função para ir para a música anterior
  function playPrev() {
    currentTrackIndex = (currentTrackIndex - 1 + musicList.length) % musicList.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseButton.textContent = 'Pausar';
  }
  
  // Função para ir para a próxima música
  function playNext() {
    currentTrackIndex = (currentTrackIndex + 1) % musicList.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseButton.textContent = 'Pausar';
  }
  
  // Função para carregar a playlist no HTML
  function loadPlaylist() {
    playlist.innerHTML = ''; // Limpar lista atual
    musicList.forEach((track, index) => {
      const li = document.createElement('li');
      li.textContent = track.name;
      li.addEventListener('click', () => {
        loadTrack(index);
        audio.play();
        playPauseButton.textContent = 'Pausar';
      });
      playlist.appendChild(li);
    });
  }
  
  // Inicializa o player com a primeira música e carrega a playlist
  loadTrack(currentTrackIndex);
  loadPlaylist();
  
  // Adiciona eventos aos botões
  playPauseButton.addEventListener('click', togglePlayPause);
  prevButton.addEventListener('click', playPrev);
  nextButton.addEventListener('click', playNext);
  
  // Atualiza o nome da música quando a reprodução termina
  audio.addEventListener('ended', () => {
    playNext(); // Toca a próxima música automaticamente
  });
  