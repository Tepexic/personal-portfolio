<template>
  <!-- Navigation -->
  <header class="px-4">
    <nav class="container mx-auto flex flex-col sm:flex-row justify-between items-center py-8">
      <div class="mb-4 sm:mb-0">
          <img v-if="theme === 'theme-light'" src="logos/logo.svg" alt="logo"> 
          <img v-else src="logos/logo-dark.svg" alt="logo">
      </div>
      <ul class="uppercase tracking-wide font-bold flex items-center space-x-8">
        <li>
          <a href="#" class="text-copy-primary hover:text-gray-500" @click.prevent="toggleTheme" alt="Change theme">
            <svg v-if="theme === 'theme-light'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
          </a>
        </li>
        <li>
          <router-link to="/" class="text-copy-primary hover:text-gray-500" alt="Go Home">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/projects" class="text-copy-primary hover:text-gray-500" alt="Go to Projects">
            Projects
          </router-link>
        </li>
        <li>
          <router-link to="/blog" class="text-copy-primary hover:text-gray-500" alt="Go to Blog">
            Blog
          </router-link>
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