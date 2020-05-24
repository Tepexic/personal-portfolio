<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <a :href="'app/' + link" target="_blank" rel="noopener">
      <img class="w-full" :src="image" :alt="title">
    </a>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-gray-700 text-base text-justify">
        {{ description }}
      </p>
    </div>
    <div class="px-6 py-4">
      <span class="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2">
        <a :href="'app/' + link" target="_blank" rel="noopener">
          Live Demo
        </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    description: String,
    image: String,
    link: String
  }
}
</script>

<style>

</style>