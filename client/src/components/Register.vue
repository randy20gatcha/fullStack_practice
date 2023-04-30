<template>
  <div>
    <h1>Register here</h1>

    <input 
      type="email" 
      name="email" 
      v-model="email"
      placeholder="email"
    />
    <br/>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password" 
      id="password"
    />

    <br/>
    <br/>

    <button @click="register">Register</button>
    
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import AuthenticationService from '../services/AuthenticationService';

const email = ref('');
const password = ref('');

const register = async () => {
  const response = await AuthenticationService.register({
    email: email.value,
    password: password.value
  });
  console.log(response.data)
}

</script>

<style scoped>

</style>