mysql> show databases;
ERROR 2013 (HY000): Lost connection to MySQL server during query
mysql> show databases;
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    3
Current database: *** NONE ***

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
12 rows in set (0.02 sec)

mysql> use test;
Database changed
mysql> show tables;
+----------------+
| Tables_in_test |
+----------------+
| a              |
| animal         |
| b              |
| cate           |
| class          |
| fruits         |
| goods          |
| m              |
| num            |
| person         |
| result         |
| salary         |
| t              |
| users          |
+----------------+
14 rows in set (0.00 sec)

mysql> # 查询栏目商品的平均价格
mysql> select cat_id,avg(shop_price) as cat_avg 
    -> from goods 
    -> group by cat_id;
ERROR 2013 (HY000): Lost connection to MySQL server during query
mysql> select cat_id,avg(shop_price) as cat_avg 
    -> from goods 
    -> group by cat_id;
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    8
Current database: test

+--------+-------------+
| cat_id | cat_avg     |
+--------+-------------+
|      3 | 1902.333333 |
|      4 | 2006.500000 |
|      6 |   26.833333 |
|      8 |   52.000000 |
|     16 |   64.000000 |
|     18 |  149.000000 |
|     19 |   60.180000 |
|     20 |   29.000000 |
|     22 |   69.000000 |
|     24 |  336.762500 |
+--------+-------------+
10 rows in set (0.01 sec)

mysql> # 创建视图，视图是一张虚拟表，可以理解成视图是一张表
mysql> create view stats
    -> as
    -> select cat_id,avg(shop_price) as cat_avg
    -> from goods
    -> group by cat_id;
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    9
Current database: test

Query OK, 0 rows affected (0.04 sec)

mysql> show tables;
+----------------+
| Tables_in_test |
+----------------+
| a              |
| animal         |
| b              |
| cate           |
| class          |
| fruits         |
| goods          |
| m              |
| num            |
| person         |
| result         |
| salary         |
| stats          |
| t              |
| users          |
+----------------+
15 rows in set (0.00 sec)

mysql> # 数据库里面新增一张 stats 表
mysql> select * from stats;
+--------+-------------+
| cat_id | cat_avg     |
+--------+-------------+
|      3 | 1902.333333 |
|      4 | 2006.500000 |
|      6 |   26.833333 |
|      8 |   52.000000 |
|     16 |   64.000000 |
|     18 |  149.000000 |
|     19 |   60.180000 |
|     20 |   29.000000 |
|     22 |   69.000000 |
|     24 |  336.762500 |
+--------+-------------+
10 rows in set (0.00 sec)

mysql> # 查询平均价格前3高
mysql> select * from stats order by cat_avg desc limit 3;
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    10
Current database: test

+--------+-------------+
| cat_id | cat_avg     |
+--------+-------------+
|      4 | 2006.500000 |
|      3 | 1902.333333 |
|     24 |  336.762500 |
+--------+-------------+
3 rows in set (0.01 sec)

mysql> # 查询平均价格第3名到第5名的商品
mysql> select *  from stats order by cat_avg desc limit 2,3;
ERROR 2013 (HY000): Lost connection to MySQL server during query
mysql> select *  from stats order by cat_avg desc limit 2,3;
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    11
Current database: test

+--------+------------+
| cat_id | cat_avg    |
+--------+------------+
|     24 | 336.762500 |
|     18 | 149.000000 |
|     22 |  69.000000 |
+--------+------------+
3 rows in set (0.01 sec)

mysql> select cat_id,avg(shop_price) as cat_avg
    -> from goods 
    -> group by cat_id;
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    12
Current database: test

+--------+-------------+
| cat_id | cat_avg     |
+--------+-------------+
|      3 | 1902.333333 |
|      4 | 2006.500000 |
|      6 |   26.833333 |
|      8 |   52.000000 |
|     16 |   64.000000 |
|     18 |  149.000000 |
|     19 |   60.180000 |
|     20 |   29.000000 |
|     22 |   69.000000 |
|     24 |  336.762500 |
+--------+-------------+
10 rows in set (0.01 sec)

mysql> select * from goods;
+----------+--------+-----------+-------------------------------------------------+-------------+--------------+--------------+------------+------------+---------+--------+--------+
| goods_id | cat_id | goods_sn  | goods_name                                      | click_count | goods_number | market_price | shop_price | add_time   | is_best | is_new | is_hot |
+----------+--------+-----------+-------------------------------------------------+-------------+--------------+--------------+------------+------------+---------+--------+--------+
|        1 |      4 | ECS000000 | KD876                                           |           8 |            1 |      1665.60 |    1388.00 | 1240902890 |       1 |      1 |      0 |
|        4 |      8 | ECS000004 | 诺基亚N85原装充电器                             |           0 |           17 |        69.60 |      58.00 | 1241422402 |       0 |      0 |      0 |
|        8 |      3 | ECS000008 | 飞利浦9@9v                                      |          12 |            0 |       478.79 |     399.00 | 1241425512 |       1 |      1 |      0 |
|        9 |      3 | ECS000009 | 诺基亚E66                                       |          28 |            2 |      2757.60 |    2298.00 | 1241511871 |       1 |      1 |      0 |
|       35 |     19 | ECS000035 | 体重秤                                          |           0 |            1 |        16.80 |      14.00 | 1462851036 |       0 |      0 |      0 |
|       69 |     24 | ECS000069 | 平衡车                                          |           3 |            1 |      2398.79 |    1999.00 | 1462955300 |       0 |      0 |      1 |
|       70 |     24 | ECS000070 | 炫彩翻页保护套                                  |           3 |            1 |        46.80 |      39.00 | 1462955414 |       0 |      0 |      1 |
|       72 |     24 | ECS000072 | 智能相机                                        |           3 |           20 |       178.79 |     149.00 | 1462956048 |       0 |      0 |      0 |
|       14 |      4 | ECS000014 | 诺基亚5800XM                                    |           7 |            1 |      3150.00 |    2625.00 | 1241968492 |       0 |      0 |      0 |
|       64 |     24 | ECS000064 | 运动相机                                        |           6 |            1 |       478.79 |     399.00 | 1462952811 |       0 |      0 |      1 |
|       63 |     24 | ECS000063 | 自拍杆                                          |           7 |            0 |        49.00 |      49.00 | 1462952749 |       0 |      0 |      1 |
|       61 |     24 | ECS000061 | 视频                                            |           4 |           20 |        24.24 |      20.20 | 1462952376 |       0 |      0 |      0 |
|       62 |     24 | ECS000062 | 随身风扇                                        |           3 |           20 |        23.88 |      19.90 | 1462952557 |       0 |      0 |      0 |
|       32 |      3 | ECS000032 | 诺基亚N85                                       |          24 |            4 |      3612.00 |    3010.00 | 1242110760 |       0 |      1 |      0 |
|       68 |     24 | ECS000068 | 透明超薄软胶保护套                              |           4 |            1 |        22.80 |      19.00 | 1462955204 |       0 |      0 |      1 |
|       36 |     18 | ECS000036 | 路由器                                          |           0 |            1 |       178.79 |     149.00 | 1462851087 |       0 |      0 |      0 |
|       37 |     19 | ECS000037 | Note3 钢化玻璃膜(0.33mm)                        |           2 |            1 |        19.00 |      19.00 | 1462852086 |       0 |      0 |      0 |
|       38 |     19 | ECS000038 | 圈铁耳机                                        |           2 |            1 |       118.80 |      99.00 | 1462852185 |       0 |      0 |      0 |
|       39 |     19 | ECS000039 | 移动电源 10000mAh 高配版                        |           1 |            1 |       178.79 |     149.00 | 1462852326 |       0 |      0 |      0 |
|       40 |     19 | ECS000040 |  炫彩翻页保护套                                 |           2 |            1 |        39.00 |      39.00 | 1462852478 |       0 |      0 |      0 |
|       41 |     19 | ECS000041 | 蓝牙耳机                                        |           1 |            1 |        94.80 |      79.00 | 1462852621 |       0 |      0 |      0 |
|       42 |     16 | ECS000042 | 短袖T恤 米兔大游行                              |           0 |            1 |        46.80 |      39.00 | 1462852622 |       0 |      0 |      0 |
|       43 |     16 | ECS000043 | 短袖T恤 摇滚星球                                |           0 |            1 |        46.80 |      39.00 | 1462852674 |       0 |      0 |      0 |
|       44 |     16 | ECS000044 | 短袖POLO衫 女款                                 |           1 |            1 |        70.80 |      59.00 | 1462852818 |       0 |      0 |      0 |
|       45 |     19 | ECS000045 | 自拍杆                                          |           4 |            1 |        58.80 |      49.00 | 1462852839 |       0 |      0 |      0 |
|       46 |     16 | ECS000046 | V领短袖T恤 女款                                 |           0 |            1 |        46.80 |      39.00 | 1462852854 |       0 |      0 |      0 |
|       47 |     16 | ECS000047 | 极简都市双肩包                                  |           0 |            1 |       178.79 |     149.00 | 1462852887 |       0 |      0 |      0 |
|       48 |     16 | ECS000048 | 学院风简约双肩包                                |           1 |            1 |        70.80 |      59.00 | 1462852915 |       0 |      0 |      0 |
|       49 |     19 | ECS000049 | 随身风扇                                        |           2 |            1 |        23.88 |      19.90 | 1462852939 |       0 |      0 |      0 |
|       50 |     19 | ECS000050 | 移动电源16000mAh                                |           2 |            1 |       154.79 |     129.00 | 1462852961 |       0 |      0 |      0 |
|       51 |     19 | ECS000051 | 鼠标垫                                          |           3 |            1 |         5.88 |       4.90 | 1462852967 |       0 |      0 |      0 |
|       52 |      8 | ECS000052 | 活塞耳机 三大升级 全新听歌神器                  |           0 |            1 |        99.00 |      69.00 | 1462853039 |       0 |      0 |      0 |
|       53 |      8 | ECS000053 | 活塞耳机 标准版                                 |           2 |            1 |        34.80 |      29.00 | 1462853130 |       0 |      0 |      0 |
|       54 |      6 | ECS000054 | 插线板                                          |           0 |            1 |        58.80 |      49.00 | 1462853264 |       0 |      0 |      0 |
|       55 |     22 | ECS000055 | 移动电源10000mAh                                |           0 |            1 |        82.80 |      69.00 | 1462853376 |       0 |      0 |      0 |
|       58 |     20 | ECS000058 | 手机3高配版 超薄钢化玻璃膜(0.22mm)              |           7 |            1 |        34.80 |      29.00 | 1462854555 |       0 |      0 |      0 |
|       59 |      6 | ECS000059 |  标准高透贴膜(2片装)                            |           4 |            1 |        22.80 |      19.00 | 1462854683 |       0 |      0 |      0 |
|       60 |      6 | ECS000060 | 指环式防滑手机支架                              |          14 |            1 |        15.00 |      12.50 | 1462854857 |       0 |      0 |      0 |
+----------+--------+-----------+-------------------------------------------------+-------------+--------------+--------------+------------+------------+---------+--------+--------+
38 rows in set (0.00 sec)

mysql> # 目前 cat_id=22栏目价格为69.00在goods表中，stats视图中的平均价格也是 69.00 说明22号栏目只有一个商品
mysql> # 那么现在改变 goods 表的价格，stats 视图价格也会发生变化吗？
mysql> update goods set shop_price = 100 where cat_id=22;
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    13
Current database: test

Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from goods;
+----------+--------+-----------+-------------------------------------------------+-------------+--------------+--------------+------------+------------+---------+--------+--------+
| goods_id | cat_id | goods_sn  | goods_name                                      | click_count | goods_number | market_price | shop_price | add_time   | is_best | is_new | is_hot |
+----------+--------+-----------+-------------------------------------------------+-------------+--------------+--------------+------------+------------+---------+--------+--------+
|        1 |      4 | ECS000000 | KD876                                           |           8 |            1 |      1665.60 |    1388.00 | 1240902890 |       1 |      1 |      0 |
|        4 |      8 | ECS000004 | 诺基亚N85原装充电器                             |           0 |           17 |        69.60 |      58.00 | 1241422402 |       0 |      0 |      0 |
|        8 |      3 | ECS000008 | 飞利浦9@9v                                      |          12 |            0 |       478.79 |     399.00 | 1241425512 |       1 |      1 |      0 |
|        9 |      3 | ECS000009 | 诺基亚E66                                       |          28 |            2 |      2757.60 |    2298.00 | 1241511871 |       1 |      1 |      0 |
|       35 |     19 | ECS000035 | 体重秤                                          |           0 |            1 |        16.80 |      14.00 | 1462851036 |       0 |      0 |      0 |
|       69 |     24 | ECS000069 | 平衡车                                          |           3 |            1 |      2398.79 |    1999.00 | 1462955300 |       0 |      0 |      1 |
|       70 |     24 | ECS000070 | 炫彩翻页保护套                                  |           3 |            1 |        46.80 |      39.00 | 1462955414 |       0 |      0 |      1 |
|       72 |     24 | ECS000072 | 智能相机                                        |           3 |           20 |       178.79 |     149.00 | 1462956048 |       0 |      0 |      0 |
|       14 |      4 | ECS000014 | 诺基亚5800XM                                    |           7 |            1 |      3150.00 |    2625.00 | 1241968492 |       0 |      0 |      0 |
|       64 |     24 | ECS000064 | 运动相机                                        |           6 |            1 |       478.79 |     399.00 | 1462952811 |       0 |      0 |      1 |
|       63 |     24 | ECS000063 | 自拍杆                                          |           7 |            0 |        49.00 |      49.00 | 1462952749 |       0 |      0 |      1 |
|       61 |     24 | ECS000061 | 视频                                            |           4 |           20 |        24.24 |      20.20 | 1462952376 |       0 |      0 |      0 |
|       62 |     24 | ECS000062 | 随身风扇                                        |           3 |           20 |        23.88 |      19.90 | 1462952557 |       0 |      0 |      0 |
|       32 |      3 | ECS000032 | 诺基亚N85                                       |          24 |            4 |      3612.00 |    3010.00 | 1242110760 |       0 |      1 |      0 |
|       68 |     24 | ECS000068 | 透明超薄软胶保护套                              |           4 |            1 |        22.80 |      19.00 | 1462955204 |       0 |      0 |      1 |
|       36 |     18 | ECS000036 | 路由器                                          |           0 |            1 |       178.79 |     149.00 | 1462851087 |       0 |      0 |      0 |
|       37 |     19 | ECS000037 | Note3 钢化玻璃膜(0.33mm)                        |           2 |            1 |        19.00 |      19.00 | 1462852086 |       0 |      0 |      0 |
|       38 |     19 | ECS000038 | 圈铁耳机                                        |           2 |            1 |       118.80 |      99.00 | 1462852185 |       0 |      0 |      0 |
|       39 |     19 | ECS000039 | 移动电源 10000mAh 高配版                        |           1 |            1 |       178.79 |     149.00 | 1462852326 |       0 |      0 |      0 |
|       40 |     19 | ECS000040 |  炫彩翻页保护套                                 |           2 |            1 |        39.00 |      39.00 | 1462852478 |       0 |      0 |      0 |
|       41 |     19 | ECS000041 | 蓝牙耳机                                        |           1 |            1 |        94.80 |      79.00 | 1462852621 |       0 |      0 |      0 |
|       42 |     16 | ECS000042 | 短袖T恤 米兔大游行                              |           0 |            1 |        46.80 |      39.00 | 1462852622 |       0 |      0 |      0 |
|       43 |     16 | ECS000043 | 短袖T恤 摇滚星球                                |           0 |            1 |        46.80 |      39.00 | 1462852674 |       0 |      0 |      0 |
|       44 |     16 | ECS000044 | 短袖POLO衫 女款                                 |           1 |            1 |        70.80 |      59.00 | 1462852818 |       0 |      0 |      0 |
|       45 |     19 | ECS000045 | 自拍杆                                          |           4 |            1 |        58.80 |      49.00 | 1462852839 |       0 |      0 |      0 |
|       46 |     16 | ECS000046 | V领短袖T恤 女款                                 |           0 |            1 |        46.80 |      39.00 | 1462852854 |       0 |      0 |      0 |
|       47 |     16 | ECS000047 | 极简都市双肩包                                  |           0 |            1 |       178.79 |     149.00 | 1462852887 |       0 |      0 |      0 |
|       48 |     16 | ECS000048 | 学院风简约双肩包                                |           1 |            1 |        70.80 |      59.00 | 1462852915 |       0 |      0 |      0 |
|       49 |     19 | ECS000049 | 随身风扇                                        |           2 |            1 |        23.88 |      19.90 | 1462852939 |       0 |      0 |      0 |
|       50 |     19 | ECS000050 | 移动电源16000mAh                                |           2 |            1 |       154.79 |     129.00 | 1462852961 |       0 |      0 |      0 |
|       51 |     19 | ECS000051 | 鼠标垫                                          |           3 |            1 |         5.88 |       4.90 | 1462852967 |       0 |      0 |      0 |
|       52 |      8 | ECS000052 | 活塞耳机 三大升级 全新听歌神器                  |           0 |            1 |        99.00 |      69.00 | 1462853039 |       0 |      0 |      0 |
|       53 |      8 | ECS000053 | 活塞耳机 标准版                                 |           2 |            1 |        34.80 |      29.00 | 1462853130 |       0 |      0 |      0 |
|       54 |      6 | ECS000054 | 插线板                                          |           0 |            1 |        58.80 |      49.00 | 1462853264 |       0 |      0 |      0 |
|       55 |     22 | ECS000055 | 移动电源10000mAh                                |           0 |            1 |        82.80 |     100.00 | 1462853376 |       0 |      0 |      0 |
|       58 |     20 | ECS000058 | 手机3高配版 超薄钢化玻璃膜(0.22mm)              |           7 |            1 |        34.80 |      29.00 | 1462854555 |       0 |      0 |      0 |
|       59 |      6 | ECS000059 |  标准高透贴膜(2片装)                            |           4 |            1 |        22.80 |      19.00 | 1462854683 |       0 |      0 |      0 |
|       60 |      6 | ECS000060 | 指环式防滑手机支架                              |          14 |            1 |        15.00 |      12.50 | 1462854857 |       0 |      0 |      0 |
+----------+--------+-----------+-------------------------------------------------+-------------+--------------+--------------+------------+------------+---------+--------+--------+
38 rows in set (0.00 sec)

mysql> select * from stats;
+--------+-------------+
| cat_id | cat_avg     |
+--------+-------------+
|      3 | 1902.333333 |
|      4 | 2006.500000 |
|      6 |   26.833333 |
|      8 |   52.000000 |
|     16 |   64.000000 |
|     18 |  149.000000 |
|     19 |   60.180000 |
|     20 |   29.000000 |
|     22 |  100.000000 |
|     24 |  336.762500 |
+--------+-------------+
10 rows in set (0.00 sec)

mysql> update stats set cat_avg=150 where cat_id=22;
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    14
Current database: test

ERROR 1288 (HY000): The target table stats of the UPDATE is not updatable
mysql> show create view stats;
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    15
Current database: test

+-------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------+----------------------+
| View  | Create View                                                                                                                                                                                                                     | character_set_client | collation_connection |
+-------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------+----------------------+
| stats | CREATE ALGORITHM=UNDEFINED DEFINER=`skip-grants user`@`skip-grants host` SQL SECURITY DEFINER VIEW `stats` AS select `goods`.`cat_id` AS `cat_id`,avg(`goods`.`shop_price`) AS `cat_avg` from `goods` group by `goods`.`cat_id` | utf8                 | utf8_general_ci      |
+-------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------+----------------------+
1 row in set (0.01 sec)

mysql> show tables stats;
ERROR 2013 (HY000): Lost connection to MySQL server during query
mysql> show tables stats;
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    16
Current database: test

ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'stats' at line 1
mysql> # 可以修改视图是什么情况下？
mysql> create view cat_goods
    -> as 
    -> select * from goods where cat_id=3;
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    17
Current database: test

Query OK, 0 rows affected (0.02 sec)

mysql> select * from cat_goods;
+----------+--------+-----------+---------------+-------------+--------------+--------------+------------+------------+---------+--------+--------+
| goods_id | cat_id | goods_sn  | goods_name    | click_count | goods_number | market_price | shop_price | add_time   | is_best | is_new | is_hot |
+----------+--------+-----------+---------------+-------------+--------------+--------------+------------+------------+---------+--------+--------+
|        8 |      3 | ECS000008 | 飞利浦9@9v    |          12 |            0 |       478.79 |     399.00 | 1241425512 |       1 |      1 |      0 |
|        9 |      3 | ECS000009 | 诺基亚E66     |          28 |            2 |      2757.60 |    2298.00 | 1241511871 |       1 |      1 |      0 |
|       32 |      3 | ECS000032 | 诺基亚N85     |          24 |            4 |      3612.00 |    3010.00 | 1242110760 |       0 |      1 |      0 |
+----------+--------+-----------+---------------+-------------+--------------+--------------+------------+------------+---------+--------+--------+
3 rows in set (0.00 sec)

mysql> update cat_goods set shop_price =500 where goods_id=8;
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    18
Current database: test

Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from goods where cat_id=4;
+----------+--------+-----------+-----------------+-------------+--------------+--------------+------------+------------+---------+--------+--------+
| goods_id | cat_id | goods_sn  | goods_name      | click_count | goods_number | market_price | shop_price | add_time   | is_best | is_new | is_hot |
+----------+--------+-----------+-----------------+-------------+--------------+--------------+------------+------------+---------+--------+--------+
|        1 |      4 | ECS000000 | KD876           |           8 |            1 |      1665.60 |    1388.00 | 1240902890 |       1 |      1 |      0 |
|       14 |      4 | ECS000014 | 诺基亚5800XM    |           7 |            1 |      3150.00 |    2625.00 | 1241968492 |       0 |      0 |      0 |
+----------+--------+-----------+-----------------+-------------+--------------+--------------+------------+------------+---------+--------+--------+
2 rows in set (0.00 sec)

mysql> select * from goods where cat_id=3;
+----------+--------+-----------+---------------+-------------+--------------+--------------+------------+------------+---------+--------+--------+
| goods_id | cat_id | goods_sn  | goods_name    | click_count | goods_number | market_price | shop_price | add_time   | is_best | is_new | is_hot |
+----------+--------+-----------+---------------+-------------+--------------+--------------+------------+------------+---------+--------+--------+
|        8 |      3 | ECS000008 | 飞利浦9@9v    |          12 |            0 |       478.79 |     500.00 | 1241425512 |       1 |      1 |      0 |
|        9 |      3 | ECS000009 | 诺基亚E66     |          28 |            2 |      2757.60 |    2298.00 | 1241511871 |       1 |      1 |      0 |
|       32 |      3 | ECS000032 | 诺基亚N85     |          24 |            4 |      3612.00 |    3010.00 | 1242110760 |       0 |      1 |      0 |
+----------+--------+-----------+---------------+-------------+--------------+--------------+------------+------------+---------+--------+--------+
3 rows in set (0.00 sec)

mysql> select goods_id,goods_name,floor(rand()*10+5) as bonus from goods where cat_id=4;
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    19
Current database: test

+----------+-----------------+-------+
| goods_id | goods_name      | bonus |
+----------+-----------------+-------+
|        1 | KD876           |    13 |
|       14 | 诺基亚5800XM    |    12 |
+----------+-----------------+-------+
2 rows in set (0.02 sec)

mysql> create table member_email(
    -> member_name varchar(20) not null default '',
    -> member_email varchar(50) not null default ''
    -> )engine myisam charset=utf8;
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    20
Current database: test

Query OK, 0 rows affected (0.03 sec)

mysql> insert into member_email
    -> values
    -> ('张三','zhangsan@126.com'),
    -> ('李四','lisi@136.com'),
    -> ('王五','wang@sina.com'),
    -> ('赵六','zhaoliu@qq.com'),
    -> ('黄七','huang@126.com');
ERROR 2013 (HY000): Lost connection to MySQL server during query
mysql> insert into member_email
    ->     -> values
    ->     -> ('张三','zhangsan@126.com'),
    ->     -> ('李四','lisi@136.com'),
    ->     -> ('王五','wang@sina.com'),
    ->     -> ('赵六','zhaoliu@qq.com'),
    ->     -> ('黄七','huang@126.com');
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    21
Current database: test

ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '-> values
    -> ('张三','zhangsan@126.com'),
    -> ('李四','lisi@136.com')' at line 2
mysql> insert into member_email
    -> values
    -> ('张三','zhangsan@126.com'),
    -> ('李四','lisi@136.com'),
    -> ('王五','wang@sina.com'),
    -> ('赵六','zhaoliu@qq.com'),
    -> ('黄七','huang@126.com');
Query OK, 5 rows affected (0.01 sec)
Records: 5  Duplicates: 0  Warnings: 0

mysql> select * from member_email;
+-------------+------------------+
| member_name | member_email     |
+-------------+------------------+
| 张三        | zhangsan@126.com |
| 李四        | lisi@136.com     |
| 王五        | wang@sina.com    |
| 赵六        | zhaoliu@qq.com   |
| 黄七        | huang@126.com    |
+-------------+------------------+
5 rows in set (0.00 sec)

mysql> select member_name,position('@' in member_email) from member_email;
ERROR 2013 (HY000): Lost connection to MySQL server during query
mysql> select member_name,position('@' in member_email) from member_email;
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    22
Current database: test

+-------------+-------------------------------+
| member_name | position('@' in member_email) |
+-------------+-------------------------------+
| 张三        |                             9 |
| 李四        |                             5 |
| 王五        |                             5 |
| 赵六        |                             8 |
| 黄七        |                             6 |
+-------------+-------------------------------+
5 rows in set (0.02 sec)

mysql> select member_name,length(member_email) from member_email;
ERROR 2013 (HY000): Lost connection to MySQL server during query
mysql> select member_name,length(member_email) from member_email;
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    23
Current database: test

+-------------+----------------------+
| member_name | length(member_email) |
+-------------+----------------------+
| 张三        |                   16 |
| 李四        |                   12 |
| 王五        |                   13 |
| 赵六        |                   14 |
| 黄七        |                   13 |
+-------------+----------------------+
5 rows in set (0.01 sec)

mysql> select member_name,right(member_email,length(member_email)-position('@' in member_email)) as email_type  from member_email;
+-------------+------------+
| member_name | email_type |
+-------------+------------+
| 张三        | 126.com    |
| 李四        | 136.com    |
| 王五        | sina.com   |
| 赵六        | qq.com     |
| 黄七        | 126.com    |
+-------------+------------+
5 rows in set (0.01 sec)

mysql> select member_name,member_email,right(member_email,length(member_email)-position('@' in member_email)) as email_type  from member_email;
+-------------+------------------+------------+
| member_name | member_email     | email_type |
+-------------+------------------+------------+
| 张三        | zhangsan@126.com | 126.com    |
| 李四        | lisi@136.com     | 136.com    |
| 王五        | wang@sina.com    | sina.com   |
| 赵六        | zhaoliu@qq.com   | qq.com     |
| 黄七        | huang@126.com    | 126.com    |
+-------------+------------------+------------+
5 rows in set (0.00 sec)

mysql> select dayofweek('2020-8-30');
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    25
Current database: test

+------------------------+
| dayofweek('2020-8-30') |
+------------------------+
|                      1 |
+------------------------+
1 row in set (0.02 sec)

mysql> select week('2020-8-30');
+-------------------+
| week('2020-8-30') |
+-------------------+
|                35 |
+-------------------+
1 row in set (0.00 sec)


mysql> create table day_time(
    -> time_num int not null default 0,
    -> day_time date 
    -> )engine myisam charset=utf8;
Query OK, 0 rows affected (0.02 sec)

mysql> 
mysql> 
mysql> insert into day_time 
    -> values
    -> (5,'2020-08-01'),
    -> (6,'2020-08-02'),
    -> (8,'2020-08-03'),
    -> (10,'2020-08-04'),
    -> (15,'2020-08-05'),
    -> (30,'2020-08-06'),
    -> (5,'2020-08-07'),
    -> (55,'2020-08-08'),
    -> (20,'2020-08-09'),
    -> (10,'2020-08-10'),
    -> (11,'2020-08-11'),
    -> (8,'2020-08-12'),
    -> (9,'2020-08-13'),
    -> (22,'2020-08-14'),
    -> (35,'2020-08-15'),
    -> (10,'2020-08-16');
ERROR 2013 (HY000): Lost connection to MySQL server during query
mysql> insert into day_time 
    -> values
    -> (5,'2020-08-01'),
    -> (6,'2020-08-02'),
    -> (8,'2020-08-03'),
    -> (10,'2020-08-04'),
    -> (15,'2020-08-05'),
    -> (30,'2020-08-06'),
    -> (5,'2020-08-07'),
    -> (55,'2020-08-08'),
    -> (20,'2020-08-09'),
    -> (10,'2020-08-10'),
    -> (11,'2020-08-11'),
    -> (8,'2020-08-12'),
    -> (9,'2020-08-13'),
    -> (22,'2020-08-14'),
    -> (35,'2020-08-15'),
    -> (10,'2020-08-16');
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    27
Current database: test

Query OK, 16 rows affected (0.04 sec)
Records: 16  Duplicates: 0  Warnings: 0

mysql> select * from day_time;
+----------+------------+
| time_num | day_time   |
+----------+------------+
|        5 | 2020-08-01 |
|        6 | 2020-08-02 |
|        8 | 2020-08-03 |
|       10 | 2020-08-04 |
|       15 | 2020-08-05 |
|       30 | 2020-08-06 |
|        5 | 2020-08-07 |
|       55 | 2020-08-08 |
|       20 | 2020-08-09 |
|       10 | 2020-08-10 |
|       11 | 2020-08-11 |
|        8 | 2020-08-12 |
|        9 | 2020-08-13 |
|       22 | 2020-08-14 |
|       35 | 2020-08-15 |
|       10 | 2020-08-16 |
+----------+------------+
16 rows in set (0.00 sec)


mysql> select time_num,day_time,week(day_time) as day_week from day_time ;
+----------+------------+----------+
| time_num | day_time   | day_week |
+----------+------------+----------+
|        5 | 2020-08-01 |       30 |
|        6 | 2020-08-02 |       31 |
|        8 | 2020-08-03 |       31 |
|       10 | 2020-08-04 |       31 |
|       15 | 2020-08-05 |       31 |
|       30 | 2020-08-06 |       31 |
|        5 | 2020-08-07 |       31 |
|       55 | 2020-08-08 |       31 |
|       20 | 2020-08-09 |       32 |
|       10 | 2020-08-10 |       32 |
|       11 | 2020-08-11 |       32 |
|        8 | 2020-08-12 |       32 |
|        9 | 2020-08-13 |       32 |
|       22 | 2020-08-14 |       32 |
|       35 | 2020-08-15 |       32 |
|       10 | 2020-08-16 |       33 |
+----------+------------+----------+
16 rows in set (0.00 sec)

mysql> select sum(time_num),day_time,week(day_time) as day_week from day_time group by day_time;
+---------------+------------+----------+
| sum(time_num) | day_time   | day_week |
+---------------+------------+----------+
|             5 | 2020-08-01 |       30 |
|             6 | 2020-08-02 |       31 |
|             8 | 2020-08-03 |       31 |
|            10 | 2020-08-04 |       31 |
|            15 | 2020-08-05 |       31 |
|            30 | 2020-08-06 |       31 |
|             5 | 2020-08-07 |       31 |
|            55 | 2020-08-08 |       31 |
|            20 | 2020-08-09 |       32 |
|            10 | 2020-08-10 |       32 |
|            11 | 2020-08-11 |       32 |
|             8 | 2020-08-12 |       32 |
|             9 | 2020-08-13 |       32 |
|            22 | 2020-08-14 |       32 |
|            35 | 2020-08-15 |       32 |
|            10 | 2020-08-16 |       33 |
+---------------+------------+----------+
16 rows in set (0.00 sec)


mysql> select sum(time_num),week(day_time) as day_week from day_time group by day_week;
+---------------+----------+
| sum(time_num) | day_week |
+---------------+----------+
|             5 |       30 |
|           129 |       31 |
|           115 |       32 |
|            10 |       33 |
+---------------+----------+
4 rows in set (0.01 sec)

mysql> select *, sum(time_num),week(day_time) as day_week from day_time group by day_week;
ERROR 1055 (42000): Expression #1 of SELECT list is not in GROUP BY clause and contains nonaggregated column 'test.day_time.time_num' which is not functionally dependent on columns in GROUP BY clause; this is incompatible with sql_mode=only_full_group_by
mysql> select *, sum(time_num),week(day_time) as day_week from day_time group by day_week;
ERROR 1055 (42000): Expression #1 of SELECT list is not in GROUP BY clause and contains nonaggregated column 'test.day_time.time_num' which is not functionally dependent on columns in GROUP BY clause; this is incompatible with sql_mode=only_full_group_by
mysql> select sum(time_num),week(day_time) as day_week from day_time group by day_week;
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    29
Current database: test

+---------------+----------+
| sum(time_num) | day_week |
+---------------+----------+
|             5 |       30 |
|           129 |       31 |
|           115 |       32 |
|            10 |       33 |
+---------------+----------+
4 rows in set (0.01 sec)

mysql> select user();
+--------+
| user() |
+--------+
| root@  |
+--------+
1 row in set (0.00 sec)

mysql> select database();
+------------+
| database() |
+------------+
| test       |
+------------+
1 row in set (0.00 sec)

mysql> qite;
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    30
Current database: test

ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'qite' at line 1
mysql> Terminal close -- exit!
