<template>
  <div class="flex-wrap items-center justify-center">
    <Entry v-for="e in entries" :key="e.id"
      :title="e.title" :date="e.date" :description="e.description"
      :link="e.id" :tags="e.tags"/>
  </div>
</template>

<script>
import posts from './../assets/posts.json'
import Entry from './../components/Entry'

const blogEntries = []
Object.keys(posts).map(section => {
  posts[section].forEach(entry => {blogEntries.push(entry)})
})

export default {
  name: 'BlogIndex',

  data: function () {
    return {
      entries: blogEntries
    }
  },

  components: { Entry }
}
</script>

<style>

</style>