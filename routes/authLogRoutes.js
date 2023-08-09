const express = require('express');
const router = express.Router();
const {authRegister,authLogin,logout} = require("../controllers/authLogControllers")

router.post('/register',authRegister);
router.post('/log',authLogin);
router.get('/logout',logout);



module.exports = router;