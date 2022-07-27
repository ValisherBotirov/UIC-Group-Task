<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/addUser">AddHuman</router-link>
  </nav>
    
    <div>
      <RightMenu/>
    </div>

  <router-view/>
</template>


<script>
import RightMenu from "./components/RightMenu.vue"
export default {
  components : {
    RightMenu,
  }
}
</script>


<style>

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
