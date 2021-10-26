<template>
  <div>
    <Nav />
    <main>
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
      class: "bg-gray-100",
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
