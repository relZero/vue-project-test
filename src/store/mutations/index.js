export default {
  SWIPER_PIC_DATA(state, data) {
    state.swiperPicState = data
  },
  NAV_DATA(state, data) {
    state.navDataState = data
  },
  HOT_GAME_DATA(state, data) {
    state.hotGameState = data
  },
  NEW_GAME_DATA(state, data) {
    state.newGameState = data
  },
  YOU_LIKE_DATA(state, data) {
    state.youLikeState = data
  },
  FIR_SEARCH_TYPE(state, data) {
    state.firTypeState = data
  },
  SED_SEARCH_TYPE(state, data) {
    state.sedTypeState = data
  },
  THI_SEARCH_TYPE(state, data) {
    state.thiTypeState = data
  },
  SEARCH_LIKE_DATA(state, data) {
    state.searchLikeState = data
  }
}
