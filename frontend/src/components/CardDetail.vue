<template>
  <div>
    <!-- NavBar Component -->
    <NavBar />

    <v-container>
      <!-- Header Row -->
      <v-row>
        <v-col cols="12">
          <div class="header-wrapper">
            <v-header class="text-center py-4" color="primary" dark>
              <h2>{{ destination.title }}</h2>
            </v-header>
          </div>
        </v-col>
      </v-row>

      <!-- Content Row -->
      <v-row>
        <v-col cols="12" sm="4">
          <v-card class="mx-auto" max-width="400">
            <v-img :src="destination.imageSrc" height="400px" cover />
          </v-card>
        </v-col>
        <v-col cols="12" sm="8">
          <p>{{ destination.subtitle }}</p>
          <v-rating
            :value="destination.rating"
            color="amber"
            dense
            half-increments
            readonly
            size="20"
          />
          
          <div class="grey--text ml-2">{{ destination.rating }} / 5</div>
          <p>{{ destination.description }}</p>

          <!-- Additional Headers and Subheaders -->
          <div class="additional-info">
            <h3>Additional Header 1</h3>
            <p>Additional Subheader 1: Description of the additional content.</p>
            <h3>Additional Header 2</h3>
            <p>Additional Subheader 2: Description of the additional content.</p>
          </div>
          
          <!-- Button for YouTube Trailer -->
          <v-btn @click="openDialog" color="primary">Watch Trailer</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- Footer Component -->
    <Footer style="position: absolute; right: 0; left: 0; bottom: 0" />

    <!-- Dialog for Trailer -->
    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ destination.title }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="">
                <div class="iframe-container">
                  <iframe
                    v-if="destination.trailerUrl"
                    :src="trailerUrl"
                    allowfullscreen
                    frameborder="0"
                    width="100%"
                    height="450px"
                  ></iframe>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// Import the NavBar and Footer components
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

const route = useRoute()
const dialog = ref(false)
const trailerUrl = ref('')

const destination = ref({
  title: '',
  subtitle: '',
  rating: 0,
  description: '',
  imageSrc: '',
  trailerUrl: '' // Add trailerUrl property
})

const destinations = [
  { id: 1, title: 'Top Western Road Trip 1', subtitle: '1,000 miles of adventure', rating: 4.5, description: 'An exciting road trip through the western states.', imageSrc: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', trailerUrl: 'https://www.youtube.com/embed/jgrA47nD2Q0?si=Wa-MORp3MbGMTlxB' },
  { id: 2, title: 'Top Western Road Trip 2', subtitle: '1,200 miles of discovery', rating: 4.0, description: 'Discover hidden gems on this road trip.', imageSrc: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg', trailerUrl: 'https://www.youtube.com/embed/W6iEiriNSNw?si=uPb3P4wAJzeuH0uP' },
  { id: 3, title: 'Top Western Road Trip 3', subtitle: '1,500 miles of excitement', rating: 4.7, description: 'An exciting road trip through the western states.', imageSrc: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', trailerUrl: 'https://youtu.be/video_id_3' },
  { id: 4, title: 'Amazing Eastern Journey 1', subtitle: '800 miles of exploration', rating: 4.3, description: 'Explore the eastern states with this road trip.', imageSrc: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', trailerUrl: 'https://youtu.be/video_id_4' },
  { id: 5, title: 'Amazing Eastern Journey 2', subtitle: '1,000 miles of beauty', rating: 4.2, description: 'Discover the beauty of the eastern states.', imageSrc: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg', trailerUrl: 'https://youtu.be/video_id_5' },
  { id: 6, title: 'Amazing Eastern Journey 3', subtitle: '1,300 miles of fun', rating: 4.6, description: 'Enjoy the fun-filled eastern states road trip.', imageSrc: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', trailerUrl: 'https://youtu.be/video_id_6' }
]

onMounted(() => {
  const id = parseInt(route.params.id)
  const selectedDestination = destinations.find(d => d.id === id)
  if (selectedDestination) {
    destination.value = selectedDestination
  }
})

const openDialog = () => {
  if (destination.value.trailerUrl) {
    trailerUrl.value = destination.value.trailerUrl
    dialog.value = true
  } else {
    alert('Trailer not available for this destination.')
  }
}
</script>

<style scoped>
.header-wrapper {
  margin-bottom: 20px; /* Adjust the space as needed */
}

.additional-info {
  margin-top: 20px;
}

.additional-info h3 {
  margin-bottom: 10px;
}

.additional-info p {
  margin-bottom: 20px;
}

.iframe-container iframe {
  width: 100%;
  height: 450px;
}
</style>
