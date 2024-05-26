require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");


const PORT = process.env.PORT||5000;
const BASE_URL = process.env.BASE_URL;

app.use(express.json());
app.use(cors());




app.listen(PORT, (err)=>{
    if(err){
        console.log(err.toString());
    }
    else{
        console.log("Server running on port:",PORT);
    }
})