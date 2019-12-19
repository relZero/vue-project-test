<template>
  <div class="rem-test"></div>
</template>

<style lang="scss" scoped>
  @import '../../assets/styles/variable';
  .rem-test {
    width: 100rem/$remCalculation;
    height: 200rem/$remCalculation;
    background: {
      color: #f55;
    }
  }
</style>
