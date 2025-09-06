const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = function() {
  mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log("Database connection Successful"))
  .catch(function(error) {
    console.error(error);
  })
}

module.exports = dbConnect;