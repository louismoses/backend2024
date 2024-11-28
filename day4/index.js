const express = require("express");

const app = express();
const port = 3000;

// console.dir(app);

// app.use((req, res) => {
//     console.log("we got new request");
//     // console.log(req);
//     res.send("Hello World!");
// });

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/cats", (req, res) => {
    res.send("meow");
});

app.get("/dogs", (req, res) => {
    res.send("aw aw");
});

app.post("/dogs", (req, res) => {
    res.send("grrrrrr");
});

app.get("*", (req, res) => {
    res.send("404 | Page not found");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
