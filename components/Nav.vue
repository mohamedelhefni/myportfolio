<template>
  <div class="nav p-5 bg-white dark:bg-gray-700 dark:text-white flex flex-wrap items-center justify-between absolute w-full top-0">
    <div class="routes">
      <ul class="flex flex-wrap items-center">
        <li class="p-3 mx-2 font-bold text-xl hidden  lg:block md:block">
          <NuxtLink to="/" class="dark:text-white">Hefni 101</NuxtLink>
        </li>
        <li class="p-3 mx-2">
          <NuxtLink
            to="/"
            class="font-bold  text-large text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200"
            >Home</NuxtLink
          >
        </li>
        <li class="p-3 mx-2">
          <NuxtLink
            to="/projects"
            class="font-bold text-large text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200"
            >Projects</NuxtLink
          >
        </li>
        <li class="p-3 mx-2">
          <NuxtLink
            to="/blog"
            class="font-bold text-large text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200"
            >Blog</NuxtLink
          >
        </li>
      </ul>
    </div>
    <div class="links">
      <div class="flex items-center">
        <button
          class="mx-2 p-2"
          @click="changeMode"
        >
          <SvgIcon
            cls="fill-current text-sm text-gray-500  hover:text-gray-700 cursor-pointer dark:text-white"
            :icon="themeIcon"
          />
        </button>

        <a href="https://github.com/mohamedelhefni" target="_blank" class="p-2">
          <SvgIcon
            cls="fill-current text-sm text-gray-500 hover:text-gray-700 cursor-pointer dark:text-white"
            icon="github"
        /></a>
        <a
          href="https://www.linkedin.com/in/mohamed-elhefni/"
          target="_blank"
          class="mx-2 p-2"
        >
          <SvgIcon
            cls="fill-current text-sm text-gray-500  hover:text-gray-700 cursor-pointer dark:text-white"
            icon="linkedin"
          />
        </a>
       <a
          href="mailto:mohamed.elhefni@outlook.com"
          target="_blank"
          class="p-2"
        >
          <SvgIcon
            cls="fill-current text-sm text-gray-500  hover:text-gray-700 cursor-pointer dark:text-white"
            icon="mail"
          />
        </a>


      </div>
    </div>
  </div>
</template>

<script>
export default {
   computed: {
        themeIcon() {
            return this.$colorMode.preference === 'light' ? 'moon' : 'sun'
        }
    },
    methods: {
     changeMode() {
            this.$colorMode.preference =
              this.$colorMode.preference === 'light' ? 'dark' : 'light'
        },
      }
}
</script>
