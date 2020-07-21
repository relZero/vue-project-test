<template>
  <div class="gift-tab">
    <List
      class="gift-list"
      :is-pic="false"
      list-type="row"
      :list-data="giftListData"
    >
      <div slot="wordAfter" class="gift-schedule" slot-scope="{ itemData }">
        <span class="schedule-tit">剩余</span>
        <span class="schedule-pic"><em :style="`width: ${itemData.giftPercentage}%`"></em></span>
        <span class="schedule-word">{{ `${itemData.giftPercentage}%` }}</span>
      </div>
      <button slot="listBtn" class="list-btn">领取</button>
    </List>
  </div>
</template>

<script>
import List from '@/views/templates/list'
export default {
  name: 'giftTab',
  props: {
    currentData: {
      type: [Array, Object],
      default: function() {
        return []
      }
    }
  },
  components: { List },
  data() {
    return {
      giftListData: []
    }
  },
  mounted() {
    this.giftListData = this.currentData
  }
}

</script>

<style lang="scss" scoped>
@import './src/assets/styles/variable.scss';
.gift-list {
  padding: 0 30rem / $remCalculation;
  .list-btn {
    position: absolute;
    right: 0;
    top: 50%;
    margin: {
      top: -13px;
    }
    display: block;
    width: 102rem / $remCalculation;
    height: 54rem / $remCalculation;
    line-height: 54rem / $remCalculation;
    text: {
      align: center;
    }
    font: {
      size: 26rem / $remCalculation;
    }
    color: #fff;
    background: {
      image: linear-gradient(to right, #43caff, #05b3fe);
    }
    background: {
      image: -webkit-linear-gradient(to right, #43caff, #05b3fe);
    }
    border: {
      radius: 28rem / $remCalculation;
    }
  }
  .gift-schedule {
    padding: 6rem / $remCalculation 0;
    span {
      display: inline-block;
      vertical-align: top;
    }
    .schedule-tit {
      margin-right: 12rem / $remCalculation;
      color: #28c0ff;
      line-height: 1;
    }
    .schedule-pic {
      margin: {
        top: 8rem / $remCalculation;
      }
      width: 220rem / $remCalculation;
      height: 10rem / $remCalculation;
      border: {
        radius: 6rem / $remCalculation;
      }
      background: {
        color: #efefef;
      }
      overflow: hidden;
      em {
        display: block;
        width: 9.7%;
        height: 5px;
        background: {
          color: #28c0ff;
        }
      }
    }
    .schedule-word {
      margin: {
        left: 12rem / $remCalculation;
      }
      color: #ffb401;
      line-height: 1;
    }
  }
}
</style>

<style lang="scss">
@import './src/assets/styles/variable.scss';
.gift-tab {
  .gift-list {
    ul {
      li {
        &.row {
          padding: {
            right: 140rem / $remCalculation;
          }
          .list-word {
            padding-top: 6rem / $remCalculation;
          }
        }
      }
    }
  }
}
</style>
