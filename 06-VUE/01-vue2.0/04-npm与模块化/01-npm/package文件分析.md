# package.json 文件分析



命令：npm init 。（初始化生成 package.json 文件）


> package.json    包文件描述，用来描述包信息的。
> package.json    文件是一个对象

1. package name   包的名字
2. version        包的版本号
- 版本号：主版本号.次版本号.build号
（1）. ^              兼容版本
（2）. ~              最新版本
（3）. *              所有版本
（4）. a-b            两个版本之间的版本

3. description        包的描述
4. entry point        入口文件
5. main               入口文件
6. test command       测试命令（系统对你的包测试一遍，你给个命令它就帮你测试）
7. git repository     git 地址
8. keywords           关键字（别人可以搜索到你，就是你发布的包文件，多个关键字之间用空格隔开）
9. author             作者名字
10. license           授权（一般回车就行）
11. dependencies      项目运行时依赖包（在包名字后面加 --save）
12. devDependencies   项目开发时依赖包（在包名字后面加 --save-dev）
13. script            可以通过命令运行文件
- npm start           运行 js
- npm stop            停止运行 js
- npm restart         重启 js 
- npm test            测试 js
注意：这些命令后面的值为"node 文件名.js".

14. homepage           包的官网 url
15. contributors       包的其它贡献者名字
