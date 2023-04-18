# 1. mysql community安装

---
## 1. 前置作用说明
1. mysql community mysql的社版，里面包含mysql server和mysql workbench。
2. 环境：windows系统安装mysql community就行。MacBook用户先安装mysql workbench，再安装mysql server。
3. mysql server和mysql workbench，mysql server作用：数据存储服务的。mysql workbench作用：可视化管理mysql管理工具。
4. 下载地址：https://dev.mysql.com/downloads/mysql/ 选择自己需要的版本 
5. 根据图的顺序进行安装。

## 2. 安装步骤

![](D:\桌   面\mysql community 安装\img\1.png)
![](D:\桌   面\mysql community 安装\img\2.png)
![](D:\桌   面\mysql community 安装\img\3.png)
![](D:\桌   面\mysql community 安装\img\4.png)
![](D:\桌   面\mysql community 安装\img\5.png)
![](D:\桌   面\mysql community 安装\img\6.png)

**注意事项：**

这前面的几个步骤中，途中如果有安装失败，或者是中途停止安装的，一定要删除安装的文件，否则会造成安装失败。今天我是想在安装途中进行截图，然后后退了一步，再次安装的时候一直安装不成功，重启电脑依然安装失败，后面卸载了安装文件才可以进行安装的。

![](D:\桌   面\mysql community 安装\img\7.png)
![](D:\桌   面\mysql community 安装\img\8.png)

**设置密码，重复一次：**
![](D:\桌   面\mysql community 安装\img\9.png)
![](D:\桌   面\mysql community 安装\img\10.png)

# 2. starting the server异常

---

## 1. starting the server异常

1. 这个异常错误还是不能直接略过去的，只能Execute执行，但是又是这个错误。要么就Back返回，要么就是Cancel取消了。
2. 我试过很解决方式，但在这个位置还是不出意外的报错了。
3. starting the server：启动服务器。

![](D:\桌   面\mysql community 安装\img\11.png)

## 2. starting the server分析

1. 原因1：是因为之前安装了Navicat for MySQL数据库的。
2. 原因2：是安装了phpstydy面板继承环境。

问题说明：我的处理方式是，在这里将Navicat for MySQL数据库和phpstudy继承环境全部卸载了。但是在安装的时候还是出现了**`starting the server`**这个异常错误。其实到达这一步，mysql community是已经安装完成了的，后面执行的就是保存前面的配置项，但是报了服务器启动这个错误，导致前面的配置是无法保存。

## 3. starting the server处理1

> 本来想的是，不卸载，重新安装一遍覆盖，结果导致一些其它的问题，没办法下一步。

**步骤一：卸载安装的mysql community：**

1. 找到安装的 mysql installer Community，点进去。

![](D:\桌   面\mysql community 安装\img\18.png)

2. 点击Remove移除所有的安装。

![](D:\桌   面\mysql community 安装\img\19.png)

**步骤二：找到安装的文件夹，删除，还有就是需要删除C盘里面的相关文件。**

1. C:\Program Files\MySQL，存放的是32位的文件。

2. C:\Program Files (x86)\MySQL，存放64位文件的，也要删除。

   

**步骤三：删除mysql注册列表：**

1. Win+R 输入regedit运行，进入注册表编辑器，按下图路径，**找到MySQL进去删除MySQL注册表信息**。

![](D:\桌   面\mysql community 安装\img\20.png)



**步骤四：再重新安装。**

## 4. starting the server处理2

这个方法是很无语的，感觉好不容易填好的坑，又挖了一个坑。

![](D:\桌   面\mysql community 安装\img\16.png)

注意：这个位置之前勾选的是此账户。然后更改成本地系统账户，同时勾选允许服务与桌面交互。更改后确实就不会报错，starting the server异常确实没有了。原本想着就是安装完成之后再改回来，更改成此账户，结果呢？就是改不回来，更改后，应用然后还是回到的本地系统账户选项上面。每天第一次开机还会报错，但是不影响使用，所幸还没造成严重的问题。

![](D:\桌   面\mysql community 安装\img\17.png)



# 3. 继续后面的安装

---


![](D:\桌   面\mysql community 安装\img\12.png)
![](D:\桌   面\mysql community 安装\img\13.png)

## 1. 连接测试

![](D:\桌   面\mysql community 安装\img\14.png)

## 2. 完成安装

![](D:\桌   面\mysql community 安装\img\15.png)