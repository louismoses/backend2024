import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

// connect to DB

const startServer = () => {
    mongoose
        // .connect(process.env.MONGO_URI)
        .connect("mongodb://127.0.0.1:27017/shopApp")
        .then(() => console.log("[⚡] connected to database sucessfully"))
        .catch((err) => console.log(err));
};

startServer();

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const Product = mongoose.model("Product", productSchema);

const bike = new Product({
    name: "Mountain Bike",
    price: 1000,
});
// bike.save()
//     .then(() => console.log("bike saved"))
//     .catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.render("index");
});

// RUNNING SERVER
app.listen(port, () => {
    console.log(`App server running on port ${port}`);
});
