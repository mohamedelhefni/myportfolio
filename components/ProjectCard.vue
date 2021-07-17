<template>
  <div class="project hover:shadow-lg bg-white text-gray-600 shadow rounded">
    <NuxtLink :to="{ name: 'works-id', params: { id: project.id } }">
      <img
        :src="project.image"
        class="w-full rounded max-h-52 h-48 object-cover"
        alt=""
      />
      <div class="content p-4">
        <h3 class="font-bold text-xl text-gray-700">
          {{ project.title }}
        </h3>
        <p class="text-sm text-gray-500">{{ project.excerpt }}</p>
      </div>
      <div class="categories flex flex-wrap justify-start items-center py-2">
        <div
          class="category shadow bg-gray-200 roundedl px-3 py-1 text-sm font-semibold text-gray-700 mx-1 my-1"
          v-for="category in project.categories"
          :key="category.id"
          v-bind="{ class: category.name }"
        >
          {{ category.name }}
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
