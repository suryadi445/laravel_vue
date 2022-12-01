<template>
  <div>
    <h3>Halaman Register</h3>
    <form @submit.prevent="register" action="" method="POST">
      <div class="input-group">
        <label for="name">Nama</label>
        <input type="text" name="name" id="name" v-model="form.name" />
        <div class="errors" v-if="error.name">
          {{ error.name[0] }}
        </div>
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="form.password"
        />
        <div class="errors" v-if="error.password">
          {{ error.password[0] }}
        </div>
      </div>
      <div class="input-group">
        <label for="email">Email</label>
        <input type="text" name="email" id="email" v-model="form.email" />
        <div class="errors" v-if="error.email">
          {{ error.email[0] }}
        </div>
      </div>

      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";

export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
        email: "",
      },
      error: {},
    };
  },
  setup() {
    const toast = useToast();

    return { toast };
  },
  methods: {
    register() {
      axios
        .post("/api/user", this.form)
        .then((response) => {
          console.log(response.data.message);
          if (response.status) {
            this.$router.push({
              name: "User",
            });
            this.toast.success(response.data.message);
          }
        })
        .catch((error) => {
          if (error.response.status == 422) {
            this.error = error.response.data.errors;
            this.toast.error("Error save data");
          }
        });
    },
  },
};
</script>

<style>
.input-group {
  margin-bottom: 10px;
}

label {
  margin-right: 10px;
}

.errors {
  color: red;
}
</style>