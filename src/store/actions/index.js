import axiosUtils from '@/utils/axiosInit'

const axiosUrl = 'http://localhost:3000'

export default {
  swiperPicAxios({ commit }) {
    axiosUtils.axiosInit(
      {
        axiosUrl: axiosUrl,
        axiosPath: '/swiperPic'
      },
      data => {
        const picData = data.data.data
        const picArr = []
        for (let i = 0; i < picData.length; i++) {
          picArr.push({ img: picData[i].picUrl })
        }
        commit('SWIPER_PIC_DATA', picArr)
      }
    )
  },
  navDataAxios({ commit }) {
    axiosUtils.axiosInit(
      {
        axiosUrl: axiosUrl,
        axiosPath: '/navData'
      },
      data => {
        const navArr = data.data.data
        commit('NAV_DATA', navArr)
      }
    )
  },
  listDataAxios({ commit }, listOption) {
    axiosUtils.axiosInit(
      {
        axiosUrl: axiosUrl,
        axiosPath: '/listData',
        axiosParams: {
          listName: listOption.listName
        }
      },
      data => {
        const listData = data.data.data
        const listArr = []
        for (let i = 0; i < listData.length; i++) {
          listArr.push({
            picUrl: listData[i].itemPicUrl,
            titleVal: listData[i].itemTitle,
            wordVal: listOption.listName === 'hotGame' ? '' : listData[i].itemWord,
            btnPath: '/',
            gameType: listData[i].itemType,
            gameSize: listData[i].itemSize,
            isPlayer: listData[i].isPlayer,
            isHot: listData[i].isHot,
            isGift: listData[i].isGift
          })
        }
        commit(listOption.listMutation, listArr)
      }
    )
  },
  searchTypeData({ commit }, typeOption) {
    axiosUtils.axiosInit(
      {
        axiosUrl: axiosUrl,
        axiosPath: '/searchType',
        axiosParams: {
          typeClass: typeOption.searchTypeClass
        }
      },
      data => {
        const typeData = data.data.data
        const typeArr = []
        for (let i = 0; i < typeData.length; i++) {
          typeArr.push({
            isClick: false,
            buttonWord: typeData[i].typeName
          })
        }
        commit(typeOption.searchTypeMutation, typeArr)
      }
    )
  },
  searchLikeData({ commit }) {
    axiosUtils.axiosInit(
      {
        axiosUrl: axiosUrl,
        axiosPath: '/searchLike'
      },
      data => {
        const likeArr = data.data.data
        commit('SEARCH_LIKE_DATA', likeArr)
      }
    )
  }
}
