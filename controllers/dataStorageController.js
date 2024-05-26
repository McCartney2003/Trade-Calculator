const transaction_model = require('../models/transaction_model');

const csv = require("csv-parser");
const fs = require("fs");

const handleDataStorage = async (req, res) => {

    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }


        const results = [];
        fs.createReadStream(req.file.path)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', async () => {

                fs.unlinkSync(req.file.path);

                const transformedData = results.map(entry => ({
                    user_id: parseInt(entry.User_ID),
                    utc_time: new Date(entry.UTC_Time),
                    operation: entry.Operation,
                    base_coin: entry.Market.split("/")[0],
                    quote_coin: entry.Market.split("/")[1],
                    amount: parseFloat(entry["Buy/Sell Amount"]),
                    price: parseFloat(entry.Price)
                }));

                await transaction_model.insertMany(transformedData);

                res.status(200).json({ message: 'Data inserted successfully' });
            });
    } catch (err) {
        res.status(400).json({ err: err.toString() });
    }
}

module.exports = { handleDataStorage }