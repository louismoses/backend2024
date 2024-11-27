const jokes = require("give-me-a-joke");
const colors = require("colors");

//get random dad joke
jokes.getRandomDadJoke((joke) => console.log(joke.rainbow));
