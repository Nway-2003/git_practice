<template>
  <div>
    <!-- NavBar Component -->
    <LNavBar />
    <SideBar />

    <v-container>
      <!-- Header Row -->
      <v-row>
        <v-col cols="12">
          <div class="header-wrapper">
            <v-header class="text-center py-4" color="primary" dark>
              <h2>{{ movie.title }}</h2>
            </v-header>
          </div>
        </v-col>
      </v-row>

      <!-- Content Row -->
      <v-row>
        <v-col cols="12" sm="4">
          <v-card class="mx-auto" max-width="400">
            <v-img :src="movie.imageSrc" height="400px" cover />
          </v-card>
        </v-col>
        <v-col cols="12" sm="8">
          <p>{{ movie.subtitle }}</p>
          <v-rating
            :value="movie.rating"
            color="amber"
            dense
            half-increments
            readonly
            size="20"
          />
          
          <div class="grey--text ml-2">{{ movie.rating }} / 5</div>
          <p>{{ movie.description }}</p>

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
          <span class="headline">{{ movie.title }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="">
                <div class="iframe-container">
                  <iframe
                    v-if="movie.trailerUrl"
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
import LNavBar from '../components/LNavBar.vue'
import Footer from '../components/Footer.vue'

const route = useRoute()
const dialog = ref(false)
const trailerUrl = ref('')

const movie = ref({
  title: '',
  subtitle: '',
  rating: 0,
  description: '',
  imageSrc: '',
  trailerUrl: '' // Add trailerUrl property
})

const movies = [
  { id: 1, title: 'Movie 1', subtitle: 'Thrilling Adventure', rating: 4.5, description: 'An epic journey through space.', imageSrc: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', trailerUrl: 'https://www.youtube.com/embed/jgrA47nD2Q0?si=Wa-MORp3MbGMTlxB' },
  { id: 2, title: 'Movie 2', subtitle: 'Epic Fantasy', rating: 4.0, description: 'A magical adventure in a mystical land.', imageSrc: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg', trailerUrl: 'https://www.youtube.com/embed/W6iEiriNSNw?si=uPb3P4wAJzeuH0uP' },
  { id: 3, title: 'Movie 3', subtitle: 'Heartwarming Drama', rating: 4.7, description: 'A touching story of love and loss.', imageSrc: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', trailerUrl: 'https://youtu.be/video_id_3' },
  { id: 4, title: 'Movie 4', subtitle: 'Thrilling Mystery', rating: 4.3, description: 'A gripping mystery that keeps you guessing.', imageSrc: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', trailerUrl: 'https://youtu.be/video_id_4' },
  { id: 5, title: 'Movie 5', subtitle: 'Romantic Comedy', rating: 4.2, description: 'A delightful romantic comedy full of laughs.', imageSrc: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg', trailerUrl: 'https://youtu.be/video_id_5' },
  { id: 6, title: 'Movie 6', subtitle: 'Action Packed', rating: 4.6, description: 'Non-stop action and adventure.', imageSrc: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', trailerUrl: 'https://youtu.be/video_id_6' },
  { id: 7, title: 'Movie 7', subtitle: 'Romantic Comedy', rating: 4.2, description: 'A delightful romantic comedy full of laughs.', imageSrc: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg', trailerUrl: 'https://youtu.be/video_id_5' },
  { id: 8, title: 'Movie 8', subtitle: 'Action Packed', rating: 4.6, description: 'Non-stop action and adventure.', imageSrc: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', trailerUrl: 'https://youtu.be/video_id_6' },

  { id:  9, title: 'Movie 9', subtitle: 'Thrilling Adventure', rating: 4.5, description: 'An epic journey through space.', imageSrc: 'https://cdn.vuetifyjs.com/images/cards/forest.jpg', trailerUrl: 'https://www.youtube.com/embed/jgrA47nD2Q0?si=Wa-MORp3MbGMTlxB' },
  { id: 10, title: 'Movie 10', subtitle: 'Epic Fantasy', rating: 4.0, description: 'A magical adventure in a mystical land.', imageSrc: 'https://cdn.vuetifyjs.com/images/cards/sky.jpg', trailerUrl: 'https://www.youtube.com/embed/W6iEiriNSNw?si=uPb3P4wAJzeuH0uP' },
  { id: 11, title: 'Movie 11', subtitle: 'Heartwarming Drama', rating: 4.7, description: 'A touching story of love and loss.', imageSrc: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg', trailerUrl: 'https://youtu.be/video_id_3' },
  { id: 12, title: 'Movie 12', subtitle: 'Thrilling Mystery', rating: 4.3, description: 'A gripping mystery that keeps you guessing.', imageSrc: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', trailerUrl: 'https://youtu.be/video_id_4' },
  { id: 13, title: 'Movie 13', subtitle: 'Romantic Comedy', rating: 4.2, description: 'A delightful romantic comedy full of laughs.', imageSrc: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg', trailerUrl: 'https://youtu.be/video_id_5' },
  { id: 14, title: 'Movie 14', subtitle: 'Action Packed', rating: 4.6, description: 'Non-stop action and adventure.', imageSrc: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', trailerUrl: 'https://youtu.be/video_id_6' },
  { id: 15, title: 'Movie 15', subtitle: 'Romantic Comedy', rating: 4.2, description: 'A delightful romantic comedy full of laughs.', imageSrc: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg', trailerUrl: 'https://youtu.be/video_id_5' },
  { id: 16, title: 'Movie 16', subtitle: 'Action Packed', rating: 4.6, description: 'Non-stop action and adventure.', imageSrc: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', trailerUrl: 'https://youtu.be/video_id_6' }
]

onMounted(() => {
  const id = parseInt(route.params.id)
  const selectedMovie = movies.find(m => m.id === id)
  if (selectedMovie) {
    movie.value = selectedMovie
  }
})

const openDialog = () => {
  if (movie.value.trailerUrl) {
    trailerUrl.value = movie.value.trailerUrl
    dialog.value = true
  } else {
    alert('Trailer not available for this movie.')
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
