<!-- SideBar.vue -->
<template>
  <v-navigation-drawer
    v-model:visible="drawer"
    app
    class="sidebar"
    width="256"
   
  >
    <v-list>
      <!-- Menu Header -->
      <v-list-subheader class="custom-header">Menu</v-list-subheader>
      
      <v-list-item
        v-for="item in sidebarItems"
        :key="item.title"
        :to="item.route"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>{{ item.title }}</v-list-item-content>
      </v-list-item>

      <v-list-subheader class="category-header">Category</v-list-subheader>
      <v-list-item
        v-for="item in categoryItems"
        :key="item.title"
        :to="item.route"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>{{ item.title }}</v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false) // Drawer visibility state

const sidebarItems = [
  { title: 'Dashboard', route: '/dashboard', icon: 'mdi-view-dashboard' },
  { title: 'Awards', route: '/awards', icon: 'mdi-trophy' },
  { title: 'Celebs', route: '/celebs', icon: 'mdi-star' },
]

const categoryItems = [
  { title: 'Movies', route: '/dashboard', icon: 'mdi-movie' },
  { title: 'About', route: '/about', icon: 'mdi-information' },
  { title: 'Images', route: '/images', icon: 'mdi-image' },
]
</script>

<style scoped>

.custom-header {
  font-size: 1.25rem; /* Adjust the font size */
  font-weight: bold; /* Make the text bold */
  color: white; /* Optional: change text color */
}

.category-header {
  font-size: 1rem; /* Adjust the font size */
  font-weight: bold; /* Make the text bold */
  color: white; /* Optional: change text color */
}
</style>
