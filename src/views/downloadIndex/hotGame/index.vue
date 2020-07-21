<template>
  <div class="hot-game m-b10">
    <Title
      class="title-1"
      title-word="热门游戏"
      :title-left="30"
      :title-right="30"
    >
      <i slot="titleIcon" class="title-border"></i>
      <router-link to="/" slot="titleControl" class="more">更多></router-link>
    </Title>
    <List class="hot-game-list" :list-data="hotListData" :isLink="true">
      <i
        v-if="itemData.isPlayer"
        class="player"
        slot="picTag"
        slot-scope="{ itemData }"
      ></i>
      <div class="game-info" slot="wordBefore" slot-scope="{ itemData }">
        <span class="type">{{ itemData.gameType }}</span>
        <span class="size">{{ itemData.gameSize }}</span>
      </div>
    </List>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Title from '@/views/templates/title/index.vue'
import List from '@/views/templates/list/index.vue'

export default {
  name: 'hotGame',
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
  },
  components: {
    Title,
    List
  }
}
</script>

<style lang="scss">
@import './src/assets/styles/variable.scss';
.hot-game {
  .hot-game-list {
    background: {
      color: #fff;
    }
    ul {
      margin: {
        top: -20rem / $remCalculation;
      }
      padding: {
        bottom: 20rem / $remCalculation;
      }
      li {
        padding: {
          left: 12rem / $remCalculation;
          right: 12rem / $remCalculation;
        }
        .list-pic {
          .player {
            position: absolute;
            left: 0;
            top: 0;
            width: 35px;
            height: 35px;
            background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOxSURBVHhe7ZjdTeRAEIQdDYEQBTkQA7pLgAyIgAhIgAAIgAB45/l8+s5XoneoMV57vdvjdUklm/lZTX/ublt0l9CfrvvVd12f2L//H/V82qEY7VCMdihGOxSjHYrRKJSbm75/ehqubv48Tpgpr6/9P3F18+s7MZSPj+H68ODXrefEUJ6fhzICzufnOUsqORSNkS3l2HpuBIr8/j7MrZs1jUHByhreUm5+uRNCIVjp7a3vb2/9OnoNdnPLnAQKTx8AsSweHw8Bucwgm9D9/fe5+U6UKQowwgEW42QL44g3UfzAAwg6XTklLJ8Ih2xBlEkEpW8YANGDtI495e/d3Q17yvG6E0KRBQdFKNEqu1LqN4Inlfu9E0PBBC3xOqZEyApM2cReQokxLhARDHvJqGkl1giU8omXKrNIr/U4Nt0JocQAuadvAIX7l5chWMTTJ1MAp2Ycf0dlFcemOSEUAgVELA2apWBxRaxBBB9BRgOOdW6u7iRQ1DAJTlCUHeVamRJhnbKnBoc1wCnH606UKTRBpKdbQgECZRL3ABCphFAJhyxDwIt7605YPrFvxD6h5lmCwUAEBvcOjsZiSdaduKdgpOAEhavWkgW6F8wShPbj5qGofFRWgoS4Z53mKB/26suWq36vVlZ1J4SC6StlT2EMESRlFSHFgAVSoGT2TQOTBAoBxLLABB4DcD1FWYCmlcYUJ8oUBVjrGQ5K+cZSWWl+ns8PBZmDfDnC0T2BjkFRWaislsG5DBRkDjNkBk+dq4AgBc3YGBSNL4NzOSjIHGgIjiaL4zdLLCu5BkWOcLgv570vCwWZQw1WQApagARHmcMa5vVvAzKNNfG1rNKbljWXh4LMwb7MmwmRFfytsiJQ3QMASHqLqfECq9wTf9s7BxRkDndoZYrKQIEiBe8MLHoUWTS27st5oCBzwEMTIBkQn7g+6qYF7HvPoXNBQeaQ301vUH8gc5D6z7QSGXM+KMgcdNyAQIA6rn8454SCzGHrdmU1H05eKMgceNzAKb9HjoeTGwoyh55n4NCMW2y0Tubga7oNKMgcfi23AwWZANZwW1CQCeLUbg8KMoGc0m1CQSaYU7ldKMgEdAq3DQWZoJa6fSjIBLbE24CCTHBzvR0oyAQ4x9uCgkyQx3p7UJAJ9BhvEwoywU71dqEgE/AUbxsKMkH/5O1DQSbwMV8HFGSCr/l6oCADwPm6oCADofT1QUEGRPR1QkEGhny9UJABskNBO5SKdigV7VAq2qFUtENx6rq/4pwbcS0sFw0AAAAASUVORK5CYII=')
              no-repeat center;
            background-size: 100%;
          }
        }
        .list-title {
          height: 56rem / $remCalculation;
          line-height: 56rem / $remCalculation;
        }
        .game-info {
          span {
            display: inline-block;
            vertical-align: top;
            margin: 0 4rem / $remCalculation;
            color: #999;
            &.type {
              width: 64rem / $remCalculation;
              background: #f5f5f5;
            }
          }
        }
      }
    }
  }
}
</style>
