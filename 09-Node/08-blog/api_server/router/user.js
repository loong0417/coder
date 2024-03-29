const express = require('express')
const router = express.Router()

const userHandler = require('../router_handler/userHandler')


// 1. 导入验证数据的中间件
const expressJoi = require('@escook/express-joi')
// 2. 导入需要的验证规则对象
const {reg_login_schema} = require('../schema/user')


// 注册新用户（在这里调用中间件）
router.post('/registration',expressJoi(reg_login_schema),userHandler.regUser)

// 登录
router.post('/login',expressJoi(reg_login_schema),userHandler.login)

module.exports = router
