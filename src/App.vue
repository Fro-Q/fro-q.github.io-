<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="topbar"></div>
  <RouterView name="sidebarLeft"/>
  <RouterView name="sidebarRight"/>
  <RouterView name="mainContent"/>
</template>

<style scoped>

</style>
