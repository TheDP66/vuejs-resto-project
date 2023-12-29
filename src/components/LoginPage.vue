<script>
import axios from "axios";
import { BE_URL } from "../const/url";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async logIn() {
      try {
        if (this.email === "" || this.password === "") {
          throw new Error();
        }

        let result = await axios.get(
          `${BE_URL}/users?email=${this.email}&password=${this.password}`
        );

        if (result.data.length === 0) {
          throw new Error();
        }

        console.log("result", result);

        alert("login done");
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));

        this.$router.push({ name: "Home" });
      } catch (error) {
        alert("login error");
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<template>
  <img class="logo" src="../assets/logo.png" />
  <h1>Login</h1>

  <div class="login">
    <input type="email" v-model="email" placeholder="Enter email" id="email" />
    <input
      type="password"
      v-model="password"
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
