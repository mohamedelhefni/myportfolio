<template>
    <div class="container p-5 my-4 mx-auto lg:w-3/4 ">
      <h1 class="text-6xl font-bold mt-5" >
        Hi there 👋
      </h1>
      <p class="description text-2xl my-3 p-4 mt-5 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque sequi, in quam vitae nemo tempore, consequatur nisi, reprehenderit assumenda quos atque? Quos beatae esse eius voluptate rem, sapiente eligendi.
      </p>
    </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: "bg-gray-100"
    }
  }
}
</script>

<style>
body, html, input, select, textarea
{
  font-family: 'Nunito', sans-serif;
}
a.nuxt-link-active {
  font-weight: bold;
}

a.nuxt-link-exact-active {
  color: rgba(17, 24, 39, var(--tw-text-opacity));
}
</style>
