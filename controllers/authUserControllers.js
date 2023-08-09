const db = require('../model/admissionModel')
//USER IS MIDDLLE IMPORTED IN ADMISSION ROUTES



const updateForm = async (req,res)=>{

    
    const id = req.query.id;
    // console.log(id);
    
    const update = await db.findByIdAndUpdate (id,req.body);
    db.findByIdAndUpdate()
    res.redirect('/index');
}

const deleteUser = async (req,res)=>{
    const id = req.query.id;
    
    const remove = await db.findByIdAndRemove(id)
    res.redirect('/index');
}

module.exports = {updateForm,deleteUser}