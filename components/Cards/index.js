// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
  //console.log(response.data);  
    response.data.articles.javascript.forEach(article => {
        newCard.appendChild(makeCards(article));
    });
    response.data.articles.bootstrap.forEach(article => {
        newCard.appendChild(makeCards(article));
    });
    response.data.articles.technology.forEach(article => {
        newCard.appendChild(makeCards(article));
    });
    response.data.articles.jquery.forEach(article => {
        newCard.appendChild(makeCards(article));
    });
    response.data.articles.node.forEach(article => {
        newCard.appendChild(makeCards(article));
    });
})
    .catch(error => {
        console.log("the data was not returned", error);
});

function makeCards(article) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const imgSrc = document.createElement('img');
    const name = document.createElement('span');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(imgSrc);
    author.appendChild(name);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = article.headline;
    imgSrc.src = article.authorPhoto;
    name.textContent = `By ${article.authorName}`;

    return card;
}

const newCard = document.querySelector('.cards-container');