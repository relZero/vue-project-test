<template>
  <div class="search-history">
    <Title class="like-title" title-word="大家都在搜"></Title>
    <ul class="like-list">
      <li v-for="(item, index) in likeData" :key="index">
        <button :class="item.isImportant ? 'important' : ''">
          {{ item.likeWord }}
        </button>
      </li>
    </ul>
    <ul class="history-list" v-if="historyData.length > 0">
      <li v-for="(item, index) in historyData" :key="index">
        <button class="history-word">{{ item }}</button>
        <button
          class="history-delete"
          @click="handleHistoryDelete(index)"
        ></button>
      </li>
    </ul>
    <button class="delete-all-history" @click="deleteAllHistory" v-if="historyData.length > 0">清空历史记录</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Title from '@/views/templates/title/index.vue'
export default {
  name: 'searchHistory',
  data() {
    return {
      historyData: ''
    }
  },
  computed: {
    ...mapState(['searchLikeState']),
    likeData() {
      return this.searchLikeState
    }
  },
  mounted() {
    const getHistoryCookie = this.$cookie.get('historyArr')
    this.historyData = getHistoryCookie ? getHistoryCookie.split(',') : []
    this.searchLikeData()
  },
  methods: {
    ...mapActions(['searchLikeData']),
    handleHistoryDelete(index) {
      this.historyData.splice(index, 1)
      if (this.historyData.length > 0) {
        this.$cookie.set('historyArr', this.historyData)
      } else {
        this.$cookie.delete('historyArr')
      }
    },
    deleteAllHistory() {
      this.historyData = ''
      this.$cookie.delete('historyArr')
    }
  },
  components: {
    Title
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/variable';
.search-history {
  padding: 0 30rem / $remCalculation;
  background: {
    color: #fff;
  }
  .like-title {
    height: 86rem / $remCalculation;
    line-height: 86rem / $remCalculation;
    color: #999;
    font: {
      size: 26rem / $remCalculation;
    }
    border: {
      bottom: {
        color: #efefef;
        width: 1px;
        style: solid;
      }
    }
  }
  .like-list {
    overflow: hidden;
    padding: {
      bottom: 30rem / $remCalculation;
    }
    border: {
      bottom: {
        color: #efefef;
        width: 1px;
        style: solid;
      }
    }
    li {
      float: left;
      padding: 34rem / $remCalculation 30rem / $remCalculation 0 0;
      button {
        padding: 0 20rem / $remCalculation;
        display: block;
        height: 64rem / $remCalculation;
        line-height: 64rem / $remCalculation;
        text: {
          align: center;
        }
        background: {
          color: #f5f5f5;
        }
        border: {
          radius: 6rem / $remCalculation;
        }
        font: {
          size: 24rem / $remCalculation;
        }
        &.important {
          color: $skin-color;
        }
      }
    }
  }
  .history-list {
    li {
      position: relative;
      padding: {
        left: 50rem / $remCalculation;
      }
      border: {
        bottom: {
          color: #efefef;
          width: 1px;
          style: solid;
        }
      }
      background: {
        image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKrSURBVFhHzZe7bhNBFIZdcROXhwhItFCSFsQjAHmCiGeA0MZ5AnJ5DlJQWAJjGd+SIFeWktoJFBSJAVPA/63/wY7DemfXRuKXjmbnXP5zZndmdqYUi263e73dbj9ptVqvm81mXXIs+W7huY4NH3wdNj9EvCTZlpwqwa8YwdcxS6bJj0qlckVkZZH8mCAfqL+rdk3tiuSRZcU6bAP7Ugix63CZNg56jbcVvB+IJEfqr6q9ZZdU4GPfI8cie3DaZTYUfF8BfQL1PFT7St/0ks3RIIZYyU+4JP1Go3HP5r/DIz9xwBcFPLCpMMS3DBeccKe+iVqtdlVOe8FR7V2b5gZcYWBq98ll0xgyrtthKFm2eibk/1bywd2ZgBNuckjKVo8gA0stMap9aXUm5P+VGHczId8152CQ4yWqzjYGyWGv17tsdSbkn6sAuOUfVsdOoqxWqzdUQLLJqF1NlJFQTK4CgPyfO9cpuZn5bK9U9K1er9+0XxQUk7sAcpCLOHLz+rfoqN21TzSKFADI5ZxbdPiJ0ImefAFFC1BMmIx1CvhMJ3kdOVG0gPDZyU0B4Wfz2PZoFC2AXMSR+78oIPUTyPYeW5bYPRrTnyB1Ekr3bjJRiryxezQUc24SJsuwCFFRKOd4GYbXIRnk3YiK4MJGNM9WXATKE7bis2QrtnIHpSTXzygv/DM6dK7RzwiomkK/47yA2zmGnU7njtUjyFAOxkUcxaYh3j8HErUbVo/BMUmGAzv8yyMZOa7ZdB6alQs/lMIBl5OnH0oD5LTQY7k5GFAfbptnw2/ikwORuS4m6h9kjnwaXKcUuCEJI0CSq5nkheSZXu9DhGfrpq9mxJZzX80mwXIRERfNs0AcIRSxc2GpzQOu3BrtUxWyKfKPak8YoYWJi24TH3wdloFS6TcmB0ly/A9jdgAAAABJRU5ErkJggg==');
        repeat: no-repeat;
        position: left center;
        size: 32rem / $remCalculation 32rem / $remCalculation;
      }
      .history-word {
        height: 43px;
        line-height: 43px;
      }
      .history-delete {
        position: absolute;
        right: 0;
        top: 50%;
        margin: {
          top: -(12rem / $remCalculation);
        }
        display: block;
        width: 24rem / $remCalculation;
        height: 24rem / $remCalculation;
        background: {
          image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADuSURBVEhLrZYBDoMgEAT9altt+yhfhPiX9gO1t4Rt8KKUAyYhFO4yKxpjB+/9LOO1LMtt6IS4RjjhRsBbxiabH5mn2FPNuq736NrgDmncwIyG2GsmlWN2zl1DQRaP1hAtl3l/N3SDJeSvnNSESN/u9KdyYgkxy0lJSLWc5EKa5eQopJuc6JCucgIRxd3lID0FA9Jn0oTIdvc8/d0couUyT/qZVIccyWOp6D3JkpOT6pASOTGHWOSkOESKT6ucoDcbouUyxlgq5jQEsrSAdShUoEPCJ1MWv49+i5ykIXBjI/xtkSNdYk8zuHI4vffzFwrRqIowpCOgAAAAAElFTkSuQmCC');
          repeat: no-repeat;
          size: 100%;
        }
      }
    }
  }
  .delete-all-history {
    width: 100%;
    display: block;
    height: 90rem / $remCalculation;
    line-height: 90rem / $remCalculation;
    text: {
      align: center;
    }
    color: $skin-color;
  }
}
</style>
