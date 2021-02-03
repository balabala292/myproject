<template>
  <div class="container">
     <div class="background">
        <img :src="imgSrc" width="100%" height="100%" alt="" />
    </div>
    <div class="link">
     <button >
       <router-link to="/login/">登录</router-link>
     </button>
     
      <button>
       <router-link to="/regist/">注册</router-link>
     </button>
   </div>
    <app ></app>
   
    <button @click="goPostBlog" class="btn">发表文章</button>
    <div class="blog-list">
      
      <div class="blog" v-for="item in blogList" :key="item.blog_id">
        
        <h3 class="blog-title">
          <!-- <a href="/blog/detail/">{{item.title}}</a> -->
          <router-link :to="{ path: '/blog/detail/' + item.blog_id }">{{
            item.title
          }}</router-link>
        </h3>
        <p class="blog-content">{{ item.content }}</p>
        <span class="post-time">{{ item.postTime }}</span>
      </div>
    </div>
  </div>
</template>
<script>

import app from './date'
export default {

  components: {
      app,//在此处注册
      
		},
  data() {
    return {
      blogList: [],
      imgSrc:require('../images/232537-1601306737da14.jpg'),
      
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http
        .get("/blog/list")
        .then((res) => {
          let { state } = res.data;
          if (state == "auth-fail") {
            alert("请求未授权-then!");
          } else if (state == "success") {
            let { blogs } = res.data;
            this.blogList = blogs;
          }
        });
    },
    goPostBlog(){
      this.$router.push("/blog/post");
    }
  },
};
</script>

<style scoped>
.blog-list {
  width: 815px;
  margin: 20px auto;
  font-weight: 700;
}
.blog {
  background-image: url('../images/000203-1590595323ad45.jpg');
  border-radius: 50px;
  padding: 20px;
  margin: 20px 0;
}
.link{
  
}
.link button{
  width: 5%;
  margin-top: 20px;
  background-color:  #3794ff;
  font-size: 20px;
  color: azure;
  border-radius: 98px; 
  border: none;
  outline: none;
}
a{
   text-decoration: none;
  color: azure;
}
p{
  color: aqua;
}
.btn {
  width: 10%;
  margin-top: 20px;
  background-color:  #3794ff;
  font-size: 20px;
  color: azure;
  border-radius: 98px; 
  border: none;
  outline: none;
}
.blog-content,
.post-time {
  margin: 20px 0;
}

.background{
  width: 100%;
  height: 100%;
  z-index: -1;
  position:fixed;
}
.app{
  z-index: 1;
}
</style>