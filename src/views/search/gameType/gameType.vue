<template>
  <div class="game-type">
    <i></i>
    <div class="type-title">
      <img :src="typeIcon" />
      {{ typeTitle }}
    </div>
    <button-list
      class="type-list"
      :button-data="typeData"
      @onButtonClick="handleTypeClick"
    ></button-list>
  </div>
</template>

<script>
import ButtonList from '@/components/buttonList/index.vue'
export default {
  name: 'gameType',
  props: {
    typeTitle: {
      type: String,
      default: ''
    },
    typeIcon: {
      type: String,
      default: ''
    },
    typeData: {
      type: Array,
      default: function() {
        return []
      }
    }
    // typeSingle: {
    //   type: Object,
    //   default: function() {
    //     return {}
    //   }
    // }
  },
  methods: {
    handleTypeClick(data) {
      this.$emit('onTypeClick', data)
    }
  },
  components: {
    ButtonList
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/variable';
.game-type {
  position: relative;
  background: #fff;
  padding: {
    left: 130rem / $remCalculation;
  }
  border: {
    bottom: {
      color: #f6f6f6;
      width: 10px;
      style: solid;
    }
  }
  i {
    height: 100%;
    padding: 30rem / $remCalculation 0;
    box-sizing: border-box;
    position: absolute;
    width: 1px;
    left: 132rem / $remCalculation;
    display: block;
    top: 0;
    &:after {
      content: '';
      display: block;
      height: 100%;
      width: 1px;
      background: {
        color: #efefef;
      }
    }
  }
  .type-title {
    position: absolute;
    left: 30rem / $remCalculation;
    top: 50%;
    margin-top: -58rem / $remCalculation;
    font-size: 24rem / $remCalculation;
    width: 70rem / $remCalculation;
    text-align: center;
    img {
      display: block;
      width: 70rem / $remCalculation;
      height: 72rem / $remCalculation;
    }
  }
}
</style>

<style lang="scss">
@import '../../../assets/styles/variable';
.game-type {
  .type-list {
    ul {
      overflow: hidden;
      li {
        float: left;
        padding: 34rem / $remCalculation 0 0 30rem / $remCalculation;
        button {
          width: 88rem / $remCalculation;
          display: block;
          height: 52rem / $remCalculation;
          text: {
            align: center;
          }
          color: #666;
          background: {
            color: #f5f5f5;
          }
          border: {
            radius: 26rem / $remCalculation;
          }
        }
        &.current {
          button {
            background: {
              color: $skin-color;
            }
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
