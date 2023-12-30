<template>
  <h1>Hello {{ name }}, Welcome on Home Page</h1>

  <table border="1">
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Contact</td>
      <td>Address</td>
    </tr>
    <tr v-for="restaurant in restaurants" v-bind:key="restaurant.id">
      <td>{{ restaurant.id }}</td>
      <td>{{ restaurant.name }}</td>
      <td>{{ restaurant.contact }}</td>
      <td>{{ restaurant.address }}</td>
    </tr>
  </table>
</template>

<script setup>
import { BE_URL } from "@/const/url";
import axios from "axios";
import { onMounted, ref } from "vue";

const name = ref("");
const restaurants = ref([]);

onMounted(async () => {
  let user = localStorage.getItem("user-info");
  name.value = JSON.parse(user).name;

  let result = await axios.get(`${BE_URL}/restaurants`);
  restaurants.value = result.data;
});
</script>

<style>
td {
  width: 160px;
  height: 40px;
}
</style>
