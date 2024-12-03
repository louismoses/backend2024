const express = require("express");
const app = express();
const port = 3000;

app.get("/shawarma", (req, res) => {
    res.send("Get Shawarma Sarap");
});

app.post("/shawarma", (req, res) => {
    res.send("Post method Shawarma Sarap");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
