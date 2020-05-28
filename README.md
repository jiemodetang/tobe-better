
# umi-project


 <img src="https://cdn.stocksnap.io/img-thumbs/280h/JN0TSD4UG5.jpg"  width='100%'  />

 ## 目录结构

    |-- mock                                  # 本地模拟数据
    |-- public                                
    |   |-- favicon.png                       # favicon
    |-- src                                   # 
    |   |-- assets                            # 本地静态资源
    |   |-- components                        # 业务通用组件
    |   |-- layout                            # 通用布局
    |   |-- models                            # 全局 dva model
    |   |-- pages                             # 业务页面入口和常用模板
    |   |-- index.less                        # 全局样式
    |   |-- app.tsx                           # 全局 JS
    |-- .umirc.ts                             #全局配置
    |-- .gitignore                            # git忽略文件
    |-- .editorconfig                         # 编辑器代码风格配置
    |-- .prettierignore                       # 代码风格配置忽略文件
    |-- .prettierrc                           # 代码风格配置文件
    |-- package.json                          
    |-- README.md       


> 尝试用umi3去搭建项目
> 项目采用umi+dva+ts进行尝试
> 实现约定式路由，国际化配置


## 一些技巧
- umi g page hero --typescript --less 创建页面
-  lsof  -i :8888（杀端口）
    kill -9 KID
## 一些链接

1.[umi官网](https://umijs.org/zh-CN) 

2.[学习案例](https://www.yuque.com/umijs/umi/filter) 

3.[学习案例](https://blog.csdn.net/deletGlobal/article/details/106183217)

4.[umi-hooks](https://hooks.umijs.org/zh-CN/hooks/async)

5.[浏览器兼容配置](https://github.com/zloirock/core-js#commonjs-api)
## 项目截图
 <img src="http://chuantu.xyz/t6/736/1590560315x3703728804.jpg"  width='100%'  />
    

    > 目前有详情页，列表页，和资料页

```
yarn 
yarn start 
yarn build
```
后续继续更新
  

