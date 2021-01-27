<template>
    <div>
        <h1>发表评论</h1>
        
            
    <p>
      <textarea
        name=""
        id=""
        cols="50"
        rows="20"
        v-model="content"
        
      ></textarea>
    </p>
        <button @click="postComment">
           提交
        </button>
    </div>
</template>
<script>
export default {
  date(){
    return{
        content:"",
    }
  },
  methods:{
    postComment(){
    let blogDetail = this.$store.state.blogDetail;
    let loginUser = this.$store.state.loginUser;
    if(loginUser){
      this.$http
      .post("/comment/post",{
        content: this.content,
        blogId:blogDetail.blog_id,
        userId:loginUser.user_id,
      })
      .then((res) => {
            let { state } = res.data;
            if (state == "success") {
              this.$router.push("/");
            } else {
              alert("发表评论失败!");
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