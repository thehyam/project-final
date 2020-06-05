<template>
  <div id="container">
    <app-header></app-header>
  <router-view></router-view>
   
  </div>
</template>

<script>
//Importing the component files I created the functions, HTML & CSS in
import header from './components/header.vue';

export default {
  //Making use of my imports so that I can read them out to the DOM
  components: {
    'app-header': header
  },
  data() {
    return {

    };
  },
  methods: {}
};

</script>

<style scoped>
body{
    margin: 0;
    font-family: 'Roboto', sans-serif;
}
#container {
  background-image: url('./assets/plains.jpg');
   background-color: #cccccc; 
   height: 1400px;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; 
}
</style>
