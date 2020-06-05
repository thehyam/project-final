<template>
    <nav>
        <ul>
            <li><router-link to="/" exact>Blog</router-link></li>
            <li><router-link  to="/add" exact>Add Blog</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>

@media screen and (max-width: 500px) {
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    font-size: 26px;
    font-family: 'Roboto', sans-serif;
    border-radius: 5px;
}
nav{
    background: #c3d8bb;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #c3d8bb;
    color: #444;
}

}

@media screen and (min-width: 501px) {
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    border-radius: 5px;
}
nav{
    background: #c3d8bb;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #c3d8bb;
    color: #444;
}
}
</style>