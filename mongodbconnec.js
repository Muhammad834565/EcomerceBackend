let mongodb = require("mongoose");

async function connectDB() {
    
//let newConnection= await mongodb.connect("mongodb+srv://muhammad834565:3kPRZK3poGEZDJH9@cluster0.mongodb.net/mydatabase");
let newConnection= await mongodb.connect('mongodb://127.0.0.1:27017/productsDB');
console.log("MongoDB Connect!")

}

module.exports=connectDB;
