// // Datos de las canciones
// const songs = [
//     { title: "Song 1", artist: "Artist 1", src: "song1.mp3", cover: "cover1.jpg" },
//     { title: "Song 2", artist: "Artist 2", src: "song2.mp3", cover: "cover2.jpg" },
//     { title: "Song 3", artist: "Artist 3", src: "song3.mp3", cover: "cover3.jpg" },
//     // Agrega más canciones aquí
// ];

// // Elementos del reproductor
// const audioElement = document.querySelector("audio");
// const songTitleElement = document.querySelector(".text-lg.font-semibold");
// const artistElement = document.querySelector(".text-gray-500");
// const coverImageElement = document.querySelector("img");

// let currentSongIndex = 0;

// // Función para cargar y reproducir una canción
// function loadSong(songIndex) {
//     const song = songs[songIndex];
//     audioElement.src = song.src;
//     songTitleElement.textContent = song.title;
//     artistElement.textContent = song.artist;
//     coverImageElement.src = song.cover;
//     audioElement.play();
// }

// // Cargar la primera canción al cargar la página
// loadSong(currentSongIndex);

// // Botón para cambiar a la siguiente canción
// const nextButton = document.getElementById("next-button");
// nextButton.addEventListener("click", () => {
//     currentSongIndex = (currentSongIndex + 1) % songs.length;
//     loadSong(currentSongIndex);
// });

// // Botón para cambiar a la canción anterior
// const prevButton = document.getElementById("prev-button");
// prevButton.addEventListener("click", () => {
//     currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
//     loadSong(currentSongIndex);
// });
