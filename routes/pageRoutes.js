const express = require('express');
const router = express.Router();
const {validation} = require('../milddleware/validationMiddleware')




router.get(['/','/newuni'],validation,(req,res)=>{
         
    
    res.render('newuni',{user})
})

router.get('/contact',validation,(req,res)=>{

    res.render('contact',{user})
})

router.get('/about',validation,(req,res)=>{

    res.render('about',{user})
})




module.exports = router;