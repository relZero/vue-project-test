<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>

export default {}
</script>

<style lang="scss" scoped>
  #app {
    height: 100%;
    min-height: 100%;
  }
</style>
