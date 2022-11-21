<template lang="pug">
.case
  .case-banner
    .case-banner-img(:style="{ 'background-image': `url(${community.banner})` }")
    .case-banner-bd
      .case-banner-title {{community.title}}
      .case-banner-info {{community.info}}
  .case-tab
    .el-menu.container
      router-link.el-menu-item(v-for="item in menus", :to="{ name: item.routeName, params: { ...item.params }, query: { ...item.query } }", :class="{ 'active': item.query.id == activeId }") {{item.name}}
  .case-content.container
    .case-item(v-for="item in community.items" @click="seeDetail(item)")
      .case-item-img(:style="{ 'background-image': `url(${item.url})` }")
      .case-item-bd
        .case-item-title {{item.name}}
        .case-item-address 项目地点：{{item.address}}
</template>

<script>
import communitys from '@/utils/communitys'
export default {
  name: 'cases',
  data () {
    return {
      menus: [
        {
          name: '全区域',
          routeName: 'cases',
          query: { id: '' }
        },
        {
          name: '华东地区',
          routeName: 'cases',
          query: { id: 1 }
        }, {
          name: '华南地区',
          routeName: 'cases',
          query: { id: 2 }
        }, {
          name: '华中地区',
          routeName: 'cases',
          query: { id: 3 }
        }, {
          name: '西南地区',
          routeName: 'cases',
          query: { id: 4 }
        }, {
          name: '西北地区',
          routeName: 'cases',
          query: { id: 5 }
        }, {
          name: '华北地区',
          routeName: 'cases',
          query: { id: 6 }
        }, {
          name: '东北地区',
          routeName: 'cases',
          query: { id: 7 }
        }
      ],
      community: {
        items: []
      },
      activeId: '',
      paramsId: '',
    }
  },
  methods: {
    seeDetail (item) {
      this.$router.push({ name: 'caseDetail', query: { id: item.id } })
    },
    setMenus () {
      this.menus.forEach(item => {
        item.params = {
          id: this.paramsId
        }
      })
    },
    setList () {
      let newCommunity = []
      this.community.items.forEach((item, index) => {
        if (item.area === this.activeId) {
          newCommunity.push(item)
          this.community.items.splice(index, 1)
        }
      })
      this.community.items.unshift(...newCommunity)
    }
  },
  beforeRouteEnter (to, form, next) {
    next(vm => {
      let copyComs = JSON.parse(JSON.stringify(communitys))
      if (!to.query.id) {
        vm.paramsId = 1
      } else {
        vm.paramsId = parseInt(to.query.id)
      }
      vm.setMenus()
      vm.community = copyComs.find(item => item.id === vm.paramsId)
      vm.activeId = parseInt(to.query.id) || ''
      if (to.query.id) vm.setList()
    })
  },
  beforeRouteUpdate (to, form, next) {
    // this.community.items = []
    next()
    let copyComs = JSON.parse(JSON.stringify(communitys))
    if (!to.query.id) {
      this.paramsId = 1
    } else {
      this.paramsId = parseInt(to.query.id)
    }
    this.setMenus()
    this.community = copyComs.find(item => item.id === this.paramsId)
    this.activeId = parseInt(to.query.id) || ''
    if (to.query.id) this.setList()
  }
}
</script>

<style lang="scss" scoped>
.case-banner {
  position: relative;
}
.case-banner-img {
  width: 100%;
  height: 470px;
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
