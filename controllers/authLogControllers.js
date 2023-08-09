const db = require('../model/logModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

//METHOD post
//ROUTE auth/register
const authRegister = async(req,res)=>{
    
    const {name,email,password, confirmP} = req.body;

    const emailCheck = await db.findOne({email})
    if(emailCheck)
         return res.render("register",{msg : "*this Email id already taken", type : "error"})
    else if (password !== confirmP)
         return res.render("register", {msg : "*password does not match", type : "error"})
    
    const hashPassword = await bcrypt.hash(password,10);

    const create = await db.create({
        name,
        email,
        password : hashPassword
    })
    return res.render("log")

}

//METHOD post
//ROUTE /auth/log
const authLogin = async(req,res)=>{

    const {email,password} = req.body;

    const emailCheck = await db.findOne({email});
    if(!emailCheck)
        return  res.render('log',{msg : "Incorrect Email id", type : "error"})

    const passCheck = await bcrypt.compare(password,emailCheck.password);
    if(!passCheck)
        return  res.render('log',{msg : "Incorrect Password", type : "error"})

    const token = jwt.sign({id : emailCheck.id},process.env.JWT_SECRET_KEY,{expiresIn : process.env.JWT_EXPIRES});
    const cookieOption = {
        expires : new Date(Date.now()+7*24*60*60*1000),
        httpOnly : true
    }
    res.cookie("vel",token,cookieOption);
    res.redirect('/');
    
}

const logout = (req,res)=>{

    res.cookie('vel','23',{
        expires: new Date(Date.now()+1*1000)
    })
    res.redirect("/log")

}

module.exports = {authRegister,authLogin,logout}