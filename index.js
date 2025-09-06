const express = require('express');
const app = express();
const dbConnect = require('./config/db');
dbConnect();

const userRoute = require('./routes/user');
const adminRoutes = require('./routes/admin');

require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use('/user', userRoute);
app.use('/admin', adminRoutes);

app.listen(PORT , () => {
  console.log("Server is running on Port : ", PORT);
})