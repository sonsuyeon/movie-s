<template>
  <div class="home">
    <MovieList />
  </div>
</template>

<script>
// @ is an alias to /src
import MovieList from "@/components/MovieList.vue";

export default {
  name: "HomeView",
  components: {
    MovieList,
  },
};
</script>

<style lang="scss">
/* @import "@/assets/scss/init.scss"; */
</style>
