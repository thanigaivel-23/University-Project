const db = require('../model/admissionModel')
//USER IS MIDDLLE IMPORTED IN ADMISSION ROUTES

const printUsers = async (req,res)=>{

    // console.log(user.id);
    const getUser = await db.find({userid : user.id})
    
    res.render('user',{user, type : "userName", getUser})
}

const updateUser = async (req,res)=>{

    const id = req.query.id;
    const find = await db.findById(id)
    // console.log(find);
       
    res.render('updateform',{find,id,
        male : find.gender === 'Male',
        female : find.gender === 'Female'
    })
}

const userInfo = async (req,res)=>{

    const id = req.query.id;
    const find = await db.findById(id)
    console.log(find);
    res.render('info', {find})
}

module.exports = {printUsers,userInfo,updateUser}