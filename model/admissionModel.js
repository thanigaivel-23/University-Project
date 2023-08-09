const mongoose = require('mongoose');

const admissionShcema = new mongoose.Schema({

    userid : String,
    nameOfUser : String,
    name : String,
    number : Number,
    email : String,
    gender : String,
    course : String,
    address : String,
    city : String,
    state : String
   
   
})

module.exports = mongoose.model("admission",admissionShcema);