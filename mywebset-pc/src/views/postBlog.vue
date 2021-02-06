<template>
  <div>
    <div class="background">
        <img :src="imgSrc" width="100%" height="100%" alt="" />
      </div>
      
    <h1>发表文章</h1>
    <p>标题：</p>
    <input type="text" v-model="title" class="text" />
    <p>
      简介：
    </p>
    <textarea cols="50" rows="10" v-model="info" class="text"></textarea>
    <p>
      内容：
    </p>
    
    <editor v-model="content"></editor>
  
    <!-- <input type="hidden" value="5"> -->
    <p>
      <button @click="postBlog" class="btn">发表</button>
    </p>
  </div>
</template>

<script>

import editor from './Editor'


export default {
  components: { editor },
 
  name:"index",
  data() {
    return {
      title: "",
      content: "",
      info:"",
      imgSrc:require('../images/aaa773e8cc9729977037e80b19f95589.jpg')
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
            info:this.info,
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
  color:cornflowerblue
}
p{
  color:brown;
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