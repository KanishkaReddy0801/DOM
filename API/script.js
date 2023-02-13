window.addEventListener('DOMContentLoaded', () => {
const API_KEY = "f14d2946";
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const resultDiv = document.querySelector("#result");

searchButton.addEventListener("click", () => {
  const title = searchInput.value;
  fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`)
    .then(response => response.json())
    .then(data => {
      resultDiv.innerHTML = `
        <img src="http://img.omdbapi.com/?apikey=${API_KEY}&i=${data.imdbID}" />
        <h2>${data.Title} (${data.Year})</h2>
        <p>IMDB Rating: ${data.imdbRating}</p>
        <p>Cast: ${data.Actors}</p>
        <p>Director: ${data.Director}</p>
      `;
    })
    .catch(error => {
      resultDiv.innerHTML = `<p>Movie not found</p>`;
      console.error(error);
    });
});
});
