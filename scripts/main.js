const jokeDisplay = document.querySelector(".daily-joke__text");

const dadJokeApi = new DadJokeApi();
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

// Call the test function
getNewJoke();
