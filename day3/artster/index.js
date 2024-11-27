const figlet = require("figlet");
const colors = require("colors");

figlet("Hello Love Again", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        return;
    }
    console.log(data.green);
});
