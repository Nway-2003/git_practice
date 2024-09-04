<template>

  <NavBar />
    <v-carousel show-arrows="hover">
      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
      ></v-carousel-item>
      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
        cover
      ></v-carousel-item>
      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
      ></v-carousel-item>
    </v-carousel>

      <!-- Add spacing here -->
  <v-row class="my-4"> 
    <v-col cols="12">
      <!-- Empty column for spacing -->
    </v-col>
  </v-row>

 <HomeCard />

  <!-- Add spacing here -->
  <v-row class="my-6"> 
    <v-col cols="12">
      <!-- Empty column for spacing -->
    </v-col>
  </v-row>

 <Footer />

 </template>

<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue' 
import Footer from '../components/Footer.vue' 
import HomeCard from '../components/HomeCard.vue'
</script>

<style scoped>
.v-carousel {
  height: 500px; /* Adjust the height as needed */
}

.v-carousel-item {
  background-size: cover;
  background-position: center;
}
</style>
