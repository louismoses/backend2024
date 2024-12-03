const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const tweets = [
    { username: "user01", tweet: "how are you?" },
    { username: "user02", tweet: "I am fine" },
    { username: "user03", tweet: "I meow meow meow" },
];

app.get("/tweets", (req, res) => {
    res.render("tweets/index", { tweets });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
