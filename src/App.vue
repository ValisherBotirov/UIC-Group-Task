<template>
  <div
    class="header border-[#f68c1f] border-b-[3px] bg-white flex items-center gap-10"
  >
    <div class="headerLogo ml-5">
      <h2 class="text-2xl"><span class="font-semibold">UIC</span> Group</h2>
    </div>
    <nav class="p-[24px]">
      <router-link to="/">Home</router-link> |
      <router-link to="/addUser">Add Employee</router-link>
    </nav>
  </div>

  <router-view />
</template>

<script>
import RightMenu from "./components/RightMenu.vue";
import HomeView from "./views/HomeView.vue";
export default {
  components: {
    RightMenu,
    HomeView,
  },
  data() {
    return {};
  },
};
</script>

<style>
/* nav {
  padding: 24px;
} */

#app {
  background-color: rgb(241 245 249);
}

.headerLogo {
  margin-left: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
