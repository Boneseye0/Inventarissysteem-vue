<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to = "/">Main</RouterLink> |
    <RouterLink to = "/Create">Toevoegen</RouterLink> |
    <RouterLink to = "/Edit/:id">Edit</RouterLink> |
    <RouterLink to = "/OrderList">Bestel Lijst</RouterLink> |
  </nav>
  <div>
    <RouterView/>
  </div>
</template>
