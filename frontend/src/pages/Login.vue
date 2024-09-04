<template>
  <div>
    <NavBar />
    <v-card
      class="mx-auto card-centered"
      max-width="800"
      title="User Registration"
    >
      <v-form v-model="valid" @submit.prevent="submitForm">
        <v-container>
          <v-text-field
            v-model="email"
            class="mb-6"
            :rules="emailRules"
            color="primary"
            label="Email"
            variant="underlined"
            hide-details
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            class="mb-6"
            :rules="passwordRules"
            color="primary"
            label="Password"
            variant="underlined"
            hide-details
            required
            type="password"
          ></v-text-field>
        </v-container>

        <v-divider class="my-4"></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" type="submit">
            Log in
            <v-icon icon="mdi-chevron-right" end></v-icon>
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
    <Footer style="position: absolute; right: 0; left: 0; bottom: 0" />
  </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    return { router, store };
  },
  data: () => ({
    valid: false,
    email: '',
    emailRules: [
      value => !!value || 'E-mail is required.',
      value => /.+@.+\..+/.test(value) || 'E-mail must be valid.',
    ],
    password: '',
    passwordRules: [
      value => !!value || 'Password is required.',
      value => value.length >= 6 || 'Password must be at least 6 characters.',
    ],
  }),
  methods: {
    async submitForm() {
      if (this.valid) {
        try {
          const response = await axios.post('http://localhost:8080/api/login', {
            email: this.email,
            password: this.password,
          });

          if (response.data.success) {
            this.$store.commit('setUser', response.data.user); // Update the store
            alert('Login successful!');
            this.$router.push('/dashboard');
          } else {
            alert('Login failed: ' + response.data.message);
          }
        } catch (error) {
          console.error('There was an error!', error);
          alert('Login failed!');
        }
      } else {
        alert('Form is not valid');
      }
    },
  },
};
</script>

<style scoped>
.card-centered {
  margin: 0 auto;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  min-width: 400px;
}
</style>
