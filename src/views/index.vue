<template lang="pug">
.index
  .swiper-container.banner-swiper
    .swiper-wrapper
      a.swiper-slide.swiper-no-swiping(
        v-for="item, index in banners"
        :href="item.href"
        :class="{ 'banner-active' : bannerIndex === index + 1 }"
      )
        .banner-slide-body
          .banner-slide-bg_txt( :style="{ 'background-image': `url(${item.bg_txt})` }")
          .banner-slide(:style="{ 'background-image': `url(${item.url})` }")
          //- .banner-mask
            .banner-mask-body
              .banner-mask-title PC端网站正在改版更新！敬请期待……
              .banner-mask-info
                p 可以通过手机端继续访问霍普官网，
                p 感谢您的持续关注！
          .banner-slide-content
            h2 {{item.title}}
            .banner-slide-content-text {{item.text}}
            .banner-more(v-if="item.title")
              span MORE 
              span >
  .banner-pagination
    .pagination-item(v-for="item, index in paginations", :class="{ 'active': activeIndex === index + 1 }" @click="changePagination(index)")
      .pagination-item-progress
      h4 {{item}}
  section.index-info.container
    .index-introduce
      p 霍普股份经过多年积累与发展，凭借先进的国际化理念，雄厚的设计及运营实力，已成为国内一线开发商、政府机构与企业建筑设计技术与咨询服务的提供者，包括保利、融创、阳光城、华润、中海、绿地、瑞安、万科、世茂、旭辉、招商、万达、富力等。在国内已完成大量优秀作品并付诸实施，在业内取得了较高的知名度和良好的声誉。
      a.index-introduce-handle(href="/about/introduce/")
        span MORE
        span >
  .index-section.container
    //- 居住社区
    section.card-section
      a.card-item.card-item_2.card-item-margin(v-for="item, index in lives" v-if="index <= 1" :href="item.href")
        .card-item-bd.card-item-bd_hover
          .card-item-img(:style="{ 'background-image': `url(${item.url})` }")
          .card-item-hover
            .card-item-title {{item.title}}
            .card-item-content {{item.content}}
      .card-item
        a.card-item(v-for="item, index in lives" v-if="index > 1 && index <= 4" :href="item.href")
          .card-item-bd(
            :class="{ 'card-item-default': index === 3, 'card-item-bd_hover': index !== 3, 'card-item-margin': index === 3, 'card-item_1': index === 3 || index === 4, 'card-item_3': index === 2, 'card-item-margin_b': index === 2 }"
          )
            .card-item-img(v-if="index === 3", :style="{ 'background-color': '#00A077' }")
            .card-item-img(v-else :style="{ 'background-image': `url(${item.url})` }")
            .card-item-hover
              .card-item-title {{item.title}}
              .card-item-content {{item.content}}
    //- 综合体
    section.card-section
      .card-item
        a.card-item(
          v-for="item, index in synthesis"
          v-if="index < 5"
          :href="item.href"
        )
          .card-item-bd.card-item-bd_hover(
            :class="{ 'card-item_1': index === 0 || index === 1 || index === 2 || index === 4, 'card-item-margin': index === 0 || index === 1 || index === 2 || index === 4 || index === 3, 'card-item_3': index === 3, 'card-item-margin_b': index === 0 || index === 1 || index === 2 }"
          )
            .card-item-img(:style="{ 'background-image': `url(${item.url})` }")
            .card-item-hover
              .card-item-title {{item.title}}
              .card-item-content {{item.content}}
      a.card-item.card-item_2(v-for="item, index in synthesis" v-if="index === 5" :href="item.href")
        .card-item-bd.card-item-bd_hover
          .card-item-img(:style="{ 'background-image': `url(${item.url})` }")
          .card-item-hover
            .card-item-title {{item.title}}
            .card-item-content {{item.content}}
    section.card-section
      .card-item(
        v-for="item, index in synthesis"
        v-if="index > 5"
      )
        .card-item-bd.card-item_1(:class="{ 'card-item-default': index === 6, 'card-item-bd_hover': index !== 6, 'card-item-margin': index !== 9 }")
          .card-item-img(v-if="index === 6", :style="{ 'background-color': '#2761A2' }")
          .card-item-img(v-else :style="{ 'background-image': `url(${item.url})` }")
          .card-item-hover
            .card-item-title {{item.title}}
            .card-item-content {{item.content}}
    //- 医疗康养
    section.card-section
      a.card-item(
        v-for="item, index in medicals"
        :href="item.href"
      )
        .card-item-bd(
          :class="{ 'card-item_1': index === 0 || index === 2, 'card-item_3': index === 1, 'card-item-margin': index === 0 || index === 1, 'card-item-default': index === 2, 'card-item-bd_hover': index !== 2 }"
        )
          .card-item-img(v-if="index === 2", :style="{ 'background-color': '#00A077' }")
          .card-item-img(v-else :style="{ 'background-image': `url(${item.url})` }")
          .card-item-hover
            .card-item-title {{item.title}}
            .card-item-content {{item.content}}
    //- 室内空间
    section.card-section
      a.card-item(
        v-for="item, index in spaces"
        v-if="index === 0"
        :href="item.href"
      )
        .card-item-bd.card-item_2.card-item-margin.card-item-bd_hover
          .card-item-img(:style="{ 'background-image': `url(${item.url})` }")
          .card-item-hover
            .card-item-title {{item.title}}
            .card-item-content {{item.content}}
      .card-item
        a.card-item(
          v-for="item, index in spaces"
          v-if="index !== 0"
          :href="item.href"
        )
          .card-item-bd(
            :class="{ 'card-item_1': index === 1 || index === 2 || index === 3 || index === 4, 'card-item-margin': index === 1 || index === 2 || index === 4, 'card-item-margin_b': index === 1 || index === 2 || index === 3, 'card-item_3': index === 5, 'card-item-default': index === 1, 'card-item-bd_hover': index !== 1 }"
          )
            .card-item-img(v-if="index === 1", :style="{ 'background-color': '#00A077' }")
            .card-item-img(v-else :style="{ 'background-image': `url(${item.url})` }")
            .card-item-hover
              .card-item-title {{item.title}}
              .card-item-content {{item.content}}
</template>

<script>
let bannerSwiper = null
export default {
  name: 'index',
  data() {
    return {
      show: false,
      activeIndex: 1,
      bannerIndex: 0,
      banners: [
        {
          url: require('../static/images/banner_3.png'),
          title: '城市更新',
          text: '精细化的设计水平&先进的企业管理经验',
          href: '/cases?id=3'
        },
        {
          url: require('../static/images/banner_2.png'),
          title: '全民健康',
          text: '在设计中强调自然色彩和自然材质的应用。',
          href: '/cases?id=7'
        },
        {
          url: require('../static/images/banner_1.png'),
          title: '绿色环保',
          text: '让使用者感知自然材质，回归原始和自然。',
          href: '/cases?id=1'
        },
        {
          url: require('../static/images/banner_4.png'),
          bg_txt: require('../static/images/banner_1_txt.png'),
          title: '',
          href: 'javascript:;'
        }
      ],
      paginations: ['城市更新', '全民健康', '绿色环保', '智能科技'],
      lives: [
        {
          url: require('../static/images/index/flex_1.jpg'),
          title: '保利 · 天悦',
          content: '',
          href: '/cases/detail?id=15'
        }, {
          url: require('../static/images/index/flex_2.jpg'),
          title: '沈阳保利云上',
          content: '',
          href: '/cases/detail?id=8'
        }, {
          url: require('../static/images/index/flex_3.jpg'),
          title: '泉州保利时光印象',
          content: '',
          href: '/cases/detail?id=12'
        }, {
          url: '',
          title: '居住社区',
          content: '',
          href: '/cases?id=1'
        }, {
          url: require('../static/images/index/flex_4.png'),
          title: '广州升龙集团R-13地块项目',
          content: '',
          href: '/cases/detail?id=22'
        }
      ],
      synthesis: [
        {
          url: require('../static/images/index/flex_5.png'),
          title: '三湘 · 印象名邸',
          content: '',
          href: '/cases/detail?id=1'
        }, {
          url: require('../static/images/index/flex_6.png'),
          title: '苏州保利置业栖月雅园',
          content: '',
          href: '/cases/detail?id=7'
        }, {
          url: require('../static/images/index/flex_7.png'),
          title: '昆明阳光城文澜东方',
          content: '',
          href: '/cases/detail?id=18'
        }, {
          url: require('../static/images/index/flex_8.png'),
          title: '天健山棠春晓',
          content: '',
          href: '/cases/detail?id=3'
        }, {
          url: require('../static/images/index/flex_9.jpg'),
          title: '三新汇洋上海市静安区江宁社区039街坊',
          content: '',
          href: '/cases/detail?id=2'
        }, {
          url: require('../static/images/index/flex_10.png'),
          title: '武汉保利大都会',
          content: '',
          href: '/cases/detail?id=14'
        }, {
          url: '',
          title: '综合体',
          content: '',
          href: '/cases?id=2'
        }, {
          url: require('../static/images/index/flex_11.png'),
          title: '湾区保利东莞虎门TOD',
          content: '',
          href: '/cases/detail?id=46'
        }, {
          url: require('../static/images/index/flex_12.jpg'),
          title: '成都昌公堰TOD',
          content: '',
          href: '/cases/detail?id=47'
        }, {
          url: require('../static/images/index/flex_13.jpg'),
          title: '成都保利二仙桥TOD',
          content: '',
          href: '/cases/detail?id=48'
        }
      ],
      medicals: [
        {
          url: require('../static/images/index/flex_14.jpg'),
          title: '上海交通大学医学院附属瑞金医院消化道肿瘤临床诊断中心',
          content: '',
          href: '/cases/detail?id=74'
        }, {
          url: require('../static/images/index/flex_15.jpg'),
          title: '上海交通大学医学院附属瑞金医院转化医学大楼',
          content: '',
          href: '/cases/detail?id=72'
        }, {
          url: '',
          title: '医疗康养',
          content: '',
          href: '/cases?id=7'
        }
      ],
      spaces: [
        {
          url: require('../static/images/index/flex_16.jpg'),
          title: '无锡金茂府',
          content: '',
          href: '/cases/detail?id=61'
        }, {
          url: '',
          title: '室内空间',
          content: '',
          href: '/cases?id=6'
        }, {
          url: require('../static/images/index/flex_17.png'),
          title: '海南·永涛花梨谷文化旅游度假景区别墅',
          content: '',
          href: '/cases/detail?id=62'
        }, {
          url: require('../static/images/index/flex_18.png'),
          title: '成都中海OFFICEZIP',
          content: '',
          href: '/cases/detail?id=59'
        }, {
          url: require('../static/images/index/flex_19.jpg'),
          title: '成都中海环宇荟',
          content: '',
          href: '/cases/detail?id=60'
        }, {
          url: require('../static/images/index/flex_20.jpg'),
          title: '中海北京OFFICEZIP',
          content: '',
          href: '/cases/detail?id=58'
        }
      ]
    }
  },
  components: {},
  methods: {
    changePagination (index) {
      bannerSwiper.slideTo(index + 1, 500, false)
    },
  },
  mounted () {
    let that = this
    bannerSwiper = new Swiper('.banner-swiper', { // eslint-disable-line
      loop: true,
      effect : 'fade',
      autoplay: {
        // delay: 5000,
        // disableOnInteraction: false
      },
      on:{
        slideChange: function () {
          if (this.activeIndex > that.banners.length) {
            this.slideTo(1, 500, false)
          }
          setTimeout(() => {
            if (this.activeIndex > 4) that.bannerIndex = 1
            else that.bannerIndex = this.activeIndex
          }, 1000)
          that.activeIndex = this.realIndex + 1
        }
      }
      // pagination: {
      //   el: '.banner-pagination',
      //   clickable: true
      // }
    })
  }
}
</script>
<style lang="scss">
.swiper-slide {
  overflow: hidden;
}
.swiper-slide-active {
  
}
</style>
<style lang="scss" scoped>
.banner-swiper {
  position: relative;
}
.banner-slide-body {
  width: 100%;
  height: 590px;
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
  transform: scale(1.1, 1.1);
}
.banner-slide-bg_txt {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
}
.banner-slide-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  color: #fff;
  padding-left: 235px;
  h2 {
    font-size: 70px;
    font-weight: bold;
  }
  .banner-slide-content-text {
    margin-top: 30px;
    font-size: 25px;
    line-height: 35px;
    width: 280px;
  }
  .banner-more {
    margin-top: 100px;
    font-size: 20px;
    cursor: pointer;
  }
}
.banner-pagination {
  width: 100%;
  height: 80px;
  background: #E6E6E6;
  display: flex;
  align-items: center;
  justify-content: center;
  .pagination-item {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0 35px;
    cursor: pointer;
    font-size: 20px;
    &:after {
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 3px;
      height: 20px;
      background-color: #000;
    }
    h4 {
      &:hover {
        color: #00A077;
        font-weight: bold;
      }
    }
    &.active {
      color: #00A077;
      h4 {
        font-weight: bold;
      }
      .pagination-item-progress {
        width: 100%;
        opacity: 1;
      }
    }
    .pagination-item-progress {
      transition: width 5s linear;
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 3px;
      opacity: 0;
      background: #00A077;
    }
  }
}
.index-info {
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
  .index-introduce {
    font-size: 17px;
    line-height: 25px;
  }
}
.index-introduce-handle {
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid #00A077;
  border-radius: 30px;
  color: #00A077;
  margin-top: 40px;
}
.index-news {
  flex: 1;
  margin-left: 200px;
}
.index-news-title {
  font-size: 17px;
  padding: 5px 0;
  border-bottom: 1px solid #000;
  label {
    display: inline-block;
    line-height: 1;
    padding-right: 10px;
    border-right: 1px solid #000;
   }
  span {
    display: inline-block;
    padding-left: 10px;
  }
}
.index-news-list {
  margin-top: 10px;
}
.new-item {
  line-height: 24px;
  color: #00A077;
}
.card-section {
  display: flex;
  margin-bottom: 14px;
}
.card-item {
  display: flex;
  flex-wrap: wrap;
}
.card-item-bd {
  position: relative;
  width: 100%;
  height: 100%;
  &.card-item-bd_hover {
    &:hover {
      .card-item-img {
        transform: scale(1.1);
        transition: transform .5s linear;
      }
      .card-item-hover {
        transition: opacity .5s linear;
        opacity: 1;
      }
    }
  }
  &.card-item-default {
    .card-item-hover {
      background-color: transparent;
      opacity: 1;
    }
    &:hover {
      .card-item-hover {
        transition: background .5s linear;
        background: rgba(0, 0, 0, .5);
      }
    }
  }
}
.card-item-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transform: scale(1);
}
.card-item-hover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0;
  background: rgba(0, 0, 0, .5);
  width: 100%;
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.card-item_1 {
  width: 393px;
  min-width: 393px;
  height: 318px;
  overflow: hidden;
}
.card-item_2 {
  width: 393px;
  min-width: 393px;
  height: 650px;
  overflow: hidden;
}
.card-item_3 {
  width: 800px;
  min-width: 800px;
  height: 318px;
  overflow: hidden;
}
.card-item-margin {
  margin-right: 14px;
}
.card-item-margin_b {
  margin-bottom: 14px;
}
.card-item-title {
  font-size: 25px;
  line-height: 30px;
  font-weight: bold;
  color: #fff;
}
.banner-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 99;
  .banner-mask-title {
    font-size: 70px;
    font-weight: bold;
    color: #ffff;
  }
  .banner-mask-info {
    font-size: 50px;
    font-weight: bold;
    color: #fff;
    margin-top: 20px;
    p {
      line-height: 60px;
    }
  }
}
</style>
