import axiosUtils from '@/utils/axiosInit'
import dateFormat from '@/utils/dateFormat'
import forData from '@/utils/forData'

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
          picArr.push({ pid: picData[i].id, img: picData[i].picUrl, path: picData[i].picPath })
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
  searchTypeAxios({ commit }, typeOption) {
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
  searchLikeAxios({ commit }) {
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
  },
  gameDetailAxios({ commit }) {
    axiosUtils.axiosInit(
      {
        axiosUrl: axiosUrl,
        axiosPath: '/gameDetail'
      },
      data => {
        const detailData = data.data.data
        const detailScroll = []
        const detailGameList = []
        const detailGift = []
        const serverArr = []
        forData.forDataAction(detailData.gameDetailInfo.scrollPic, function(data) {
          detailScroll.push({
            pid: data.id,
            img: data.picUrl,
            path: data.picPath
          })
        })
        forData.forDataAction(detailData.gameDetailInfo.playerGameList, function(data) {
          detailGameList.push({
            pid: data.id,
            picUrl: data.gameIcon,
            titleVal: data.gameTitle
          })
        })
        forData.forDataAction(detailData.gameGiftInfo, function(data) {
          detailGift.push({
            pid: data.id,
            titleVal: data.giftName,
            wordVal: data.giftWord,
            giftPercentage: data.giftPercentage
          })
        })
        forData.forDataAction(detailData.gameServerInfo, function(data) {
          data.serverDate = dateFormat.dateFormatAction(data.serverDate, 'MM/DD hh:mm')
          serverArr.push(data)
        })
        detailData.gameDetailInfo.scrollPic = detailScroll
        detailData.gameDetailInfo.playerGameList = detailGameList
        detailData.gameGiftInfo = detailGift
        detailData.gameServerInfo = serverArr
        commit('GAME_DETAIL_DATA', detailData)
      }
    )
  }
}
