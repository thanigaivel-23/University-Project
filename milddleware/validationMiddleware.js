const jwt = require('jsonwebtoken')
const db = require('../model/logModel')
//VALIDATION MIDDLEWARE 

const validation = async(req,res,next)=>{

    // console.log(req.cookies);
    if(req.cookies.vel){

        const decode = jwt.verify(req.cookies.vel,process.env.JWT_SECRET_KEY)
        // console.log(decode);
        const findUser = await db.findById(decode.id)
        // console.log(findUser);
       user = findUser;
        next();
    }
    else{
        return  res.render('log')

    }
}

module.exports = {validation}
