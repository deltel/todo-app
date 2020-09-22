const express = require("express");

const todoController = require("./controllers/todoController");

const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("./assets"));

todoController(app);

app.listen(port, () => {
    console.log(`listening on localhost:${port}`);
});
