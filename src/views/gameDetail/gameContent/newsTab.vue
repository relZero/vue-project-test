<template>
  <div class="news-tab">
    <ul>
      <li v-for="(item, index) in newsData" :key="index">
        <span class="yellow" v-text="typeText(item.newsType)" />
        <router-link to="/" class="news-link">{{ item.newsTitle }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'newsTab',
  props: {
    currentData: {
      type: [Array, Object],
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      newsData: []
    }
  },
  mounted() {
    this.newsData = this.currentData
  },
  methods: {
    typeText(itemType) {
      let textValue = '新闻'
      if (itemType === 1) {
        textValue = '攻略'
      }
      if (itemType === 2) {
        textValue = '视频'
      }
      return textValue
    }
  }
}
</script>

<style lang="scss" scoped>
@import './src/assets/styles/variable.scss';
.news-tab {
  padding: 0 30rem / $remCalculation;
  ul {
    li {
      overflow: hidden;
      height: 86rem / $remCalculation;
      line-height: 86rem / $remCalculation;
      border: {
        bottom: {
          color: #efefef;
          width: 1px;
          style: solid;
        }
      }
      margin: {
        bottom: -1px;
      }
      span {
        margin: {
          top: 24rem / $remCalculation;
        }
        display: inline-block;
        vertical-align: top;
        width: 74rem / $remCalculation;
        height: 38rem / $remCalculation;
        line-height: 38rem / $remCalculation;
        text: {
          align: center;
        }
        border: {
          radius: 20rem / $remCalculation;
        }
        color: #fff;
        &.yellow {
          background: {
            color: #ffca58;
          }
        }
      }
      .news-link {
        padding: {
          left: 18rem / $remCalculation;
        }
        font: {
          size: 28rem / $remCalculation;
        }
      }
    }
  }
}
</style>
