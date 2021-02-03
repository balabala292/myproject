<template>
  <div>
    
    <div class="background">
        <img :src="imgSrc" width="100%" height="100%" alt="" />
      </div>
      <div class="warn">
        <p>只有登录才可以进行评论！</p> 
        <router-link to="/login/">去登陆</router-link>
       <p>没有账号？</p> 
        <router-link to="/regist/">去注册</router-link>
      </div>
    <h1>发表评论</h1>

    <p>
      <textarea cols="100" rows="50" v-model="content" class="text"></textarea>
    </p>
    <button @click="postComment" class="btn">
      提交
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: "",
      imgSrc:require('../images/161721-1550477841418d.jpg')
    };
  },

  methods: {
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
