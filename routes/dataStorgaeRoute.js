const express = require("express");

const storageRouter = express.Router();

const multer = require("multer");
const { handleDataStorage } = require("../controllers/dataStorageController");

const upload = multer({ dest: './uploads' });

// Endpoint to handle file upload
storageRouter.post('/upload', upload.single('csvFile'), handleDataStorage);

module.exports = {storageRouter};