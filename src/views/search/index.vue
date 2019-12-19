<template>
  <div class="search">
    <Top
      @onTopSearchFocus="searchFoucesHistory"
      @onHandelClose="historyClose"
    />
    <game-type
      v-if="!historyFlag"
      type-title="类型"
      type-icon="/src/assets/images/type-icon1.png"
      :type-data="typeDataCom.typeDataFir"
      @onTypeClick="data => typeClick(data, 'typeDataFir')"
    />
    <game-type
      v-if="!historyFlag"
      type-title="题材"
      type-icon="/src/assets/images/type-icon2.png"
      :type-data="typeDataCom.typeDataSed"
      @onTypeClick="data => typeClick(data, 'typeDataSed')"
    />
    <game-type
      v-if="!historyFlag"
      type-title="玩法"
      type-icon="/src/assets/images/type-icon3.png"
      :type-data="typeDataCom.typeDataThi"
      @onTypeClick="data => typeClick(data, 'typeDataThi')"
    />
    <SearchHistory v-if="historyFlag" class="history-box"></SearchHistory>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Top from './top/top.vue'
import GameType from './gameType/gameType.vue'
import SearchHistory from './searchHistory/searchHistory.vue'
export default {
  name: 'search',
  components: {
    Top,
    GameType,
    SearchHistory
  },
  data() {
    return {
      // singleFlag: {
      //   singleName: '',
      //   singleIndex: 0
      // },
      historyFlag: false
    }
  },
  computed: {
    ...mapState(['firTypeState', 'sedTypeState', 'thiTypeState']),
    typeDataCom() {
      return {
        typeDataFir: this.firTypeState,
        typeDataSed: this.sedTypeState,
        typeDataThi: this.thiTypeState
      }
    }
  },
  mounted() {
    this.searchTypeData({
      searchTypeClass: '类型',
      searchTypeMutation: 'FIR_SEARCH_TYPE'
    })
    this.searchTypeData({
      searchTypeClass: '题材',
      searchTypeMutation: 'SED_SEARCH_TYPE'
    })
    this.searchTypeData({
      searchTypeClass: '玩法',
      searchTypeMutation: 'THI_SEARCH_TYPE'
    })
  },
  methods: {
    ...mapActions(['searchTypeData']),
    typeClick(data, typeDataName) {
      this.typeDataCom[typeDataName][data.dataIndex].isClick = !this.typeDataCom[typeDataName][
        data.dataIndex
      ].isClick
      // this.singleFlag = {
      //   singleWord: data.dataItem.buttonWord,
      //   singleIndex: data.dataIndex
      // }
    },
    searchFoucesHistory() {
      this.historyFlag = true
    },
    historyClose() {
      this.historyFlag = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variable';
</style>
