<template>
  <div>
    <h1>发表评论</h1>

    <p>
      <textarea cols="50" rows="20" v-model="content"></textarea>
    </p>
    <button @click="postComment">
      提交
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: ""
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
              this.$router.push("/");
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
