<template>
  <div class="login">
    <app-header header-title="登录"></app-header>
    <img src="/src/assets/images/login-bg.png" />
    <div class="login-input">
      <div class="input-outer">
        <vue-input
          input-type="text"
          v-model="loginVal.usernameVal"
          input-placeholder="请输入手机号或账号"
          :is-vuerify="true"
          :inputError="vuerifyError['loginVal.usernameVal']"
        />
      </div>
      <div class="input-outer">
        <vue-input
          :input-type="passwordShowFlag ? 'text' : 'password'"
          v-model="loginVal.passwordVal"
          input-placeholder="请输入密码"
          :is-vuerify="true"
          :inputError="vuerifyError['loginVal.passwordVal']"
        >
          <button
            :class="`password-show ${passwordShowFlag ? '' : 'off'}`"
            slot="inputControl"
            @click="passwordShow()"
          ></button>
        </vue-input>
      </div>
      <div class="button-outer">
        <button @click="handleLogin">登录</button>
      </div>
      <div class="forget-password">
        <router-link class="link" to="">忘记密码</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/views/templates/header/index.vue'
import VueInput from '@/components/input/index.vue'
export default {
  name: 'login',
  data() {
    return {
      loginVal: {
        usernameVal: '',
        passwordVal: ''
      },
      vuerifyError: '',
      passwordShowFlag: false
    }
  },
  methods: {
    passwordShow() {
      this.passwordShowFlag = !this.passwordShowFlag
    },
    handleLogin() {
      if (this.$vuerify.check()) {
        console.log(this.loginVal, this.$vuerify.check(), this.$vuerify.$errors)
      } else {
        this.vuerifyError = this.$vuerify.$errors
      }
    }
  },
  vuerify: {
    'loginVal.usernameVal': {
      test: /\w{4,}/,
      message: '至少 4 位字符'
    },
    'loginVal.passwordVal': {
      test: /\w{6,}/,
      message: '至少 6 位字符'
    }
  },
  components: {
    AppHeader,
    VueInput
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variable';
.login {
  background: #fff;
  min-height: 100%;
  img {
    width: 100%;
    display: block;
  }
  .login-input {
    padding: {
      top: 20rem / $remCalculation;
    }
    .input-outer {
      padding: 10rem / $remCalculation 30rem / $remCalculation;
      .password-show {
        width: 32rem / $remCalculation;
        height: 20rem / $remCalculation;
        display: block;
        background: {
          image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAYAAADskT9PAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJDSURBVEhLtZS7ixNRGMUjFoogi49CFK2U9T8QhW0sbKxEEBRrW5EtVCzUYkuLkOeQSEQsJEvAZbHaf8BCURBZYRG22EJEEtZHIULi79w9E7JhnDg78cBh7j3f+R5z7ySFnaLdbu+uVquv4RutLU8XURTNlMvlk95ug2I0H4iVSuW45W0olUqHarXaMW+zg8IrsF+v189aGmJ0ANYnLA/RarX2kvuZ+I9ms7nfcjaQ/MJv+NjSEJMG4M2vON4rFot7LGcDyZddZJMm+3TULnyf9VPHxOfwIdd1lWM/qlziy4rxjEKxnUCTU6DrQhtuNpF4P/D87f2cyyUDwwG4CG9YCuCND1OoBH+5kAr34SprvfEj1ndFraU5Nj5MVbVcNgDtHHzJiZ3RAHM29nlek4Gnjv6rdPMt8ZskHAkVUqArwHcL/7uR/B7764rrV8X+i3S0hcJgMNjF4pmFn/CJk7Rf5c4vyROqZwT5F+HHkXrVkf1ao9E4GIy6a4RXsVHEGOmnFAw5oI+Xeq2x2l2dhC1bQFyIDTpCy1MDdefj+rBpeQsI5xlA34CCdyxPHfS4px7qBS8E0f9Yn9y8HcQJ4Ls4hbcDN82ONIdT4Tz1Wg9XrOOWwBDd8Z9LEvDOwp5yxiht1ra/Qj3waWjlzKvgujYMcNueVOCN3yCJHdtSQa8H8vPc0GaFzRqTzTieCrzx9En8blsq1Iu+7+GSpX8HTXIPkAs0yX0FucDxnaZR4keomG3/FzTTL6HDHX4TtZbmcAYUCn8AW/xwaRDHbDgAAAAASUVORK5CYII=');
          repeat: no-repeat;
          size: 100%;
        }
        &.off {
          background: {
            image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAQCAYAAAB3AH1ZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHtSURBVEhLvZQ7SxxhGIVHBBVBVBBSBK38DxLBSrDQ0kISsBUriSgIaQILSSUsC7uzO+yELSKoq4IgpNkfYCUW4gUE2cKACF4CsRBhx+cdj8O4iLLqeuAw33fey3nnm4uTyWRKruseep7X7rwTzAvfHbjqYF6GAZs5xesO/L7L89hJp9PT2pwzWZdy6gbzwOtSnrNOoVBoYXMkYVl5dQM+K+YFy+YdipzCIOYVDVG3R0H/b/KowCHJdyDw04LiV8lvBnrOxPr7ku9QLBabmGgzlmBTetERvQI881b6Fap6n3HqvWFCEAQNCAsKXHH1ud4/jv1sNjscJr4A1I/Ag5ixG9sfwk47mgEFzfTLfSHrU9PFLTiVz+c/hJ2fgOVQP0n+dqz+Ao5b3O6cddibvB82QCdcgxNhByGZTHaQMA+vLVkF9vLswkXF5sR54ktcLRaeXqzGrf680frhH4bpk/Q4UqlUM4nnavY33vgZ7sEbrQfUrnZQPKom/+xlYphuOAYTaL8VM9rdJ7ijz7wzH62W/YbFuHphs5eAButq8ktSBAZql3nAukdyBGrGFL+wk5RcG2hSgpVcLvdJUoTnBrBPmNoT4v9932+TXBvMJPpeqxAfAKNuyQ9Ajv33H429Gvy8GjG3z3PL1pJrhOPcAkYB0iXYK/RvAAAAAElFTkSuQmCC');
          }
        }
      }
    }
    .button-outer {
      margin: 40rem / $remCalculation 30rem / $remCalculation 0;
      button {
        width: 100%;
        height: 80rem / $remCalculation;
        text: {
          align: center;
        }
        line-height: 80rem / $remCalculation;
        background: linear-gradient(
          to right,
          $skin-color-start,
          $skin-color-end
        );
        background: -webkit-linear-gradient(
          to right,
          $skin-color-start,
          $skin-color-end
        );
        color: #fff;
        font: {
          size: 28rem / $remCalculation;
        }
        border: {
          radius: 40rem / $remCalculation;
        }
      }
    }
    .forget-password {
      text-align: center;
      padding: 0 20rem / $remCalculation;
      height: 80rem / $remCalculation;
      line-height: 80rem / $remCalculation;
      .link {
        color: $skin-color;
      }
    }
  }
}
</style>

<style lang="scss">
@import '../../assets/styles/variable';
.login {
  .vue-input {
    position: relative;
    border: {
      bottom: {
        color: #efefef;
        width: 1px;
        style: solid;
      }
    }
    box-sizing: border-box;
    input {
      width: 100%;
      height: 76rem / $remCalculation;
    }
    .input-control {
      top: 50%;
      margin: {
        top: -(10rem / $remCalculation);
      }
    }
  }
}
</style>
