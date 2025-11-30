<template>
  <Navbar v-if="isLoggedIn"/>
  <router-view />
</template>

<script setup lang="ts">
import { computed } from "vue";
import Navbar from "./components/Navbar.vue";

const isLoggedIn = computed(() => !!localStorage.getItem("token"));
</script>
