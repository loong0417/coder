// 导入数据库操作模块
const db = require('../db/index')

// 导入处理密码的模块
// 在头部区域导入 bcryptjs 后,使用bcryptjs.compareSync(提交的密码，数据库中的密码)方法验证是否正确
// compareSync()函数的返回值为布尔值，true表示密码正确，false表示密码错误。
const bcryptjs = require('bcryptjs')

/**
* 模块名称: 获取用户基本信息的处理函数
* 代码描述:
* Author:yang_xiaoyang
* 创建时间:2023/03/16 14:45:27
*/
exports.getUserInfo = (req,res)=>{
  // 定义查询用户的SQL语句
  const sql = `select id,username,nickname,email,user_pic from bg_users where id=?`
  // 调用db.query()执行SQL语句
  db.query(sql,req.user.id,(err,result)=>{
    // 执行SQL语句失败
    if(err){
      return res.cc(err)
    }
    if(result.length!==1){
      return res.cc('获取用户信息失败！')
    }

    res.send({
      status:0,
      message:'获取用户信息成功！',
      data:result[0]
    })
  })
}

/**
* 模块名称: 更新用户基本信息的处理函数
* 代码描述:
* Author:yang_xiaoyang
* 创建时间:2023/03/16 15:19:37
*/
exports.updateUserInfo = (req,res) =>{
  // 定义待执行SQL语句
  const sql = `update bg_users set? where id=?`
  // 调用db.query()执行SQL语句，并传递参数
  db.query(sql,[req.body,req.body.id],(err,results)=>{
    // 指定SQL语句失败
    if(err){
      return res.cc(err)
    }
    // 执行SQL语句，但受影响行数不等于1
    if(results.affectedRows !== 1){
      return res.cc('更新用户信息失败！')
    }
    // 跟新用户信息成功
    return res.cc('更新用户信息成功！',0)
  })
}

/**
* 模块名称: 更新用户密码处理函数
* 代码描述:
* Author:yang_xiaoyang
* 创建时间:2023/03/17 15:55:27
*/
exports.updatePassword = (req,res) =>{
  // 根据 id 查询用户信息
  const sql = `select * from bg_users where id=?`
  db.query(sql,req.user.id,(err,results)=>{
    if(err){
      return res.cc(err)
    }

    if(results.length !==1){
      return res.cc('用户不存在！')
    }

    // 判断密码是否正确
    const compareResult = bcryptjs.compareSync(req.body.oldPwd,results[0].password)
    if(!compareResult){
      return res.cc('旧密码错误！')
    }

    // 定义更新密码的SQL语句
    const sql = `update bg_users set password=? where id=?`
    // 对新密码进行加密处理
    const newPwd = bcryptjs.hashSync(req.body.newPwd,10)

    db.query(sql,[newPwd,req.user.id],(err,results)=>{
      if(err){
        return res.cc(err)
      }
      if(results.affectedRows !==1){
        return res.cc('更新密码失败！')
      }

      res.cc('更新密码成功！',0)
    })

    
  })
}

/**
* 模块名称: 更新用户头像处理函数
* 代码描述:
* Author:yang_xiaoyang
* 创建时间:2023/03/17 19:23:23
*/
exports.updateAvatar = (req,res) =>{
  const sql = `update bg_users set user_pic = ? where id = ?`
  db.query(sql,[req.body.avatar,req.user.id],(err,results)=>{
    if(err){
      return res.cc(err)
    }
    if(results.affectedRows !==1){
      return res.cc('更新头像失败！')
    }
    res.cc('更新头像成功！',0)
  })
}

