<template>
  <div class="game-detail">
    <app-header header-title="游戏详情页">
      <div class="right-action">
        <router-link class="search" to="/search"></router-link>
        <router-link class="user" to="/userCenter"></router-link>
      </div>
    </app-header>
    <img :src="gameDetailData.headerPic">
    <List
      class="game-info"
      list-type="row"
      :is-link="false"
      :list-data="gameInfoData"
    >
      <div class="game-num" slot="wordBefore" slot-scope="{ itemData }">
        <span class="type">{{ itemData.typeVal }}</span>
        <span class="size">{{ `${itemData.sizeVal}MB` }}</span>
      </div>
      <button slot="listBtn" class="list-btn">立即下载</button>
    </List>
    <GameContent :content-data="gameDetailData" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AppHeader from '@/views/templates/header'
import List from '@/views/templates/list'
import GameContent from './gameContent'

export default {
  components: {
    AppHeader,
    List,
    GameContent
  },
  computed: {
    ...mapState(['gameDetailState']),
    gameDetailData() {
      return this.gameDetailState
    },
    gameInfoData() {
      return [
        {
          picUrl: this.gameDetailState.gameIcon,
          titleVal: this.gameDetailState.gameTitle,
          wordVal: this.gameDetailState.gameWord,
          typeVal: this.gameDetailState.gameType,
          sizeVal: this.gameDetailState.gameSize
        }
      ]
    }
  },
  mounted() {
    this.gameDetailAxios()
  },
  methods: {
    ...mapActions(['gameDetailAxios'])
  }
}
</script>

<style lang="scss" scoped>
@import './src/assets/styles/variable.scss';
.game-detail {
  min-height: 100%;
  background: {
    color: #fff;
  };
  .list-btn {
    position: absolute;
    right: 0;
    top: 30rem / $remCalculation;
    display: block;
    width: 112rem / $remCalculation;
    height: 54rem / $remCalculation;
    line-height: 54rem / $remCalculation;
    text: {
      align: center;
    }
    font: {
      size: 24rem / $remCalculation;
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
  .right-action {
    position: absolute;
    right: 30rem / $remCalculation;
    top: 0;
    a {
      display: inline-block;
      margin: {
        top: 26rem / $remCalculation;
        left: 10rem / $remCalculation
      }
      width: 36rem / $remCalculation;
      height: 40rem / $remCalculation;
      vertical-align: top;
      background: {
        repeat: no-repeat;
        size: 100%;
      }
    }
    .search {
      background: {
        image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAlCAYAAADIgFBEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAK9SURBVFhHzVi7bhNBFN1APgB+AtyENgRooUECRyLhC6BCUCX/EqP8gDvzAw5+rJP0VHQQQZs4RVI4Ws6Jzt0dr0f2Pske6Wp359x77t3xzOyMg6wYj8et0Wi0h2sP15+wc9xHvPIZ99/EtxRSLaIoWoN4G3bMxDmM/m3GS6ocBoPBI7zpUSpJLmM87LEkiyEMwx2IXXrEz3Dt4PoB9gp+z3nls9rJz8XALqkn6XxQopuU4A8Yu/2e3Lwgj9i38o/jqUdduWUDAt/BZo7QNexLv99fl0sm0B9xnxVvWrPhcLgrl+XgGEHA1ILxJucIfiG6EBhPHdOkPvOI9oOjHkHuYOUbPRNdCtDdkp695NHSWQYnTl8rJMIbfRJVCajn6sPaohYBMnQcj1cN1LzQwD51coSi5gGi5TjRXouqFNRN5VlcqVExl/BbB9yfVd0rBvVOvA7hfl9UAhA9x+FAzbUAOTqWC9ZTcwIUwI+cOXxUcy2gvuViXjUnQOOFOWDUv1RzLaC+U8yFmhMYqWJKLXKrQH03n5oT3FXPwKZqTtCoMQOiUbNp3xxwX/c689vJ5V1nmrMCEyDcPW4t36ZUDv+3iQDZnK82Kud+5rvjfA2Bp6JLAZupTehdmTbzMJ9oP7TTizfhCOJ5aEt0ITCeOqZJfTxnOy2gN3YR4O6Br9jF3W73vlwygf76aeIegc1QyHu5ZAMCvKcDtL1ZNbDJ04/+bjz1qCu3fOA5ByIL5ybYL4geUBg2d25iO/mUP634ucmgE6U7qHMb42HxGMFP93AymTzRYz5w1EO0DcGTdKJlRn/0xrY7a3CWegDuj3w6K2fUMkCA/0Lw08F/G/hxtTPWVM9sJ+9dWVHchvyt4MNSBZUFivjamIKQmLPtsPEFif7/8BVUeJZVARaEIm43WyjsL6e9qLsDZxmnfRAEwT+v0he2vrGXGQAAAABJRU5ErkJggg==");
      }
    }
    .user {
      background: {
        image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAoCAYAAACWwljjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAObSURBVFhHvVjLS1RxGI2KIuhhFK6iFrarcNGmCOyxqciiVdBj1SIsDXogBZWu3JerohYuY6CyKHc1kjPDjA3Ywv6C6KEQWKYmPqZz9Pymz9vM3Nc4Bz7uz+9853zfvfc39864IgoGBgZ2pVKpjnQ6nUR8RfxRcP2OHGtUvnxAk31siCgEjCSG2y959dDX17cWxg8Q8yWaVgxo5qilh+ziIZvNboRhf4lmU8i/xvEWjudxvIhjh3JTqrGRpJdso2F4eHgNGrz1GI8j11nJXCfRyVqrpRc9VRYeMLhvDRGfkGsQ7QvWUmM96Ck6HLiBIbZ7JpvP5zeJDoxkMlkHn5wZaJ7eooMDwuK+wfoHTLaLCg1q6WH8+kUFAwwanZiBv9tERQY9PJ6NovwBQZcT4mxGqvGRpQf8Rp0vokuUP1CccUIM9FDp2KCX82UPpf2B4l9OCJMLSscGvYzvT6UrA4UbnIiRyWQOiIoNellvfALXiyoPbLbNVoS/94qKDXpZbz4SRJUHilZbEaJZVGxgoJPWm71EVQZu23cnwvqq0rFBLzPQF6X9geI3RvhK6digl/F9qbQ/cCYtToj1NF6W20RFBj3oZQa6JMofuLdbIZ404seiIoMezo/euVxui6hggLDbGPAle0JUaGAzH5eHO8FuUcGhqzTiTLAew3PkoOjAwDCHqDXDjNJbdDhA3GzPDOtpNGgrFAorVVIWrIGmlRqjp9dplUQDTNqdoYmPGOwMrtg6lRXBHDnWeDQcqF1l8QCjyzCc8TZA8Hv1IOKFYpA5Tw1jhldWdtUBTJsQpZr5BX+vNckmPhKJxCqceQvis6dR4JD2SuBXRTnAZDfMit+HvQHuG47vcXzO0Jq5kvWID9hje2QfDtyYMJ8oZYpoRexQ6X8gpxrWLtHDc5LeKg0GnMU1CO2DjJFHHFFJYFAjrR1qHnFdJZWBQu4XOww/Xbfj3H9q6SEvO1SLSkoDBYdRPOtEiHFcrWOiYwN+R+lp/GfZU/RSgKwHab8HTWCY0K8KP9CT3qYPe9aL/gcke1wRA8JzoqoO+J+1vRA9ohaBXe/92fxE1LIB/R65fuzNGUQtTNxryLHIb+MQQI869LM/HHsXCNyanRhizhFY31kgagD0umH68h9bDbw690xyApP7/1aqEtiLPV1/xF0ONGQST1VbM7Cn6T/ExG+XwLSnVFczsKfrz1ncfeTDqpdPVNXVDOyJ3s8WZ0jf/Avurc4sbEAdVQAAAABJRU5ErkJggg==");
      }
    }
  }
  img {
    width: 100%;
  }
  .game-info {
    background: #fff;
    border: {
      bottom: {
        width: 20rem / $remCalculation;
        color: #f6f6f6;
        style: solid;
      }
    }
    padding: 0 20rem / $remCalculation;
    .game-num {
      padding: 10rem / $remCalculation 0;
      height: 38rem / $remCalculation;
      line-height: 38rem / $remCalculation;
      span {
        display: inline-block;
        vertical-align: top;
        margin: {
          right: 12rem / $remCalculation;
        }
        color: #999;
      }
      .type {
        text: {
          align: center;
        }
        width: 64rem / $remCalculation;
        background: {
          color: #f5f5f5;
        }
      }
    }
  }
}
</style>

<style lang="scss">
@import './src/assets/styles/variable.scss';
.game-detail {
  .list {
    ul {
      li {
        &.row {
          .list-title {
            font: {
              size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>>
