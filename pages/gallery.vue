<template>
  <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      class="image"
      @click="index = imageIndex"
    >
      <ix-img
        :src="image"
        :imgixParams="{
          fit: 'crop',
          crop: 'faces,entropy',
          ar: '1:1'
        }"
        sizes="(min-width: 1040px) 15vw, 100vw"
      />
    </div>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery'

export default {
  components: {
    gallery: VueGallery
  },
  data() {
    return {
      images: [
        'artsy/1.jpg',
        'artsy/2.jpg',
        'artsy/3.jpg',
        'artsy/4.jpg',
        'artsy/5.jpg',
        'artsy/6.jpg',
        'artsy/7.jpg',
        'artsy/8.jpg',
        'artsy/9.jpg',
        'artsy/10.jpg',
        'artsy/11.jpg',
        'artsy/12.jpg',
        'artsy/13.jpg',
        'artsy/14.jpg',
        'artsy/15.jpg',
        'artsy/16.jpg'
      ],
      index: null
    }
  }
}
</script>

<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>
