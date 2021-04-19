var app = new Vue({
    el: "#app",
    components: {
      "video-frame": videoTag,
      "video-thumbnails": thumbnail
    },
    data() {
      return {
        api: "https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/who_is_24g.mp4",
        movies: [],
        current: null
      };
    },
    created() {
      axios.get(this.api).then(res => {
        this.movies = res.data;
        this.current = this.movies[0]
      });
    },
    methods: {
      handleChangeCurrent(movie) {
        this.current = movie
      }
    }
  });