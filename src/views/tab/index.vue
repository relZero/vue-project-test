<template>
  <Tabs
    :tabItems="tabsData"
    @clickToggle="tabToggle"
  >
    <component :is="currentView"></component>
  </Tabs>
</template>

<script>
import Tabs from '../../vue-scaffold-npm/components/tab/index.vue'
import tab1 from './tabPage/tab1.vue'
import tab2 from './tabPage/tab2.vue'
import tab3 from './tabPage/tab3.vue'
export default {
  data() {
    return {
      currentView: 'tab1',
      tabsData: [
        {
          type: 'tab1',
          view: 'tab1'
        },
        {
          type: 'tab2',
          view: 'tab2'
        },
        {
          type: 'tab3',
          view: 'tab3'
        }
      ]
    }
  },
  methods: {
    tabToggle(activeData) {
      this.currentView = activeData.currentView
    }
  },
  components: {
    Tabs,
    tab1,
    tab2,
    tab3 
  }
}
</script>

<style lang="scss" scoped></style>