<template >
  <div class="dark:bg-gray-800 dark:text-white">
    <div class="container  mx-auto p-5 lg:w-3/4">
    <h2 class="text-3xl font-semibold">Projects 🌟</h2>
    <div class="projects mt-4
        grid grid-cols-1
        lg:grid-cols-3
        md:grid-cols-2
        sm:grid-cols-1
        xs:grid-cols-1
        gap-3
        mx-auto

      ">
      <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
    </div>

    </div>
  </div>
</template>

<script>
export default {
  async asyncData({$content}) {
    // const  projects = await fetch("https://mohamedelhefni.000webhostapp.com/wp-json/portfolio/works/").then(res => res.json())
    const projects = await $content('works').only(['title', 'description', 'image', 'categories', 'slug']).sortBy('date', 'desc').fetch()
    return {projects}
  }
}
</script>
