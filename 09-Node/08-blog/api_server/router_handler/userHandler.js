// 导入数据库操作模块
const db = require('../db/index')

// 导入bcryptjs密码加密的
const bcrypt = require('bcryptjs')

// 导入生成Token的包
const jwt = require('jsonwebtoken')

// 导入全局的配置文件
const config = require('../config')

/**
* 模块名称: 用户注册处理函数
* 代码描述:
* Author:yang_xiaoyang
* 创建时间:2023/03/14 12:58:47
*/
exports.regUser = (req,res)=>{

  // 获取客户端提交到服务器的信息
  const userInfo = req.body
  // 对表单中的数据进行合法校验
  if(!userInfo.username || !userInfo.password){
    return res.send({status:1,message:'用户名或密码不合法！'})
  }

  // 定义SQL语句
  const sqlStr = 'select * from bg_users where username=?'
  db.query(sqlStr,[userInfo.username],(err,results)=>{
    // 执行SQL语句失败
    if(err){
      // return res.send({status:1,message:err.message})
      return res.cc(err)
    }
    // 判断用户名是否被占用
    if(results.length>0){
      // return res.send({status:1,message:'用户名被占用，请更换其它用户名！'})
      return res.cc('用户名被占用，请更换其它用户名！')
    }
    // 调用bcrypt.hashSync()对密码进行加密
    userInfo.password = bcrypt.hashSync(userInfo.password,10)

    // 定义新增用户的SQL语句
    const sql = 'insert into bg_users set ?'
    // 调用db.query()执行SQL语句
    db.query(sql,{username:userInfo.username,password:userInfo.password},(err,results)=>{
      // 判断SQL语句是否执行成功
      if(err){
        // return res.send({status:1,message:err.message})
        return res.cc(err)
      }
      // 判断受影响行数
      if(results.affectedRows !==1){
        // return res.send({status:1,message:'注册用户失败，请稍后再试~'})
        return res.cc('注册用户失败，请稍后再试~')
      }
      // return res.send({status:0,message:'注册用户成功！'})
      return res.cc('注册用户成功！',0)
    })
  })
  return;
}

/**
* 模块名称: 用户登录处理函数
* 代码描述:
* Author:yang_xiaoyang
* 创建时间:2023/03/14 12:59:08
*/
exports.login = (req,res)=>{
  // 接收表单的数据
  const userInfo = req.body
  // 定义SQL语句
  const sql = `select * from bg_users where username=?`
  // 执行SQL语句
  db.query(sql,userInfo.username,(err,result)=>{
    if(err){
      return res.cc(err)
    }

    if(result.length !==1){
      return res.cc('登录失败！')
    }
    // TODO：判断密码是否正确
    // 比较用户提交的密码和数据库的密码是否一致
    // 注意：参数的顺序，第一个参数为用户提交的密码，第二个参数为数据库里面的密码
    const compareResult=bcrypt.compareSync(userInfo.password,result[0].password)
    if(!compareResult){
      return res.cc('登录失败！')
    }
    // TODO：在服务器端生成字符串
    const user = {...result[0],password:'',user_pic:''};
    // 对用户的信息进行加密，生成Token字符串
    const tokenStr = jwt.sign(user,config.jwtSecretKey,{expiresIn:config.expiresIn})
    // 调用res.send()将Token响应给客户端
    res.send({
      status: 0,
      message: '登录成功!',
      token: 'Bearer '+tokenStr
    })
    // res.cc('登录成功！')
  })
 
}