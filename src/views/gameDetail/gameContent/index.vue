<template>
  <div class="game-content">
    <Tabs
      class="game-tabs"
      :tab-items="tabsData"
      @clickToggle="tabToggle"
    >
      <component :is="currentView" :current-data="currentData"></component>
    </Tabs>
  </div>
</template>

<script>
import Tabs from '@/vue-scaffold-npm/components/tab'
import DetailTab from './detailTab'
import GiftTab from './giftTab'
import ServerTab from './serverTab'
import NewsTab from './newsTab'

export default {
  props: {
    contentData: {
      type: Object,
      default: {}
    }
  },
  components: {
    Tabs,
    DetailTab,
    GiftTab,
    ServerTab,
    NewsTab
  },
  data () {
    return {
      currentView: 'DetailTab',
      currentData: this.contentData,
      tabsData: []
    }
  },
  watch: {
    contentData: {
      handler (newValue, oldValue) {
        this.currentData = newValue.gameDetailInfo
        this.tabsData = [
          {
            type: '详情',
            view: 'DetailTab',
            data: newValue.gameDetailInfo
          },
          {
            type: '礼包',
            view: 'GiftTab',
            data: newValue.gameGiftInfo
          },
          {
            type: '开服',
            view: 'ServerTab',
            data: newValue.gameServerInfo
          },
          {
            type: '资讯',
            view: 'NewsTab',
            data: newValue.gameNewsInfo
          }
        ]
      }
    }
  },
  methods: {
    tabToggle (activeData) {
      this.currentView = activeData.tabView
      this.currentData = activeData.tabData
    }
  }
}
</script>

<style lang="scss">
@import './src/assets/styles/variable.scss';
.game-content {
  .game-tabs {
    background: {
      color: #fff;
    }
    .tabs-box {
      border: {
        bottom: {
          color: #efefef;
          width: 1px;
          style: solid;
        }
      }
      li {
        height: 80rem / $remCalculation;
        line-height: 80rem / $remCalculation;
        background: none;
        font: {
          size: 30rem / $remCalculation;
        }
        &.active {
          position: relative;
          background: none;
          color: #28c0ff;
          &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            margin-left: -15rem / $remCalculation;
            display: block;
            width: 30rem / $remCalculation;
            height: 4rem / $remCalculation;
            background: {
              color: #28c0ff;
            };
          }
        }
      }
    }
  }
}
</style>
