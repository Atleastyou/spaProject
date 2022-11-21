<template lang="pug">
.detail
  .detail-banner
    img(:src="banner")
  .detail-container.container
    .detail-section.section-flex
      .detail-section-header
        .detail-section-title 霍普资讯 > {{detail.type | filterTitle}}
      .detail-body
        .detail-body-title {{detail.title}}
        .detail-time {{detail.time}}
        .detail-desc(v-html="detail.content")
    .detail-section.section-width
      .detail-section-header
        .detail-section-title 最新资讯
      .section-list
        a.list-item(v-for="item in newInformation", :href="`/information/detail?id=${item.id}`")
          .list-item-img
            img(:src="item.url")
          .list-item-bd
            .list-item-time {{item.time}}
            .list-item-title {{item.title}}
      .section-pagination
        //-router-link.prev(:to="{ name: 'informationDetail', params: { id: 1 } }") 上一篇：2022年“霍的新生，霍得新生”校园招聘正式启动！
        //- router-link.next(:to="{ name: 'informationDetail', params: { id: 1 } }") 下一篇：霍普股份参展第22届全国医院建设大会
        a.prev(v-if="prevInformation.title", :href="`/information/detail?id=${prevInformation.id}`") 上一篇：{{prevInformation.title}}
        a.next(v-if="nextInformation.title", :href="`/information/detail?id=${nextInformation.id}`") 下一篇：{{nextInformation.title}}
        a.pagination-btn(href="/information/")
          .iconfont.icon-left
          span 返回列表
</template>

<script>
import informationDetail from '@/utils/informationDetail'
import newInformation from '@/utils/newInformation'
export default {
  name: 'informationDetail',
  data () {
    return {
      banner: require('../../static/images/information/detail_banner.png'),
      newInformation: [],
      list: [],
      detail: {},
      prevInformation: {},
      nextInformation: {}
    }
  },
  filters: {
    filterTitle (type) {
      switch (type) {
        case 'release':
          return '新闻发布'
        case 'design':
          return '设计与研发'
        case 'honor':
          return '霍普荣誉'
        case 'trophy':
          return '霍普杯'
      }
    }
  },
  methods: {
    getDetail () {
      this.detail = informationDetail.find(item => item.id === parseInt(this.$route.query.id))
      let index = informationDetail.findIndex(item => item.id === parseInt(this.$route.query.id))
      if (index > -1 && index === 0) {
        this.nextInformation = informationDetail[index + 1]
      } else if (index > 0 && index < informationDetail.length - 1) {
        this.prevInformation = informationDetail[index - 1]
        this.nextInformation = informationDetail[index + 1]
      } else {
        this.prevInformation = informationDetail[index - 1]
      }
      this.setNewInformation()
    },
    setNewInformation () {
      this.newInformation = [...newInformation]
      let index = newInformation.findIndex(item => item.id === parseInt(this.$route.query.id))
      if (index >= 0) {
        this.newInformation.splice(index, 1)
      } else {
        this.newInformation.splice(newInformation.length - 1, 1)
      }
    }
  },
  beforeRouteEnter (tp, from, next) {
    next(vm => {
      vm.getDetail()
    })
  }
} 
</script>

<style lang="scss" scoped>
.detail-container {
  display: flex;
  padding: 10px 0;
}
.detail-section {
  &.section-flex {
    flex: 1;
    padding-right: 100px;
  }
  &.section-width {
    width: 600px;
  }
}
.detail-section-header {
  padding: 20px 0;
  border-bottom: 1px solid #666;
}
.detail-section-title {
  font-size: 20px;
  color: #999;
}
.detail-body-title {
  padding: 20px 0;
  font-size: 40px;
  line-height: 50px;
  font-weight: bold;
  color: #333;
}
.detail-time {
  font-size: 14px;
  color: #999;
}
.detail-desc {
  width: 1110px;
  margin-top: 20px;
  padding-bottom: 100px;
  p {
    font-size: 16px;
    color: #666;
    line-height: 25px;
    &.margin-bottom {
      margin-bottom: 30px;
    }
    &.margin-top {
      margin-top: 30px;
    }
    &.strong {
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }
  }
}
.list-item {
  padding: 20px 0;
  border-bottom: 1px solid #666;
  display: flex;
}
.list-item-img {
  width: 170px;
  min-width: 170px;
}
.list-item-bd {
  padding-left: 20px;
}
.list-item-time {
  font-size: 14px;
  color: #999;
}
.list-item-title {
  font-size: 15px;
  color: #333;
  font-weight: bold;
  margin-top: 5px;
  line-height: 20px;
}
.section-pagination {
  margin-top: 20px;
  .prev,
  .next {
    display: block;
    font-size: 16px;
    color: #999;
    line-height: 25px;
  }
  .pagination-btn {
    cursor: pointer;
    margin-top: 10px;
    padding: 7px 15px;
    border: 1px solid #666;
    border-radius: 30px;
    font-size: 16px;
    color: #999;
    display: inline-block;
  }
}
.detail-collection {
  margin-top: 70px;
}
.detail-collection-title {
  font-size: 18px;
  color: #333;
  font-weight: bold;
  margin-bottom: 20px;
}
.collection-item {
  .collection-item-title {
    padding-left: 9px;
    font-size: 16px;
    border-left: 1px solid #666;
    margin-bottom: 10px;
  }
  .child-item {
    margin-bottom: 10px;
    padding-left: 10px;
    font-size: 16px;
    color: #00A077;
  }
}
.collection-info {
  margin-top: 70px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #999;
  .iconfont {
    margin-right: 10px;
  }
}
</style>
