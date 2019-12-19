<template>
  <div @click="handleClickCount">
    <verification-code
      ref="verificationCode"
      :countdown-num="60"
      verification-word="获取手机验证码"
    />
  </div>
</template>

<script>
  import verificationCode from '../../vue-scaffold-npm/components/verificationCode/index.vue'
  export default {
    components: {
      verificationCode
    },
    methods: {
      handleClickCount() {
        this.$refs.verificationCode.countDownInit();
      }
    }
  }
</script>
