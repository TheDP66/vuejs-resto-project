<script>
export default {
  name: "HeaderLayout",
  methods: {
    logOut() {
      localStorage.clear();
      this.$router.push({ name: "LoginPage" });
    },
  },
};
</script>

<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>
    <router-link to="/update">Update Restaurant</router-link>
    <a v-on:click="logOut">Logout</a>
  </div>
</template>

<style>
.nav {
  background-color: #333;
  overflow: hidden;
}

.nav a {
  float: left;
  color: #f2f2f2;
  padding: 14px 16px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin-right: 5px;
}

.nav a:hover {
  background: #ddd;
  color: #333;
}
</style>
