<script setup>
import { BE_URL } from "@/const/url";
import router from "@/router";
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";

const init_value = {
  name: "",
  address: "",
  contact: "",
};

const route = useRoute();
const name = ref("");
const restaurant = reactive(init_value);

const updateRestaurant = async () => {
  try {
    console.log("masuk");
    const result = await axios.put(
      `${BE_URL}/restaurants/${route.params.id}`,
      restaurant
    );

    console.log("result", result);

    alert("update restaurant done");
    Object.assign(restaurant, {
      name: "",
      address: "",
      contact: "",
    });

    router.push("/");
  } catch (error) {
    alert("update restaurant error");
  }
};

onMounted(async () => {
  try {
    let user = localStorage.getItem("user-info");
    name.value = JSON.parse(user).name;

    const result = await axios.get(`${BE_URL}/restaurants/${route.params.id}`);

    console.log("result", result);
    Object.assign(restaurant, result.data);
  } catch (error) {
    alert(error.message);
    router.push("/");
  }
});
</script>

<template>
  <h1>Hello {{ name }}, Welcome on Update Page</h1>

  <div class="update">
    <input
      type="text"
      :value="restaurant.name"
      @input="(e) => (restaurant.name = e.target.value)"
      name="name"
      placeholder="Enter name"
    />
    <input
      type="text"
      :value="restaurant.address"
      @input="(e) => (restaurant.address = e.target.value)"
      name="address"
      placeholder="Enter address"
    />
    <input
      type="text"
      :value="restaurant.contact"
      @input="(e) => (restaurant.contact = e.target.value)"
      name="contact"
      placeholder="Enter contact"
    />

    <button v-on:click="updateRestaurant">Update new restaurant</button>
  </div>
</template>
