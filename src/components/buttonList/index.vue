<template>
  <div class="button-list">
    <ul>
      <li
        v-for="(item, index) in buttonData"
        :key="index"
        :class="
          `${
            isSingle === null
              ? item.isClick
                ? 'current'
                : ''
              : item.buttonWord === isSingle.singleWord &&
                index === isSingle.singleIndex
              ? 'current'
              : ''
          } ${buttonStyle}`
        "
      >
        <button @click="() => handleButtonClick(item, index)">
          <span v-if="item.buttonWord || item.buttonWord === ''">{{
            item.buttonWord
          }}</span>
          <slot></slot>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'buttonList',
  props: {
    buttonStyle: {
      type: String,
      default: 'column'
    },
    buttonData: {
      type: Array,
      default: function() {
        return []
      }
    },
    isSingle: {
      type: Object,
      default: null
    }
  },
  methods: {
    handleButtonClick(item, index) {
      const data = {
        dataItem: item,
        dataIndex: index
      }
      this.$emit('onButtonClick', data)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variable';
.button-list {
  padding: {
    bottom: 46rem / $remCalculation;
  }
}
</style>
