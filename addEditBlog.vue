<template>
  <!--Create a blog post start-->
  <div id="add-blog">
    <h2 v-if="edit">Editing {{ blog.title }}</h2>
    <h2 v-else>Add a new blog post</h2>
    <!--if statement that hides form once it's been filled out-->
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label>Travels</label>
        <input type="checkbox" value="Travel" v-model="blog.categories" />
        <label>Books</label>
        <input type="checkbox" value="Books" v-model="blog.categories" />
        <label>Cooking</label>
        <input type="checkbox" value="Cooking" v-model="blog.categories" />
        <label>Work Outs</label>
        <input type="checkbox" value="Work-Outs" v-model="blog.categories" />
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option :key="Math.random() + author" v-for="author in authors">{{ author }}</option>
      </select>
      <button v-if="edit" v-on:click.prevent="post">Update blog</button>
      <button v-else v-on:click.prevent="post">Add blog</button>
    </form>
    <!--Create a blog post end-->
    <!--IF blog was successfully posted start-->
    <div v-if="submitted">
      <h3 v-if="edit">Your post has been updated, thank you!</h3>
      <h3 v-else>Your post has been added, thank you!</h3>
    </div>
    <!--IF blog was successfully posted end-->
    <!--Adding a preview section-->
    <div id="preview">
      <h3>Preview Blog:</h3>
      <p>Blog Title: {{ blog.title }}</p>
      <p>Blog Content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li :key="Math.random() + category" v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
  <!--End preview section-->
</template>

<script>
export default {
  data() {
    return {
      //Creating data specific to the blog instance
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["Emma", "Ryan", "Dwight"],
      //Keeping track of whether data was successfully submitted:
      submitted: false,
      edit: false
    };
  },
  created() {
    if (this.$route.params.id !== undefined && this.$route.params.id !== null) {
      this.$http
        .get(
          "https://vue-blog-hallin-1994.firebaseio.com/posts/" +
            this.$route.params.id +
            ".json"
        )
        .then(function(data) {
          //console.log(data);
          return data.json();
        })
        .then(function(data) {
          this.blog = data;
          this.edit = true;
        });
    }
  },
  methods: {
    post: function() {
      if (this.edit) {
        this.$http
          .patch(
            "https://vue-blog-hallin-1994.firebaseio.com/posts/" +
              this.$route.params.id +
              ".json",
            this.blog
          )
          .then(function(data) {
            console.log(data);
            //Function to turn the data variable 'submitted' to true, instead of default false
            this.submitted = true;
          });
      } else {
        //HTTP request - which uses the VUE plugin 'vue resources'
        //Connecting to database
        this.$http
          .post(
            "https://vue-blog-hallin-1994.firebaseio.com/posts.json",
            this.blog
          )
          .then(function(data) {
            console.log(data);
            //Function to turn the data variable 'submitted' to true, instead of default false
            this.submitted = true;
          });
      }
    }
  }
};
</script>

<style scoped>

@media screen and (max-width: 500px) {

#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  background: white;
  border: 1px solid #aaa;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
}
textarea {
  height: 200px;
}
#preview {
  padding: 10px 20px;
  border: 1px solid #ccc;
  margin: 30px 0;
}
h2 {
  color: #444;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
  margin-top: 0;
}
hr {
  display: none;
}
button {
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}

}

@media screen and (min-width: 501px) {

#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  background: white;
  border: 1px solid #aaa;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
}
textarea {
  height: 200px;
}
#preview {
  padding: 10px 20px;
  border: 1px solid #ccc;
  margin: 30px 0;
}
h2 {
  color: #444;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
  margin-top: 0;
}
hr {
  display: none;
}
button {
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}
}
</style>
