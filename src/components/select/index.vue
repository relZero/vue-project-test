<template>
  <div class="select">
    <v-select placeholder="请选择角色"
      multiple
      :options="options" label="roleName" :options-value="'roleId'"
    />
  </div>
</template>

<script>
  import vSelect from 'vue-select'
  export default {
    components: {
      vSelect
    },
    data() {
      return {
        options: ["test1", "test2", "test3", "test4", "test5"]
      }
    }
  }
</script>
