const fs = require("fs");

const folderName = process.argv[2] || "Project";

const createFiles = () => {
    fs.writeFileSync(`${folderName}/index.html`, "");
    fs.writeFileSync(`${folderName}/style.css`, "");
    fs.writeFileSync(`${folderName}/app.js`, "");
};

try {
    if (fs.existsSync(folderName)) {
        createFiles();
    } else {
        fs.mkdirSync(folderName);
        createFiles();
    }
} catch (error) {
    console.log("Error: ", error);
}
