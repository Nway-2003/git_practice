<template>
  <v-app>
    <LNavBar />
    <SideBar />

    <!-- Main content -->
    <v-main>
      <v-container>
      <MovieCards />
      </v-container>
    </v-main>

  </v-app>
</template>

<script setup>
import LNavBar from '../components/LNavBar.vue'
import SideBar from '../components/SideBar.vue'
import MovieCards from '../components/MovieCards.vue'
</script>

<style scoped>




</style>
