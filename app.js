const express = require("express");
const morgan = require("morgan");
const path = require("path");
const globalRouter = require("./router/globalRouter");

const PORT = 7000;
const app = express();

app.set("view engine", "pug");
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "assets")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", globalRouter);

app.listen(PORT, () => {
    console.log(`✨http://localhost:${PORT}, CRUD_2 SERVER START🐰✨`);
});