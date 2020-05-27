<template>
  <!-- Navigation -->
  <header class="border-t-14 border-blue-800 px-4">
    <nav class="container mx-auto flex flex-col sm:flex-row justify-between items-center py-8">
      <div class="mb-4 sm:mb-0">
        <a href="/" class="active--exact active">
          <img v-if="theme === 'theme-light'" src="logos/logo.svg" alt="logo"> 
          <img v-else src="logos/logo-dark.svg" alt="logo"> 
        </a>
      </div>
      <ul class="uppercase tracking-wide font-bold flex items-center space-x-8">
        <li>
          <a href="#" class="text-copy-primary hover:text-gray-600" @click.prevent="toggleTheme">
            <i v-if="theme === 'theme-light'" class="fas fa-moon"></i>
            <i v-else class="far fa-sun"></i>
          </a>
        </li>
        <li>
          <a href="#about" class="text-copy-primary hover:text-gray-600">
            About
          </a>
        </li>
        <li>
          <a href="#projects" class="text-copy-primary hover:text-gray-600">
            Projects
          </a>
        </li>
        <li>
          <a href="#" class="text-copy-primary hover:text-gray-600">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  
  props: {
    theme: {
      type: String,
      required: true,
    }
  },

  methods: {
    toggleTheme() {
      const newTheme = this.theme === 'theme-light' ? 'theme-dark' : 'theme-light'
      localStorage.setItem('theme', newTheme)
      this.$emit('themeChanged', newTheme)
    }
  }
}
</script>

<style>
</style>