# zhihu_dialy
基于vue仿知乎日报app

简介

zhihu-daily使用Vue.js和脚手架作为项目的模块化系统，使用Vue-router进行路由管理，封装原生AJAX请求进行数据获取,api来源于izzyleung

项目结构<br />
├── project<br />
├── build &nbsp;<br />
　　├── config<br />
　　├──dist<br />
　　├──node_modules<br />
　　├──src&nbsp;<br />
　　　　└── components<br />
　　　　　　 └── news_list.vue &nbsp;#新闻列表组件<br />
　　　　└──page&nbsp;<br />
&nbsp; &nbsp; 　　　　└── index #主要页面<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; └── data&nbsp;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; └── news.js #封装的AJAX请求<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;└── home #主页<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; └── home.vue #主页整体<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; └── news_list.vue #新闻列表<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; └── side.vue #侧边栏<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; └── slider.vue #轮播图 （完善中）<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;└── login&nbsp;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; └── login.vue #登录页面（只写了页面，未实现功能）<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;└── news_content&nbsp;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; └── news_content.vue #新闻详情页<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;└── themes&nbsp;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; └── themes .vue #主题日报<br />
&nbsp; &nbsp; &nbsp; &nbsp; └──router #路由配置<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; └── index.js &nbsp; &nbsp; &nbsp;&nbsp;<br />
&nbsp; &nbsp; ├── static &nbsp; &nbsp;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;└── css #公共样式<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;└──img #图片<br />
&nbsp; &nbsp; ├── test
         
功能包括

主页顶部轮播图推荐新闻展示
主页查看最新消息
点击新闻标题查看文章详情
弹出侧边栏查看主题列表
点击主题列表查看对应主题内容

还有未完善的地方，后续会完善更新

项目截图

截图中 待会儿上传
