//exporting my computed properties that I want to save externally
export default {
    computed: {
        //Creating a function for search
        filteredBlogs: function() {
            return this.blogs.filter(blog => {
                return blog.title.match(this.search);
            });
        }
    }
}