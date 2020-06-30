<template>
  <div>
    <Hero/>
    <Content :theme="theme"/>
    <Foot/>
  </div>
</template>

<script>
// Import Components
import Hero from './../components/Hero'
import Content from './../components/Content'
import Foot from './../components/Foot'

export default {
  name: 'index',

  props: {
    theme: {
      type: String,
      required: true,
    }
  },

  components: {
    Hero,
    Content,
    Foot,
  },

}
</script>

<style>
</style>
