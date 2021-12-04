<template>
  <div class="min-h-screen">
    <div class="container mx-auto p-5 lg:w-3/4">
      <h1 class="font-bold mb-7 text-6xl text-center">Posts ✍️ </h1>
      <div class="posts lg:w-4/5 mx-auto flex items-center justify-center flex-wrap">
        <PostCard :key="post.slug" v-for="post in posts" :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods() {

  },
  async asyncData({$content}) {
    const posts = await $content('posts').only(['title', 'description', 'date', 'tags', 'slug']).sortBy('date', 'desc').fetch()
    const allRTL = new RegExp(
              "^[\u0590-\u05fe\u0600-۾܀-ݎݐ-ݾހ-\u07be߀-\u07fe\u0800-\u083e\u0840-\u085e\u08a0-\u08fe\u0900-ॾ]|\ud802[\udf60-\udf7e]+$"
            )
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    posts.forEach(post => {
      post.date = new Date(post.date).toLocaleDateString('en-US', options)
      post.rtl = allRTL.test(post.title);
    })
    return {posts}
  }

}
</script>
