// 載入使用者認證 middleware/auth.js
const { authenticated } = require('../middleware/auth')


// 要在 router 部分裡面  新增 authenticated (使用者認證)
const express = require('express')
const router = express.Router()
const userController = require('../controller/user-controller')


//signin
router.get('/signin', userController.signInPage)

//fallback
router.get('/', (req, res) => { res.redirect('/signin') })

module.exports = router