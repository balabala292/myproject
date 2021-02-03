<template>
  <div>
    <div class="background">
        <img :src="imgSrc" width="100%" height="100%" alt="" />
      </div>
      
    <h1>发表文章</h1>
    <p>标题：</p>
    <input type="text" v-model="title" class="text" />
    <p>
      内容：
    </p>
    <textarea
        name=""
        id=""
        cols="100"
        rows="50"
        v-model="content"
      class="text"></textarea>
    <!-- <input type="hidden" value="5"> -->
    <p>
      <button @click="postBlog" class="btn">发表</button>
    </p>
  </div>
</template>

<script>

export default {
  
  data() {
    return {
      title: "",
      content: "",
      imgSrc:require('../images/1200106635d0f186f62877257fb3607a.jpg')
    };
  },
  created() {},
  methods: {
    postBlog() {
      let loginUser = this.$store.state.loginUser;
      if (loginUser) {
        this.$http
          .post("/blog/post", {
            title: this.title,
            content: this.content,
            userId: loginUser.user_id,
          })
          .then((res) => {
            let { state } = res.data;
            if (state == "success") {
              if(loginUser.user_id=="31")
              {
                this.$router.push("/index/");
                }
              else{
                alert("您没有此权限！");
                 this.$router.push("/");
              }
            } else {
              alert("发表文章失败!");
            }
          });
      }else{
          alert('请先登录!');
          this.$router.push('/login');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.background{
  width: 100%;
  height: 100%;
  z-index: -1;
  position:fixed;
}
h1{
  color:azure;
}
p{
  color: antiquewhite;
}
.text{
  opacity: 0.8;
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
</style>