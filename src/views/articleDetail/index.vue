<template>
  <div class="article-detail">
    <app-header :header-title="articleTitle"></app-header>
    <div class="article-content" v-html="articleContent"></div>
  </div>
</template>

<script>
import AppHeader from '@/views/templates/header'

export default {
  name: 'articleDetail',
  components: { AppHeader },
  data() {
    return {
      articleTitle: this.$route.query.articleTitle,
      articleContent: '<p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>'
    }
  }
}
</script>

<style lang="scss" scoped>
@import './src/assets/styles/variable.scss';
.article-content {
  padding: 30rem / $remCalculation;
  background: {
    color: #fff;
  }
}
</style>
