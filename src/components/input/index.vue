<template>
  <div class="vue-input">
    <div class="input-icon" :style="`left: ${inputLeft / 75}rem`">
      <slot name="inputIcon"></slot>
    </div>
    <input
      :type="inputType"
      :placeholder="inputPlaceholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @focus="handelFocus"
    />
    <div v-if="isVuerify" :class="`input-error ${vuerifyPosition}`">
      {{ inputError }}
    </div>
    <div class="input-control" :style="`right: ${inputRight / 75}rem`">
      <slot name="inputControl"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vueInput',
  props: {
    inputType: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    },
    inputError: {
      type: String,
      default: ''
    },
    inputPlaceholder: {
      type: String,
      default: ''
    },
    isVuerify: {
      type: Boolean,
      default: false
    },
    vuerifyPosition: {
      type: String,
      default: 'bottom'
    },
    inputLeft: {
      type: Number,
      default: 0
    },
    inputRight: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('onHandleSubmit')
    },
    handelFocus() {
      this.$emit('onHandleFocus')
    }
  }
}
</script>

<style lang="scss" scoped>
.vue-input {
  position: relative;
  .input-icon,
  .input-control {
    position: absolute;
  }
  .input-error {
    color: #f55;
  }
}
</style>
