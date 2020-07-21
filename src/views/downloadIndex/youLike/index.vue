<template>
  <div class="you-like">
    <Title
      class="title-1"
      title-word="猜你喜欢"
      :title-left="30"
      :title-right="30"
    >
      <i slot="titleIcon" class="title-border"></i>
    </Title>
    <List
      class="you-like-list"
      list-type="row"
      :is-link="false"
      :list-data="likeListData"
    >
      <i
        v-if="itemData.isPlayer"
        class="player"
        slot="picTag"
        slot-scope="{ itemData }"
      ></i>
      <template slot="titleTag" slot-scope="{ itemData }">
        <span v-if="itemData.isHot" class="hot-tag">热</span
        ><span v-if="itemData.isGift" class="gift-tag">礼包</span>
      </template>
      <div class="game-info" slot="wordBefore" slot-scope="{ itemData }">
        {{ itemData.gameType }}&nbsp;&nbsp;·&nbsp;&nbsp;{{ itemData.gameSize }}
      </div>
      <div class="list-btn" slot="listBtn">
        <router-link to="/">专区</router-link>
      </div>
    </List>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Title from '@/views/templates/title/index.vue'
import List from '@/views/templates/list/index.vue'

export default {
  name: 'youLike',
  computed: {
    ...mapState(['youLikeState']),
    likeListData() {
      return this.youLikeState
    }
  },
  mounted() {
    this.listDataAxios({
      listName: 'youLike',
      listMutation: 'YOU_LIKE_DATA'
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
.you-like {
  background: #fff;
  .you-like-list {
    padding: 0 30rem / $remCalculation;
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
      padding: {
        right: 150rem / $remCalculation;
      }
      font: {
        size: 28rem / $remCalculation;
      }
      span {
        display: inline-block;
        margin: 2px 0 0 5px;
        vertical-align: top;
        padding: 0 5px;
        height: 16px;
        line-height: 15px;
        color: #fff;
        border: {
          radius: 7px 7px 7px 0;
        }
        font: {
          size: 12px;
        }
        &.hot-tag {
          background: linear-gradient(to right, #fc5e63, #fd5e63);
          background: -webkit-linear-gradient(to right, #fc5e63, #fd5e63);
        }
        &.gift-tag {
          background: linear-gradient(to right, #fdba1b, #fcb712);
          background: -webkit-linear-gradient(to right, #fdba1b, #fcb712);
        }
      }
    }
    .game-info {
      padding: {
        right: 75px;
        bottom: 2px;
      }
      color: #999;
    }
    .list-btn {
      padding-right: 0;
      position: absolute;
      right: 0;
      top: 15px;
      a {
        display: block;
        width: 56px;
        height: 27px;
        text: {
          align: center;
        }
        line-height: 27px;
        border: {
          radius: 14px;
        }
        background: {
          color: $skin-color;
        }
        color: #ffffff;
        font: {
          size: 12px;
        }
      }
    }
  }
}
</style>
