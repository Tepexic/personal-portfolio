<template>
<div>
  <!-- About Me -->
  <div class="container-inner mx-auto py-16" id="about">
    <p class="text-lg sm:text-xl text-justify"> I'm based in Mexico (UTC-5). When I'm away from keyboard, I like to cook, play football,
      brew something (mead, beer, coffee) or get some home improvement done. I'm into Sci-Fi and fantasy novels,
      movies, videogames and TV shows. <br>
    </p>
    <p class="text-lg sm:text-xl text-center">
      <a href="images/CV_JesusVelazquez.pdf" target="_blank">
        Here's a PDF version of my CV (92kb)
      </a>
    </p>
  </div>

  <div class="overflow-x-hidden">
  <div class="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative">
    <p class="text-lg sm:text-xl mb-6">
      <span class="font-semibold">These are some of the technologies I've worked with:</span>
    </p>
    <div class="grid grid-cols-3 gap-4 mt-3 flex items-center">
      <div class="w-16 mx-auto">
        <img src="images/tech-logos/html.svg" alt="mobile">
      </div>
      <div class="w-16 mx-auto">
        <img src="images/tech-logos/css.svg" alt="mobile">
      </div>
      <div class="w-16 mx-auto">
        <img src="images/tech-logos/js.svg" alt="mobile">
      </div>
      <div class="w-16 mx-auto">
        <img src="images/tech-logos/vue.svg" alt="mobile">
      </div>
      <div class="w-16 mx-auto">
        <img src="images/tech-logos/react.svg" alt="mobile">
      </div>
      <div class="w-16 mx-auto">
        <img src="images/tech-logos/node.svg" alt="mobile">
      </div>
      <div class="w-16 mx-auto">
        <img src="images/tech-logos/electron.svg" alt="mobile">
      </div>
      <div class="w-16 mx-auto">
        <img src="images/tech-logos/plotly.svg" alt="mobile">
      </div>
      <div class="w-16 mx-auto">
        <img src="images/tech-logos/bootstrap.svg" alt="mobile">
      </div>
      <div class="w-16 mx-auto">
        <img src="images/tech-logos/tailwind.svg" alt="mobile">
      </div>
      <div class="w-16 mx-auto">
        <img src="images/tech-logos/git.svg" alt="mobile">
      </div>
      <div class="w-16 mx-auto">
        <img src="images/tech-logos/github.svg" alt="mobile">
      </div>
      <div class="w-16 mx-auto">
        <img src="images/tech-logos/python.svg" alt="mobile">
      </div>
      <div class="w-16 mx-auto">
        <img src="images/tech-logos/matlab.png" alt="mobile">
      </div>
      <div class="w-16 mx-auto">
        <img v-if="theme === 'theme-light'" src="images/tech-logos/latex.svg" alt="mobile">
        <img v-else src="images/tech-logos/latex-dark.svg" alt="mobile">
      </div>
    </div>
  </div>
  </div>

  <footer class="bg-blue-800 text-white px-4">
    <div class="container mx-auto flex flex-col sm:flex-row items-center justify-between py-8">
      <div class="mb-8 sm:mb-0">
        Mexico, 2020.
      </div>
      <ul class="flex items-center space-x-8">
        <li>
          <a href="mailto:tepexic@tepexic.com" target="_blank">
            <i class="fa fa-envelope-square fa-3x mx-1 text-blue-100 hover:text-blue-300 cursor-pointer"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jesusavelazquez" target="_blank">
            <i class="fab fa-linkedin fa-3x mx-1 text-blue-100 hover:text-blue-300 cursor-pointer"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/Tepexic" target="_blank">
            <i class="fab fa-github-square fa-3x mx-1 text-blue-100 hover:text-blue-300 cursor-pointer"></i>
          </a>
        </li>
          <a href="https://twitter.com/tepexic" target="_blank">
            <i class="fa fa-twitter-square fa-3x mx-1 text-blue-100 hover:text-blue-300 cursor-pointer"></i>
          </a>
      </ul>
    </div>
  </footer>

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
