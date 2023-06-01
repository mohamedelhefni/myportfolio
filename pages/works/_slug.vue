<template>
  <div class="dark:bg-slate-800 dark:text-white min-h-screen">
    <article class="container p-5 mx-auto lg:w-3/4">
      <div class="head flex flex-wrap items-center justify-between">
        <h1 class="text-5xl font-bold">
          {{ work.title }}
        </h1>

        <NuxtLink
          class="
            font-semibold
            my-3
            text-white
            hover:bg-blue-700
            py-2
            px-4
            rounded
            bg-blue-500
            text-white
          "
          to="/projects"
        >
          Back
        </NuxtLink>
      </div>

      <video v-if="work.video" controls class="my-3">
        <source :src="work.video" />
      </video>
      <nuxt-content class="prose-lg dark:prose-invert" :document="work" />
    </article>
  </div>

  <!-- <div class="head flex flex-wrap items-center justify-between">
      <h2 class="text-5xl font-bold">
        {{ project.title }}
      </h2>
      <NuxtLink
        class="
          font-semibold
          my-3
          text-white
          hover:bg-blue-700
          py-2
          px-4
          rounded
          bg-blue-500
          text-white
        "
        to="/projects"
      >
        Back
      </NuxtLink>
    </div>
    <div class="content">
      <div v-html="project.body" class="my-3 p-4"></div>
    </div>

  </div> -->
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const work = await $content("works", params.slug).fetch();

    return { work };
  },
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
