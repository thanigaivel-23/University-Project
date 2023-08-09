const express = require('express');
const router = express.Router();
const { form } = require('../controllers/authAdmissionControllers');

//validaition for user id
//(middleware function) 
const {validation} = require('../milddleware/validationMiddleware')


router.post('/admission',validation,form)


module.exports = router;