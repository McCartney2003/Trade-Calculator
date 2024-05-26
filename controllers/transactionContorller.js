const transaction_model = require('../models/transaction_model');

const assetWiseBalance = async (req, res) => {
    try {
        const timeStamp = req.body.timestamp;
        console.log({timeStamp})
        const user_id = req.params.id;

        const data = await transaction_model.find({user_id: parseInt(user_id), utc_time: {$lte: new Date(timeStamp)}}).select({utc_time: 1, base_coin: 1, operation: 1, amount: 1});


        const balanceMap = {};
        data.forEach(transaction => {
            const { base_coin, amount, operation } = transaction;
            if(operation === "Sell"){
                balanceMap[base_coin] = (balanceMap[base_coin] || 0) - amount;
            }
            else{
                balanceMap[base_coin] = (balanceMap[base_coin] || 0) + amount;
            }
        });

        res.status(200).json(balanceMap);

    } catch (err) {
        res.status(400).json({ err: err.toString() });
    }
}


module.exports = { assetWiseBalance };
