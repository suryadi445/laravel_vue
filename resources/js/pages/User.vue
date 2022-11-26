<template>
  <section v-if="nama">
    <h1>Hello, {{ nama }}</h1>

    <router-link :to="{ name: 'User' }">Kembali</router-link>
  </section>

  <section v-else>
    <h1>Daftar List</h1>
    <ol>
      <li v-for="user in users" :key="user.id">
        <router-link :to="profil_name(user.name)">{{ user.name }}</router-link>
      </li>
    </ol>
  </section>
</template>

<script>
export default {
  props: ["nama"],
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Suryadi",
        },
        {
          id: 2,
          name: "Khalisa",
        },
        {
          id: 3,
          name: "M.Hafiz",
        },
      ],
    };
  },
  methods: {
    profil_name(nama) {
      return "/user/" + nama.toLowerCase();
    },
  },
};
</script>