<template lang="pug">
.contact
  .contact-menu.container
    a.menu-item(href="/contact/we/", :class="{ 'active': pathname == '/contact/we/' }") 联系我们
    a.menu-item(href="/contact/join/", :class="{ 'active': pathname == '/contact/join/' }") 加入我们
  keep-alive
    router-view(exclude="")
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      pathname: ''
    }
  },
  mounted () {
    this.pathname = window.location.pathname
  }
}
</script>

<style lang="scss" scoped>
.contact-menu {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 40px;
}
.menu-item {
  display: inline-block;
  padding: 20px;
  font-size: 16px;
  &.active {
    color: #00A077;
  }
}
</style>
