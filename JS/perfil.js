function toggleArtists() {
    const artistsSection = document.getElementById('artists');
    const toggleButton = document.getElementById('toggleArtistsButton');
    if (artistsSection.style.display === "none") {
        artistsSection.style.display = "block";
        toggleButton.innerText = "Hide Artists";
    } else {
        artistsSection.style.display = "none";
        toggleButton.innerText = "Show Artists";
    }
}

let followersCount = 1000;
let followingCount = 3;

function updateFollowers() {
    followersCount++;
    document.getElementById('followersCount').innerText = `Seguidores: ${followersCount}`;
}

function updateFollowing() {
    followingCount++;
    document.getElementById('followingCount').innerText = `Seguindo: ${followingCount}`;
}