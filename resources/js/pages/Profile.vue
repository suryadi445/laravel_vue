<template>
  <section v-if="id">
    <h1>Hello, {{ detailuser.name }}</h1>
    <h5>Email : {{ detailuser.email }}</h5>

    <router-link :to="{ name: 'User' }">Kembali</router-link>
  </section>

  <section v-else>
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
  props: ["id"],
  data() {
    return {
      detailuser: {},
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios.get("/api/user/" + this.id).then((res) => {
        this.detailuser = res.data;
      });
    },
  },
};
</script>