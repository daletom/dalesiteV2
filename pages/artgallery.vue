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
        :imgixParams="{ fit: 'fill' }"
        sizes="(min-width: 1040px) 15vw, 100vw"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'artgallery_tom_forrest.jpg',
        'artgallery_tom_snowtrees.jpg',
        'artgallery_tom_lake_w.jpg',
        'artgallery_tom_lake.jpg',
        'artgallery_tom_bedtree.jpg',
        'artgallery_tom_dunesunset_w.jpg',
        'artgallery_tom_dunesunset.jpg',
        'artgallery_tom_cabin.jpg',
        'artgallery_tom_beachfence.jpg',
        'artgallery_tom_clint.jpg'
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
