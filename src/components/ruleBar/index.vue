<template>
  <div class="rule-bar">
    <div class="rule-icon" :style="`left: ${ruleLeft / 75}rem`">
      <slot name="ruleIcon"></slot>
    </div>
    <div v-if="ruleWord !== ''" class="rule-word">{{ ruleWord }}</div>
    <div class="rule-control" :style="`right: ${ruleRight / 75}rem`">
      <slot name="ruleControl"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ruleBar',
  props: {
    ruleWord: {
      type: String,
      default: ''
    },
    ruleLeft: {
      type: Number,
      default: 0
    },
    ruleRight: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.rule-bar {
  position: relative;
  .rule-icon,
  .rule-control {
    position: absolute;
  }
}
</style>
