<template lang="pug">
.information
  .information-banner
    img(:src="banner")
    a.information-banner-body(href="/information/detail/3")
      .information-banner-container.container
        .information-banner-time 2021-12-31
        .information-banner-title 为设计赋能
        .information-banner-title 2021普霍杯终评会
        .information-banner-info MORE >
  .information-container.container
    .information-container-header
      .breadcrumb
        .breadcrumb-item(v-for="item in breadcrumbs", :class="{ 'active': item.type === ($route.query.type || 'release') }" @click="changeNavbar(item)") {{item.title}}
      .header-filter
        input(placeholder="2021")
        .header-filter-search
          .iconfont.icon-search
    .information-body
      a.information-item(v-for="item in informations", :href="`/information/detail?id=${item.id}`")
        .information-item-time {{item.time}}
        .information-item-bd {{item.title}}
        .information-item-ft
          .iconfont.icon-right
</template>

<script>
import informations from '@/utils/information'
export default {
  name: 'information',
  data () {
    return {
      banner: require('../../static/images/information/banner.png'),
      informations: [],
      breadcrumbs: [
        {
          title: '新闻发布',
          type: 'release'
        }, {
          title: '设计与研发',
          type: 'design'
        }, {
          title: '霍普荣誉',
          type: 'honor'
        }, {
          title: '霍普杯',
          type: 'trophy'
        }
      ],
      list: []
    }
  },
  methods: {
    setList () {
      let list = []
      let type = this.$route.query.type || 'release'
      informations.forEach(item => {
        if (item.type === type)  list.push(item)
      })
      this.informations = list
    },
    changeNavbar (item) {
      this.$router.replace({ name: this.$route.name, query: { type: item.type } })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.setList()
    })
  },
  beforeRouteUpdate (to, from, next) {
    next()
    this.setList()
  }
} 
</script>

<style lang="scss" scoped>
.information-banner {
  position: relative;
  height: 470px;
  img {
    height: 100%;
  }
}
.information-banner-body {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .information-banner-container {
    height: 100%;
    display: flex;
    // align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
.information-banner-time {
  font-size: 16px;
  margin-bottom: 10px;
  color: #fff;
}
.information-banner-title {
  color: #fff;
  font-size: 40px;
  line-height: 45px;
  font-weight: bold;
}
.information-banner-info {
  font-size: 20px;
  color: #fff;
  margin-top: 40px;
}
.information-container {
  padding: 40px 0;
  min-height: 1000px;
}
.information-container-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 1px solid #AEAEAE;
  .breadcrumb {
    display: flex;
    align-items: center;
    .breadcrumb-item {
      padding: 0 20px;
      font-size: 24px;
      color: #666;
      border-left: 1px solid #666;
      cursor: pointer;
      &:first-child {
        padding-left: 0;
        border-left: none;
      }
      &.active {
        color: #00A077;
      }
    }
  }
  .header-filter {
    border: 1px solid #BABABA;
    padding: 5px 0 5px 10px;
    display: flex;
    align-items: center;
    input {
      width: 150px;
      height: 20px;
      border: none;
      &:focus {
        outline: none;
      }
    }
    .header-filter-search {
      padding: 0 5px 0 10px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-left: 1px solid #BABABA;
    }
  }
}
.information-body {
  
}
.information-item {
  padding: 10px 5px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:nth-child(odd) {
    background: #F2F2F2;
  }
  &:nth-child(even) {
    background: #FAFAFA;
  }
}
.information-item-time {
  font-size: 25px;
  color: #999;
  line-height: 40px;
  padding: 0 20px;
}
.information-item-bd {
  padding: 0 20px;
  border-left: 1px solid #9D9D9D;
  font-size: 20px;
  line-height: 40px;
  color: #0C0E0E;
  flex: 1;
}
.information-item-ft {
  padding: 0 20px;
  font-size: 25px;
  color: #AAAAAA;
}
</style>
