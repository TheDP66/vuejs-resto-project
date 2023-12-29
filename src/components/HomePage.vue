<template>
  <HeaderLayout />
  <h1>Hello {{ name }}, Welcome on Home Page</h1>
</template>

<script>
import HeaderLayout from "@/layouts/HeaderLayout";

export default {
  name: "HomePage",
  data() {
    return {
      name: "",
    };
  },
  components: {
    HeaderLayout,
  },
  mounted() {
    let user = localStorage.getItem("user-info");

    if (user === null) {
      this.$router.push({ name: "SignUp" });
    } else {
      this.name = JSON.parse(user).name;
    }
  },
};
</script>
