<template>
  <div >
    <Nav />
    <main class="mt-44 md:mt-32 lg:mt-32 ">
      <Nuxt />
    </main>
  </div>
</template>

<style>
.dark-mode {
  @apply dark;
}
</style>

<script>
export default {
  head() {
    return {
    bodyAttrs: {
      class: "bg-gray-100 dark:bg-gray-800 dark:text-white",
    },
    htmlAttrs: {
      class: this.$colorMode.preference == "dark" ? "dark-mode" : "light-mode"
    }
    }
  },
  mounted() {
    if(this.$colorMode.preference == "system") {
      this.$colorMode.preference = "dark"
    }
  }
};
</script>
