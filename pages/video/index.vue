<template>
  <section class="container">
    <div class="video-player-box">
      <video-player :options="videoOptions" />
    </div>
  </section>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer.vue";

export default {
  components: {
    VideoPlayer,
  },
  data() {
    return {
      videoOptions: {
        autoplay: true,
        controls: true,
        sources: [
          {
            src:
              "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
              type: "application/xmpegURL"
          }
        ]
      }
    }
  },
  mounted() {
    console.log('this is current player instance object', this.myVideoPlayer)
  },
  methods: {
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    onPlayerEnded(player) {
      // console.log('player ended!', player)
    },
    onPlayerLoadeddata(player) {
      // console.log('player Loadeddata!', player)
    },
    onPlayerWaiting(player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying(player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate(player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },
    playerStateChanged(playerCurrentState) {
      console.log('player current update state', playerCurrentState)
    },
    playerReadied(player) {
      console.log('example 01: the player is readied', player)
    }
  }
}
</script>
<style>
.container {
  width: 60%;
  margin: 0 auto;
  padding: 50px 0;
}
.video-player-box {
  min-height: 200px;
}
</style>
