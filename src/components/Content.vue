<template>
<div>
  <!--icons by https://iconmonstr.com/ -->
  <!-- About Me -->
  <div class="container-inner mx-auto py-16" id="about">
    <p class="text-lg sm:text-xl text-justify"> I'm based in Mexico (UTC-5). When I'm away from keyboard, I like to cook, play football,
      brew something (mead, beer, coffee) or get some home improvement done. I'm into Sci-Fi and fantasy novels,
      movies, videogames and TV shows. <br>
    </p>
    <p class="text-lg sm:text-xl text-center">
      <a href="images/CV_JesusVelazquez.pdf" target="_blank" class="cv">
        Here's a PDF version of my CV (92kb)
      </a>
    </p>
  </div>

  <div class="overflow-x-hidden">
  <div class="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative">
    <p class="text-lg sm:text-xl mb-6">
      <span class="font-semibold">These are some of the technologies I've worked with:</span>
    </p>
    <div class="grid grid-cols-3 gap-4 mt-3">
      <div class="w-16 mx-auto flex items-center">
        <img src="images/tech-logos/html.svg" alt="HTML 5">
      </div>
      <div class="w-16 mx-auto flex items-center">
        <img src="images/tech-logos/css.svg" alt="CSS 3">
      </div>
      <div class="w-16 mx-auto flex items-center">
        <img src="images/tech-logos/js.svg" alt="Javascript">
      </div>
      <div class="w-16 mx-auto flex items-center">
        <img src="images/tech-logos/vue.svg" alt="VueJS">
      </div>
      <div class="w-16 mx-auto flex items-center">
        <img src="images/tech-logos/react.svg" alt="ReactJS">
      </div>
      <div class="w-16 mx-auto flex items-center">
        <img src="images/tech-logos/node.png" alt="NodeJS">
      </div>
      <div class="w-16 mx-auto flex items-center">
        <img src="images/tech-logos/electron.svg" alt="ElectronJS">
      </div>
      <div class="w-16 mx-auto flex items-center">
        <img src="images/tech-logos/plotly.svg" alt="Plotly">
      </div>
      <div class="w-16 mx-auto flex items-center">
        <img src="images/tech-logos/bootstrap.svg" alt="Bootstrap">
      </div>
      <div class="w-16 mx-auto flex items-center">
        <img src="images/tech-logos/tailwind.svg" alt="TailwindCSS">
      </div>
      <div class="w-16 mx-auto flex items-center">
        <img src="images/tech-logos/git.svg" alt="Git">
      </div>
      <div class="w-16 mx-auto flex items-center">
        <img src="images/tech-logos/github.png" alt="GitHub">
      </div>
      <div class="w-16 mx-auto flex items-center">
        <img src="images/tech-logos/python.svg" alt="Python">
      </div>
      <div class="w-16 mx-auto flex items-center">
        <img src="images/tech-logos/matlab.png" alt="Matlab">
      </div>
      <div class="w-16 mx-auto">
        <img v-if="theme === 'theme-light'" src="images/tech-logos/latex.svg" alt="Latex">
        <img v-else src="images/tech-logos/latex-dark.svg" alt="Latex">
      </div>
    </div>
  </div>
  </div>


</div>
</template>

<script>
//a href="/app/dollar-vue/index.html" target="_blank" rel="noopener">$Vue App</a>
export default {
  name: 'Content',

  props: {
    theme: {
      type: String,
      required: true,
    }
  },

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
  }
}
</script>

<style scoped>
a {
    color: #1c75bc;
}
</style>
