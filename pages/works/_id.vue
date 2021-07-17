<template>
  <div class="container p-5 mx-auto lg:w-3/4">
    <div class="head flex flex-wrap items-center justify-between">
      <h2 class="text-5xl font-bold">
        {{ project.title }}
      </h2>
      <NuxtLink
        class="font-semibold my-3 text-white hover:bg-blue-700 py-2 px-4 rounded bg-blue-500 text-white"
        to="/projects"
      >
        Back
      </NuxtLink>
    </div>
    <div class="content">
      <div v-html="project.body" class="my-3 p-4"></div>
    </div>
    <!-- <h3 class="text-3xl font-bold my-5">Related Projects</h3>
    <div
      class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-3 mx-auto"
    >
      <ProjectCard
        v-for="project in project.related_posts"
        :key="project.id"
        :project="project"
      />
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: {},
    };
  },
  async fetch() {
    this.project = await fetch(
      `https://mohamedelhefni.000webhostapp.com/wp-json/portfolio/works/${this.$route.params.id}`
    ).then((res) => res.json());
  },
  methods: {},
};
</script>

<style  >
.content a {
  color: #4cacf6 !important;
}
.content figure {
  margin: 20px auto;
}

.content p {
  margin: 1em;
}
</style>