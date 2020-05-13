import Vue from 'vue'
import imageCompare from 'vue-image-compare2'

new Vue ({
    components: {
        imageCompare
    },
    data() {
        return {
            before: 'https://tom.imgix.net/living1before.jpg?w=1000&h=1000&fit=crop&auto=format%2Ccompress',
            after: 'https://tom.imgix.net/living1after.jpg?w=1000&h=1000&fit=crop&auto=format%2Ccompress'
          }
    }
})
Vue.use(imageCompare)
