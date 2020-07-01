<template>  
  <div class="container-inner mx-auto py-16 blog">
    <router-view>
    </router-view>
  </div>
</template>

<script>

export default {
  name: 'Blog',
}
</script>

<style scoped>
.blog >>> 
h1 {
  @apply font-semibold leading-loose mb-4 text-4xl;
}
.blog >>> 
h2 {
  @apply font-semibold leading-relaxed mb-2 text-xl;
}
.blog >>>
p {
  @apply my-1
}
.blog >>>
ul {
  @apply my-2;
}
.blog >>>
li {
  @apply list-disc list-inside;
}
</style>