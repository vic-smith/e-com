const express = require("express");
const routes = require("./routes");
// import sequelize connection
const sequelize = require("./config/connection");

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// http://localhost:3001/
const PORT = process.env.PORT || 3001;

// sync sequelize models to the database, then turn on the server

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
