<template>
  <v-container>
    <!-- First Header Row with Navigation Buttons -->
    <v-row class="align-center mb-4">
      <v-col cols="12">
        <div class="header-wrapper d-flex justify-space-between align-center">
          <v-btn icon @click="prev">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-header class="text-center py-4" color="primary" dark>
            <h2>POPULAR MOVIES</h2>
          </v-header>
          <v-btn icon @click="next">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- First Row of Cards -->
    <v-row ref="cardsRow" class="no-wrap" style="overflow-x: auto; scroll-behavior: smooth;">
      <v-col v-for="(card, index) in cards" :key="'card-' + index" cols="12" sm="6" md="3">
        <router-link :to="`/movie/${index + 1}`" class="card-link">
          <v-card class="mx-auto card-hover" max-width="500" min-height="400px">
            <v-img
              height="250px"
              :src="getImageSrc(index)"
              cover
            ></v-img>
            <v-card-title class="pt-2">{{ card.title }}</v-card-title>
            <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating 
                  :value="card.rating"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="20"
                ></v-rating>
                <div class="grey--text ml-2">{{ card.rating }} / 5</div>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <!-- Optionally, add actions or other content here -->
            </v-card-actions>
          </v-card>
        </router-link>
      </v-col>
    </v-row>

    <!-- Second Header Row with Navigation Buttons -->
    <v-row class="align-center mb-4 mt-6">
      <v-col cols="12">
        <div class="header-wrapper d-flex justify-space-between align-center">
          <v-btn icon @click="prev2">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-header class="text-center py-4" color="secondary" dark>
            <h2>FEATURED MOVIES</h2>
          </v-header>
          <v-btn icon @click="next2">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- Second Row of Cards -->
    <v-row ref="cardsRow2" class="no-wrap" style="overflow-x: auto; scroll-behavior: smooth;">
      <v-col v-for="(featuredCard, index) in featuredCards" :key="'featured-card-' + index" cols="12" sm="6" md="3">
        <router-link :to="`/movie/${index + 9}`" class="card-link">
          <v-card class="mx-auto card-hover" max-width="500" min-height="400px">
            <v-img
              height="250px"
              :src="getImageSrc(index + 8)"
              cover
            ></v-img>
            <v-card-title class="pt-2">{{ featuredCard.title }}</v-card-title>
            <v-card-subtitle>{{ featuredCard.subtitle }}</v-card-subtitle>
            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating 
                  :value="featuredCard.rating"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="20"
                ></v-rating>
                <div class="grey--text ml-2">{{ featuredCard.rating }} / 5</div>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <!-- Optionally, add actions or other content here -->
            </v-card-actions>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { title: 'Movie 1', subtitle: 'Subtitle 1', rating: 4.5 },
        { title: 'Movie 2', subtitle: 'Subtitle 2', rating: 4.0 },
        { title: 'Movie 3', subtitle: 'Subtitle 3', rating: 4.7 },
        { title: 'Movie 4', subtitle: 'Subtitle 4', rating: 4.2 },
        { title: 'Movie 5', subtitle: 'Subtitle 5', rating: 4.3 },
        { title: 'Movie 6', subtitle: 'Subtitle 6', rating: 4.1 },
        { title: 'Movie 7', subtitle: 'Subtitle 7', rating: 4.6 },
        { title: 'Movie 8', subtitle: 'Subtitle 8', rating: 4.4 },
      ],
      featuredCards: [
        { title: 'Movie 9', subtitle: 'Subtitle 9', rating: 4.3 },
        { title: 'Movie 10', subtitle: 'Subtitle 10', rating: 4.1 },
        { title: 'Movie 11', subtitle: 'Subtitle 11', rating: 4.6 },
        { title: 'Movie 12', subtitle: 'Subtitle 12', rating: 4.4 },
        { title: 'Movie 13', subtitle: 'Subtitle 13', rating: 4.2 },
        { title: 'Movie 14', subtitle: 'Subtitle 14', rating: 4.5 },
        { title: 'Movie 15', subtitle: 'Subtitle 15', rating: 4.0 },
        { title: 'Movie 16', subtitle: 'Subtitle 16', rating: 4.7 },
        // Add more movies for the second row
      ],
    };
  },
  methods: {
    getImageSrc(index) {
      const images = [
        'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        'https://cdn.vuetifyjs.com/images/cards/forest.jpg',
        'https://cdn.vuetifyjs.com/images/cards/sky.jpg',
        'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
        'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        'https://cdn.vuetifyjs.com/images/cards/road.jpg',
      ];
      return images[index];
    },
    prev() {
      this.$refs.cardsRow.scrollLeft -= this.$refs.cardsRow.clientWidth;
    },
    next() {
      this.$refs.cardsRow.scrollLeft += this.$refs.cardsRow.clientWidth;
    },
    prev2() {
      this.$refs.cardsRow2.scrollLeft -= this.$refs.cardsRow2.clientWidth;
    },
    next2() {
      this.$refs.cardsRow2.scrollLeft += this.$refs.cardsRow2.clientWidth;
    }
  },
};
</script>

<style scoped>
.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px; /* Adjust the space as needed */
}

.card-link {
  display: block;
  text-decoration: none;
}

.card-hover {
  transition: transform 0.3s, box-shadow 0.3s;
}

.card-hover:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.no-wrap {
  flex-wrap: nowrap;
}

v-row {
  display: flex;
}
</style>
