<template lang="pug">
#app(data-server-rendered='true')
  app-header
  .app-container
    router-view(exclude="cases,caseDetail,areaList")
  app-footer
  a.consult-mask(href="https://p.qiao.baidu.com/cps/chat?siteId=17544592&userId=37688860&siteToken=00fb086e9803044d504798528d439aac" target="_blank")
    .consult-mask-icon
      img(src="./static/images/mask_icon.gif")
    .consult-mask-text 在线咨询
</template>
<script>
import appHeader from '@/components/appHeader'
import appFooter from '@/components/appFooter'
export default {
  name: 'app',
  components: {
    appHeader,
    appFooter
  }
}
</script>
<style lang="scss" scoped>
.app-container {
  margin-top: 80px;
  min-height: calc(100vh - 80px);
}
.app-float {
  display: inline-block;
  position: fixed;
  right: 0;
  bottom: 500px;
  width: 100px;
  right: 20px;
  z-index: 99999;
  box-shadow: 0 0 20px 0 rgba(0,0,0,0.40);
  border-radius: 50%;
}
.consult-mask {
  position: fixed;
  right: 0;
  bottom: 50%;
  transform: translateY(50%);
  width: 65px;
  height: 230px;
  background: #00A077;
  border-radius: 30px 0 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 999;
}
.consult-mask-icon {
  width: 41px;
}
.consult-mask-text {
  font-size: 26px;
  color: #fff;
  margin-top: 10px;
  writing-mode: tb-rl;
  letter-spacing: 5px;
}
</style>
