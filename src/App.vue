<template>
  <div id="app" class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen" :class="theme">
    <Navigation :theme="theme" @themeChanged="updateTheme"/>
    <Hero/>
    <Content :theme="theme"/>
    <Foot/>
  </div>
</template>

<script>

import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Content from './components/Content'
import Foot from './components/Foot'

export default {
  name: 'App',

  data: function () {
    return {
      theme: '',
    }
  },

  components: {
    Navigation,
    Hero,
    Content,
    Foot,
  },

  methods: {
    updateTheme(theme) {
      this.theme = theme
    }
  },

  mounted() {
    this.theme = localStorage.getItem('theme') || 'theme-light'
  },
}
</script>

<style>
@import './assets/styles.css'
</style>
