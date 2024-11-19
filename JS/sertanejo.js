document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const songItems = document.querySelectorAll('.popular-songs ul li');
  
    songItems.forEach(item => {
      const playButton = item.querySelector('.play-button');
      playButton.addEventListener('click', () => {
        const audioFile = item.getAttribute('data-audio');
        
        // Verifica se a música já está tocando
        if (audioPlayer.src.includes(audioFile) && !audioPlayer.paused) {
          // Pausar música
          audioPlayer.pause();
          playButton.textContent = '▶️'; // Volta o botão para play
          item.classList.remove('playing'); // Remove o destaque da música
        } else {
          // Tocar música
          audioPlayer.src = `/Musics_Play/MUSICAS/${audioFile}`; // Atualiza a fonte de áudio
          audioPlayer.play();
          playButton.textContent = '⏸️'; // Muda o botão para pausa
  
          // Atualizar o estado visual do botão e destacar a música
          songItems.forEach(el => {
            el.querySelector('.play-button').textContent = '▶️'; // Reseta todos os botões para play
            el.classList.remove('playing'); // Remove o destaque de outras músicas
          });
          item.classList.add('playing'); // Adiciona o destaque à música tocando
        }
  
        // Resetar o botão quando a música acabar
        audioPlayer.onended = () => {
          playButton.textContent = '▶️';
          item.classList.remove('playing');
        };
      });
    });
  });
  