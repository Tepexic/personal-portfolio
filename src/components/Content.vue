<template>
  <!-- Page Content -->
  <div class="w-full p-6 bg-gray-100">
    <div class="flex justify-center flex-wrap p-5 space-x-5">
      <Card v-for="e in apps" :key="e.id" v-bind="e"/>    
    </div>
  </div>
</template>

<script>
import Card from './Card'
//a href="/app/dollar-vue/index.html" target="_blank" rel="noopener">$Vue App</a>
export default {
  name: 'Content',

  data: function () {
    return {
      apps: [
        {
          id: 1,
          title: "$ Vue",
          image: "images/dollar-vue.png",
          description: "Vue app to keep account balance. Uses Vuex and Router. Final project of Scrimba's Vue Bootcamp.",
          link: "dollar-vue/index.html"
        },
        {
          id: 2,
          title: "Twitter sentiment analysis",
          image: "images/twitter-sentiment.png",
          description: "Analize how people react to a specific query",
          link: "twitter-sentiment/index.html"
        }
      ]
    }
  },

  components: { 
    Card
  }
}
</script>

<style>

</style>