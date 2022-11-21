<template lang="pug">
  header.header
    .container.header-body(ref="header")
      .header-navbar
        a.header-logo(href="/")
          img.app-logo(src="../static/images/logo.png")
        .header-right
          .navbars
            a.navbar-item(
              v-for="item, index in menus"
              :href="!item.isJump ? item.url : 'javascript:;'"
              :class="item.filter | filterHeader"
              :ref="`navbar${index}`"
              :target="item.target"
            ) {{item.name}}
              .dropdown(v-if="item.dropdown", :ref="`dropdown${index}`")
                .dropdown-item(v-for="dropdownItem in item.dropdown.list")
                  .dropdown-child-title(v-if="dropdownItem.title") {{dropdownItem.title}}
                  a.dropdown-child-item(:class="{ 'active': child.url === currentHref }" v-for="child in dropdownItem.childrens", :href="child.url || 'javascript:;'") {{child.name}}
          .header-handles
            a.handle-search.icon-search
              //- a.handle-language(@click="changeLanguage") {{ $t("lang.header") }}
              //- a.handle-language(@click="changeLanguage") EN
</template>

<script>
export default {
  name: 'appHeader',
  data() {
    return {
      show: false,
      currentHref: '',
      menus: [
        {
          name: '首页',
          url: '/',
          filter: 'index'
        },
        {
          name: '关于霍普',
          url: '/about/introduce/',
          filter: 'about',
          dropdown: {
            paddingLeft: { paddingLeft: '0px' },
            list: [
              {
                title: '',
                childrens: [
                  { name: '霍普介绍', url: '/about/introduce/' }
                ]
              },
              {
                title: '',
                childrens: [
                  { name: '核心团队', url: '/about/team/' }
                ]
              },
              {
                title: '',
                childrens: [
                  { name: '企业荣誉', url: '/about/honor/' }
                ]
              },
              {
                title: '',
                childrens: [
                  { name: '合作伙伴', url: '/about/partner/' }
                ]
              }
            ],
          }
        }, {
          name: '项目案例',
          url: '/cases?id=1',
          filter: 'cases',
          dropdown: {
            paddingLeft: { paddingLeft: '0px' },
            list: [
              {
                title: '',
                childrens: [
                  { name: '居住社区', url: '/cases?id=1' }
                ]
              },
              {
                title: '',
                childrens: [
                  { name: '综合体', url: '/cases?id=2' }
                ]
              },
              {
                title: '',
                childrens: [
                  { name: '城市更新', url: '/cases?id=3' }
                ]
              },
              {
                title: '',
                childrens: [
                  { name: '室内设计', url: '/cases?id=4' }
                ]
              },
              {
                title: '',
                childrens: [
                  { name: '文化教育', url: '/cases?id=5' }
                ]
              },
              {
                title: '',
                childrens: [
                  { name: '产业园区', url: '/cases?id=6' }
                ]
              },
              {
                title: '',
                childrens: [
                  { name: '医疗康养', url: '/cases?id=7' }
                ]
              },
              // {
              //   title: '按区域',
              //   childrens: [
              //     { name: '华东地区', url: '/cases/area/1' },
              //     { name: '华南地区', url: '/cases/area/2' },
              //     { name: '华中地区', url: '/cases/area/3' },
              //     { name: '西南地区', url: '/cases/area/4' },
              //     { name: '西北地区', url: '/cases/area/5' },
              //     { name: '华北地区', url: '/cases/area/6' },
              //     { name: '东北地区', url: '/cases/area/7' }
              //   ]
              // }
            ],
          }
        }, 
        {
          name: '新闻资讯',
          url: '/information/',
          filter: 'information',
        }, 
        {
          name: '投资者关系',
          url: 'http://www.cninfo.com.cn/new/disclosure/stock?orgId=gfbj0833328&stockCode=301024#latestAnnouncement',
          target: '_blank'
        }, {
          name: '联系我们',
          url: '/contact/we/',
          filter: 'contact'
        }
      ]
    }
  },
  methods: {
    close () {
      this.show = false
    },
    changeLanguage () {
      if (this.$i18n.locale === 'en-US') this.$i18n.locale = 'zh-CN'
      else this.$i18n.locale = 'en-US'
    },
    setStyle () {
      // const { offsetLeft: headerLeft } = this.$refs.header
      // this.menus.forEach((item, index) => {
      //   const { offsetRight } = this.$refs[`navbar${index}`][0]
      //   console.log(window.innerWidth, offsetRight, headerLeft)
      //   if (this.$refs[`dropdown${index}`]) {
      //     this.$refs[`dropdown${index}`][0].style.paddingLeft = `${window.innerWidth - offsetLeft}px`
      //   }
      // })
    }
  },
  created () {
    this.currentHref = location.pathname
  },
  mounted () {
    this.setStyle()
    window.addEventListener('resize', () => {
      this.setStyle()
    })
  }
}
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  background: #fff;
}
.header-body {
  height: 100%;
}
.header-navbar {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.header-logo {
  display: inline-block;
}
.app-logo {
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  width: 200px;
  margin-right: 58px;
}
.navbars {
  display: flex;
  align-items: center;
  height: 100%;
}
.navbar-item {
  height: 100%;
  padding: 15px 0;
  margin: 0 20px;
  font-size: 17px;
  color: #4D4D4D;
  display: flex;
  align-items: center;
  white-space: nowrap;
  &.active {
    position: relative;
    color: #00A077;
    &:after {
      position: absolute;
      left: 0;
      bottom: 0;
      content: '';
      width: 100%;
      height: 2px;
      background: #00A077;
    }
  }
  &:hover {
    .dropdown {
      top: 66px!important;
      z-index: 999!important;
      opacity: 1!important;
      visibility: initial;
    }
    .icon-down {
      transform: rotate(180deg);
    }
  }
  .dropdown {
    position: fixed;
    top: 79px;
    left: 50%;
    padding: 20px 0 20px 700px;
    width: 100%;
    z-index: -1;
    background: #fff;
    opacity: 0;
    visibility: hidden;
    transition: all .3s;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    .dropdown-item {
      display: block;
      text-align: center;
      margin-right: 50px;
      .dropdown-child-title {
        font-size: 16px;
        margin-bottom: 10px;
        font-weight: bold;
        color: #333;
        text-align: left;
      }
      .dropdown-child-item {
        display: block;
        font-size: 14px;
        line-height: 24px;
        color: #4D4D4D;
        &:hover {
          color: #00A077;
        }
        &.active {
          color: #00A077;
        }
      }
    }
  }
  .icon-down {
    transition: transform .3s;
    font-size: 12px;
    margin-left: 5px;
  }
}
.header-handles {
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 50px;
}
.handle-language {
  font-weight: bold;
  padding-right: 10px;
  border-right: 3px solid #000;
}
.handle-search {
  padding-left: 10px;
  font-size: 20px;
}
.handle-btn {
  display: inline-block;
  width: 96px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  border-radius: 2px;
  margin-left: 20px;
}
.header-right {
  display: flex;
  align-items: center;
}
</style>
