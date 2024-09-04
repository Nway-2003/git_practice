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
            v-model="firstname"
            class="mb-6"
            :counter="10"
            :rules="nameRules"
            color="primary"
            label="First name"
            variant="underlined"
            hide-details
            required
          ></v-text-field>

          <v-text-field
            v-model="lastname"
            class="mb-6"
            :counter="10"
            :rules="nameRules"
            color="primary"
            label="Last name"
            variant="underlined"
            hide-details
            required
          ></v-text-field>

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
          <v-btn color="success" type="submit">Sign Up
            <v-icon icon="mdi-chevron-right" end></v-icon>
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>




    <Footer style="position: absolute; right: 0; left: 0; bottom: 0" />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import axios from 'axios';

export default {
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required.',
        v => v.length <= 10 || 'Name must be less than 10 characters.',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required.',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid.',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required.',
        v => v.length >= 6 || 'Password must be at least 6 characters.',
      ],
    };
  },
  methods: {
    async submitForm() {
      if (this.valid) {
        try {
          await axios.post('http://localhost:8080/api/signup', {
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
          });
          alert('Sign Up successful!');
          this.$router.push('/login');
        } catch (error) {
          console.error('There was an error!', error);
          alert('Sign Up failed!');
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
