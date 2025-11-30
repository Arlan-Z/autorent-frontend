<template>
  <div class="register">
    <h2>Register</h2>

    <input v-model="name" placeholder="Name" />
    <input v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />

    <button @click="onRegister">Register</button>

    <p>
      Already have an account?
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { register } from "../api/auth";

const name = ref("");
const email = ref("");
const password = ref("");

async function onRegister() {
  try {
    await register(name.value, email.value, password.value);
    alert("Registered successfully!");
    window.location.href = "/login";
  } catch (e: any) {
    alert(e.response?.data?.error ?? "Error while registering");
  }
}
</script>

<style scoped>
.register {
  max-width: 300px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
