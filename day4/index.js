const express = require("express");

const app = express();
const port = 3000;

// console.dir(app);

app.use((req, res) => {
    console.log("we got new request");
    // console.log(req);
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
