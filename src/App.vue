<script setup>
import { provide } from 'vue';
import {RouterView } from 'vue-router'
provide("pesan","saya berasal dari provide")

</script>

<template>
  <RouterView />
</template>
