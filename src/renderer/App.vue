<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

window.electronAPI.sendMessage("Hello from App.vue!");

function sendMessage(message: string) {
   window.electronAPI.sendMessage("Received message:" + message);
}
</script>

<template>
   <h1>Hello App!</h1>

   <p><strong>Current route path:</strong> {{ $route }}</p>
   <router-link to="/">Goto Start</router-link>
   <nav>
      <router-link to="/">Goto Start</router-link>
      <router-link to="/import-data">Import Data from SD-Card</router-link>
   </nav>
   <main>
      <RouterView />
   </main>
</template>

<style scoped>
.logo {
   height: 6em;
   padding: 1.5em;
   will-change: filter;
   transition: filter 300ms;
}
.logo:hover {
   filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
   filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
