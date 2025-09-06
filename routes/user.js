const express = require('express');
const userRoute = express.Router();

userRoute.get('/course', function (req,res) {
  res.json({
    message : "user purchase course"
  })
})

module.exports = userRoute;
