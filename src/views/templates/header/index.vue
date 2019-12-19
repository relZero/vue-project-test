<template>
  <div class="header">
    <h2>{{ headerTitle }}</h2>
    <a
      href="javascript:;"
      class="header-icon l-icon back-icon"
      @click="goBack()"
    ></a>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  props: {
    headerTitle: {
      type: String,
      default: '标题'
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/variable';
.header {
  position: relative;
  height: 90rem / $remCalculation;
  line-height: 90rem / $remCalculation;
  background: {
    color: #f5f5f5;
  }
  padding: {
    left: 30rem / $remCalculation;
  }
  text: {
    align: center;
  }
}
</style>
