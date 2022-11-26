<template>
<section v-if="nama">
<h1>Hello, {{ nama }}</h1>
</section>
<section v-else>
    <h1>Daftar List</h1>
</section>
</template>

<script>
export default {
    props: ['nama']
}
</script>