const express = require('express');
const router = express.Router();

router.get('/log',(req,res)=>{

    res.render('log')
})
    
router.get('/forgetpass',(req,res)=>{

    res.render('forgetpass')
})

router.get('/register',(req,res)=>{

    res.render('register')
})

module.exports = router;