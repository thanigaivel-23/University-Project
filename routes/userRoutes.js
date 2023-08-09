const express = require('express');
const router = express.Router();

//middleware for validation
const {validation} = require('../milddleware/validationMiddleware')
//user controllers
const {printUsers,userInfo,updateUser} = require('../controllers/userControllers')



router.get(['/index','/user'],validation,printUsers)

router.get('/updateuser',validation,updateUser)

router.get('/info',validation,userInfo)


router.get('/admission',validation,(req,res)=>{
    
    res.render('admission')
})


module.exports = router;