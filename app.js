require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { storageRouter } = require("./routes/dataStorgaeRoutes");
const { connectMongoDb } = require("./db");
const { transactionRouter } = require("./routes/transactionRoutes");


const PORT = process.env.PORT || 5000;
const BASE_URL = process.env.BASE_URL;

const connectToDB = async()=>{
    console.log("Connecting to DB.......")
    await connectMongoDb();
}

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    if (
        req.originalMethod !== "GET" &&
        req.headers["security-key"] !== process.env.SECURITY_KEY
    ) {
        res.json({ message: "You are not authorized" });
        return;
    }
    next();
});

app.use(BASE_URL, storageRouter);
app.use(BASE_URL, transactionRouter);


app.listen(PORT, async (err) => {
    if (err) {
        console.log(err.toString());
    }
    else {
        await connectToDB();
        console.log("Server running on port:", PORT);
    }
})