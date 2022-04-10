<template>
  <div class="project dark:bg-gray-700  hover:shadow-lg bg-white text-gray-600 dark:text-gray-300 shadow rounded">
    <NuxtLink :to="{ name: 'works-slug', params: { slug: project.slug } }" class=" flex items-left justify-between flex-col h-full" >

      <div class="p-4">
        <h3 class="font-bold text-xl text-gray-700 dark:text-white">
          {{ project.title }}
        </h3>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">{{ project.description }}</p>
      </div>
      <div class="categories flex flex-wrap justify-start items-center py-2 mx-2">
        <div
          class="category shadow bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mx-1 my-1"
          v-for="category in project.categories"
          :key="category"
          v-bind="{ class: category }"
        >
          {{ category }}
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["project"],
};
</script>

<style>
.materializecss {
  background: #ee6e73;
  color: white;
}
.gulp {
  background: #d34446;
  color: white;
}
.xd {
  background: #450135;
  color: white;
}
.firebase {
  background: #ffca2b;
}
.vuetify {
  background: #aeddff;
}
.php {
  background: #6675e0;
  color: white;
}
.tailwindcss {
  background: #06b6d4;
  color: white;
}
.javascript {
  background: #f0db4f;
}
.vue {
  background: #41b883;
  color: white;
}
.react {
  background: #222;
  color: #00d8ff;
}
.python {
  background: #ffda5d;
}
</style>
