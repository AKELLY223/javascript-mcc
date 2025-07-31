document.addEventListener("DOMContentLoaded", () => {
  const genreListContainer = document.getElementById("genre-list");

  // Obtenir les genres uniques et les trier
  const genres = [...new Set(playlistMaliKadi.map((song) => song.genre))].sort(
    (a, b) => a.localeCompare(b)
  );

  // Afficher chaque genre
  genres.forEach((genre) => {
    const genreTag = document.createElement("div");
    genreTag.className = "genre-tag";
    genreTag.textContent = genre;
    genreListContainer.appendChild(genreTag);
  });
});
