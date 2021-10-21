<template>
  <div class="container p-5 my-4 mx-auto lg:w-3/4">
    <h1 class="text-5xl font-bold mt-5">Welcome 👋</h1>
    <p class="description text-2xl my-3 p-4 mt-5 text-gray-600">
      My name is Mohamed Elhefni
      <small class="text-gray-500">(@hefni101)</small><br />
      I am a software engineer 👩‍💻, code-addicted person ❤️, and a problem solver
      💡.
      <br />
      I love to build software that makes my life easier and automates the
      boring stuff with programming. <br />
      I'm Interested in competitive programming and Back-End Engineering.
    </p>
    <p class="uses text-2xl my-3 p-4 mt-5 text-gray-600">
      I use <mark class="text-gray-600">Zorin OS</mark> as my main OS and
      <mark class="text-gray-600">neovim</mark> as my main texteditor with theme
      gruvbox or nord, <mark class="text-gray-600">zsh</mark> as my shell with
      eclm theme.<br />
      I love to build web applications using
      <mark class="text-gray-600">Vue</mark>,
      <mark class="text-gray-600">React</mark>,
      <mark class="text-gray-600">Node</mark> and
      <mark class="text-gray-600">flask </mark>, most of automation scripts I
      write using <mark class="text-gray-600">Python</mark> or
      <mark class="text-gray-600"> Bash </mark>
    </p>

    <h3 class="text-3xl my-3 font-bold">Skills</h3>
    <div class="skills flex items-center lg:w-3/4 p-2 flex-wrap">
      <div
        class="
          category
          shadow
          transform
          transition
          hover:shadow-lg
          hover:scale-110
          bg-gray-200
          rounded-sm
          px-3
          py-1
          text-sm
          font-semibold
          text-gray-700
          mx-1
          my-1
        "
        v-for="skill in skills"
        :key="skill"
        v-bind="{ class: skill }"
      >
        {{ skill }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: "bg-gray-100",
    },
  },
  data() {
    return {
      skills: [
        "html",
        "css",
        "tailwindcss",
        "javascript",
        "vue",
        "react",
        "php",
        "cpp",
        "c",
        "linux",
        "python",
        "git",
        "vim",
        "flask",
        "Bash",
        "SQL",
        "NodeJs"
      ],
    };
  },
};
</script>

<style>
body,
html,
input,
select,
textarea {
  font-family: "Nunito", sans-serif;
}
a.nuxt-link-active {
  font-weight: bold;
}

a.nuxt-link-exact-active {
  color: rgba(17, 24, 39, var(--tw-text-opacity));
}
mark {
  background-color: rgb(235, 255, 235);
}

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
.c, .linux {
  background: #555555;
  color: #fff;
}
.cpp {
  background: #f34b7d;
  color: #fff;
}
.css {
  background: #f34b7d;
  color: #fff;
}
.html {
  background: #e34c26;
  color: #fff;
}
.SQL {
  background: #e38c00;
  color: #fff;
}
.git {
  background: #f34f29;
  color: #fff;
}
.Bash {
  background: #3b4346;
  color: #fff;
}
.vim {
  background: #007800;
  color: #fff;
}
.flask {
  background: #222;
  color: #fff;
}
.NodeJs {
  background: #6b9f5c;
  color: #fff;
}

</style>
