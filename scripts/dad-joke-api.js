class DadJokeApi {
  constructor() {
    this.baseUrl = "https://icanhazdadjoke.com/";
  }

  async getJoke() {
    try {
      const response = await axios.get(`${this.baseUrl}`, {
        headers: {
          Accept: "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("An error occurred: " + error);
    }
  }
}
