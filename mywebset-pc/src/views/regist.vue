<template>
    <div class="container">
        <div class="background">
        <img :src="imgSrc" width="100%" height="100%" alt="" />
      </div>
        <div class="login-form">
            <h3>用户注册</h3>
            <p>
                用户名：<input type="text" name="username" v-model="username">
            </p>
            <p>
                密码：<input type="password" name="password" v-model="password">
            </p>
            <p>
                昵称：<input type="text" name="nickname" v-model="nickname">
            </p>
            <p>
                <button @click="doRegist" class="btn">注册</button>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username:"",
            password:"",
            nickname:"",
            imgSrc:require('../images/153105-1570260665e147.jpg')
            };
    },
    methods:{
        doRegist(){
            this.$http.post("/user/post",{
                username:this.username,
                password:this.password,
                nickname:this.nickname,
            })
            .then((res)=>{
                let {state}=res.data;
                if(state=="success"){
                    this.$router.push("/login");
                }else{
                    alert("注册失败!");
                }
            })
        }
    }
}
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