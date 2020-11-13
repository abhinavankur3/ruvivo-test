const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const { MONGO_URL } = require("./config");
const routerV1 = require("./router/v1");

const app = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options("*", cors());

// add router to "/api" route
app.use("/api/v1", routerV1);

// run server
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(8000, () => {
      console.log(`Listening to port: 8000`);
    });
  })
  .catch((err) => {
    console.log("Error in starting server:", err);
  });
