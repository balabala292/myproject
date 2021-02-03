<template>
    <div>
        <div class="background">
            <img :src="imgSrc" width="100%" height="100%" alt="" />
        </div>
        <div class="title">
            <h1>welcome to my webset</h1>
        </div>
        <div class="content">
            <h1>个人简历</h1>
            <h2>教育经历</h2>
            <hr>
            <p>
                -2006.9--2015.7 东营区实验学校<br>
                -2015.9--2018.6 东营市第一中学<br>
                -2018.9--至今    东北林业大学信息与计算机工程学院
            </p>
            <h2>个人技能</h2>
            <hr>
            <p>
                1.熟练掌握web前端开发相关技术，包括HTML，CSS，JavaScript，Vue框架，ES6等<br>
                2.熟练掌握Java开发语言，实现常用的数据结构<br>
                3.熟练使用MySQL数据库，熟练基本的SQL语句<br>
                4.了解常用的设计模式：工厂模式、单例模式、适配器模式、建造者模式等<br>
                5.了解TCP/Ip协议、HTTP协议等
            </p>
            <h2>项目经历</h2>
            <hr>
            <p>
               ※一体化的宠物用品销售系统（学校系统分析与设计实习项目）<br>
               ※个人博客系统（Vue-cli+Koa）
            </p>
            <h2>自我评价</h2>
             <hr>
            <p>
                本人性格乐观开朗，积极向上，乐于助人，有良好的团队稀释，工作认真负责，具有较强的组织能力
                和沟通能力，身体素质良好。多次获得校级，省级优秀志愿者荣誉称号，担任班长，学生会执行主席等
            职务，协助老师工作。
            </p>
            <button class="btn">
                  <router-link to="/index/">查看我的博客</router-link>
                </button>
        </div>
        <div class="info">
            <div class="photo">
                <img :src="photo" width="150px" height="150px" alt="" />
            </div>
            <div class="info-right">
                <h1>个人资料</h1>
                <br>
                <h2>BALABALA292</h2>
                <p>生日：3月5日</p>
                <p>状态：就读于东北林业大学软件工程专业</p>
                <p>爱好：音乐，电影</p>
                <h2>永远愿意为你奔赴璀璨星河</h2>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
    data(){
       return{
            imgSrc:require('../images/152234-1538292154f5cb.jpg'),
            photo:require('../images/1604714386360.jpeg'),
            
       }
    }
}
</script>
<style scoped>
.title{
    color: orchid;
    font-size: 40px;
}
.content{
    
    width: 50%;
    height: 850px;
    color: azure;
    margin: auto;
    border-radius: 20px;
    float:right;
    margin-right: 150px;
    opacity: 0.95;
    
}
.content h2,p{
    text-align: left;
    margin-left: 10px;
}
.info{
    background: rgb(240, 255, 255,0.5);
    width: 30%;
    height: 500px;
    float: left;
    margin-left: 100px;
    margin-top: 100px;
    z-index: -1;
    border-radius: 50px;
   
    
}
.info-right p{
    margin-left: 50px;
}
.photo{
    border-radius: 50%;
}
.background{
  width: 100%;
  height: 100%;
  z-index: -1;
  position:fixed;
}
.btn {
  width: 50%;
  margin-top: 20px;
  background-color:  #3794ff;
  font-size: 20px;
  color: azure;
  border-radius: 98px; 
  border: none;
  outline: none;
}
.btn a{
  text-decoration: none;
  color: azure;
}

</style>