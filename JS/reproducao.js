// Get elements
const audio = document.getElementById('audio');
const playButton = document.querySelector('.play_musica img[alt="Play"]');
const progressBar = document.querySelector('progress');
const currentTimeLabel = document.querySelector('.tempo .inicio');
const durationLabel = document.querySelector('.tempo .fim');

// Function to format time in MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Update progress bar and current time
audio.addEventListener('timeupdate', () => {
    // Update progress bar value
    progressBar.value = audio.currentTime / audio.duration;
    // Update current time display
    currentTimeLabel.textContent = formatTime(audio.currentTime);
});


audio.addEventListener('loadedmetadata', () => {
    durationLabel.textContent = formatTime(audio.duration);
});


playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.src = "imagens/img_pause.png"; 
    } else {
        audio.pause();
        playButton.src = "imagens/img_playArrow.png"; 
    }
});


progressBar.addEventListener('click', (event) => {
    const rect = progressBar.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const width = rect.width;
    const percentage = offsetX / width;
    audio.currentTime = percentage * audio.duration;
});
