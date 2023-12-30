<script setup>
import { BE_URL } from "@/const/url";
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";

const init_value = {
  name: "",
  address: "",
  contact: "",
};

const name = ref("");
const router = useRouter();
const restaurant = reactive(init_value);

const addRestaurant = async () => {
  try {
    if (
      restaurant.name === "" ||
      restaurant.address === "" ||
      restaurant.contact === ""
    ) {
      throw new Error();
    }

    await axios.post(`${BE_URL}/restaurants`, restaurant);

    alert("add restaurant done");
    Object.assign(restaurant, {
      name: "",
      address: "",
      contact: "",
    });

    router.push("/");
  } catch (error) {
    alert("add restaurant error");
  }
};

onMounted(async () => {
  let user = localStorage.getItem("user-info");
  name.value = JSON.parse(user).name;
});
</script>

<template>
  <h1>Hello {{ name }}, welcome on add restaurant page</h1>

  <div class="add">
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

    <button v-on:click="addRestaurant">Add new restaurant</button>
  </div>
</template>
