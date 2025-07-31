document.addEventListener("DOMContentLoaded", () => {
  const artistListContainer = document.getElementById("artist-list");

  // Regrouper les chansons par artiste
  const artists = playlistMaliKadi.reduce((acc, song) => {
    if (!acc[song.artiste]) {
      acc[song.artiste] = { name: song.artiste, count: 0 };
    }
    acc[song.artiste].count++;
    return acc;
  }, {});

  // Convertir l'objet en tableau et trier
  const sortedArtists = Object.values(artists).sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // Afficher chaque artiste
  sortedArtists.forEach((artist) => {
    const artistCard = document.createElement("div");
    artistCard.className = "artist-card";
    const initial = artist.name.charAt(0).toUpperCase();

    artistCard.innerHTML = `
            <div class="artist-avatar">${initial}</div>
            <h3>${artist.name}</h3>
            <p class="song-count">${artist.count} chanson(s)</p>
        `;
    artistListContainer.appendChild(artistCard);
  });
});
