const express = require('express');
const app = express();
require('dotenv').config();

const PORT = 3000 || process.env.PORT;

app.get('/courses', (req,res) => {
  res.json({
    message : "Protected endpoint"
  })
})

app.get('/user/couse', (req,res) => {
  res.json({
    message : "user course"
  })
})

app.post('/purchase', (req,res) => {
  res.json({
    message : "user purchase course"
  })
})

app.listen(PORT , () => {
  console.log("Server is running on Port : ", PORT);
})