<script setup>
import { BE_URL } from "@/const/url";
import axios from "axios";
import { onMounted, reactive, ref } from "vue";

const name = ref("");
const restaurants = reactive({
  data: [],
});

const deleteRestaurant = async (id) => {
  if (confirm("Are you sure to delete?") === true)
    try {
      const res = await axios.delete(`${BE_URL}/restaurants/${id}`);
      console.log("res", res);

      alert("delete restaurant done");

      fetchRestaurants();
    } catch (error) {
      alert("delete restaurant error");
    }
};

const fetchRestaurants = async () => {
  try {
    let result = await axios.get(`${BE_URL}/restaurants`);
    restaurants.data = result.data;
  } catch (error) {
    alert("fetch restaurants error");
  }
};

onMounted(async () => {
  let user = localStorage.getItem("user-info");
  name.value = JSON.parse(user).name;

  fetchRestaurants();
});
</script>

<template>
  <h1>Hello {{ name }}, Welcome on Home Page</h1>

  <div class="container">
    <table border="1">
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Contact</td>
        <td>Address</td>
        <td>Actions</td>
      </tr>
      <tr v-for="restaurant in restaurants.data" v-bind:key="restaurant.id">
        <td>{{ restaurant.id }}</td>
        <td>{{ restaurant.name }}</td>
        <td>{{ restaurant.contact }}</td>
        <td>{{ restaurant.address }}</td>
        <td class="action">
          <router-link :to="'/update/' + restaurant.id">Update</router-link>
          <button @click="deleteRestaurant(restaurant.id)">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<style>
.container {
  min-width: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

td {
  width: 160px;
  height: 40px;
}

td.action {
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
