<template>
  <section>
    <br />
    <router-link :to="register()">Registrasi</router-link>
    <h1>Daftar List</h1>

    <ol>
      <li v-for="user in users" :key="user.id">
        <!-- <router-link :to="profil_name(user.name)">{{ user.name }}</router-link> -->
        <a href="" @click.prevent="lihatUser(user.id)">{{ user.name }}</a>
      </li>
    </ol>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios.get("api/user").then((response) => {
        this.users = response.data;
      });
    },
    profil_name(nama) {
      return "/user/" + nama.toLowerCase();
    },
    lihatUser(id) {
      this.$router.push({
        name: "Profile",
        params: { id: id },
      });
    },
    register() {
      return "/user/create";
    },
  },
};
</script>