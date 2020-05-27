<template>
  <div class="game-content">
    <Tabs
      class="game-tabs"
      :tabItems="tabsData"
      @clickToggle="tabToggle"
    >
      <component :is="currentView"></component>
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
      tabsData: [
        {
          type: '详情',
          view: 'DetailTab'
        },
        {
          type: '礼包',
          view: 'GiftTab'
        },
        {
          type: '开服',
          view: 'ServerTab'
        },
        {
          type: '资讯',
          view: 'NewsTab'
        }
      ]
    }
  },
  methods: {
    tabToggle (activeData) {
      this.currentView = activeData.currentView
    }
  }
}
</script>

<style lang="scss">
@import './src/assets/styles/variable.scss';
.game-content {
  .game-tabs {
    border: {
      bottom: {
        color: #efefef;
        width: 1px;
        style: solid;
      }
    }
    background: {
      color: #fff;
    }
    ul {
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
