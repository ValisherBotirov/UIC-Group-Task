<template>
<div class = "header border-b border-[#f68c1f] border-b-[3px] ">
   <nav class = "p-[24px]">
    <router-link to="/">Home</router-link> |
    <router-link to="/addUser">AddHuman</router-link>
  </nav>
</div>
 
  <router-view/>
</template>


<script>
import RightMenu from "./components/RightMenu.vue"
import HomeView from "./views/HomeView.vue"
export default {
  components : {
    RightMenu,
    HomeView
  }
}
</script>


<style>

/* nav {
  padding: 24px;
} */

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
