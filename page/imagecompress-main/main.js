"use strict"

const app = Vue.createApp({
  data() {
    return {
      url: "",
      displayWdith: 200,
      slider_mb: 1,
      slider_wh: 200,
      slider_q: 100,
      slider_dwh: 200,
      originalSize: 0,
      compressedSize: 0,
      prog: 0,
      displayNone: true,
    }
  },
  watch: {
    slider_dwh() {
      this.displayWdith = this.slider_dwh;
      console.log(this.displayWdith);
    }
  },
  methods: {
    async ImageDsplay() {
      const file = this.$refs.preview.files[0];
      if(file) this.displayNone = false;
      const options = {
        maxSizeMB: this.slider_mb / 1024,
        maxWidthOrHeight: this.slider_wh,
        initialQuality: this.slider_q / 100,
        onProgress: (progress) => {this.prog = progress;},
      };

      try {
        const compressedFile = await imageCompression(file, options);
        this.url = URL.createObjectURL(compressedFile);
        this.originalSize = file.size / 1024;
        this.compressedSize = compressedFile.size / 1024;
        setTimeout(() => {
          this.displayNone = true;
        }, 150);
        return 0;
      } catch(error) {
        console.log(error);
        return -1;
      }
    },
  }
})
app.mount("#app")