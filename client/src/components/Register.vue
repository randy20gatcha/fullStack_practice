<template>
  <div>
    <h1>Register here {{ value }}</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(0);
</script>