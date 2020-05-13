<template>
  <div>
    <h1>The Dales</h1>
    <h2>Click a person to go to their page</h2>

    <nuxt-link to="/tom"
      ><ix-img
        src="krennic_profile.png"
        alt="Tom"
        :imgixParams="{
          txtlineclr: 'ff0000',
          txtline: '.5',
          border: '10,73ff0000',
          txtsize: '112',
          txtpad: '80',
          txtalign: 'center',
          txtfont: 'HelveticaNeue-Thin',
          txtclr: 'fff',
          txtfit: 'max',
          txt: 'Tom',
          fit: 'crop',
          ar: '1:1'
        }"
        sizes="(min-width:1240px) 450px, 90vw"
    /></nuxt-link>

    <nuxt-link to="/heather"
      ><ix-img
        src="portrait_heather.jpg"
        alt="Heather"
        :imgixParams="{
          txtlineclr: 'ff0000',
          txtline: '.5',
          border: '10,73ff0000',
          txtsize: '112',
          txtpad: '80',
          txtalign: 'center',
          txtfont: 'HelveticaNeue-Thin',
          txtclr: 'fff',
          txtfit: 'max',
          txt: 'Heather',
          fit: 'crop',
          ar: '1:1'
        }"
        sizes="(min-width:1240px) 450px, 90vw"
    /></nuxt-link>

    <nuxt-link to="/zeek"
      ><ix-img
        src="beach_zeek.jpg"
        alt="Zeek"
        :imgixParams="{
          txtlineclr: 'ff0000',
          txtline: '.5',
          border: '10,73ff0000',
          txtsize: '112',
          txtpad: '80',
          txtalign: 'center',
          txtfont: 'HelveticaNeue-Thin',
          txtclr: 'fff',
          txtfit: 'max',
          txt: 'Zeek',
          fit: 'crop',
          ar: '1:1'
        }"
        sizes="(min-width:1240px) 450px, 90vw"
    /></nuxt-link>

    <nuxt-link to="/izzy"
      ><ix-img
        src="izzy_sharks.jpg"
        alt="Izzy"
        :imgixParams="{
          txtlineclr: 'ff0000',
          txtline: '.5',
          border: '10,73ff0000',
          txtsize: '112',
          txtpad: '80',
          txtalign: 'center',
          txtfont: 'HelveticaNeue-Thin',
          txtclr: 'fff',
          txtfit: 'max',
          txt: 'Izzy',
          fit: 'crop',
          ar: '1:1'
        }"
        sizes="(min-width:1240px) 450px, 90vw"
    /></nuxt-link>

    <nuxt-link to="/gallery"
      ><ix-img
        src="gallery.png"
        alt="Gallery"
        :imgixParams="{
          txtlineclr: 'ff0000',
          txtline: '.5',
          border: '10,73ff0000',
          txtsize: '112',
          txtpad: '80',
          txtalign: 'center',
          txtfont: 'HelveticaNeue-Thin',
          txtclr: 'fff',
          txtfit: 'max',
          txt: 'Gallery',
          fit: 'crop',
          ar: '1:1'
        }"
        sizes="(min-width:1240px) 450px, 90vw"
    /></nuxt-link>

    <nuxt-link to="/"
      ><ix-img
        src="gallery.png"
        alt="Video"
        :imgixParams="{
          txtlineclr: 'ff0000',
          txtline: '.5',
          border: '10,73ff0000',
          txtsize: '112',
          txtpad: '80',
          txtalign: 'center',
          txtfont: 'HelveticaNeue-Thin',
          txtclr: 'fff',
          txtfit: 'max',
          txt: 'Video',
          fit: 'crop',
          ar: '1:1'
        }"
        sizes="(min-width:1240px) 450px, 90vw"
    /></nuxt-link>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'The Dales',
      meta: [
        { name: 'twitter:title', content: 'The Dales' },
        { name: 'twitter:description', content: 'Dale Family Website' },
        {
          name: 'twitter:image',
          content: 'https://tom.imgix.net/thedales.svg?fm=png'
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'og:title', content: 'The Dales' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://thedales.me' },
        {
          name: 'og:image',
          content: 'https://tom.imgix.net/thedales.svg?fm=png'
        }
      ]
    }
  }
}
</script>
