const thumbnail = {
    template: `
    <div class="thumbnails">
   <div v-for="movie in movies">
      <div class="poster" @click="changeCurrent(movie)">
        <img :src="movie.poster" height="200"alt="">
      </div>
    </div>
    </div>
  `,
    props: ["movies"],
    methods: {
      changeCurrent(movie) {
        this.$emit('choose-movie', movie)
      }
    }
  };