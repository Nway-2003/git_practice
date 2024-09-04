<template>
  <v-container>
    <!-- Header Row -->
    <v-row>
      <v-col cols="12">
        <div class="header-wrapper">
          <v-header class="text-center py-4" color="primary" dark>
            <h2>POPULAR CARTOONS</h2>
          </v-header>
        </div>
      </v-col>
    </v-row>

    <!-- First Row of Cards -->
    <v-row>
      <!-- Repeat this block for each card in the first row -->
      <v-col v-for="(card, index) in firstRowCards" :key="'first-row-' + index" cols="12" sm="6" md="4">
        <router-link :to="`/destination/${index + 1}`" class="card-link">
          <v-card class="mx-auto card-hover" max-width="500" min-height="400px">
            <v-img
              height="250px"
              :src="getImageSrc(index + 1, 'first')"
              cover
            ></v-img>
            <v-card-title class="pt-2">{{ card.title }}</v-card-title>
            <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
            <v-card-text>
              <v-row align="center" class="mx-0">
                <!-- Rating stars -->
                <v-rating 
                :value="card.rating"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="20"
                >
                </v-rating>
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

    <!-- Second Row of Cards -->
    <v-row>
      <!-- Repeat this block for each card in the second row -->
      <v-col v-for="(card, index) in secondRowCards" :key="'second-row-' + index" cols="12" sm="6" md="4">
        <router-link :to="`/destination/${index + 4}`" class="card-link">
          <v-card class="mx-auto card-hover" max-width="500" min-height="400px">
            <v-img
              height="250px"
              :src="getImageSrc(index + 1, 'second')"
              cover
            ></v-img>
            <v-card-title class="pt-2">{{ card.title }}</v-card-title>
            <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
            <v-card-text>
              <v-row align="center" class="mx-0">
                <!-- Rating stars -->
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
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      firstRowCards: [
        { title: 'Top Western Road Trip 1', subtitle: '1,000 miles of adventure', rating: 4.5 },
        { title: 'Top Western Road Trip 2', subtitle: '1,200 miles of discovery', rating: 4.0 },
        { title: 'Top Western Road Trip 3', subtitle: '1,500 miles of excitement', rating: 4.7 },
      ],
      secondRowCards: [
        { title: 'Amazing Eastern Journey 1', subtitle: '800 miles of exploration', rating: 4.3 },
        { title: 'Amazing Eastern Journey 2', subtitle: '1,000 miles of beauty', rating: 4.2 },
        { title: 'Amazing Eastern Journey 3', subtitle: '1,300 miles of fun', rating: 4.6 },
      ],
    };
  },
  methods: {
    getImageSrc(n, row) {
      const firstRowImages = [
        'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      ];
      const secondRowImages = [
        'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      ];

      return row === 'first' ? firstRowImages[n - 1] : secondRowImages[n - 1];
    }
  },
  mounted() {
    console.log("First Row Cards:", this.firstRowCards);
    console.log("Second Row Cards:", this.secondRowCards);
  }
};
</script>


<style scoped>
.header-wrapper {
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
</style>
