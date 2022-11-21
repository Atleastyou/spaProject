<template lang="pug">
.detail
  .detail-banner
    .swiper-container.banner-swiper
      .swiper-wrapper
        a.swiper-slide.swiper-no-swiping(
          v-for="item, index in detail.banners"
          :class="{ 'banner-active' : bannerIndex === index + 1 }"
        )
          .banner-slide-body
            .banner-slide(:style="{ 'background-image': `url(${item.url})` }")
      .banner-pagination
  .detail-content
    .container
      .content-header
        .detail-title {{detail.projectName}}
        //- .detail-btn(@click="$router.back()") 返回列表 >
      .detail-body
        .detail-info
          .detail-info-section
            .info-item-row
              .info-item-col(v-show="detail.address") 项目地点：{{detail.address}}
              .info-item-col(v-show="detail.size") 建筑规模：{{detail.size}}
            .info-item-row
              .info-item-col(v-show="detail.time") 设计时间：{{detail.time}}
              .info-item-col(v-show="detail.development") 开发单位：{{detail.development}}
              .info-item-col(v-show="detail.beds") 床位数：{{detail.beds}}
            .info-item-row
              .info-item-col(v-show="detail.cooperation") 合作单位：{{detail.cooperation}}
          .detail-desc
            .detail-desc-title(v-show="detail.title.length")
              p(v-for="item in detail.title") {{item}}
            .detail-desc-text
              p(v-for="item in detail.content") {{item}}
            .detail-honors(v-show="detail.honors && detail.honors.length")
              .honor-title 获奖荣誉：
              .honor-item(v-for="item in detail.honors") {{item}}
            .detail-handles
              .detail-back(@click="prevLink" v-show="detail.prevProject.id")
                span.detail-back-label 上一篇：
                span.detail-back-bd {{detail.prevProject.projectName}}
              .detail-honor(@click="nextLink" v-show="detail.nextProject.id")
                span.detail-honor-label 下一篇：
                span.detail-honor-bd {{detail.nextProject.projectName}}
              .detail-return(@click="$router.back()")
                .detail-honor-item
                  i.iconfont.icon-left
                  span 返回列表
      .detail-related
        .related-title 相关案例
        .case-container
          router-link.case-item(v-for="item in detail.relatedCase", :to="{ name: 'caseDetail', query: { id: item.id } }")
            .case-item-img(:style="{ 'background-image': `url(${item.url})` }")
            .case-item-bd
              .case-item-title {{item.name}}
              .case-item-address 项目地点：{{item.address}}
</template>

<script>
import details from '@/utils/caseDetail'
let bannerSwiper = null
export default {
  name: 'caseDetail',
  data () {
    return {
      bannerIndex: 0,
      detail: {
        banners: [],
        title: [],
        prevProject: {},
        nextProject: {}
      },
      list: []
    }
  },
  watch: {
    detail: {
      handler: function (val, oldVal) {
        if (val) this.$nextTick(() => {
          bannerSwiper.updateSlides()
          this.init()
        })
      },
      deep: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    prevLink () {
      if (this.detail.prevProject.id) {
        this.$router.replace({ name: 'caseDetail', query: { id: this.detail.prevProject.id } })
      } else {
        this.$router.replace({ name: 'community', query: { id: this.detail.prevProject.listId } })
      }
    },
    nextLink () {
      if (this.detail.nextProject.id) {
        this.$router.replace({ name: 'caseDetail', query: { id: this.detail.nextProject.id } })
      } else {
        this.$router.replace({ name: 'community', query: { id: this.detail.nextProject.listId } })
      }
    },
    init () {
      let that = this
      bannerSwiper = new Swiper('.banner-swiper', { // eslint-disable-line
        loop: true,
        effect : 'fade',
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.banner-pagination',
          clickable: true
        }
      })
    },
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.detail = details.find(item => item.id === parseInt(to.query.id))
    })
  },
  beforeRouteUpdate (to, from, next) {
    next()
    this.detail = details.find(item => item.id === parseInt(to.query.id))
  }
} 
</script>

<style lang="scss" type="text/css">
.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 20px;
}
.swiper-pagination-bullet {
  background: #fff;
  width: 15px;
  height: 15px;
  opacity: 1;
  &.swiper-pagination-bullet-active {
    background: #00A077;
  }
}  
</style>

<style lang="scss" scoped>
.banner-slide-body {
  width: 100%;
  height: 973px;
  position: relative;
}
.banner-active {
  .banner-slide {
    transform: scale(1, 1) !important;
    transition: transform 2s;
  }
}
.banner-slide {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // transform: scale(1.1, 1.1);
}
.banner-pagination {
  position: absolute;
  bottom: 20px;
  z-index: 9;
  text-align: center;
}
.detail-content {
  padding: 50px 0;
}
.content-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .detail-title {
    font-size: 40px;
    // color: #00A077;
  }
  .detail-btn {
    padding: 10px 20px;
    cursor: pointer;
    border: 1px solid #999;
  }
}
.detail-body {
  padding: 100px 0;
}
.detail-info {}
.detail-info-section {
  display: flex;
}
.info-item-row {
  margin-right: 50px;
  .info-item-col {
    margin-top: 15px;
  }
}
.detail-desc {
  margin-top: 50px;
  min-height: 300px;
  .detail-desc-title {
    p {
      font-size: 20px;
      font-weight: bold;
    }
  }
  .detail-desc-text {
    margin-top: 10px;
    line-height: 30px;
    font-size: 20px;
  }
}
.detail-handles {
  margin-top: 150px;
}
.detail-honors {
  margin-top: 30px;
}
.honor-title {
  font-weight: bold;
  margin-bottom: 10px;
}
.honor-item {
  line-height: 24px;
}
.related-title {
  font-size: 40px;
  position: relative;
  padding-left: 20px;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0px;
    transform: translateY(-45%);
    width: 5px;
    height: 100%;
    background: #4D4D4D;
  }
}
.case-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
}
.case-item {
  margin-right: 14px;
  width: 393px;
  margin-bottom: 14px;
  cursor: pointer;
  &:nth-child(4n) {
    margin-right: 0;
  }
  &:hover {
    .case-item-title {
      color: #00A077;
    }
  }
}
.case-item-img {
  width: 100%;
  height: 240px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.case-item-bd {
  height: 90px;
  padding: 15px 0;
}
.case-item-title {
  font-size: 20px;
}
.case-item-address {
  margin-top: 10px;
  color: #A69EB1;
}
.detail-back,
.detail-honor,
.detail-return {
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 25px;
  cursor: pointer;
}
</style>
