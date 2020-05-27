<template>
  <div class="tabs">
    <ul>
      <li
        v-for="(item, index) in tabs"
        @click="toggle(index, item.view)"
        :class="{ active: active == index }"
        :key="index"
      >
        <span v-if="!isCustomize">{{ item.type }}</span>
        <slot v-else name="customizeTab"></slot>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    tabItems: {
      type: Array,
      default: function() {
        return []
      }
    },
    isCustomize: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      active: 0,
      tabs: this.tabItems
    }
  },
  methods: {
    toggle(index, val) {
      const activeData = {
        currentView: val
      }
      this.active = index
      this.$emit('clickToggle', activeData)
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  ul {
    display: flex;
    li {
      flex: 1;
      height: 40px;
      line-height: 40px;
      text: {
        align: center;
      }
      background: {
        color: #ccc;
      }
      cursor: pointer;
      &.active {
        background: {
          color: #333;
        }
        color: #fff;
      }
    }
  }
}
</style>
