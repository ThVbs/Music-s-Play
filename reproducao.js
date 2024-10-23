// Get references to the HTML elements
const audio = new Audio("/musica/ytmp3.co.za - Justin Bieber - Baby ft. Ludacris.mp3");
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const progress = document.getElementById('progress');

// Play and pause functionality
playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.innerHTML = '❚❚'; // Change to pause icon
    } else {
        audio.pause();
        playButton.innerHTML = '▶'; // Change to play icon
    }
});

// Update progress bar as the audio plays
audio.addEventListener('timeupdate', () => {
    const progressValue = (audio.currentTime / audio.duration) * 100;
    progress.value = progressValue;
});

// Seek functionality (when user drags the progress bar)
progress.addEventListener('input', () => {
    const seekTime = (progress.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// Dummy track list for next and previous functionality
const tracks = [
    "/musica/ytmp3.co.za - Justin Bieber - Baby ft. Ludacris.mp3",
    // Add more tracks here
];

// Track index
let currentTrackIndex = 0;

// Previous track functionality
prevButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex > 0) ? currentTrackIndex - 1 : tracks.length - 1;
    loadTrack(currentTrackIndex);
});

// Next track functionality
nextButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex < tracks.length - 1) ? currentTrackIndex + 1 : 0;
    loadTrack(currentTrackIndex);
});

// Function to load the selected track
function loadTrack(index) {
    audio.src = tracks[index];
    audio.play();
    playButton.innerHTML = '❚❚'; // Set play button to pause
}

// Load the first track initially
loadTrack(currentTrackIndex);
