-- CREATE TABLE `bg_users` (
--   `id` int NOT NULL AUTO_INCREMENT,
--   `username` varchar(255) NOT NULL,
--   `password` varchar(255) NOT NULL,
--   `nickname` varchar(255) DEFAULT NULL,
--   `email` varchar(255) DEFAULT NULL,
--   `user_pic` text,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `id_UNIQUE` (`id`),
--   UNIQUE KEY `username_UNIQUE` (`username`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='用户信息表'

-- SELECT * FROM my_db_01.bg_article_cate;

-- CREATE TABLE `my_db_01`.`bg_article_cate` (
--  `id` INT NOT NULL AUTO_INCREMENT COMMENT 'ID唯一标识',
--  `name` VARCHAR(255) NOT NULL COMMENT '文章分类名称',
--  `alias` VARCHAR(255) NOT NULL COMMENT '别名',
--  `is_delete` TINYINT(1) NOT NULL DEFAULT 0 COMMENT '数据是否被删除：\n0没有删除，默认值\n1已经删除\n',
--  PRIMARY KEY (`id`),
--  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
--  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
--  UNIQUE INDEX `alias_UNIQUE` (`alias` ASC) VISIBLE)
-- COMMENT = '文章分类表';

-- INSERT INTO `my_db_01`.`bg_article_cate` (`name`, `alias`) VALUES ('科技', 'keji');
-- INSERT INTO `my_db_01`.`bg_article_cate` (`name`, `alias`) VALUES ('历史', 'lishi');

-- select * from bg_article_cate where is_delete=0 and id = 2

-- CREATE TABLE `my_db_01`.`bg_articles` (
--   `Id` INT NOT NULL AUTO_INCREMENT COMMENT 'Id唯一标识',
--   `title` VARCHAR(255) NOT NULL COMMENT '文章标题',
--   `content` TEXT NOT NULL COMMENT '文章内容',
--   `cover_img` VARCHAR(255) NOT NULL COMMENT '文章封面',
--   `pub_date` VARCHAR(255) NOT NULL COMMENT '发布日期',
--   `status` VARCHAR(255) NOT NULL COMMENT '文章发布状态：草稿，已发布',
--   `is_delete` TINYINT(1) NOT NULL DEFAULT 0 COMMENT '0：标识文章未删除\n1：标识文章已删除',
--   `cate_id` INT NOT NULL COMMENT '文章所属分类',
--   `author_id` INT NOT NULL COMMENT '所属作者Id',
--   PRIMARY KEY (`Id`),
--   UNIQUE INDEX `Id_UNIQUE` (`Id` ASC) VISIBLE)
-- COMMENT = '文章表	';
