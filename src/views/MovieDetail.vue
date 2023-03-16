<template>
  <div class="MovieDetail"><MovieContent /></div>
</template>

<script>
// @ is an alias to /src
import MovieContent from "@/components/MovieContent.vue";

export default {
  name: "HomeView",
  components: {
    MovieContent,
  },
};
</script>
