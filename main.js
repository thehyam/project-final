import Vue from 'vue'
import App from './App.vue'
//Importing a plugin that allows me to create a database and use HTTP-request
import vueResource from 'vue-resource'
//Importing a plugin that allows me to use the vue router function
import VueRouter from 'vue-router'
//Importing the page that holds all my routs (paths)
import Routes from './routes'

//Making use of the resource pluign
Vue.use(vueResource);
//Making use of the router pluign
Vue.use(VueRouter);

// Register routes
const router = new VueRouter({
    routes: Routes,
    //Setting another default page, other that hash (when operating locally)
    mode: 'history'
});

//filters

//Filter to make uppercase
Vue.filter('to-uppercase', function(value) {
    return value.toUpperCase();
});
//Filter to only show a snippet
Vue.filter('snippet', function(value) {
    return value.slice(0, 100) + ' (...)';
});

//Custom directives

//Directive to make text color random
Vue.directive('rainbow', {
    //Life cycle hook
    bind(el) {
        //Making the style random using the math object (returning a 6digit random number)
        el.style.color = "#" + Math.random().toString().slice(2, 8);
    }
});
//Directive to make area a specific width 
Vue.directive('theme', {
    //Life cycle hook
    bind(el, binding) {
        if (binding.value == 'wide') {
            el.style.maxWidth = "1200px";
        } else if (binding.value == 'narrow') {
            el.style.maxWidth = "560px";
        }
        if (binding.arg == 'column') {
            el.style.background = '#ddd';
            el.style.padding = '20px';
        }
    }
});

//adding my router instance, so that it can be used throughout the application
new Vue({
    el: '#app',
    render: h => h(App),
    router: router
})