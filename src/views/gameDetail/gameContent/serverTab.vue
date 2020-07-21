<template>
  <div class="server-tab">
    <ul>
      <li v-for="(item, index) in serverData" :key="index">
        <span :class="item.serverType === 1 ? 'after' : ''">{{ `${item.serverName} ${item.serverDate}` }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'serverTab',
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
      serverData: []
    }
  },
  mounted() {
    this.serverData = this.currentData
  }
}
</script>

<style lang="scss" scoped>
@import './src/assets/styles/variable.scss';
.server-tab {
  ul {
    padding: 14rem / $remCalculation 14rem / $remCalculation 0;
    overflow: hidden;
    li {
      float: left;
      width: 50%;
      padding: 0 16rem / $remCalculation;
      box-sizing: border-box;
      span {
        display: block;
        margin: 16rem / $remCalculation 0;
        width: 100%;
        height: 72rem / $remCalculation;
        line-height: 72rem / $remCalculation;
        text-align: center;
        box-sizing: border-box;
        border: #efefef 1px solid;
        color: #999;
        border-radius: 34rem / $remCalculation;
        &.after {
          color: #28c0ff;
        }
      }
    }
  }
}
</style>
