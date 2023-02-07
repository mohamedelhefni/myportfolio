<template>
  <div >
    <Nav />
    <main class="mt-44 md:mt-32 lg:mt-32 ">
      <Nuxt />
    </main>
  </div>
</template>

<style>
/*.dark-mode {*/
  /*@apply dark;*/
/*}*/
</style>

<script>
export default {
  head() {
    return {
    bodyAttrs: {
      class: "bg-gray-100 dark:bg-slate-800 dark:text-white",
    },
    htmlAttrs: {
      class: this.$colorMode.preference == "dark" ? "dark" : "light"
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
