<template lang="pug">
footer.app-footer
  .container.app-footer-content
    .footer-ul
      .footer-ul-title 项目案例
      .footer-ul-content
        .footer-li
          a.footer-li-item(href="/cases?id=1") 居住社区
          a.footer-li-item(href="/cases?id=2") 综合体
          a.footer-li-item(href="/cases?id=3") 城市更新
          a.footer-li-item(href="/cases?id=6") 室内设计
        .footer-li
          a.footer-li-item(href="/cases?id=5") 文化教育
          a.footer-li-item(href="/cases?id=4") 产业园区
          a.footer-li-item(href="/cases?id=7") 医疗康养
          a.footer-li-item(href="/information/") 各期霍普内刊
    .footer-ul
      .footer-ul-title 投资者关系
      .footer-ul-content
        .footer-li
          //- a.footer-li-item(href="http://www.cninfo.com.cn/new/disclosure/stock?orgId=gfbj0833328&stockCode=301024#latestAnnouncement") 公司公告
          //- a.footer-li-item(href="http://www.cninfo.com.cn/new/disclosure/stock?orgId=gfbj0833328&stockCode=301024#latestAnnouncement") 投资者互动平台
          .footer-li-item 公司公告
          .footer-li-item 投资者互动平台
    .footer-ul
      .footer-ul-title 公司分布
      .footer-ul-content
        .footer-li
          .footer-li-item 上海总部
          .footer-li-item 广州公司
          .footer-li-item 武汉公司
          .footer-li-item 香港公司
        .footer-li
          .footer-li-item 深圳公司
          .footer-li-item 北京公司
          .footer-li-item 南宁公司
          .footer-li-item 海口公司
        .footer-li
          .footer-li-item 重庆公司
          .footer-li-item 成都公司
    .footer-ul
      .footer-ul-title 联系方式
      .footer-ul-content
        .footer-li
          .footer-li-item 联系电话：(86 21) 58783137
          .footer-li-item 市场合作：hypbd@hyp-arch.com
          .footer-li-item 品牌合作：branding@hyp-arch.com
          .footer-li-item 招聘信息：hyph r@hyp-arch.com
    .footer-ul
      .footer-ul-title 总部地址
      .footer-ul-content
        .footer-li
          .footer-li-item 上海市浦东新区民生路3号270库
    .footer-company
      .footer-logo
        img(src="../static/images/logo.png")
      .footer-app
        .iconfont.icon-weixin
        .iconfont.icon-weibo
      .footer-address
        span © 2019 霍普股份 版权所有 
        a(href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank") 沪ICP备12023842号
</template>

<script>
import {} from 'api'
export default {
  name: 'appFooter',
  data() {
    return {
      informations: []
    }
  },
  methods: {},
  created () {}
}
</script>
<style lang="scss" scoped>
.app-footer {
  width: 100%;
  padding: 50px 0;
  background: #F2F2F2;
}
.app-footer-content {
  display: flex;
  justify-content: space-around;
}
.footer-ul {
  margin-right: 40px;
}
.footer-ul-title {
  font-size: 17px;
  font-weight: bold;
}
.footer-ul-content {
  display: flex;
  margin-top: 20px;
}
.footer-li {
  margin-right: 30px;
}
.footer-li-item {
  display: block;
  font-size: 14px;
  line-height: 24px;
}
.footer-logo {
  width: 250px;
  img {
    width: 100%;
  }
}
.footer-app {
  margin-top: 20px;
  text-align: right;
  .iconfont {
    margin-right: 15px;
    font-size: 25px;
    &.icon-weibo {
      font-size: 20px;
    }
  }
}
.footer-address {
  margin-top: 20px;
  p {
    font-size: 12px;
    line-height: 24px;
  }
}
</style>
