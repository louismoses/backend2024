const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/shawarma", (req, res) => {
    res.send("Get Shawarma Sarap");
});

app.post("/shawarma", (req, res) => {
    const { flavor, orderCount } = req.body;
    console.log(req.body);
    res.send(`${orderCount} ${flavor} Shawarma Sarap coming up!`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
