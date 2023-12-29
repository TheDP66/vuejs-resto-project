<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const logOut = () => {
  localStorage.clear();
  router.push("/login");
};
</script>

<template>
  <header class="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'Add' }">Add Restaurant</router-link>
    <router-link :to="{ name: 'Update' }">Update Restaurant</router-link>
    <a v-on:click="logOut">Logout</a>
  </header>
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
