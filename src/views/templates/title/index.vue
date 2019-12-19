<template>
  <div class="title">
    <div class="title-icon" :style="`left: ${titleLeft/this.$remCalculation}rem`">
      <slot name="titleIcon"></slot>
    </div>
    <slot name="titleItem"></slot>
    <div v-if="titleWord !== ''" class="title-word">{{ titleWord }}</div>
    <div class="title-control" :style="`right: ${titleRight/this.$remCalculation}rem`">
      <slot name="titleControl"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    titleWord: {
      type: String,
      default: ''
    },
    titleLeft: {
      type: Number,
      default: 0
    },
    titleRight: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  position: relative;
  .title-icon,
  .title-control {
    position: absolute;
  }
}
</style>
