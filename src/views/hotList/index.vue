<template>
  <div class="hot-list">
    <app-header header-title="热门下载榜"></app-header>
    <List
      class="hot-outer"
      list-type="row"
      :list-data="hotListData.slice(0, 8)"
    >
      <div slot="picTag" class="gift-schedule" slot-scope=""></div>
    </List>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import AppHeader from '@/views/templates/header'
import List from '@/views/templates/list'

export default {
  name: 'hotList',
  components: { AppHeader, List },
  computed: {
    ...mapState(['hotGameState']),
    hotListData() {
      return this.hotGameState
    }
  },
  mounted() {
    this.listDataAxios({
      listName: 'hotGame',
      listMutation: 'HOT_GAME_DATA'
    })
  },
  methods: {
    ...mapActions(['listDataAxios'])
  }
}
</script>

<style lang="scss" scoped>
@import './src/assets/styles/variable.scss';

.hot-list {
  .hot-outer {
    padding: 0 30rem / $remCalculation;
  }
}
</style>
