<template>
  <div class="post dark:bg-slate-700 transform transition  hover:scale-95 bg-white text-gray-600 dark:text-gray-300 shadow rounded my-3 w-full" :class="{rtl: post.rtl, 'font-cairo': post.rtl}">
    <NuxtLink :to="{ name: 'posts-slug', params: { slug: post.slug } }">
      <img
        v-if="post.image"
        :src="post.image"
        class="w-full rounded max-h-52 h-48 object-cover"
        alt=""
      />
      <div class="content p-4">
        <h1 class="font-bold text-2xl lg:text-4xl sm:text-xl p-2 mb-3 text-gray-700 dark:text-white">
          {{ post.title }}
        </h1>
        <p class="excerpt text-sm font-semibold p-2">
        {{ post.description}}
        </p>
      </div>
      <div class="flex items-center justify-between w-full px-2">
        <div class="categories flex flex-wrap justify-start items-center py-2 mx-2">
          <div
            class="category shadow bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mx-1 my-1"
            v-for="tag in post.tags"
            :key="tag"
            v-bind="{ class: tag }"
          >
            {{ tag }}
          </div>
        </div>
        <div class="date p-2 rounded px-3 py-1 text-sm font-semibold ">
          {{post.date}}
        </div>
     </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style>
</style>
