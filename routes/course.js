const express = require('express');
const courseRoutes = express.Router();

courseRoutes.get('/courses', function (req,res) {
  res.json({
    message : "course route endpoint"
  })
})

module.exports = courseRoutes;