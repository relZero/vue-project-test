<template>
  <ul class="page-list">
    <li v-for="(item, index) in listItems" :key="index">{{ item.itemName }}</li>
    <button class="load-more" @click="() => handelMoreClick(itemStart)">加载更多</button>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      itemStart: 0,
      itemLoadNum: 20,
      listItems: []
    }
  },
  mounted() {
    this.handelMoreClick(this.itemStart)
  },
  methods: {
    handelMoreClick(itemStartNum) {
      for (let i = 0; i < this.itemLoadNum; i++) {
        this.listItems.push(
          {
            itemName: `item${itemStartNum + i + 1}`
          }
        )
      }
      this.itemStart = this.itemStart + this.itemLoadNum
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variable.scss';

.page-list {
  li {
    height: 60rem/$remCalculation;
    line-height: 60rem/$remCalculation;
  }
}

</style>
