<template>
  <div class="list">
    <ul>
      <li v-for="(item, index) in listData" :key="index" :class="isPic ? listType : `${ listType } no-pic`">
        <div v-if="isPic" class="list-pic">
          <img :src="item.picUrl" /><slot name="picTag" :itemData="item"></slot>
        </div>
        <div v-if="item.titleVal && item.titleVal !== '' " class="list-title">
          {{ item.titleVal }}<slot name="titleTag" :itemData="item"></slot>
        </div>
        <slot name="wordBefore" :itemData="item"></slot>
        <div v-if="item.wordVal && item.wordVal !== ''" class="list-word">
          {{ item.wordVal }}
        </div>
        <slot name="wordAfter" :itemData="item"></slot>
        <slot name="listBtn" :itemData="item"></slot>
        <router-link v-if="isLink" :to="item.btnPath ? item.btnPath : '/'" class="list-link"></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: {
    listType: {
      type: String,
      default: 'column'
    },
    isPic: {
      type: Boolean,
      default: true
    },
    isLink: {
      type: Boolean,
      default: true
    },
    listData: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  methods: {
    handleListBtnClick() {
      this.$emit('handleListBtnClick')
    }
  }
}
</script>

<style lang="scss" scoped>
@import './src/assets/styles/variable.scss';
.list {
  ul {
    overflow: hidden;
    li {
      position: relative;
      padding: 20rem / $remCalculation;
      box-sizing: border-box;
      img {
        width: 100%;
        height: 100%;
        border: {
          radius: 20rem / $remCalculation;
        }
      }
      .list-title,
      .list-word {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .list-word {
        color: #999;
      }
      &.column {
        float: left;
        width: 25%;
        text-align: center;
        .list-pic {
          position: relative;
          margin: auto;
          width: 130rem / $remCalculation;
          height: 130rem / $remCalculation;
        }
      }
      &.row {
        position: relative;
        padding: 30rem / $remCalculation 0 30rem / $remCalculation 150rem /
          $remCalculation;
        min-height: 180rem / $remCalculation;
        border-bottom: #e8e8e8 1px solid;
        margin-bottom: -1px;
        .list-pic {
          position: absolute;
          top: 30rem / $remCalculation;
          left: 0;
          img {
            width: 120rem / $remCalculation;
            height: 120rem / $remCalculation;
          }
        }
        .list-title {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      &.no-pic {
        padding: {
          left: 0;
        }
      }
      .list-link {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
      }
    }
  }
}
</style>
