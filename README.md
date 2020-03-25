# Vue_mysql
1. 拉取server下所有文件
2. 在package.json文件下找到dependencies对象,输入一下内容
```
"axios": "^0.19.2",
"express": "^4.17.1",
"mysql": "^2.18.1",
"vue-resource": "^1.5.1"
```
3. 下载config中的index.js文件，将文件内容添加到根目录config/index.js中  --目的是为了路由到3000端口
4. 执行npm install
5. 执行node index
6. 将uesr.vue文件导入到项目并配置好，引入App.vue中
7. 执行npm run dev


---
目录结构：
|-- build<br>
|-- config<br>
|-- node_modules<br>
|-- server<br>
&emsp;|-- api<br>
&emsp;&emsp;|-- userApi.js<br>
&emsp;|-- db.js<br>
&emsp;|-- index.js<br>
&emsp;|-- sqlMap.js<br>
|-- src<br>
&emsp;|-- assets<br>
&emsp;|-- components<br>
&emsp;&emsp;|-- user.vue<br>
&emsp;|-- App.vue<br>
|-- static<br>
|-- .babelrc<br>
|-- .editorconfig<br>
|-- .gitignore<br>
|-- index.html<br>
|-- package.json<br>
|-- README.md<br>
