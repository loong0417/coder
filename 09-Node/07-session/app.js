// 1.1 导入 express
const express = require('express')

// 1.2 创建服务器的实例对象
const app = express()

// TODO:请配置session中间件
const session = require('express-session')
app.use(
  session({
    secret: 'yang',
    resave: false,
    saveUninitialized: true
  })
)

// 1.3 启动服务器
app.listen(8080, () => {
  console.log('api server running at http://127.0.0.1:8080')
})
