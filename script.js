const newsContainer = document.querySelector(".news-container");

function fetchData() {
  fetch(
    "https://newsapi.org/v2/everything?q=bitcoin&apiKey=176891f48bc84be2bb20b77f19a6f593"
  )
    .then((res) => res.json())
    .then((data) => {
      newsCard(data.articles);
    });
}

function newsCard(news) {
  news.forEach((val) => {
    const div = document.createElement("div");
    div.innerHTML = `
            <h1>${val.title} </h1>
        `;

    newsContainer.appendChild(div);
  });
}

fetchData();
