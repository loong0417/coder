const db = require("../db/index")

/**
* 模块名称: 获取文章分类列表数据的处理函数
* 代码描述:
* Author:yang_xiaoyang
* 创建时间:2023/03/19 22:33:10
*/
exports.getArticleCates = (req,res) =>{
  const sql = `select * from bg_article_cate where is_delete = 0 order by id asc`
  db.query(sql,(err,results)=>{
    if(err){
     return res.cc(err)
    }
    res.send({
      status: 0,
      message: '获取文章分类列表成功！',
      data: results
    })
  })
  // res.send('OK')
}

/**
* 模块名称: 新增文章分类函数
* 代码描述:
* Author:yang_xiaoyang
* 创建时间:2023/03/19 22:33:22
*/
exports.addArticleCates = (req,res) =>{
  // 定义查询分类名称与分类别名，是否被占用
  const sql = `select * from bg_article_cate where name=? or alias=?`
  db.query(sql,[req.body.name,req.body.alias],(err,results)=>{
    // 执行SQL语句失败
    if(err){
      return res.cc(err)
    }

    // 分类名称和分类别名都别占用
    if(results.length === 2){
      return res.cc('分类名称与分类别名被占用,请更换后重试！')
    }

    if(results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias){
      return res.cc('分类名称与分类别名被占用,请更换后重试！')
    }

    // 分类名称或分类别名被占用
    if(results.length === 1 && results[0].name === req.body.name){
      return res.cc('分类别名被占用，请更换后重试！')
    }

    if(results.length === 1 && results[0].alias === req.body.alias){
      return res.cc('分类别名被占用，请更换后重试！')
    }

    // TODO：分类名称和分类别名都可用，执行添加操作
    const sqlStr = `insert into bg_article_cate set ?`
    db.query(sqlStr,req.body,(err,results)=>{
      if(err){
        return res.cc(err)
      }
      if(results.affectedRows !==1){
        return res.cc('新增文章分类失败！')
      }
      res.cc('新增文章分类成功！',0)
    })
  })
  // res.send('OK!')
}

/**
* 模块名称: 根据Id删除文章分类函数
* 代码描述:
* Author:yang_xiaoyang
* 创建时间:2023/03/19 22:33:36
*/
exports.getDeleteCateById = (req,res) =>{
  // 定义标记删除的SQL语句
  const sql = `update bg_article_cate set is_delete = 1 where id = ?`
  db.query(sql,req.params.id,(err,results)=>{
    if(err){
      return res.cc(err)
    }
    if(results.affectedRows !== 1){
      return res.cc('删除文章分类失败！')
    }

    res.cc('删除文章分类成功！',0)
  })
}

/**
* 模块名称: 根据Id获取文章分类数据函数
* 代码描述:
* Author:yang_xiaoyang
* 创建时间:2023/03/19 22:33:58
*/
exports.getArticleCatesById = (req,res) =>{
  // 定义SQL语句，根据Id获取文章分类数据
  const sql = `select * from bg_article_cate where is_delete=0 and id = ?`
  db.query(sql,req.params.id,(err,results)=>{
    if(err){
      return res.cc(err)
    }
    if(results.length !==1){
      return res.cc('获取文章分类失败！')
    }
    res.send({
      status:0,
      message:'获取文章分类成功！',
      data:results[0]
    })
  })
}

/**
* 模块名称: 根据Id更新文章分类数据函数
* 代码描述:
* Author:yang_xiaoyang
* 创建时间:2023/03/19 22:33:48
*/
exports.updateCateById = (req,res) =>{
  // 定义db.query()执行查重的SQL语句
  const sql = `select * from bg_article_cate where Id<>? and (name=? or alias=?)`
  db.query(sql,[req.body.Id,req.body.name,req.body.alias],(err,results)=>{
    // 执行SQL语句失败
    if(err){
      return res.cc(err)
    }
    // 判断名称和别名被占用的四种情况
    if(results.length === 2){
      return res.cc('分类名称与分类别名被占用,请更换后重试！')
    }

    if(results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias){
      return res.cc('分类名称与分类别名被占用,请更换后重试！')
    }

    if(results.length === 1 && results[0].name === req.body.name){
      return res.cc('分类名称被占用，请更换后重试！')
    }

    if(results.length === 1 && results[0].alias === req.body.alias){
      return res.cc('分类别名被占用，请更换后重试！')
    }

    // TODO：名称和别名都可用，可以执行更新的操作
    const sqlStr = `update bg_article_cate set ? where Id=?`
    db.query(sqlStr,[req.body,req.body.Id],(err,results)=>{
      if(err){
        return res.cc(err)
      }
      if(results.affectedRows !==1){
        return res.cc('更新文章分类失败！')
      }
      res.cc('更新文章分类成功！',0)
    })

  })
}