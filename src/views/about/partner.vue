<template lang="pug">
.partner
  .partner-banner
    img(:src="banner")
    .partner-banner-body
      .partner-banner-title 合作伙伴
      .partner-banner-info 感知责任、优质回报、合作共赢
  .partner-container.container
    //- .partner-info 霍普股份经过多年积累与发展，凭借先进的国际化理念，雄厚的设计及运营实力，已成为国内一线开发商、政府机构与企业建筑设计技与咨询服务的提供者，包括保利、融创、阳光城、华润、中海、绿地、瑞安、万科、世茂、旭辉、招商、万达、富力等。在国内已完成大量优秀作品并付诸实施，在业内取得了较高的知名度和良好的声誉。
    .partner-section
      .partner-section-title 合作企业
      .partner-section-content
        img(:src="partner_enter")
    .partner-section
      .partner-section-title 医疗机构
      .partner-section-content
        img(:src="partner_medical")
</template>

<script>
export default {
  name: 'partner',
  data () {
    return {
      banner: require('../../static/images/about/partner/banner.png'),
      partner_enter: require('../../static/images/about/partner/partner_1.png'),
      partner_medical: require('../../static/images/about/partner/partner_2.png'),
    }
  }
} 
</script>

<style lang="scss" scoped>
.partner-banner {
  position: relative;
}
.partner-banner-body {
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
.partner-banner-title {
  color: #fff;
  font-size: 60px;
  font-weight: bold;
}
.partner-banner-info {
  font-size: 34px;
  color: #fff;
  margin-top: 20px;
}
.partner-container {
  padding: 40px 0;
  min-height: 1000px;
}
.partner-info {
  font-size: 20px;
  line-height: 30px;
}
.partner-section {
  // margin-top: 30px;
}
.partner-section-title {
  font-size: 25px;
  line-height: 35px;
  padding-bottom: 5px;
  border-bottom: 1px solid #666;
  font-weight: bold;
  color: #333;
}
.partner-section-content {
  margin-top: 20px;
}
</style>
