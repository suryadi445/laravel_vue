<template>
<section v-if="$route.params.nama">
<h1>Hello, {{ $route.params.nama }}</h1>
</section>
<section v-else>
    <h1>Daftar List</h1>
</section>
</template>