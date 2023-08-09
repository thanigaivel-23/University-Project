const mongoose = require('mongoose');

const connectDB = mongoose.connect('mongodb+srv://velambrose:velambrose2001@cluster0.ayrhy3f.mongodb.net/university')
        .then(()=>{console.log('Database connected');})
        .catch(()=>{console.log('Database not connected');})

module.exports = connectDB;