<template>
   <div class="container mx-auto p-3 lg:w-3/4" :class="{rtl: post.rtl, 'font-cairo': post.rtl}">
     <h1 class="title font-bold text-2xl lg:text-5xl text-center my-2 p-4">
        {{post.title}}
     </h1>
     <div class="flex items-center justify-between w-3/4 mx-auto my-2 mt-4">
      <div class="back">
        <NuxtLink to="/blog" class="rounded shadow px-3 py-1 bg-blue-500 text-white font-semibold " >Back</NuxtLink>
      </div>
      <div class="date  p-2 rounded px-3 py-1 text-sm font-semibold ">
        {{post.date}}
      </div>
     </div>
     <div class="content dark:bg-gray-700  hover:shadow-lg bg-white text-gray-600 dark:text-gray-300 shadow rounded my-3 w-full p-5 mt-10">
      <nuxt-content :document="post" />
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
    post.rtl =  allRTL.test(post.title)
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

<style >
 .content h1 {
    @apply font-bold text-3xl my-3 mb-4 lg:text-5xl
  }
 .content h2 {
    @apply font-bold text-2xl my-2 mb-3 lg:text-4xl
 sm:text-3xl }
 .content h3 {
    @apply font-bold text-xl my-2
  }
 .content h4 {
    @apply text-2xl
  }
 .content h5 {
    @apply text-xl
  }
  .content ul {
    @apply list-inside list-disc
  }
  .content p {
   @apply p-2 text-base lg:text-lg
  }
  .content a {
    @apply text-blue-500 font-semibold
  }
  .content hr {
    @apply w-3/6 mx-auto my-5
  }
  .content pre {
   @apply rounded;
   direction: ltr !important;
  }

  .content img {
    @apply mx-auto my-5 max-h-64 
  }
  .content ul ul {
    @apply ml-14
  }
  
</style>
