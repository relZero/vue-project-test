<template>
<div class="user-center">
  <app-header header-title="个人中心"></app-header>
  <List
    class="user-info"
    list-type="row"
    :list-data="userInfoData"
  >
    <div class="list-btn" slot="wordAfter">
      <router-link slot="wordAfter" to="/userCenter">充值</router-link>
    </div>
  </List>
  <List
    class="center-link"
    list-type="row"
    :list-data="centerLinkData.myPack"
  >
    <i class="list-arr" slot="wordAfter" />
  </List>
  <List
    class="center-link"
    list-type="row"
    :list-data="centerLinkData.consumptionRecord"
  >
    <i class="list-arr" slot="wordAfter" />
  </List>
  <List
    class="center-link"
    list-type="row"
    :list-data="centerLinkData.customerService"
  >
    <i class="list-arr" slot="wordAfter" />
  </List>
</div>
</template>

<script>
import AppHeader from '@/views/templates/header/index.vue'
import List from '@/views/templates/list/index.vue'

export default {
  components: { AppHeader, List },
  data() {
    return {
      userInfoData: [
        {
          picUrl: 'src/assets/images/player-default-pic.png',
          titleVal: '点击登录',
          wordVal: '登录后可快速领取福利',
          btnPath: '/login'
        }
      ],
      centerLinkData: {
        myPack: [
          {
            picUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHESURBVFhH7Zc7SwNRFISviJ1g6x9QsBQftYU2WkqwM49NIiwBK1GCCFYWksJeBEEsLARFi3SCIFhZiYWFYCGCEiMYJb7id8O5YRMvmAR2U5iB4ezO3D0z0Q2iqgMd0Wh01nGcs1gsVmA+MQ8TicSI+AptAu2Y+SJnTpjTYjePUCjUyaJdFpZqif5BMYe5zP13ra+JtyGrmgML0p5l98xtuA+Lon3pKXyFe3AHPe/R52RdY3Bdt5uHn/USFp4nk8kesXSxQW8I13eRSKRPbBUOh3vRL43Hs11i1Q8enDIBcFTkCvBXjc+1K3IF6JPG974vVsTj8X445CUPrrA4Bx/gsMVPiZ/jesbijxkfztf6lZ8YBzPQfNKgmdEFyi9Ui1jUBczNJl+r8SCos0yut8BS+XcSAHSWyW1pAV7O91YXyP/PAgSv/SrAzTkzJWd8AzkL8MJb4NOUgEdyzjeQcerJe9TCOnwToaEC2Wy2ZCjSnyCjXIBPX4DpKjHIAlVZVrEOtAu0C7QLNANrllX0CdYsq+gTrFlW0SdYs6yiT7BmGZE/Dldw0U+Sc2MrcCBiYKTMlsQrpf91QrytPeQXCb9mDiil1A8MGWzQaQ6JBQAAAABJRU5ErkJggg==',
            titleVal: '我的礼包',
            btnPath: '/userCenter'
          }
        ],
        consumptionRecord: [
          {
            picUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJPSURBVFhH1VjLLkNRFG0j4RsY+BUTzIVrwqDvxKAfQhgxM2aABsN+gU8QMSDhC0gEicdatXbPuW7d3p46EitZuadr77327r3tOU1L9Xr9BHwHP/6A77VarVP6jgGJ0anWDhbAhPu4JrEo//whwA1JUUB/6yXJwQJMkhQF9LdekhwswCRJUUB/6yXJwQJMkhQF9LdekhwswCRJUUB/6yXJwQJMkpSCFx+JKu8D2j8f4rdAf+slycECTJIUBfS3XpIcLMAkSVFAf+slycECTJIUhCRJJqvV6iq250N43YAvWD+Cl9Sib9tovoQm155XLlXm4AUHDuHF+1SI734CzTdNx/oZPAab4KLINbVnL2+TtbIZbwiaefp5q9WaVSgDxphj+axVKPxxNBqNFa92B1L5K5KLMnOtjh491QSw8BD8EOKd3KnuFFKRAQxl1HZUe0+voCFgsqaaJ6xnJKfQ7XY/SL1MgTWslcd66BDHrMH1UFIGeUMQqD1Q35OgIZB7yxoYVSRlUGCIivreht6J3tcN+8OcpAyGDcFa9X0JvRMPrIHRvKQMbIjvVJgeC+obNgTuxBVrMERdUgaDBiAV5p2ARa+vexwwLvyTH7kXuLLmQJ4jg7X0AFMfzBD++BXNQ7PZnGatPNY5Eff1NwkhHGuzarfbU9JHBwz4aGyQwts2Btj26hLp4YDJlhnC/GzYAcYcy2etQuNBR/muZ8znfAStf5TjdYOaYjbwXuoo/w3AdBkc+qOGOf2TMwZ0svJg4/8dN1i/klxTY6x3YmZQKn0CxaqVqNaj24gAAAAASUVORK5CYII=',
            titleVal: '消费记录',
            btnPath: '/userCenter'
          }
        ],
        customerService: [
          {
            picUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAO5SURBVFhHtVdNSFRRGFWIslD6WVRY5CIjKFtkREVBmxYS0UKEsRY6OjrMGLZo4abCRUZNtCzIn20FUhA06TgaQiuNoFwUlLn3h9JSyzHFzhnPG6+j72e0Dhzem+/vfO/e++7cl+UVdXV1uYFAwFddXf0I1z5cR8AZcUQ2+nyMVdr6gYKFKNyK6xS44JFTyilUmcxRWVmZgwJ3wYSKLiME5sHvJH7/TveLCfgjrKWy3lBbW7sfie9XKchhvub3+4vr6+s3KZzIhr0ALAcfI+6Xmada3kaDxZEwnFbgTU1NzUmFuCIUCu1Ezn1w1qgxzNoKWR0ILARHrSSQw38VruzFiMwA0aPI/2LUY+3VR6KsrGwznB+sYCRPV1VVnZN7zUCtHaj11qg7QC25lwBHxAoC5/D7olzrRjgc3o56n4wmInItQosuNV/gLbn+GVC/CJxRA9RamgoY+M5a3Q2mrfAViMfjR7q6ul7GYrFJXH/yHiyS2xZ8MEsHbEsaIZiHH6lNBr/9SYcNOjo6Dkl4waRsjk1gP9iG+hPS4maVx658ljg47rZpQOSZBEc6OztDuIZ5r0aiCrMFRJsNPR8baDEMTxVnC4h8k9gVmWgL0sZRkMkW0Dhv6LXQ0GcY+M47AkLHyO7u7q0y0RZQA1My2YLTYOj1cUjGDEOJ4jwDCzIf4oNsAIzL7Aho8t+T622MI5D6s8lku+3t7c3FEz8AJySewJo4JbcjIPxZmollDWDnO6MYV2AK9kmY/IZGLsjlCmgNSTORPgWlinGF2QCe/LDMngCdH9SzpiC1CGG4oRhXRKPR3RB/R/JeZldAo8DSozYbMF/DHsX9N2CaKwy95GuY2ojQ3R9cdynWEViEOXj6BrK9vX2jzK6AxitLD/TRkL4VNynWEVh0tzn/JO6vy+wI1D4IzktnmtpJBwxtRgOTFRUVe5IOB0D0idFAq8yOQO0Xlg41ZU42wJOveXyKwex4CsLKL4bwEBr46uUtQN3LRv1ZHM8OyLUIGM0DCYPuyLVuYOGdQL1po/49uZbAYxKCBowg8mFjY+MGhawJED+LOuNWTWoEg8Etci8HAtIPpUx4jS16r0I8g40jvwH55knL/lBqweZYPgk2gfkKswXPE2j4EvI+ptVwP5ZbQAIXZfp0kHNgD3gTLAVP4zx5HNcSxNeBz3G/4hNOtTL7TOOTIDECmkOYEZnLGm6nLEfwdUGRVtBcxW7kp1nbildtPeAnN5rgt18z2A+BUVz5hBwh3vfLV+798zwr6y/+xZBJv/wSmQAAAABJRU5ErkJggg==',
            titleVal: '游戏安装有问题怎么办',
            btnPath: '/userCenter'
          },
          {
            picUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALBSURBVFhH7VY9aFNRGI0KLgo6iwpOOjgoqIta66CiWClCtkD+A2YTHLpIhtJIgpu6ujsGG0gy+rMUdAxKQQdFC0WhFa212HrO6/leLvnzJe/h5IHDu/d833e+m9z3Ljc2AnZkMpkJsAK+AJey2ew6yTE1jKt4TjB3uyQClEqlnTAlFtFgKwiZywLWymY85HK5I/BZ6NckCFlLD9mNBhhMwmC5y/Arno9ger1QKByOx+O7i8XiXoyPUWNMOW7NMshtCQ4UXEYx99eM1qCVk8nkfqUMBHOQPwf+cOrXscArShkONDqKglWn+D204woHBmtYaz6Yf6O3wv2Bv3QXkvw9x/gDVn5Q4ZHBWno4fgvsoXAvkJCxZHAtn8+fVmhs0ANe/nak0+msQj3gd+5/ahjfkx4a8Co7vouQes8JrOyCk/QFb/Y+hUKDXvQ0f/ZSqAMkVJwFPJQcGejp+Fckd4DAc0sApyRHBp0TtoBnkjuAyLPdS0ilUockRwZ6OgtYkrwNCBcR2HQSyjzlFA4NetHT/NVr0gvihTiHiXvqGZ94CRGAXl3eJHue5a9vS1gB5zB/qTn/iZPyGBvY+xOOH715TLMX522uzoJlFrh7NezQCAp6mJ+9W+xlmr8AcIZBfrOOdotaGNDD/OxswXjGtP8L4H780mSWQcwPWBDMUQsD+OXNj97UMJ7VfIOTV5rw5nIHbHAunvFcQgB+p8yP3uphN63XXMAU6B9CDuflERpo+LSP/yb0G5YwDeENAxjz5vIgkUjs8YIRgF7wfGzNMX6H502FO+AFM/RVegDQ8LYtAIfTecn/Bmh6Cb/6O5vj2Y70RzabzavgJ3DLWK/XV6vVKv/yu+A8mv5W8w1wtCv639Dd3Fir1dwXjlxB82mVRQc0G7gANPwJvgXvh7ldD0Wr1bqGhp/d5o1G4yN1pQxBLPYH8EjJVjB3Xc0AAAAASUVORK5CYII=',
            titleVal: '帮助与客服',
            btnPath: '/userCenter'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './src/assets/styles/variable.scss';
  .user-center {
    .user-info {
      margin: {
        bottom: 20rem / $remCalculation;
      }
      background: #fff;
      padding: 0 20rem / $remCalculation;
      .list-btn {
        position: absolute;
        z-index: 1;
        right: 10rem / $remCalculation;
        top: 50%;
        margin: {
          top: -28rem / $remCalculation;
        }
        padding: 0;
        border: {
          radius: 28rem / $remCalculation;
        }
        display: block;
        width: 108rem / $remCalculation;
        height: 56rem / $remCalculation;
        line-height: 56rem / $remCalculation;
        text: {
          align: center;
        }
        background: linear-gradient(to right, #ffc028, #ffb401);
        background: -webkit-linear-gradient(to right, #ffc028, #ffb401);
        a {
          font: {
            size: 28rem / $remCalculation;
          }
          color: #fff;
        }
      }
    }
    .center-link {
      background: #fff;
      padding: 0 20rem / $remCalculation;
      img {
        width: 36rem / $remCalculation;
        height: 32rem / $remCalculation;
      }
      .list-arr {
        position: absolute;
        right: 40rem / $remCalculation;
        top: 50%;
        display: block;
        margin-top: -12rem / $remCalculation;
        width: 16rem / $remCalculation;
        height: 24rem / $remCalculation;
        background: {
          image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYCAYAAADzoH0MAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADZSURBVDhPpZRRCoMwEERz1lasqIhYEWtFsJdQD2vbEUZY9idT+mAxMHlDQE1Y1/W1bduHs2Mu4VcgTWcJCt+YhJEOpNGVZIx0ID9sCZ45Ix1InSspGelAam0JpmakA6k5S1jUMNKBVB0nMEUtIx1IpSvpGelAym0J1gMjHYg3VzIy0oGUuJKZkcZfBdicWhkzMYoDMXPyk1EciIWT9dcI0X9IHaM4EGsrY31nFOfYbMTffqbjmE6uGMWB1Du5YBQHmwcn61caJH+ppoziYPN8yph9WZYrI4EQvjMNM5FNPFmJAAAAAElFTkSuQmCC');
          repeat: no-repeat;
          size: 100%;
        }
      }
    }
  }
</style>

<style lang="scss">
  @import './src/assets/styles/variable.scss';
  .user-center {
    .list {
      ul {
        li {
          .list-title {
            padding: {
              top: 16rem / $remCalculation;
            }
            font: {
              size: 30rem / $remCalculation;
            }
          }
          .list-word {
            padding: {
              top: 8rem / $remCalculation;
            }
            font: {
              size: 26rem / $remCalculation;
            }
          }
          img {
            border: {
              radius: 50%;
            }
          }
        }
      }
      &.center-link {
        margin: {
          bottom: 20rem / $remCalculation;
        }
        ul {
          li {
            &.row {
              padding: 0 70rem / $remCalculation 0 54rem / $remCalculation;
              min-height: 84rem / $remCalculation;
              img {
                width: 36rem / $remCalculation;
                height: 34rem / $remCalculation;
                border: {
                  radius: 0;
                }
              }
              .list-pic {
                top: 0.35rem;
              }
              .list-title {
                padding: 0;
                height: 100%;
                line-height: 84rem / $remCalculation;
                font: {
                  size: 26rem / $remCalculation;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
