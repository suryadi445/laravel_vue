<template>
  <section v-if="id">
    <h1>Hello, {{ detailuser.name }}</h1>

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
  props: ['id'],
  data() {
    return {
      users: [],
      detailuser: {},
    }
  },
  watch: {
    '$route' : "getUsers"
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios.get("api/user").then((response) => {
        this.users = response.data;
      });

      if(this.id) {
        this.detailuser = this.users.filter(item => item.id == this.id)[0];
      }
    },
    profil_name(nama) {
      return "/user/" + nama.toLowerCase();
    },
    lihatUser(id) {
      this.$router.push({
        name: "User",
        params: { id: id },
      });
    },
  },
};
</script>