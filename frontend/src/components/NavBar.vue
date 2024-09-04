<template>
  <nav>
    <v-app-bar app color="yellow lighten-4" dark>
      <v-toolbar-title @click="navigateToHome" class="clickable-title">LAKORN HOUSE</v-toolbar-title>
      
      <v-spacer></v-spacer>
      <v-btn text class="ml-2" @click="navigateToLogin">Login</v-btn>
      <v-btn text class="ml-2" @click="navigateToSignup">Sign Up</v-btn>
    </v-app-bar>
  </nav>
</template>


<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToHome = () => {
  router.push('/')
}

const navigateToLogin = () => {
  router.push('/login')
}

const navigateToSignup = () => {
  router.push('/signup')
}
</script>


<style scoped>
.clickable-title {
  cursor: pointer;
}
</style>
