<template>
  <div id="app" class="antialiased text-gray-900">
    <div class="bg-gray-200">
      <Navigation/>
    </div>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Content from './components/Content'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navigation,
    Content,
    Footer,
    }
}
</script>

<style src="./assets/styles.css">
</style>
