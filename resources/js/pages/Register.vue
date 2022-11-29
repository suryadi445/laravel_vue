<template>
  <div>
    <h3>Halaman Register</h3>
    <form @submit.prevent="register" action="" method="POST">
      <div class="input-group">
        <label for="name">Nama</label>
        <input type="text" name="name" id="name" v-model="form.name" />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="form.password"
        />
      </div>
      <div class="input-group">
        <label for="email">Email</label>
        <input type="text" name="email" id="email" v-model="form.email" />
      </div>

      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
        email: "",
      },
    };
  },
  methods: {
    register() {
      axios
        .post("/api/user", this.form)
        .then((response) => {
          this.$router.push({
            name: "User",
          });
        })
        .catch((error) => {
          console.log(error);
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
</style>