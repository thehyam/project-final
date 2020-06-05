<template>
  <div id="show-blogs">
    <h1>All our blogs</h1>
    <input type="text" v-model="search" placeholder="Search Blogs..." />
    <div :key="Math.random() + blog.id" v-for="blog in filteredBlogs" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id">
        <h2 v-rainbow>{{ blog.title }}</h2>
      </router-link>
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
//Imports
import searchMixin from "../mixins/searchMixin";
//Exports
export default {
  components: {},
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  methods: {},
  //Life-Cycle Hooks
  created() {
    //request to GET data from my database
    this.$http
      .get("https://vue-blog-hallin-1994.firebaseio.com/posts.json")
      .then(function(data) {
        //retriving the JSON data
        //console.log(data.json);
        return data.json();
      })
      .then(function(data) {
        //console.log(data);
        //Read out the JSON data to the screen and create a id-property for each specific blog
        var blogsArray = [];
        for (let key in data) {
          //console.log(key);
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        //console.log(blogsArray);
        //Adding the JSON data to the blogs property found in data, returns, blogs -> which I use to read out on DOM
        this.blogs = blogsArray;
      });
  },
  computed: {},
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  directives: {
    rainbow: {
      bind(el) {
        //Making the style random using the math object (returning a 6digit random number)
        el.style.color =
          "#" +
          Math.random()
            .toString()
            .slice(2, 8);
      }
    }
  },
  mixins: [searchMixin]
};
</script>

<style scoped>


@media screen and (max-width: 500px) {
h1 {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 3em;
  color: #444;
}
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
    font-family: 'Roboto', sans-serif;
    padding: 20px;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: white;
    border: 1px solid #aaa;
}
#show-blogs a{
    color: #444;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
}
input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
}

}

@media screen and (min-width: 501px) {
h1 {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 3em;
  color: #444;
}
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
    font-family: 'Roboto', sans-serif;
    padding: 10px;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: white;
    border: 1px solid #aaa;
}
#show-blogs a{
    color: #444;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
}
input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
}
}
</style>
