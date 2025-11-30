<template>
  <div class="login">
    <h2>Login</h2>
    <input v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="onLogin">Login</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { auth } from "../store/auth";

const email = ref("");
const password = ref("");

async function onLogin() {
  await auth.login(email.value, password.value);
  location.href = "/cars";
}
</script>
