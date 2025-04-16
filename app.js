const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
let connectDB = require("./mongodbconnec");
require('dotenv').config();
connectDB();
const productRoutes = require('./routes/productRoutes');
const productDetailRoutes = require('./routes/productDetailRoutes');



const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/product-details', productDetailRoutes);

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('MongoDB connected');
//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// }).catch(err => console.error(err));

app.listen(process.env.PORT, () => {
    console.log("Server Started!")
})