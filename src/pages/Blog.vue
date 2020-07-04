<template>  
  <div
    class="mx-auto flex justify-center sm:flex-row py-8 px-8"
    :class="[currentPage.includes('post') ? 'blog container-inner' : 'container']">
    <transition name="moveUp" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>

export default {
  name: 'Blog',

  computed: {
    currentPage() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
 
.blog >>> 
h1 {
  @apply font-semibold leading-relaxed my-8 text-4xl;
}

.blog >>> 
h2 {
  @apply font-semibold leading-relaxed my-6 text-xl;
}

.blog >>>
p {
  @apply my-4 text-lg text-justify;
}

.blog >>>
ul {
  @apply my-2;
}

.blog >>>
li {
  @apply list-disc list-inside;
}

.blog >>>
pre {
  @apply px-4;
}

.blog >>>
code {
  @apply p-4;
}

.blog >>>
table {
  @apply table-auto;
}

.blog >>>
th {
  @apply font-semibold mb-4;
}

.blog >>>
td {
  @apply px-4 py-2;
}

.blog >>>
a {
  @apply font-semibold text-blue-500;
}

.blog >>>
a:hover {
  @apply font-bold text-blue-400;
}

.blog >>>
img {
  @apply w-4/5 p-8 rounded-lg shadow-lg border-2 border-gray-300 m-auto;
}
</style>