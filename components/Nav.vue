<template>
  <div class="nav p-5 bg-white flex items-center justify-between">
    <div class="routes">
      <ul class="flex items-center">
        <li class="p-3 mx-2 font-bold text-xl hidden lg:block md:block">
          <NuxtLink to="/">Hefni 101</NuxtLink>
        </li>
        <li class="p-3 mx-2">
          <NuxtLink
            to="/"
            class="font-bold text-large text-gray-500 hover:text-gray-700"
            >Home</NuxtLink
          >
        </li>
        <li class="p-3 mx-2">
          <NuxtLink
            to="/projects"
            class="font-bold text-large text-gray-500 hover:text-gray-700"
            >Projects</NuxtLink
          >
        </li>
      </ul>
    </div>
    <div class="links">
      <div class="flex items-center">
        <a href="https://github.com/mohamedelhefni" target="_blank" class="p-2">
          <SvgIcon
            cls="fill-current text-sm text-gray-500 hover:text-gray-700 cursor-pointer "
            icon="github"
        /></a>
        <a
          href="https://www.linkedin.com/in/mohamed-elhefni/"
          target="_blank"
          class="mx-2 p-2"
        >
          <SvgIcon
            cls="fill-current text-sm text-gray-500  hover:text-gray-700 cursor-pointer "
            icon="linkedin"
          />
        </a>
        <a href="https://twitter.com/hefni101" target="_blank" class="p-2">
          <SvgIcon
            cls="fill-current text-sm text-gray-500  hover:text-gray-700 cursor-pointer "
            icon="twitter"
          />
        </a>
        <a
          href="mailto:mohamed.elhefni@outlook.com"
          target="_blank"
          class="p-2"
        >
          <SvgIcon
            cls="fill-current text-sm text-gray-500  hover:text-gray-700 cursor-pointer "
            icon="mail"
          />
        </a>
      </div>
    </div>
  </div>
</template>
