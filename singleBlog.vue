cd hallin-project<template>
  <div id="single-blog">
    <h1 v-rainbow>{{ blog.title }}</h1>
    <article>{{ blog.content }}</article>
    <p>Author: {{ blog.author }}</p>
    <p>Categories:</p>
    <ul>
      <li :key="Math.random() + category" v-for="category in blog.categories">{{ category }}</li>
    </ul>
    <button v-on:click="remove()">Delete Post</button>
    <button v-on:click="edit()">Edit Post</button>
  </div>
</template>

<script>
export default {
  data() {
    //Creating a path way for the ID of the particular blog I want to read out to the browser
    //Using the VUE function below
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  methods: {
    //Method to delete Blog post
    remove() {
      this.$http
        .delete(
          "https://vue-blog-hallin-1994.firebaseio.com/posts/" +
            this.id +
            ".json"
        )
        .then(function() {
          this.$router.push({ path: "/" });
        });
    },
    edit() {
      this.$router.push({ name: "EditBlog", params: { id: this.id } });
    }
  },
  //Creating life cycle hooks
  //Creating a created hook to grab my data
  created() {
    this.$http
      .get(
        "https://vue-blog-hallin-1994.firebaseio.com/posts/" + this.id + ".json"
      )
      .then(function(data) {
        //console.log(data);
        return data.json();
      })
      .then(function(data) {
        this.blog = data;
      });
  }
};
</script>
<style scoped>

@media screen and (max-width: 500px) {
#single-blog {
  max-width: 960px;
  margin: 0 auto;
  padding: 30px;
  background-color: whitesmoke;
  border: 1px solid #aaa;
  font-family: "Roboto", sans-serif;
}

}

@media screen and (min-width: 501px) {
#single-blog {
  max-width: 960px;
  margin: 0 auto;
  padding: 30px;
  background-color: whitesmoke;
  border: 1px solid #aaa;
  font-family: "Roboto", sans-serif;
}
}
</style>