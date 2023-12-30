<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { BE_URL } from "../const/url";

const router = useRouter();
const name = ref("");
const email = ref("");
const password = ref("");

const signUp = async () => {
  try {
    if (name.value === "" || email.value === "" || password.value === "") {
      throw new Error();
    }

    const result = await axios.post(`${BE_URL}/users`, {
      name: name.value,
      email: email.value,
      password: password.value,
    });

    if (result.data.length === 0) {
      throw new Error();
    }

    alert("sign-up done");
    localStorage.setItem("user-info", JSON.stringify(result.data));

    router.push("/");
  } catch (error) {
    console.error(error);
    alert("sign-up error");
  }
};
</script>

<template>
  <img class="logo" src="../assets/logo.png" />
  <h1>Sign Up</h1>

  <div class="register">
    <input
      type="text"
      :value="name"
      @input="(e) => (name = e.target.value)"
      placeholder="Enter name"
      id="name"
    />
    <input
      type="email"
      :value="email"
      @input="(e) => (email = e.target.value)"
      placeholder="Enter email"
      id="email"
    />
    <input
      type="password"
      :value="password"
      @input="(e) => (password = e.target.value)"
      placeholder="Enter password"
      id="password"
    />

    <button v-on:click="signUp">Sign up</button>

    <p>
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>

<style>
.logo {
  width: 100px;
}

.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}

.register button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background-color: skyblue;
  color: white;
  cursor: pointer;
}
</style>
