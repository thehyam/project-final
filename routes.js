//Importing the necessary data I need to create my routes
import showBlogs from './components/showBlogs';
import addEditBlog from './components/addEditBlog';
import singleBlog from './components/singleBlog';

//Creating my routes
export default [
    { path: '/', component: showBlogs },
    { path: '/add', component: addEditBlog },
    { path: '/blog/:id', component: singleBlog },
    { path: '/edit/:id', name: 'EditBlog', component: addEditBlog },
]