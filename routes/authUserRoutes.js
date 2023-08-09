const express = require('express');
const router = express.Router();


//validaition for user id
//(middleware function) 
const {validation} = require('../milddleware/validationMiddleware')
const {updateForm,deleteUser} = require('../controllers/authUserControllers')

router.post('/update',validation,updateForm)
router.get('/delete',validation,deleteUser)



module.exports = router;