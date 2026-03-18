fetch("movies.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("movies");

    data.forEach(movie => {
      const div = document.createElement("div");
      div.classList.add("card");

      div.innerHTML = `
        <img src="${movie.image}">
        <h4>${movie.title}</h4>
      `;

      div.onclick = () => play(movie.video);

      container.appendChild(div);
    });
  });

function play(videoSrc) {
  const player = document.getElementById("player");
  const video = document.getElementById("video");

  video.src = videoSrc;
  player.classList.remove("hidden");
}

function closePlayer() {
  document.getElementById("player").classList.add("hidden");
}
