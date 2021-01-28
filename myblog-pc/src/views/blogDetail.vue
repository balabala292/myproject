<template>
  <div class="container">
    <div class="blog">
      <div class="blog-title">
        <h3>{{ blog && blog.blog_id }}</h3>
        <h3>{{ blog && blog.title }}</h3>
        <span>{{ blog && blog.post_time }}</span>
      </div>
      <div class="blog-content">{{ blog && blog.content }}</div>
      <div class="comments" v-for="item in (blog&&blog.comments)">
        <div class="comment">
          <div class="comment-content">{{item.comm_content}}</div>
          <div class="comment-info">
            <span class="userinfo">{{item.username}}</span>
            <span class="post-time">{{item.comm_post_time}}</span>
          </div>
        </div>
      </div>
    </div>
    <button>
      <router-link :to="{ path: '/remark/' + blog.blog_id }">评论</router-link>
    </button>
  </div>
   
</template>
<script>
export default {
  data() {
    return {
      blog: null,
      
    };
  },
  created() {
    this.getBlogDetail();
  },
  methods: {
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
    
}
}
</script>

<style scoped>
.blog {
  margin: 20px auto;
  padding: 20px;
  background: #cccccc;
}
.blog-title {
  padding: 10px;
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
</style>