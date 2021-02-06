<template>
  
   <div>
     <div class="background">
        <img :src="imgSrc" width="100%" height="100%" alt="" />
      </div>
      
    <h1>查找博客</h1>

     <div class="search">
     <input type="text" v-model="title" class="text" placeholder="输入一个文章标题"/>
     <button @click="searchBlog" class="btn1">搜索</button>
   </div>
        <div class="blog-list">
      <div class="blog" v-for="item in blogList" :key="item.blog_id">
        <h3 class="blog-title">
          <router-link class="rout"  :to="{ path: '/blog/Detail/' + item.blog_id }">{{
            item.title
          }}</router-link>
        </h3>
        <span class="post-time"> {{ item.post_time }}</span>
      </div>
      <p> {{warn}} </p>
        </div>
    </div> 
    
 
  
</template>
<script>
export default {
  data() {
    return {
      blogList:[],
      title: "",
      warn:"",
      imgSrc:require('../images/161721-1550477841418d.jpg')
    };
  },

    
  
  methods: {
    searchBlog() {
      this.$http
        .get("/blog/search", {
          params: {
            title: this.title,
          },
        })
        .then((res) => {
          let { state } = res.data;
          if (state == "success") {
            let { results} = res.data;
            this.blogList = results;
          } else  {
            this.blogList=''
            this.warn='没有相关文章'
          }
        });
    },
    
  }
};
</script>
<style scoped>
.background{
  width: 100%;
  height: 100%;
  z-index: -1;
  position:fixed;
}
h1{
  color: aliceblue;
}
.text{
  opacity: 0.5;
  border-radius: 10px;
  outline: none;
}
.warn{
  color: aliceblue;
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
a{
  text-decoration: none;
  color:aqua;
}
</style>
