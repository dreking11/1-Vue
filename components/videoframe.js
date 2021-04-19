const videoTag = {
    template: `
      <iframe
              allowFullScreen
              frameborder="0"
              height="376" :src="source.trailer"
                style="width: 100%; min-width: 750px"
              />
  `,
    props: ["source"]
  };