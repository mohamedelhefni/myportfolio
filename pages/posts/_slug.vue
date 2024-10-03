<template>
  <div class="container mx-auto px-3  lg:w-7/12 md:w-3/4" :class="{ rtl: post.rtl, 'font-custom': post.rtl }">
    <div class="flex items-center justify-between gap-3">
      <div>
        <h1 class="title font-bold text-2xl lg:text-5xl md:text-3xl my-2 ">
          {{ post.title }}
        </h1>
        <span class="text-sm text-muted ">{{ post.date }}</span>
      </div>
      <NuxtLink to="/blog" class="rounded shadow px-3 py-1 bg-blue-500 text-white font-semibold ">Back</NuxtLink>
    </div>

    <div
      class="content  text-gray-600 dark:text-gray-300  my-3 w-full  mt-10">
      <nuxt-content class="prose-lg dark:prose-invert" :document="post" />
    </div>
  </div>
</template>



<script>
export default {
  async asyncData({ $content, params }) {
    const allRTL = new RegExp(
      "^[\u0590-\u05fe\u0600-۾܀-ݎݐ-ݾހ-\u07be߀-\u07fe\u0800-\u083e\u0840-\u085e\u08a0-\u08fe\u0900-ॾ]|\ud802[\udf60-\udf7e]+$"
    )

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const post = await $content("posts", params.slug).fetch();
    post.date = new Date(post.date).toLocaleDateString('en-US', options)
    post.rtl = allRTL.test(post.title)
    return { post };
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        }
      ]
    }
  }

};
</script>

<style>
a[target=_blank] {
  @apply text-blue-500
}

h1, h2, h3 {
  @apply font-bold
}
</style>
