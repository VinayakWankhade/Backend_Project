const express = require('express');
const adminRoutes = express.Router();

adminRoutes.get('/courses', function (req, res){
  res.json({
    message : "This is an Admin Routes"
  })
})

module.exports = adminRoutes;