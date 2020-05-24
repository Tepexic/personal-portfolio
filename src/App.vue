<template>
  <div id="app" content-wrapper font-sans bg-background-primary text-copy-primary leading-relaxed flex flex-col min-h-screen theme-light>
    <Navigation/>
    <Hero/>
    <Content/>
    <Footer/>
  </div>
</template>

<script>

import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Content from './components/Content'
import Footer from './components/Footer'

export default {
  name: 'App',

  components: {
    Navigation,
    Hero,
    Content,
    Footer,
    }
}
</script>

<style src="./assets/styles.css">
</style>
