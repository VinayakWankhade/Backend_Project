// without try-catch
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

// with try-catch

const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async function(req,res) {
  try {
    await mongoose.connect(process.env.DATABASE_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log("DB connection Successfull");
  }catch(err){
    console.log("Isssue in DB Connections");
    console.error(err);
    process.exit(1);
  }
}

module.exports = dbConnect;
