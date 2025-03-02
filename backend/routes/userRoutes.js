const express = require('express')
const { registerUser, loginUser, userCredit} = require('../controllers/userController')
const userAuth = require('../middleware/auth')
        
const router = express.Router()
                                                

router.post('/register',registerUser) 
router.post('/login',loginUser) 
router.get('/credits', userAuth ,userCredit) 

module.exports = router