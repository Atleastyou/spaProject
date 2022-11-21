<template lang="pug">
.introduce
  .introduce-banner
    img(:src="banner")
    .introduce-banner-body
      .introduce-banner-title 关于霍普
      .introduce-banner-info 精细化的设计水平&先进的企业管理经验
  .introduce-content.container
    .section-content
      .section-preview
        //- .section-preview-img
          img(:src="preview_img")
        .section-preview-video
          video(:src="preview_video" controls muted)
      .section-detail
        //- .section-detail-title 霍普建筑创立于2003年，于2008年注册为上海霍普建筑设计事务所股份有限公司, 并于2021年7月在深证证券交易所正式登陆创业板。（股票简称：霍普股份，股票代码：301024）
        .section-detail-content
          .section-detail-p 霍普股份具有建筑行业（建筑工程）甲级资质。
          .section-detail-p 是上海浦东新区认定研发机构，上海市科学技术委员会高新技术企业认证，上海市BIM技术创新联盟成员，拥有30多项专利，50多个软件著作权和知识产权。
          .section-detail-p.margin 霍普股份旗下拥有专业设计人员600余人，主营业务包括居住社区、商业办公、城市更新、产业园区、文化教育、医疗康养、文旅等领域的咨询、规划、建筑、室内一体化设计服务。
          .section-detail-p.margin 霍普股份经过多年积累与发展，凭借先进的国际化理念，雄厚的设计及运营实力，已成为国内一线开发商、政府机构与企业建筑设计技术与咨询服务的提供者，包括保利、融创、阳光城、华润、中海、绿地、瑞安、万科、世茂、旭辉、招商、万达、富力等。在国内已完成大量优秀作品并付诸实施，在业内取得了较高的知名度和良好的声誉。
</template>

<script>
export default {
  name: 'introduce',
  data () {
    return {
      banner: require('../../static/images/about/introduce/banner.png'),
      preview_img: require('../../static/images/about/introduce/introduce_1.png'),
      preview_video: require('../../static/images/about/introduce/about_1.mp4')
    }
  }
} 
</script>

<style lang="scss" scoped>
.section-content {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}
.introduce-banner {
  position: relative;
}
.introduce-banner-body {
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
.introduce-banner-title {
  color: #fff;
  font-size: 60px;
  font-weight: bold;
}
.introduce-banner-info {
  font-size: 34px;
  color: #fff;
  margin-top: 20px;
}
.introduce-content {
  min-height: 1000px;
}
.section-preview-img,
.section-preview-video {
  width: 400px;
  video {
    width: 100%;
    display: block;
  }
}
.section-detail {
  margin-left: 100px;
}
.section-detail-title {
  font-size: 25px;
  font-weight: bold;
  color: #000;
  line-height: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #666666;
}
.section-detail-p {
  font-size: 20px;
  line-height: 30px;
  &.margin {
    margin-top: 20px;
  }
}
</style>
