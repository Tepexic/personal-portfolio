<template>
  <!-- Navigation -->
  <header>
    <div class="flex justify-center flex-wrap">
      <div class="w-48 m-4 py-2 bg-white shadow-lg">
        <img class="w-24 h-24 mx-auto rounded-full" src="logos/avatar.png" />
        <p class="mx-2 mt-2 text-center text-lg text-gray-700 font-semibold">Jesús Velázquez</p>
        <p class="text-center text-gray-600">Software Developer</p>
        <div class="flex justify-center items-center mt-2">
          <a href="https://github.com/Tepexic" target="_blank">
            <i class="fab fa-github-square fa-2x mx-1 text-blue-800 hover:text-orange-500 cursor-pointer"></i>
          </a>
          <a href="https://twitter.com/tepexic" target="_blank">
            <i class="fa fa-twitter-square fa-2x mx-1 text-blue-800 hover:text-orange-500 cursor-pointer"></i>
          </a>
          <a href="https://www.linkedin.com/in/jesusavelazquez" target="_blank">
            <i class="fab fa-linkedin fa-2x mx-1 text-blue-800 hover:text-orange-500 cursor-pointer"></i>
          </a>
          <a href="mailto:tepexic@tepexic.com" target="_blank">
            <i class="fa fa-envelope-square fa-2x mx-1 text-blue-800 hover:text-orange-500 cursor-pointer"></i>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>
  header {
    background: #0F2027;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
</style>