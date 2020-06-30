<template>
  <div class="w-8/12 py-4 px-8 shadow-lg rounded-lg my-10 mx-5 border-2 border-gray-300">
  <div>
    <h2 class="text-3xl font-semibold text-blue-700 leading-tight"> {{ title }} </h2>
    <div class="mt-1 text-right text-xs">
      {{ date }}
    </div>
    <p class="mt-2">{{ description }}</p>
  </div>
  <div class="flex justify-end mt-4">
    <router-link :to="'/blog/post/' + link" class="text-xl text-copy-secondary">Leer</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'Entry',

  props: {
    title: {
      type: String,
      default: 'Blog post'
    },
    date: {
      type: String,
      default: 'January 1st, 2020'
    },
    description: {
      type: String,
      default: 'A new blogpost'
    },
    link: {
      type: String,
      default: '/blog'
    }
  },
}
</script>

<style>

</style>