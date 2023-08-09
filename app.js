const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000
const connectDB = require('./mongoSetup')
const hbs = require('hbs')
const path = require('path')
const cookieParser = require("cookie-parser")

app.use(express.urlencoded())
//cookie parser
app.use(cookieParser())
// set HBS
app.set('view engine', 'hbs');

// css and img
app.use(express.static(path.join(__dirname,'public')))
//hbs partials
hbs.registerPartials(path.join(__dirname,"views","include"))
//index staring with 1
hbs.registerHelper("inc",function(value , options){
    return parseInt(value)+1;
})

//Normal Router
app.use('/',require('./routes/pageRoutes'))
app.use('/',require('./routes/logRoutes'))
app.use('/',require('./routes/userRoutes'))

//Auth Log Router
app.use('/auth',require('./routes/authLogRoutes'))

//Auth Admission Router
app.use('/auth',require('./routes/authAdmissionRoutes'))

//Auth User Router
app.use('/auth',require('./routes/authUserRoutes'))


app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})