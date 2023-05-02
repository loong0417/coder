mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| bicks              |
| blog               |
| ecshop             |
| edu                |
| hbfzc              |
| mysql              |
| performance_schema |
| sys                |
| tanchytrip.com     |
| test               |
| znwl               |
+--------------------+
12 rows in set (0.01 sec)

mysql> use test;
Database changed
mysql> # 告诉服务器客户端字符集
mysql> set character_set_client=gbk;
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    32
Current database: test

Query OK, 0 rows affected (0.07 sec)

mysql> # 设置连接器字符集
mysql> set character_set_connection=gbk;
Query OK, 0 rows affected (0.01 sec)

mysql> # 告诉服务器返回的字符集
mysql> set character_set_results=gbk;
Query OK, 0 rows affected (0.00 sec)

mysql> # 案例演示
mysql> select databases();
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'databases()' at line 1
mysql> select database();
+------------+
| database() |
+------------+
| test       |
+------------+
1 row in set (0.02 sec)

mysql> show tables;
+----------------+
| Tables_in_test |
+----------------+
| a              |
| animal         |
| b              |
| cat_goods      |
| cate           |
| class          |
| day_time       |
| fruits         |
| goods          |
| m              |
| member_email   |
| num            |
| person         |
| result         |
| salary         |
| stats          |
| t              |
| users          |
+----------------+
18 rows in set (0.02 sec)

mysql> select * from users;
+----+----------+----------+-----+-----+--------------+
| id | username | password | age | sex | email        |
+----+----------+----------+-----+-----+--------------+
|  1 | yang     | 123456   |  20 | Ů   | yang@126.com |
+----+----------+----------+-----+-----+--------------+
1 row in set (0.07 sec)

mysql> insert into users values(2,'不会乱码',18,'男','hehe@126.com');
ERROR 1136 (21S01): Column count doesn't match value count at row 1
mysql> desc users;
+----------+-------------+------+-----+---------+----------------+
| Field    | Type        | Null | Key | Default | Extra          |
+----------+-------------+------+-----+---------+----------------+
| id       | int(11)     | NO   | PRI | NULL    | auto_increment |
| username | varchar(50) | NO   |     | NULL    |                |
| password | char(32)    | NO   |     | NULL    |                |
| age      | tinyint(4)  | NO   |     | NULL    |                |
| sex      | varchar(4)  | NO   |     | NULL    |                |
| email    | varchar(50) | NO   |     | NULL    |                |
+----------+-------------+------+-----+---------+----------------+
6 rows in set (0.01 sec)

mysql> insert into users values('不会乱码',18,'男','hehe@126.com');
ERROR 1136 (21S01): Column count doesn't match value count at row 1
mysql> insert into users values('不会乱码',123456,18,'男','hehe@126.com');
ERROR 1136 (21S01): Column count doesn't match value count at row 1
mysql> insert into users values('不会乱码',123456,18,'男','hehe@126.com');
ERROR 1136 (21S01): Column count doesn't match value count at row 1
mysql> insert into users values('不会乱码','123456',18,'男','hehe@126.com');
ERROR 1136 (21S01): Column count doesn't match value count at row 1
mysql> insert into users values('不会乱码','123456',18,'男','hehe@126.com');
ERROR 1136 (21S01): Column count doesn't match value count at row 1
mysql> insert into users(username,password,age,sex,email)
    -> values('不会乱码','123456',18,'男','123456@qq.com');
ERROR 2013 (HY000): Lost connection to MySQL server during query
mysql> values('不会乱码','123456',18,'男','123456@qq.com');
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    35
Current database: test

ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'values('不会乱码','123456',18,'男','123456@qq.com')' at line 1
mysql> insert into users(username,password,age,sex,email)
    -> values('不会乱码','123456',18,'男','123456@qq.com');
Query OK, 1 row affected (0.02 sec)

mysql> select * from users;
+----+--------------+----------+-----+-----+---------------+
| id | username     | password | age | sex | email         |
+----+--------------+----------+-----+-----+---------------+
|  1 | yang         | 123456   |  20 | 女  | yang@126.com  |
|  2 | 不会乱码     | 123456   |  18 | 男  | 123456@qq.com |
+----+--------------+----------+-----+-----+---------------+
2 rows in set (0.00 sec)

mysql> set character_set_results=utf8;
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    36
Current database: test

Query OK, 0 rows affected (0.01 sec)

mysql> select * from users;
+----+--------------+----------+-----+-----+---------------+
| id | username     | password | age | sex | email         |
+----+--------------+----------+-----+-----+---------------+
|  1 | yang         | 123456   |  20 | 女  | yang@126.com  |
|  2 | 不会乱码     | 123456   |  18 | 男  | 123456@qq.com |
+----+--------------+----------+-----+-----+---------------+
2 rows in set (0.00 sec)

mysql> set character_set_client=utf8;
Query OK, 0 rows affected (0.00 sec)

mysql> insert into users(username,password,age,sex,email)
    -> values('乱不乱码呢？','123456',22,'123456@126.com');
ERROR 1136 (21S01): Column count doesn't match value count at row 1
mysql> insert into users(username,password,age,sex,email)
    -> values('乱不乱码呢？','123456',22,'女','123456@126.com');
Query OK, 1 row affected (0.01 sec)

mysql> select * from users;
+----+--------------------+----------+-----+-----+----------------+
| id | username           | password | age | sex | email          |
+----+--------------------+----------+-----+-----+----------------+
|  1 | yang               | 123456   |  20 | 女  | yang@126.com   |
|  2 | 不会乱码           | 123456   |  18 | 男  | 123456@qq.com  |
|  3 | 乱不乱码呢？       | 123456   |  22 | 女  | 123456@126.com |
+----+--------------------+----------+-----+-----+----------------+
3 rows in set (0.00 sec)

mysql> set character_set_connection=utf8;
ERROR 2013 (HY000): Lost connection to MySQL server during query
mysql> set character_set_connection=utf8;
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    37
Current database: test

Query OK, 0 rows affected (0.01 sec)

mysql> select * from users;
+----+--------------------+----------+-----+-----+----------------+
| id | username           | password | age | sex | email          |
+----+--------------------+----------+-----+-----+----------------+
|  1 | yang               | 123456   |  20 | 女  | yang@126.com   |
|  2 | 不会乱码           | 123456   |  18 | 男  | 123456@qq.com  |
|  3 | 乱不乱码呢？       | 123456   |  22 | 女  | 123456@126.com |
+----+--------------------+----------+-----+-----+----------------+
3 rows in set (0.00 sec)

mysql> set character_set_client=utf8;
Query OK, 0 rows affected (0.00 sec)

mysql> set character_set_connection=utf8;
Query OK, 0 rows affected (0.00 sec)

mysql> set character_set_results=gbk;
Query OK, 0 rows affected (0.00 sec)

mysql> select * from users;
+----+--------------+----------+-----+-----+----------------+
| id | username     | password | age | sex | email          |
+----+--------------+----------+-----+-----+----------------+
|  1 | yang         | 123456   |  20 | Ů   | yang@126.com   |
|  2 | ��������             | 123456   |  18 | ��    | 123456@qq.com  |
|  3 | �Ҳ������أ�           | 123456   |  22 | Ů   | 123456@126.com |
+----+--------------+----------+-----+-----+----------------+
3 rows in set (0.01 sec)

mysql> set names gbk;
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    38
Current database: test

Query OK, 0 rows affected (0.01 sec)

mysql> Terminal close -- exit!
