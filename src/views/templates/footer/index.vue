<template>
  <div class="footer">
    <p>
      <a v-if="icpWord !== ''" :href="icpLink">{{ icpWord }}</a
      ><span v-if="icpWord !== '' && mwwWord !== ''"
        >&nbsp;&nbsp;&nbsp;&nbsp;</span
      ><a v-if="mwwWord !== ''" :href="mwwLink">{{ mwwWord }}</a>
    </p>
    <p v-if="copyRight !== ''">{{ copyRight }}&nbsp;</p>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    icpWord: {
      type: String,
      default: ''
    },
    icpLink: {
      type: String,
      default: 'javascript:;'
    },
    mwwWord: {
      type: String,
      default: ''
    },
    mwwLink: {
      type: String,
      default: 'javascript:;'
    },
    copyRight: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background: {
    color: #f6f6f6;
  }
  text: {
    align: center;
  }
  color: #999;
  line-height: 1.6;
  padding: 15px 0;
  font: {
    size: 11px;
  }
  a {
    color: #999;
  }
}
</style>
