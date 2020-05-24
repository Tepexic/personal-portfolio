<template>
<div>
  <!-- Page Content -->
      <div class="container-inner mx-auto">
        <p class="text-lg sm:text-xl"> I'm based in Mexico. When I'm away from keyboard, I like to cook, play football&#9917;,
          brew something (mead, beer or coffee) or get some home improvement done. I'm into Sci-Fi and fantasy novels,
          movies, videogames and TV shows. <br>
          Here are some of the technologies I've worked with:</p>
      <div class="flex justify-between items-center py-6">
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <g-image src="../../static/mind_map.svg" alt="browser" />
        </div>
        <div class="w-1/2 px-8 hidden sm:flex justify-end">
          <g-image src="../../static/code_review.svg" alt="mobile" />
        </div>
      </div>
    </div>


  <div class="w-full p-6 bg-grey-700">
    <div class="justify-center p-5 space-x-5 h-50">
      <Carousel/>
    </div>
    <div class="flex justify-center flex-wrap p-5 space-x-5">
      <Card v-for="e in apps" :key="e.id" v-bind="e"/>    
    </div>
  </div>
</div>
</template>

<script>
import Card from './Card'
import Carousel from './Carousel'
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
      ],
    }
  },

  components: { 
    Card,
    Carousel,
  }
}
</script>

<style>

</style>