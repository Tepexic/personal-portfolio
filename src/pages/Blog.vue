<template>  
  <div class="container-inner mx-auto lg:py-16 xl:py-16 md:py-16 py-10 blog">
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
  @apply font-semibold text-teal-600;
}

.blog >>>
a:hover {
  @apply font-bold text-teal-800;
}

</style>