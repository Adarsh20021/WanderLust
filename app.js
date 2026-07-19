const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("Connected to DB.");
}).catch((err)=>{
    console.log(err);
});

async function main() {
  await mongoose.connect(MONGO_URL);
};


//Root route
app.get("/",(req,res)=>{
    res.send("Hi i am root.");
});

//test
app.get("/testListing", async(req,res)=>{
    let sampleListing = new Listing({
        title: "My New Villa",
        description: "By the beach",
        price: 5000,
        location: "Calangute,Goa",
        country: "India",
    });
    await sampleListing.save();
    console.log("Sample was saved.");
    res.send("Successful testing.");
});

app.listen(8080,()=>{
    console.log("Server is listening to Port 8080.");
});