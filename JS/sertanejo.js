document.addEventListener('DOMContentLoaded', () => {
  const audioPlayer = document.getElementById('audioPlayer');
  const songItems = document.querySelectorAll('.popular-songs ul li');
  let currentlyPlaying = null; // Para rastrear a música atual

  songItems.forEach(item => {
    const playButton = item.querySelector('.play-button');
    playButton.addEventListener('click', () => {
      const audioFile = item.getAttribute('data-audio');
      
      if (currentlyPlaying === item) {
        // Se a música já estiver tocando, pausar
        if (!audioPlayer.paused) {
          audioPlayer.pause();
          playButton.textContent = '▶️'; // Volta o botão para play
          item.classList.remove('playing'); // Remove o destaque
        } else {
          // Se estava pausada, retomar
          audioPlayer.play();
          playButton.textContent = '⏸️';
          item.classList.add('playing');
        }
      } else {
        // Tocar uma nova música
        if (currentlyPlaying) {
          // Resetar estado da música anterior
          currentlyPlaying.querySelector('.play-button').textContent = '▶️';
          currentlyPlaying.classList.remove('playing');
        }

        // Atualizar para a nova música
        currentlyPlaying = item;
        audioPlayer.src = `/Musics_Play/MUSICAS/${audioFile}`;
        audioPlayer.play();
        playButton.textContent = '⏸️';
        item.classList.add('playing');
      }

      // Resetar o botão quando a música acabar
      audioPlayer.onended = () => {
        playButton.textContent = '▶️';
        item.classList.remove('playing');
        currentlyPlaying = null; // Resetar a música atual
      };
    });
  });
});

