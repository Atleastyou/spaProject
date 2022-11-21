<template lang="pug">
.honor
  .honor-banner
    img(:src="banner")
    .honor-banner-body
      .honor-banner-title 企业荣誉
      .honor-banner-info 以科技为动力，以质量为根本
  .honor-container.container
    .honor-content
      //- .honor-header
        p 霍普股份具有建筑行业（建筑工程）甲级资质。
        p 是上海浦东新区认定研发机构，上海市科学技术委员会高新技术企业认证，上海市BIM技术创新联盟成
        p 员，拥有30多项专利，50多个软件著作权和知识产权。
      .honor-years
        .year-item(v-for="item in years", :class="{ 'active': item === activeYear }" @click="activeYear = item") {{item}}
      .honor-body
        .honor-item(v-for="item in activeItem.items") {{item}}
    .honor-infos
      .info-item(v-for="item in infos")
        .info-item-img(:style="{ 'background-image': `url(${item.img})` }")
        .info-item-bd
          .info-item-title {{item.title}}
          .info-item-desc {{item.info}}
      //- router-link.info-link(:to="{ name: 'information' }") + 查看更多咨询
</template>

<script>
export default {
  name: 'honor',
  data () {
    return {
      banner: require('../../static/images/about/honor/banner.png'),
      years: [2020, 2019, 2018, 2017, 2016, 2015, 2014],
      activeYear: 2020,
      activeItem: {},
      honors: [
        {
          year: 2020,
          items: [
            '霍普股份获得保利发展北京公司2019“最佳方案设计奖”、青岛公司“优秀设计供方奖”',
            '香港绿地樾湖书院荣获德国IF建筑公建大奖',
            '香港绿地樾湖书院获得2020国际房地产大奖（亚太区）类别优秀奖',
            '保利·云上荣获意大利A`Desgin金奖',
            '保利·云禧荣获意大利A`Desgin银奖',
            '广州万科永庆坊金声影院改造荣获意大利A`Desgin金奖',
            '保利云上荣获2020 ICONIC AWARDS德国标志性设计大奖',
            '奥园翡翠岚都艺术馆荣获2020 ICONIC AWARDS德国标志性设计大奖',
            '绿地香港樾湖书院荣获2020 ICONIC AWARDS德国标志性设计大奖',
            '广州万科永庆坊金声影院改造荣获2020 ICONIC AWARDS德国标志性设计大奖',
            '扬州也今东南荣获2020 LONDON DESIGN AWARD伦敦设计大奖-银奖',
            '扬州也今东南荣获GERMAN DESGIN AWARDS 2021德国设计大奖',
            '广州万科永庆坊金声影院改造荣获GERMAN DESGIN AWARDS 2021德国设计大奖',
            '深圳东昌小学改造与建筑设计项目成功入围2020意大利THE PLAN AWARD设计大奖基于Revite设计的二次开发项目荣获第三届科技进步奖综合类三等奖',
            '北京保利和光逸境荣获第六届CREDAWARD地产设计大奖·中国银奖；另有5项作品获得第六届CREDAWARD地产设计大奖·中国优秀奖',
            '中海成都OFFICEZIP荣获第五届REARD全球地产设计大奖金奖',
            '中海北京OFFICEZIP荣获第五届REARD全球地产设计大奖银奖',
            '金桥金鼎天地展示中心荣获第五届REARD全球地产设计大奖铜奖',
            '霍普股份18项作品荣获PRO+普罗奖',
            '霍普股份11项作品荣获第十五届金盘奖各赛区最佳大奖',
          ]
        }
      ],
      infos: [
        {
          img: require('../../static/images/about/honor/honor_1.png'),
          title: '霍普荣誉 | 霍普股份荣获2021美国IDA国籍设计奖',
          info: '岁末将至，再传喜讯！'
        },
        {
          img: require('../../static/images/about/honor/honor_2.png'),
          title: '霍普荣誉 | 霍普股份荣获Pro+Award普罗奖',
          info: '唯进步 不止步'
        },
        {
          img: require('../../static/images/about/honor/honor_3.png'),
          title: '霍普荣誉 | 霍普股份荣获三项CREDAWARD地产设计大奖',
          info: '中国优秀奖'
        },
        {
          img: require('../../static/images/about/honor/honor_4.png'),
          title: '霍普荣誉 | 四个项目斩获ICONIC AWARDS',
          info: '2021德国标志性设计奖！'
        }
      ]
    }
  },
  created () {
    this.activeItem = this.honors.find(item => item.year === this.activeYear)
  }
} 
</script>

<style lang="scss" scoped>
.honor-banner {
  position: relative;
}
.honor-banner-body {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.honor-banner-title {
  color: #fff;
  font-size: 60px;
  font-weight: bold;
}
.honor-banner-info {
  font-size: 34px;
  color: #fff;
  margin-top: 20px;
}
.honor-container {
  padding: 40px 0;
  min-height: 1000px;
  display: flex;
  justify-content: space-between;
}
.honor-content {
  max-width: 890px;
}
.honor-header {
  p {
    font-size: 16px;
    line-height: 25px;
  }
}
.honor-years {
  display: flex;
  padding-bottom: 5px;
  border-bottom: 1px solid #666;
  .year-item {
    font-size: 16px;
    padding: 0 20px;
    color: #666;
    border-right: 1px solid #666;
    cursor: pointer;
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      border-right: none;
    }
    &.active {
      color: #333;
      font-weight: bold;
    }
  }
}
.honor-body {
  margin-top: 15px;
  .honor-item {
    font-size: 16px;
    line-height: 30px;
  }
}
.info-item {
  margin-bottom: 30px;
}
.info-item-img {
  width: 556px;
  height: 230px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.info-item-bd {
  padding: 10px 20px;
  background: #E6E6E6;
  .info-item-title {
    font-size: 14px;
    color: #333;
    font-weight: bold;
    line-height: 20px;
  }
  .info-item-desc {
    font-size: 12px;
    line-height: 20px;
  }
}
.info-link {
  font-size: 16px;
}
</style>
