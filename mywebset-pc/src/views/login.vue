<template>
    <div class="container">
      <div class="background">
        <img :src="imgSrc" width="100%" height="100%" alt="" />
      </div>
        <div class="login-form">
            <h3>用户登录</h3>
            <p>
                用户名：<input type="text" name="username" v-model="username">
            </p>
            <p>
                密码：<input type="password" name="password" v-model="password">
            </p>
            <p>
                <button @click="doLogin" class="btn">登录</button>
               
            </p>
            <p> <button class="btn">
                  <router-link to="./regist">注册</router-link>
                </button>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      imgSrc:require('../images/夜晚 星空 ɽ 光 · 一个人背影 4k唯美壁纸3840x2160_彼岸图网.jpg')
    };
  },
  methods: {
    doLogin() {
      this.$http
        .post("/user/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
            let {state, token, user} = res.data;
          if (state == "success") {
            //   登录成功
            // 存登录用户信息
            this.$store.commit('storeLoginUser', user);
            // 存储token
            this.$store.dispatch('setToken', token)
            this.$router.push('/');
          } else {
            //   登录失败
            alert('用户名或密码不正确!');
          }
        });
    },
  },
};
</script>

<style scoped>

.login-form {
  width: 650px;
  background-color: rgba(200, 200,200, 0.5);
  margin: auto;
  padding: 20px 0;
  text-align: center;
  font-weight: 700;
  
  
}
.login-form p {
  padding: 20px 0;
}
.login-form h3{
  color: #ccc;
  font-size: 50px;
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

.background{
  width: 100%;
  height: 100%;
  z-index: -1;
  position:fixed;
}
</style>