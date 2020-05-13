import Vue from 'vue'
import VueVideoPlayer from 'vue-video-player'
import videojs from 'video.js'

if (process.browser) { const VueVideoPlayer = require('vue-video-player/dist/ssr')
Vue.use(VueVideoPlayer)
}
