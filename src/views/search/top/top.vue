<template>
  <div class="top">
    <a
      href="javascript:;"
      class="header-icon l-icon back-icon"
      @click="goBack()"
    ></a>
    <div :class="`header-search${searchBtnFlag ? ' search-focused' : ''}`">
      <vue-input
        input-type="text"
        v-model="searchVal"
        input-placeholder="搜索游戏"
        @onHandleFocus="topSearchFocus"
        @input="topSearchKeyup"
      />
      <button
        v-if="searchBtnFlag"
        class="search-clear-btn"
        @click="handelClearSearch"
      ></button>
    </div>
    <router-link
      v-if="!historyFlag && !searchBtnFlag"
      class="header-icon r-icon user-icon"
      to=""
    ></router-link>
    <button
      v-if="historyFlag && !searchBtnFlag"
      class="header-icon r-icon cancel-icon"
      @click="handelClose"
    >
      取消
    </button>
    <button
      v-if="searchBtnFlag"
      class="header-icon r-icon cancel-icon"
      @click="handelToSearch"
    >
      搜索
    </button>
  </div>
</template>

<script>
import VueInput from '@/components/input/index.vue'
export default {
  data() {
    return {
      searchVal: '',
      historyData: '',
      historyFlag: false,
      searchBtnFlag: false
    }
  },
  mounted() {
    const getHistoryCookie = this.$cookie.get('historyArr')
    this.historyData = getHistoryCookie ? getHistoryCookie.split(',') : []
  },
  // computed: {
  //   errors() {
  //     return this.$vuerify.$errors // 错误信息会在 $vuerify.$errors 内体现
  //   }
  // },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    topSearchFocus() {
      this.historyFlag = true
      this.$emit('onTopSearchFocus')
    },
    topSearchKeyup(val) {
      this.searchBtnFlag = val !== ''
    },
    handelClose() {
      this.historyFlag = false
      this.$emit('onHandelClose')
    },
    handelToSearch() {
      let arrFlag = true
      for (let i = 0; i < this.historyData.length; i++) {
        if (this.searchVal === this.historyData[i]) {
          arrFlag = false
        }
      }
      if (arrFlag) {
        this.historyData.push(this.searchVal)
      }
      this.$cookie.set('historyArr', this.historyData)
    },
    handelClearSearch() {
      this.searchVal = ''
      this.searchBtnFlag = false
    }
  },
  components: {
    VueInput
  }
}
</script>

<style lang="scss" scoped>
@import './src/assets/styles/variable.scss';
.top {
  position: relative;
  padding: 16rem / $remCalculation 96rem / $remCalculation 0 76rem /
    $remCalculation;
  height: 74rem / $remCalculation;
  line-height: 74rem / $remCalculation;
  background: {
    color: #f5f5f5;
  }
  .logo {
    position: absolute;
    left: 30rem / $remCalculation;
    top: 50%;
    margin: {
      top: -(26rem / $remCalculation);
    }
    display: block;
    width: 110rem / $remCalculation;
    height: 52rem / $remCalculation;
  }
  .header-search {
    position: relative;
    padding: 0 80rem / $remCalculation 0 20rem / $remCalculation;
    height: 56rem / $remCalculation;
    border: {
      radius: 28rem / $remCalculation;
    }
    background: {
      color: #fff;
      image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAfCAYAAAD0ma06AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKsSURBVEhLtZY7aFNhFMd9P1BEpBQfXUSkioMguInYDg4KIuILxEEQu1hwqOAuuFgEXSqCU7cURyMBaQh53UDAJVAiGaRIKYgUEXEIJf7O5/nCyfXexiQ3f/hzv5zH/9zzvW42dUOr1dpcKBTGi8XiDM8P8AvjFlxmvFAqlaZyudxRidOU/oDAlnw+fxPR71pgQxK3Cq/0VbhcLh9HZCUs+p+s0/URleoOuroWISIdyPTdYHyWmFPwAuMn2L/aOE/sEyoZDwKvh5LWKfIom83u0pBI6IwENlfzL2rIv8B5LBQsm2NU3V0ha0fXD62GMHJ6ZYNQwE7NMoG71d0T0LljdIQN0Vf3X8hutEGVSuWguvoCGi+snqy9utrnrL31GT9VV9+o1Wo70PllNFfbx4UfHWvHBtnrHAMCrQdWlzrjzkG7U8ax6IwJAN0DRlcKTjsHgwVjvO+MCQHN30Y7540Nb5TD7IwJAU17Npve+M0bKXjOGRMCmu+8ttBtHAZVY7yqsYkAvU9Gu+WN897APM86YwLQ47butWHDOTDam2GtfV4GBMdrxOhKMy+dIwiCMetgO59xjgERPhbwvHNo6/4rLqwn1SVat+EK+s87NDFcMgWl/cfqGg6oLl+LJVsU3lN3T+DbeJLcE/ozHuG1VL6Si1hDNkQmk9lD/HuT+0xd8aDLWybBU66nu7zQPg3rgOxG8qaJaZocz0kNiwdBstDhRM81uAjnKfKR50+1x7EpL6TS8eCKO02wiEeJ9Mp6KpXaqtLxqFar2wmegVFTFUm6nuVP8SGen0O+NyrbHfr1noBv4Y+QkFz8c3AynU7v1BRZllFi7bUm7O+eliMk3Xe7HChw2RaUF4CH1T0cUOC1LQoDdQ0H7NBtFGl/4GWsruGBovspVKbbpSAIxv4Ald9FL9ZwepQAAAAASUVORK5CYII=');
      repeat: no-repeat;
      position: 95% center;
      size: 28rem / $remCalculation 32rem / $remCalculation;
    }
    &.search-focused {
      background: {
        image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADuSURBVEhLrZYBDoMgEAT9altt+yhfhPiX9gO1t4Rt8KKUAyYhFO4yKxpjB+/9LOO1LMtt6IS4RjjhRsBbxiabH5mn2FPNuq736NrgDmncwIyG2GsmlWN2zl1DQRaP1hAtl3l/N3SDJeSvnNSESN/u9KdyYgkxy0lJSLWc5EKa5eQopJuc6JCucgIRxd3lID0FA9Jn0oTIdvc8/d0couUyT/qZVIccyWOp6D3JkpOT6pASOTGHWOSkOESKT6ucoDcbouUyxlgq5jQEsrSAdShUoEPCJ1MWv49+i5ykIXBjI/xtkSNdYk8zuHI4vffzFwrRqIowpCOgAAAAAElFTkSuQmCC');
      }
    }
    .search-btn,
    .search-clear-btn {
      position: absolute;
      top: 0;
      right: 0;
      height: 56rem / $remCalculation;
      line-height: 56rem / $remCalculation;
      width: 80rem / $remCalculation;
    }
  }
}
</style>

<style lang="scss">
@import './src/assets/styles/variable.scss';
.top {
  .header-search {
    position: relative;
    input {
      padding: {
        top: 0;
      }
      height: 56rem / $remCalculation;
      background: none;
      border: 0;
      width: 100%;
      display: block;
    }
  }
}
</style>
