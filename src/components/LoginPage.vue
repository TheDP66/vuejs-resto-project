<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { BE_URL } from "../const/url";

const router = useRouter();
const email = ref("");
const password = ref("");

const logIn = async () => {
  try {
    if (email.value === "" || password.value === "") {
      throw new Error();
    }

    let result = await axios.get(
      `${BE_URL}/users?email=${email.value}&password=${password.value}`
    );

    if (result.data.length === 0) {
      throw new Error();
    }

    console.log("result", result);

    alert("login done");
    localStorage.setItem("user-info", JSON.stringify(result.data[0]));

    router.push("/");
  } catch (error) {
    alert("login error");
  }
};
</script>

<template>
  <img class="logo" src="../assets/logo.png" />
  <h1>Login</h1>

  <div class="login">
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

    <button v-on:click="logIn">Login</button>

    <p>
      <router-link to="/sign-up">Sign up</router-link>
    </p>
  </div>
</template>

<style></style>
