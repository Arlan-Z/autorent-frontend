<template>
  <nav class="navbar">
    <router-link to="/cars">Cars</router-link>
    <router-link to="/bookings">My Bookings</router-link>

    <div class="auth">
      <button v-if="!token" @click="$router.push('/login')">Login</button>
      <button v-else @click="logout">Logout</button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { auth } from "../store/auth";

const token = auth.token;

function logout() {
  auth.logout();
  location.reload();
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background: #222;
  color: white;
}
.navbar a {
  margin-right: 12px;
}
</style>
