const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const database = require("./database/db");
const Task = require("./models/Task");
const RouterTasks = require("./routes/TasksRouters");

////// handlebars

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(RouterTasks);

database
  .sync()
  .then(
    app.listen(3000, () => {
      console.log("Servidor no ar");
    })
  )
  .catch((err) => {
    console.log(err);
  });
