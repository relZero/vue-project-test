<template>
  <button @click="handleOnClick">弹窗</button>
</template>

<script>
  export default {
    methods: {
      handleOnClick() {
        this.$layer.alert("找不到对象！")
      }
    }
  }
</script>
 