const mongoose = require("mongoose");
const mongoose_uri = process.env.MONGOOSE_URI;

const connectMongoDb = async () => {
    try {
      const conn = await mongoose.connect(mongoose_uri);
      console.log("DB connected successfully");
    } catch (err) {
      console.log(err.toString());
    }
  }
  module.exports = {connectMongoDb}