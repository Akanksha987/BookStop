require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, resp) => {
  resp.json({ mssg: "Get" });
});

app.post("/", (req, resp) => {
  resp.json({ mssg: "Post" });
});

app.patch("/:id", (req, resp) => {
  resp.json({ mssg: "Patch" });
});

app.delete("/:id", (req, resp) => {
  resp.json({ mssg: "Delete" });
});

app.listen(process.env.PORT, () => {
  console.log("Port 5000");
});
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
