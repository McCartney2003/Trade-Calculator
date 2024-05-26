const express = require("express");
const { assetWiseBalance } = require("../controllers/transactionContorller");
const transactionRouter = express.Router();

transactionRouter.post("/asset-wise-balance/:id",assetWiseBalance);

module.exports = {transactionRouter};

