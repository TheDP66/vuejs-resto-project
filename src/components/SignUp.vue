<script>
import axios from "axios";
import { BE_URL } from "../const/url";

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      try {
        const result = await axios.post(BE_URL + "/users", {
          name: this.name,
          email: this.email,
          password: this.password,
        });

        console.log("result", result);
        alert("sign-up done");
        localStorage.setItem("user-info", JSON.stringify(result.data));

        this.$router.push({ name: "Home" });
      } catch (error) {
        alert("sign-up error");
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
  <h1>Sign Up</h1>

  <div class="register">
    <input type="text" v-model="name" placeholder="Enter name" id="name" />
    <input type="email" v-model="email" placeholder="Enter email" id="email" />
    <input
      type="password"
      v-model="password"
      placeholder="Enter password"
      id="password"
    />

    <button v-on:click="signUp">Sign up</button>
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
