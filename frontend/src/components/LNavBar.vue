<!-- LNavBar.vue -->
<template>
  <v-app-bar app color="yellow lighten-4" dark>
    <v-toolbar-title @click="navigateToDashboard" style="cursor: pointer;">
      CARTOON MOVIE
    </v-toolbar-title>
    <v-btn text class="ml-2" to="/dashboard">Movies</v-btn>
    <v-btn text class="ml-2" to="/about">About</v-btn>
    <v-btn text class="ml-2" to="/images">Images</v-btn>
    
    <v-spacer></v-spacer>
    
    <!-- Autocomplete Search Bar -->
    <v-autocomplete
      v-model="searchQuery"
      :items="movies"
      item-text="title"
      item-value="id"
      label="Search"
      prepend-inner-icon="mdi-magnify"
      clearable
      flat
      hide-no-data
      hide-selected
      class="mx-4"
      @update:search="onSearch"
      @change="onItemSelected"
    >
      <template v-slot:item="{ item }">
        <v-list-item :to="`/movie/${item.id}`" tag="a">
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </template>
    </v-autocomplete>
    
    <v-btn text class="ml-2" @click="navigateToHome">Logout</v-btn>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const movies = ref([
  { id: 1, title: 'Movie 1' },
  { id: 2, title: 'Movie 2' },
  { id: 3, title: 'Movie 3' },
  { id: 4, title: 'Movie 4' },
  { id: 5, title: 'Movie 5' },
  { id: 6, title: 'Movie 6' },
  { id: 7, title: 'Movie 7' },
  { id: 8, title: 'Movie 8' },
])

const searchQuery = ref('')
const router = useRouter()

const navigateToHome = () => {
  router.push('/')
}

const navigateToDashboard = () => {
  router.push('/dashboard')
}

const onItemSelected = (item) => {
  if (item && item.id) {
    router.push(`/movie/${item.id}`)
  }
}

const onSearch = (query) => {
  // Implement search logic if needed
  console.log('Search query:', query)
}
</script>

<style scoped>
/* Add custom styles if needed */
</style>
