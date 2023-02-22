const express = require("express");
const mongoose=require("mongoose");


const app=express();

app.get("/", (req,resp)=>{
    resp.json({mssg:"Get"})
})

app.post("/",(req,resp)=>{
    resp.json({mssg:"Post"})
})

app.patch("/:id", (req, resp) => {
  resp.json({ mssg: "Patch" });
});

app.delete("/:id", (req, resp) => {
  resp.json({ mssg: "Delete" });
});

app.listen(5000,()=>{
    console.log("Port 5000")
})