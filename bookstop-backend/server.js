const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/pracDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => {
    console.log("Connect to the database");
  })
  .catch((e) => console.log(e));

const newUser = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: String
});

const FirstUser = new newUser
// require("./index")
// const USser=mongoose.model("")
// mongoose.set("strictQuery", false);
// app.post("/post", async (req, res) => {
//   console.log(req.body);
//   const { name } = req.body;

//   try {
//     if (name == "Akanksha") {
//       res.send({ status: "ok" });
//     } else {
//       res.send({ status: "User not found" });
//     }
//   } catch (error) {
//     res.send({ status: "error" });
//   }
// });
// require("./index");

// app.post("/register",async(req,res)=>{
//   const {name,email,password,education}=req.body;

// });

app.listen(8000, () => {
  console.log("Listening on Port:8000");
});
