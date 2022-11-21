<template lang="pug">
.team
  .team-banner
    img(:src="banner")
    .team-banner-body
      .team-banner-title 核心团队
      .team-banner-info 精细化的设计水平&先进的企业管理经验
  .team-container.container
    //- .team-container-info 霍普股份旗下拥有专业设计人员600余人，主营业务包括居住社区、商业办公、城市更新、产业园区、文化教育、医疗康养、文旅等领域的咨询、规划、建筑、室内一体化设计服务。
    .team-persons
      .team-person-title 企业高管
      .team-person-content
        .person-row(v-for="row in persons")
          .person-col(v-for="col in row", :class="col.flex")
            .person-col-content
              .person-col-photo
                img(:src="col.photo")
              .person-col-detail
                .person-col-name {{col.name}}
                .person-col-info
                  .person-col-introduce
                    .person-col-position
                      p(v-for="item in col.position") {{item}}
                    .person-col-educations
                      .person-col-education-title 教育背景
                      p(v-for="item in col.educations") {{item}}
                  .person-col-cont {{col.content}}
</template>

<script>
export default {
  name: 'team',
  data () {
    return {
      banner: require('../../static/images/about/team/banner.png'),
      persons: [
        [
          {
            photo: require('../../static/images/about/team/team_1.png'),
            name: '龚 俊',
            position: ['霍普股份董事长', '总经理、首席设计总监', '国家一级注册建筑师', '上海建筑学会商业委员会委员'],
            educations: ['建筑学学士', '重庆大学', '中欧国际工商学院EMBA'],
            content: '于2008年创办霍普，凭着敏锐的市场洞察力和对设计价值的深刻理解，带领公司不断发展壮大，积累了多个全国前20强地产开发战略合作伙伴，公司专注千对商业综合体和高品质住宅的设计研究与创新，主持设计过大量的优秀作品，以精细化的设计水平和先进的企业管理经验赢得了业内口碑和认可。曾获CIHAF“中国青年建筑师年度贡献奖”、金盘奖“最佳金盘设计人物” 等荣誉，入围2018年“上海市杰出中青年建筑师”。',
            flex: 'flex-2'
          },
          {
            photo: require('../../static/images/about/team/team_2.png'),
            name: '赵 恺',
            position: ['霍普股份董事、设计总裁', '国家一级注册建筑师'],
            educations: ['建筑学硕士', '华中科技大学', '英国卡迪夫大学建筑学院留学交流', '美国哥伦比亚大学访问学者'],
            content: '',
            flex: 'flex-1'
          }
        ],
        [
          {
            photo: require('../../static/images/about/team/team_3.png'),
            name: '杨 赫',
            position: ['霍普股份董事、副总经理', '设计总监/住宅标准化事业部总经理', '国家一级注册建筑师'],
            educations: ['建筑学学士、城市规划硕士', '长安大学', '上海交通大学上海市浦东新区企业家', '创新领导力发展计划成员'],
            content: '',
            flex: 'flex-1'
          },
          {
            photo: require('../../static/images/about/team/team_4.png'),
            name: '沙 辉',
            position: ['霍普股份副总经理', '设计总监', '叁和事业部总经理'],
            educations: ['西南科技大学'],
            content: '',
            flex: 'flex-1'
          },
          {
            photo: require('../../static/images/about/team/team_5.png'),
            name: '杨 杰 峰',
            position: ['霍普股份副总经理', '设计总监', '壹众事业部总经理'],
            educations: ['建筑学学士', '四川大学'],
            content: '',
            flex: 'flex-1'
          }
        ]
      ]
    }
  }
} 
</script>

<style lang="scss" scoped>
.team-banner {
  position: relative;
}
.team-banner-body {
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
.team-banner-title {
  color: #fff;
  font-size: 60px;
  font-weight: bold;
}
.team-banner-info {
  font-size: 34px;
  color: #fff;
  margin-top: 20px;
}
.team-container {
  padding: 40px 0;
  min-height: 1000px;
}
.team-container-info {
  font-size: 20px;
}
.team-persons {
  // margin-top: 40px;
}
.team-person-title {
  padding: 0 0 15px;
  font-size: 25px;
  color: #000;
  font-weight: bold;
  border-bottom: 1px solid #666666;
}
.team-person-content {
  margin-top: 15px;
}
.person-row {
  display: flex;
  margin-bottom: 30px;
}
.person-col {
  padding: 0 15px;
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
  .person-col-content {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #F2F2F2;
  }
}
.person-col-photo {
  width: 200px;
  img {
    width: 100%;
  }
}
.flex-1 {
  flex: 33.3333333%;
}
.flex-2 {
  flex: 66.6666666%;
}
.person-col-detail {
  flex: 1;
  padding: 20px 0 0 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.person-col-name {
  font-size: 25px;
  font-weight: bold;
  color: #000;
}
.person-col-info {
  display: flex;
  align-items: center;
  margin-top: 10px;
  flex: 1;
}
.person-col-introduce {
  // min-width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    font-size: 14px;
    line-height: 20px;
    color: #333;
    white-space: nowrap;
  }
}
.person-col-position {
  height: 50%;
}
.person-col-educations {
  height: 50%;
}
.person-col-education-title {
  font-size: 14px;
  margin-bottom: 5px;
  color: #666;
}
.person-col-cont {
  padding: 0 50px;
  font-size: 16px;
  line-height: 25px;
}
</style>
