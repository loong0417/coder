const express = require('express')
const router = express.Router()

// 导入验证数据的中间件
const expressJoi = require('@escook/express-joi')

// 导入文章分类的验证模块
const { add_cate_schema,delete_cate_schema,get_cates_schema,update_cate_schema } = require('../schema/artcate')

const artcateHandler = require('../router_handler/artcateHandler')

// 获取文章分类数据的列表路由
router.get('/cates',artcateHandler.getArticleCates)

// 新增文章分类的路由
router.post('/addcates',expressJoi(add_cate_schema),artcateHandler.addArticleCates)

// 根据Id删除文件分类路由
router.get('/deletecate/:id',expressJoi(delete_cate_schema),artcateHandler.getDeleteCateById)

// 根据Id获取文章分类数据
router.get('/cates/:id',expressJoi(get_cates_schema),artcateHandler.getArticleCatesById)

// 根据Id更新文章分类
router.post('/updatecate',expressJoi(update_cate_schema),artcateHandler.updateCateById)

module.exports = router