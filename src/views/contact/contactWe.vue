<template lang="pug">
.contact
  a.contact-banner(href="https://map.baidu.com/poi/%E9%9C%8D%E6%99%AE%E5%BB%BA%E7%AD%91%E8%AE%BE%E8%AE%A1%E4%BA%8B%E5%8A%A1%E6%89%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/@13531022.168507855,3643661.414541701,17.91z?uid=6f40d794c58dc2955e0d02c8&ugc_type=3&ugc_ver=1&device_ratio=1&compat=1&pcevaname=pc4.1&querytype=detailConInfo&da_src=shareurl" target="_blank")
    img(:src="banner")
  .contact-container.container
    //-.contact-container-photo
      img(:src="photo")
    .contact-container-address
      .adress-item
        .adress-item-title 上海市浦东新区民生路3号270库
        .adress-item-label (86 21) 58783137
        .adress-item-label (86 21) 58782763
      .adress-item.adress-item-padding
        .adress-item-title 市场合作:
        .adress-item-label hypbd@hyp-arch.com
      .adress-item.adress-item-padding
        .adress-item-title 品牌合作:
        .adress-item-label branding@hyp-arch.com
      .adress-item.adress-item-padding
        .adress-item-title 招聘信息:
        .adress-item-label hyphr@hyp-arch.com
      .adress-item.adress-item-flex
        .adress-item-qrcode
          img(:src="qrcode")
          .adress-item-qrcode-title 微信公众账号
        .adress-item-accounts
          img(:src="accounts")
          .adress-item-qrcode-title 抖音账号
        //-.adress-item-title 微信公众账号 霍普股份
        //-.adress-item-label 邮编 200135
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      banner: require('../../static/images/contact/contact_1.png'),
      qrcode: require('../../static/images/contact/contact_qrcode.png'),
      accounts: require('../../static/images/contact/contact_qrcode_1.png')
    }
  }
} 
</script>

<style lang="scss" scoped>
.contact-container {
  padding: 60px 0;
  display: flex;
}
.contact-container-photo {
  width: 900px;
  height: 625px;
}
.contact-container-address {
  padding-left: 60px;
  flex: 1;
  display: flex;
  justify-content: space-around;
}
.adress-item {
  // padding-bottom: 20px;
  &.adress-item-flex {
    display: flex;
  }
  &.adress-item-padding {
    border-right: 1px solid #666;
    padding-right: 40px;
    .adress-item-title {
      font-weight: normal;
    }
  }
}
.adress-item-qrcode,
.adress-item-accounts {
  margin: 0 10px;
  width: 98px;
  text-align: center;
}
.adress-item-qrcode-title {
  font-size: 16px;
  margin-top: 10px;
  color: #333;
}
.adress-item-title {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}
.adress-item-label {
  font-size: 20px;
  line-height: 25px;
}
</style>
