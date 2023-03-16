const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/userRoutes");
const cookieParser=require("cookie-parser");


mongoose.set("strictQuery", false);
const app = express();


app.use(cookieParser());
app.use(express.json());    
app.use("/api", router);
mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => {
    app.listen(8000, () => {
      console.log("connection is successful");
    });
  })
  .catch((err) => {
    console.log(err);
  });
