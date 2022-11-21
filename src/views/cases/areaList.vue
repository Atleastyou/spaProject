<template lang="pug">
.case
  .case-banner
    .case-banner-img(:style="{ 'background-image': `url(${community.banner})` }")
    .case-banner-bd
      .case-banner-title {{community.title}}
      .case-banner-info {{community.info}}
  .case-tab
    .el-menu.container
      router-link.el-menu-item(v-for="item in menus", :to="{ name: item.routeName, params: { ...item.params } }", :class="{ 'active': item.params.id == activeId }") {{item.name}}
  .case-content.container
    .case-item(v-for="item in community.items" @click="seeDetail(item)")
      .case-item-img(:style="{ 'background-image': `url(${item.url})` }")
      .case-item-bd
        .case-item-title {{item.projectName}}
        .case-item-address 项目地点：{{item.address}}
</template>

<script>
import caseDetails from '@/utils/caseDetail'
import communitys from '@/utils/communitys'
export default {
  name: 'areaList',
  data () {
    return {
      menus: [
        {
          name: '华东地区',
          info: '精细化的设计水平&先进的企业管理经验',
          url: require('../../static/images/area_banner.png'),
          routeName: 'caseAreaList',
          params: { id: 1 }
        }, {
          name: '华南地区',
          info: '精细化的设计水平&先进的企业管理经验',
          url: require('../../static/images/area_banner.png'),
          routeName: 'caseAreaList',
          params: { id: 2 }
        }, {
          name: '华中地区',
          info: '精细化的设计水平&先进的企业管理经验',
          url: require('../../static/images/area_banner.png'),
          routeName: 'caseAreaList',
          params: { id: 3 }
        }, {
          name: '西南地区',
          info: '精细化的设计水平&先进的企业管理经验',
          url: require('../../static/images/area_banner.png'),
          routeName: 'caseAreaList',
          params: { id: 4 }
        }, {
          name: '西北地区',
          info: '精细化的设计水平&先进的企业管理经验',
          url: require('../../static/images/area_banner.png'),
          routeName: 'caseAreaList',
          params: { id: 5 }
        }, {
          name: '华北地区',
          info: '精细化的设计水平&先进的企业管理经验',
          url: require('../../static/images/area_banner.png'),
          routeName: 'caseAreaList',
          params: { id: 6 }
        }, {
          name: '东北地区',
          info: '精细化的设计水平&先进的企业管理经验',
          url: require('../../static/images/area_banner.png'),
          routeName: 'caseAreaList',
          params: { id: 7 }
        }
      ],
      community: {
        items: []
      },
      caseDetails: [],
      activeId: ''
    }
  },
  methods: {
    seeDetail (item) {
      this.$router.push({ name: 'caseDetail', params: { id: item.id } })
    },
    setList () {
      this.community.items = []
      let menusItem = this.menus.find(item => item.params.id === this.activeId)
      this.community.banner = menusItem.url
      this.community.title = menusItem.name
      this.community.info = menusItem.info
      this.caseDetails.forEach((item, index) => {
        communitys.forEach(col => {
          col.items.forEach(row => {
            if (item.id === row.id) {
              item.url = row.url
            }
          })
        })
        this.community.items.push(item)
      })
    }
  },
  beforeRouteEnter (to, form, next) {
    next(vm => {
      if (!to.params.id) {
        vm.activeId = 1
      } else {
        vm.activeId = parseInt(to.params.id)
      }
      vm.caseDetails = caseDetails.filter(item => item.area === vm.activeId)
      vm.setList()
    })
  },
  beforeRouteUpdate (to, from, next) {
    next()
    if (!to.params.id) {
      this.activeId = 1
    } else {
      this.activeId = parseInt(to.params.id)
    }
    this.caseDetails = caseDetails.filter(item => item.area === this.activeId)
    this.setList()
  }
}
</script>

<style lang="scss" scoped>
.case-banner {
  position: relative;
}
.case-banner-img {
  width: 100%;
  height: 590px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.case-banner-bd {
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
.case-banner-title {
  font-size: 60px;
  font-weight: bold;
  color: #fff;
}
.case-banner-info {
  font-size: 34px;
  color: #fff;
  margin-top: 20px;
}
.case-tab {
  margin-top: 50px;
}
.el-menu {
  display: flex;
  align-items: center;
}
.el-menu-item {
  margin-right: 30px;
  font-size: 20px;
  padding: 10px 0;
  border-bottom: 3px solid transparent;
  &.active {
    color: #00A077;
    border-bottom-color: #00A077;
  }
}
.case-content {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
}
.case-item {
  width: 394px;
  margin-right: 10px;
  margin-bottom: 30px;
  cursor: pointer;
  &:nth-child(4n) {
    margin-right: 0;
  }
  .case-item-img {
    height: 240px;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .case-item-bd {
    padding: 15px 0;
  }
  .case-item-title {
    font-size: 19px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .case-item-address {
    margin-top: 10px;
    font-size: 12px;
  }
}
</style>
