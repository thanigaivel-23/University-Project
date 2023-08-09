const mongoose = require('mongoose');

const shcema = new mongoose.Schema({
    
    name : String,
    email : String,
    password : String,
    confirmPassword : String,
    
});

module.exports = mongoose.model('log',shcema);