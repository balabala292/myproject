<template>
  <div class="container">
     <div class="background">
        <img :src="imgSrc" width="100%" height="100%" alt="" />
      </div>
    <div class="blog">
      <div class="blog-title">
        
        <h3>{{ blog && blog.title }}</h3>
        <span>{{ blog && blog.post_time }}</span>
      </div>
      <div class="blog-content">{{ blog && blog.content }}</div>
      <div class="comments" v-for="item in (blog&&blog.comments)" :key="item.blog_id">
        <hr>
        <h3>评论</h3><br>
        <div class="comment">
          <div class="comment-content">
            {{item.comm_content}}
            </div>
          <div class="comment-info">
            <span class="userinfo">{{item.username}}</span>
            <span class="post-time">{{item.comm_post_time}}</span>
          </div>
        </div>
      </div>
    </div>
    <button class="btn" @click="showComment">
      评论
    </button>
    <div v-show="isShow">
     <p>
      <textarea cols="100" rows="50" v-model="content" class="text"></textarea>
    </p>
     <button @click="postComment" class="btn">
      提交
    </button>
      </div>
     <button class="btn">
      <router-link :to="{ path: '/'  }">返回</router-link>
    </button>
  </div>
   
</template>
<script>
export default {
  data() {
    return {
      blog: null,
      imgSrc:require('../images/225152-15587959120fa3.jpg'),
      isShow:false,
      content: "",
      
    };
  },
  created() {
    this.getBlogDetail();
  },
  methods: {
    showComment(){
              this.isShow = !this.isShow;
              if(this.isShow){
                  this.message='隐藏';
                 }else{
                  this.message='显示';
                 }
               },
    getBlogDetail() {
      let blogId = this.$route.params.blogId;
      
      this.$http
        .get("/blog/detail", {
          params: {
            blogId: blogId,
            
          },
        })
        .then((res) => {
          let { state, blog } = res.data;
          if (state == "success") {
            this.$store.commit('storeBlogDetail', blog);
            this.blog = blog;
          }
        })
        // .catch((err) => {
        //   // alert('请求未授权-catch!');
        //   this.$router.push("/login");
        // });
    },
    postComment() {
      let blogId = this.$route.params.blogId;
      let loginUser = this.$store.state.loginUser;
      if (loginUser) {
        this.$http
          .post("/comment/post", {
            content: this.content,
            blogId: blogId,
            userId: loginUser.user_id
          })
          .then(res => {
            let { state } = res.data;
            if (state == "success") {
              this.$router.push("/index/");
            } else {
              alert("发表评论失败!");
            }
          });
      } else {
        alert("请先登录!");
        this.$router.push("/login");
      }
    }
    
}
}
</script>

<style scoped>
.blog {
  background-image: url('../images/000203-1590595323ad45.jpg');
  margin: 20px auto;
  padding: 20px;
  width: 50%;
  background: #cccccc;
  border-radius: 50px;
  opacity: 0.5;
}
.blog-title {
  padding: 10px;
  font-size: 25px;
}
.blog-content {
  padding: 10px;
}
.comment {
  padding: 20px;
}
.comment-info {
  float: right;
}
.text{
  opacity: 0.5;
  border-radius: 10px;
  outline: none;
}
.background{
  width: 100%;
  height: 100%;
  z-index: -1;
  position:fixed;
}
.userinfo{
  margin-right: 10px;
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
.btn a{
  text-decoration: none;
  color: azure;
}
</style>