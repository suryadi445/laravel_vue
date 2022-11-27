<template>
  <section v-if="nama">
    <h1>Hello, {{ nama }}</h1>

    <router-link :to="{ name: 'User' }">Kembali</router-link>
  </section>

  <section v-else>
    <h1>Daftar List</h1>
    <ol>
      <li v-for="user in users" :key="user.id">
        <!-- <router-link :to="profil_name(user.name)">{{ user.name }}</router-link> -->
        <a href="" @click.prevent="lihatUser(user.name)">{{ user.name }}</a>
      </li>
    </ol>
  </section>
</template>

<script>
import axios from "axios";

export default {
  props: ["nama"],
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    axios.get("api/user").then((response) => {
      this.users = response.data;
    });
  },
  methods: {
    profil_name(nama) {
      return "/user/" + nama.toLowerCase();
    },
    lihatUser(nama) {
      this.$router.push("/user/" + nama.toLowerCase());
    },
  },
};
</script>