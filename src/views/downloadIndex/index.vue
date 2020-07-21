<template>
  <div class="download-index">
    <Top />
    <Scroll :swiper-option="scrollOption" :swiper-pics="swiperPicArr" />
    <rule-bar
      v-if="isIos"
      class="ios-rule"
      rule-word="游戏下载或安装失败、闪退，怎么办？"
      :rule-left="15"
      :rule-right="30"
    >
      <span slot="ruleIcon" class="icon"></span>
      <router-link :to="{ path: '/articleDetail', query: { articleTitle:'游戏下载或安装失败、闪退，怎么办？' }}" slot="ruleControl" class="link">戳这里</router-link>
    </rule-bar>
    <Nav class="index-nav m-b10" :nav-data="navDataArr">
      <img slot-scope="{ items }" :src="items.navPic" />
    </Nav>
    <hot-game />
    <new-game />
    <you-like />
    <Footer
      icp-word="闽ICP备19003775号-1"
      mww-word="闽网文{2019} 1554-099号"
      copy-right="Copyright © 2018-2019 mushao.com All Rights Reserved"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Top from './top'
import Scroll from '@/vue-scaffold-npm/components/scroll'
import Nav from '@/vue-scaffold-npm/components/nav'
import HotGame from './hotGame'
import NewGame from './newGame'
import YouLike from './youLike'
import RuleBar from '@/components/ruleBar'
import Footer from '../templates/footer'

import equipmentJudgment from '@/utils/equipmentJudgmentInit.js'

const thisScrollOption = {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  // 是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
  notNextTick: true,
  // 循环
  loop: true,
  // 设定初始化时slide的索引
  initialSlide: 0,
  // 小手掌抓取滑动
  grabCursor: true,
  // 滑动速度
  speed: 800,
  // 滑动方向
  direction: 'horizontal',
  // 分页器设置
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets'
  }
}

export default {
  components: {
    Top,
    Scroll,
    Nav,
    HotGame,
    NewGame,
    YouLike,
    Footer,
    RuleBar
  },
  data() {
    return {
      scrollOption: thisScrollOption,
      isIos: false
    }
  },
  computed: {
    ...mapState(['swiperPicState', 'navDataState']),
    swiperPicArr() {
      return this.swiperPicState
    },
    navDataArr() {
      return this.navDataState
    }
  },
  mounted() {
    this.swiperPicAxios()
    this.navDataAxios()
    this.isIos = equipmentJudgment('ios')
  },
  methods: {
    ...mapActions(['swiperPicAxios', 'navDataAxios'])
  }
}
</script>

<style lang="scss">
@import './src/assets/styles/variable.scss';
.scroll {
  .swiper-pagination {
    &.swiper-pagination-bullets {
      bottom: 30rem / $remCalculation;
      .swiper-pagination-bullet {
        width: 12rem / $remCalculation;
        height: 12rem / $remCalculation;
        margin: 0 3rem / $remCalculation;

        background: {
          color: #fff;
        }
        border-radius: 6rem / $remCalculation;
        opacity: 0.4;
        &.swiper-pagination-bullet-active {
          width: 20rem / $remCalculation;
          opacity: 1;
          background: {
            color: $skin-color;
          }
        }
      }
    }
  }
}
.ios-rule {
  position: relative;
  padding: 0 120rem / $remCalculation 0 64rem / $remCalculation;
  height: 60rem / $remCalculation;
  line-height: 60rem / $remCalculation;
  background: {
    color: #d7e8fa;
  }
  color: #338ee1;
  .rule-icon {
    margin: {
      top: -(16rem / $remCalculation);
    }
    top: 50%;
    .icon {
      display: block;
      width: 32rem / $remCalculation;
      height: 32rem / $remCalculation;
      background: {
        image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMoSURBVFhHxZfLaxNRFMazVNG/Qt24skkV8UERwYWgiItWEXe6EKm4ciOidCG2dNKC1TZJrVoVqY8qFNSKYFXUVqWtj6oLxZnEvPpMalo73RzPuZlMZpLTmTtW9MCPDDffPd+d+x6fbKxpSS+vaNRq/EG1za+o/YGglg4o2pwAn6mM/iMNaY1qi48KJbrKr2iRQFDNoRHIoeaoDtU10niPqlPfl/iD2llMqJcbSKNjQ+opl5FWLvwN2kqsOMQk/CMol3Rv4Dj6sUKKS7QYKCflNmz4oFYGFHWUS7AQ65s1OHF/HCKvMnCwK8VqTDD3gj2xQYkuRdFwWSUX6h5NwKeULviY1GHPpQSrM1HUd+Rl2BaDJgtbwYUbg9NmA4jjPWOszgp5Gbb5MCbdPCd24+SDcdP8Q0KHXRfjrM4KedmGAgtwnfNiNyqbNDh2bxSCfZOw72qS1XDgEm8X5hvrP6/wtsn8LdQcefto6+QFzmxrjUHriww8+zYLnW+yUHU+xuqcIG8fPoRL/3Dj0M0UDMbmbJOPhoDTuhDG8RcHC/cny5E7abg1/BPqeovLj+gYyLJ6J8ibdr4x7k+O3R1x6BnJwaZzUTj9sDj7CZnlVwp50xBIHza13aOwI/JDPFNDrA3YHsqXe0T31IBK43frhRiM4K5XMO/9MlOmlUT3NAQFaN1b3/7M4wlW54YYAq+TkLj8OmtrQPUVl/1/AcQkxAdPy5BOv7eWJdiv/hK7IaeVIOx5IzpwPWl7+9DLDKuTQWxEXrfixieTtgYcvp0W5bQ0S7VOYPfPiK2Ygg4GTsTR93XWNH+fmIPNaLwFafPYE+ZhRCF7HO9sj9vevmtoGtbh+NOdoLY73xMylB3HFFjoeiE5ete+/Gj907bc8nyK1TvQYNgWQ1zJ8LrEiE3oskGXDmsjyJx6gdOzkEcovsywtYfMpbSmMyGO4aanU7D/mvwFROB0KS0EXZ1xOP7PtbwQRk84DocnMJfrm5eG+DTLT8x//2lmDWo5JonQxsEYsGBXz1Kdtc2x1UaaxQd9clcq0b3YnSE0GKAJhSbzhHjOl4VII/957vP9BpMR7ILarMH6AAAAAElFTkSuQmCC');
        repeat: no-repeat;
        size: 100% 100%;
      }
    }
  }
  .rule-control {
    top: 0;
    .link {
      color: #f60;
    }
  }
}
.index-nav {
  padding: {
    top: 30rem / $remCalculation;
  }
  height: 170rem / $remCalculation;
  background: {
    color: #fff;
  }
  ul {
    overflow: hidden;
    display: flex;
    display: -webkit-flex;
    li {
      flex: 1;
      -webkit-flex: 1;
      a {
        position: relative;
        display: block;
        text: {
          align: center;
        }
        padding: {
          top: 100rem / $remCalculation;
        }
        color: #666;
        font: {
          size: 28rem / $remCalculation;
        }
        img {
          position: absolute;
          display: block;
          top: 0;
          left: 50%;
          margin: {
            left: -(46rem / $remCalculation);
          }
          width: 90rem / $remCalculation;
          height: 90rem / $remCalculation;
          border-radius: 50%;
          background-size: 100%;
        }
      }
    }
  }
}
</style>
