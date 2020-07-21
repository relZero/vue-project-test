<template>
  <div class="hot-list">
    <app-header header-title="热门下载榜"></app-header>
    <List></List>
  </div>
</template>

<script>
import AppHeader from '@/views/templates/header'
import List from '@/views/templates/list'

export default {
  name: 'hotList',
  components: { AppHeader, List },
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
</style>
