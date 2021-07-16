<template>
  <div class="container mx-auto p-5 lg:w-3/4">
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
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const  projects = await fetch("https://mohamedelhefni.000webhostapp.com/wp-json/portfolio/works/").then(res => res.json())
    return {projects}
  }
}
</script>
