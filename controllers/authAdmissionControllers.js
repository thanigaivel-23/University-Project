const db = require('../model/admissionModel')
//USER IS MIDDLLE IMPORTED IN ADMISSION ROUTES

//METHOD POST
//ROUTE /auth/admission/
const form = async(req,res)=>{

    // console.log(user);

    const {name,email,number,gender,course,address,city,state,} = req.body;
    if(course == "Course"){
        return res.render('admission',{msg : '*choose any course', type : "error"})

    }
    const create = await (await db.create({
        userid : user.id,
        nameOfUser : user.name,
        name,  email,
        number, gender,
        course, address,
        city, state}));
        
        res.render('admission',{msg : 'Applied successfully', type : "good"})
}



module.exports = {form}