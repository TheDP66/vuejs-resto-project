<template>
  <HeaderLayout />
  <slot />
</template>

<script>
import HeaderLayout from "./HeaderLayout.vue";

export default {
  name: "AppLayout",
  components: {
    HeaderLayout,
  },
};
</script>

<style scoped></style>
