// script.js

// Function to handle adding a song to favorites
function addToFavorites(songElement) {
    // Your code to add the song to favorites
    console.log("Added to favorites:", songElement.textContent);
}

// Function to handle creating a playlist
function createPlaylist(songElement) {
    // Your code to create a playlist
    console.log("Created playlist with:", songElement.textContent);
}

// Function to handle playing a song
function playSong(songElement) {
    // Your code to start playing the song
    console.log("Playing:", songElement.textContent);
}

// Add event listeners to various song elements
document.addEventListener("DOMContentLoaded", function () {
    const songElements = document.querySelectorAll(".bdspan, .bdspan-2"); // Replace with actual class names

    songElements.forEach(songElement => {
        songElement.addEventListener("click", function () {
            addToFavorites(songElement);
            createPlaylist(songElement);
            playSong(songElement);
        });
    });
});
