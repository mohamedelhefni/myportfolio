<template>
  <div class="container p-5 my-4 mx-auto lg:w-3/4">
    <h1 class="text-6xl font-bold mt-5">Welcome 👋</h1>
    <p class="description text-2xl my-3 p-4 mt-5 text-gray-600">
      My name is Mohamed Elhefni
      <small class="text-gray-500">(@hefni101)</small><br />
      I am a software engineer 👩‍💻, code addicted person ❤️, and a problem solver
      I love to build software that makes my life easier and automate the boring
      stuff with programming. <br />
      intersted in competitive programming, Back-End
    </p>
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: "bg-gray-100",
    },
  },
};
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
