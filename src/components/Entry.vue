<template>
  <div 
    class="w-full py-2 px-4 my-6 shadow-lg rounded-lg border-2 border-gray-300 lg:my-10 lg:py-4 lg:px-8"
  >
  <div>
    <div class="text-3xl font-semibold text-blue-700 leading-relaxed text-center">
      {{ title }}
    </div>
    <div class="mt-1 text-right text-xs">
      {{ date }}
    </div>
    <div class="mt-2 flex items-start">
      <div
        v-for="(t, i) in tags"
        :key="t"
        :class = "['border-'+colors[i]+'-500', 'bg-'+colors[i]+'-500']"
        class = "text-xs uppercase rounded-full border-2 text-white font-semibold py-1 px-4 mx-1 shadow-md"
        >
        {{t}}
      </div>
    </div>
    <div class="mt-2">
      {{ description }}
    </div>
  </div>
  <div class="flex justify-end mt-4">
    <router-link :to="'/blog/post/' + link" class="text-xl text-copy-secondary border-2 border-gray-500 rounded px-8 py-1 hover:bg-gray-300">
      Leer
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'Entry',

  data: function () {
    return {
      colors: ["orange", "indigo", "purple", "pink", "teal", "green", "red", "yellow"]
    }
  },

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
    },
    tags: {
      type: Array,
      default: () => {["Post","resources", "webdev", "hosting","Post","resources", "webdev", "hosting"]},
    }
  },
}
</script>

<style>

</style>