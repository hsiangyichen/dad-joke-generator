const jokeDisplay = document.querySelector(".daily-joke__text");
const newJokeButton = document.querySelector(".button--large");
const funnyButton = document.querySelector(".funny");
const notFunnyButton = document.querySelector(".not-funny");
const favoritesList = document.querySelector(".favorites__list");

const dadJokeApi = new DadJokeApi();
const favorites = [];
let currentJoke = null;

async function getNewJoke() {
  // Test getJoke
  try {
    const dadJoke = await dadJokeApi.getJoke();
    if (dadJoke) {
      currentJoke = dadJoke.joke;
      jokeDisplay.textContent = currentJoke;
      funnyButton.style.display = "flex";
      notFunnyButton.style.display = "flex";
    }
    console.log("Joke retrieved:", dadJoke.joke);
  } catch (error) {
    console.error("Error in getProducts:", error);
  }
}

// Add the current joke to favorites and fetch a new one
function addJokeToFavorites() {
  if (currentJoke && !favorites.includes(currentJoke)) {
    favorites.push(currentJoke);
    updateFavoritesList();
  }
  getNewJoke();
}

// Update the favorites list
function updateFavoritesList() {
  favoritesList.innerHTML = "";
  favorites.forEach((joke) => {
    const listItem = document.createElement("li");
    listItem.classList.add("favorites__item");
    listItem.textContent = joke;
    favoritesList.appendChild(listItem);
  });
}

// Event Listener for the buttons
newJokeButton.addEventListener("click", getNewJoke);
funnyButton.addEventListener("click", addJokeToFavorites);
notFunnyButton.addEventListener("click", () => {
  jokeDisplay.textContent = "Noted! Try another joke.";
  funnyButton.style.display = "none";
  notFunnyButton.style.display = "none";
});

// Call the test function
getNewJoke();
