const express = require("express");
const path = require("path");

const app = express();

app.listen(process.env.PORT || 3000, () => {
    console.log("Corriendo en el port 3000");
});

//MIDDLEWARES
const staticFolder = path.resolve(__dirname, "./public");
app.use(express.static(staticFolder));

//RUTAS
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/home.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/login.html"));
});