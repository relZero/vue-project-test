<template>
  <div class="detail-tab">
    <Scroll :swiper-option="scrollOption" :swiper-pics="scrollPic" />
    <div :class="synopsisToggleFlag ? 'game-synopsis synopsis-open' : 'game-synopsis'">
      <h2>游戏简介：</h2>
      <p>{{ currentData.gameDetailWord }}</p>
      <span @click="synopsisToggle">{{ synopsisToggleFlag ? '收起' : '展开' }}<b></b></span>
    </div>
    <div class="synopsis-play">
      <Title
        class="title-1"
        title-word="玩这款游戏的人还玩了"
        :title-left="30"
      >
        <i slot="titleIcon" class="title-border"></i>
      </Title>
      <List class="synopsis-play-list" :list-data="playerGameList" :isLink="true">
        <i
          v-if="itemData.isPlayer"
          class="player"
          slot="picTag"
          slot-scope="{ itemData }"
        ></i>
      </List>
    </div>
  </div>
</template>

<script>
import Scroll from '@/vue-scaffold-npm/components/scroll/index.vue'
import Title from '@/views/templates/title/index.vue'
import List from '@/views/templates/list/index.vue'

export default {
  name: 'detailTab',
  props: {
    currentData: {
      type: [Array, Object],
      default: function() {
        return {}
      }
    }
  },
  components: {
    Scroll,
    Title,
    List
  },
  data() {
    return {
      scrollOption: {
        slidesPerView: 'auto',
        spaceBetween: 15
      },
      scrollPic: [],
      playerGameList: [],
      synopsisToggleFlag: false
    }
  },
  watch: {
    currentData: {
      handler (newValue, oldValue) {
        this.scrollPic = newValue.scrollPic
        this.playerGameList = newValue.playerGameList
      }
    }
  },
  mounted() {
    this.scrollPic = this.currentData.scrollPic
    this.playerGameList = this.currentData.playerGameList
  },
  methods: {
    synopsisToggle() {
      this.synopsisToggleFlag = !this.synopsisToggleFlag
    }
  }
}
</script>

<style lang="scss" scoped>
@import './src/assets/styles/variable.scss';
.detail-tab {
  overflow: hidden;
  .game-synopsis {
    position: relative;
    padding: 0 30rem / $remCalculation;
    margin: {
      bottom: 20rem / $remCalculation;
    }
    h2 {
      height: 76rem / $remCalculation;
      line-height: 76rem / $remCalculation;
      font: {
        size: 28rem / $remCalculation;
      }
    }
    p {
      max-height: 116rem / $remCalculation;
      overflow: hidden;
      line-height: 1.5;
      font: {
        size: 26rem / $remCalculation;
      }
      color: #999;
    }
    span {
      position: absolute;
      right: 30rem / $remCalculation;
      bottom: -4rem / $remCalculation;
      display: block;
      padding: {
        left: 56rem / $remCalculation;
      }
      background: {
        color: #fff;
      }
      overflow: hidden;
      color: #28c0ff;
      b {
        position: relative;
        display: inline-block;
        vertical-align: top;
        margin: 12rem / $remCalculation 0 0 10rem / $remCalculation;
        border: {
          color: transparent;
          width: 14rem / $remCalculation;
          style: solid;
        }
        border: {
          left: {
            width: 12rem / $remCalculation;
          }
        }
        border: {
          right: {
            width: 12rem / $remCalculation;
          }
        }
        border: {
          top: {
            color: #28c0ff;
          }
        }
        &:after {
          content: "";
          display: block;
          position: absolute;
          top: -14rem / $remCalculation;
          left: -10rem / $remCalculation;
          border: {
            color: transparent;
            width: 12rem / $remCalculation;
            style: solid;
          }
          border: {
            left: {
              width: 10rem / $remCalculation;
            }
          }
          border: {
            right: {
              width: 10rem / $remCalculation;
            }
          }
          border: {
            top: {
              color: #fff;
            }
          }
        }
      }
    }
  }
  .synopsis-open {
    p {
      max-height: none;
    }
    span {
      bottom: 4rem / $remCalculation;
      b {
        margin: -1px 0 0 5px;
        transform: rotate(180deg);
      }
    }
  }
}
</style>

<style lang="scss">
@import './src/assets/styles/variable.scss';
.detail-tab {
  .swiper-container {
    padding: 20rem / $remCalculation 30rem / $remCalculation 0;
    overflow: inherit;
    .swiper-wrapper {
      .swiper-slide {
        width: 320rem / $remCalculation;
        img {
          width: 320rem / $remCalculation;
          height: 480rem / $remCalculation;
          display: block;
        }
      }
    }
  }
  .synopsis-play {
    .synopsis-play-list {
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
}
</style>
