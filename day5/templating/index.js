//imports
const express = require("express");

const app = express();
const port = 3000;

app.set("view engine", "ejs"); //set EJS as view engine / imports ejs

//Homepage
app.get("/", (req, res) => {
    // res.send("Hello World!");
    res.render("home");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
