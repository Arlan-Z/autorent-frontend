<template>
  <Navbar v-if="isLoggedIn" />
  <router-view />
</template>

<script setup lang="ts">
const isLoggedIn = !!localStorage.getItem("token");
</script>
