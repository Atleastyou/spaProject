<template lang="pug">
.join
  .upload-toast(v-if="loading")
    .upload-loading
    .upload-toast-text 保存中....
  .toast(v-if="toast.show") {{toast.content}}
  .join-banner
    img(:src="banner")
  .join-container.container
    .join-title 最新招聘信息
    .section(v-for="item in recruitInfos")
      .section-hd(@click="showMore(item)")
        .section-hd-bd
          .section-title {{item.title}}
          .section-address 工作地：{{item.address}}
        .section-hd-ft(:class="{ 'is-show': item.type === activeType }")
          i.iconfont.icon-right
      transition(name="collapse")
        .section-bd(v-if="item.type === activeType")
          .section-dutys
            .duty-title 岗位职责：
            .duty-item(v-for="col in item.dutys") {{col}}
          .section-demands
            .duty-title 岗位职责：
            .demand-item(v-for="col in item.demands") {{col}}
          .section-form
            .section-form-inputs
              .section-form-input
                input(placeholder="姓名*" v-model="form.applicantName")
              .section-form-input
                input(placeholder="电话*" v-model="form.applicantPhone")
              .section-form-input
                input(placeholder="邮箱*" v-model="form.applicantEmail")
            .section-form-ft
              .section-form-ft_item(v-if="file.name")
                .form-item-hd 文件名字
                .form-item-file {{file.name}}
              .section-form-ft_item.section-form-upload(@click="selectFile") 上传简历*
              .section-form-ft_item.section-form-btn(@click="submit") 提交
  input.form-file-upload(type="file" ref="uploadBtn" @change="uploadFile")
</template>

<script>
import { postDelicacyServlet, FileUpload } from 'api'
export default {
  name: 'join',
  data () {
    return {
      banner: require('../../static/images/join/banner.png'),
      loading: false,
      toast: {
        show: false,
        content: ''
      },
      file: {
        name: ''
      },
      recruitInfos: [
        {
          type: 'assistant',
          title: '助理建筑师',
          address: '上海、广州、深圳',
          
          dutys: [
            '根据工作分配，按时完成上级交给的图纸绘制工作，包括建筑规划方案协助、扩初图纸绘制',
            '和细部设计，对所绘图纸的质量以及所统计数据负责，在不同项目中的职责因角色而定；'
          ],
          demands: [
            '1、全日制本科及以上学历，建筑学、城市规划、环境艺术等相关专业；',
            '2、熟练掌握Office办公软件、CAD、Sketchup、Photoshop、Revit等专业绘图软件；',
            '3、具备良好的专业素养与工作主动性；',
            '4、具备良好的人际沟通与团队协作能力。'
          ]
        },
        {
          type: 'intern',
          title: '建筑实习生',
          address: '上海、广州、深圳',
          dutys: [
            '1、协助建筑设计师进行项目资料收集整理工作；', 
            '2、根据建筑设计师安排，负责相应能力范围内的部分设计工作。'
          ],
          demands: [
            '1、全日制本科在校生，建筑学及环境艺术设计相关专业，实习周期二月以上',
            '2、熟练掌握Office办公软件、CAD、Sketchup、Photoshop、Revit等建模和渲染专业绘图软件；',
            '3、具备良好的专业素养与工作主动性；',
            '4、具备良好的人际沟通与团队协作能力。'
          ]
        },
        {
          type: 'architect',
          title: '建筑师',
          address: '上海、广州、深圳',
          dutys: [
            '1、协助专业负责人完成工程项目总体设计管理工作,对所负责的工程子项的设计质量和进度负责，保证所编制的设计文件的完整和正确性。',
            '2、根据专业负责人分配的任务要求，领会设计意图、设计原则，做好本职工作及相互配合工作；',
            '3、保证提交图纸符合公司规范标准，保证图纸质量；',
            '4、完成领导交办的其他工作。'
          ],
          demands: [
            '1、全日制本科及以上学历，建筑学、城市规划、环境艺术等相关专业；',
            '2、熟练掌握Office办公软件、CAD、Sketchup、Photoshop、Revit等专业绘图软件；',
            '3、熟练使用AutoCAD、SketchUp、Photoshop、天正等相关软件，专业基础知识掌握扎实，熟悉本专业基本规范，对专业知识有较强的钻研精神；',
            '4、思维活跃、思路清晰、有创新精神；',
            '5、敬业踏实，认真负责，有良好的职业素质和团队精神及沟通协调能力。'
          ]
        },
        {
          type: 'high',
          title: '高级建筑师',
          address: '上海、广州、深圳',
          dutys: [
            '1 、项目职责 对负责项目的质量、进度、成本、风险等进行总体把控；能够独立完成单体建筑或较小规模建筑群的规划设计或扩初细部图纸设计，可指导低级别建筑师完成工作；在不同项目中的职责因角色而定；',
            '2、 知识管理 进行项目沉淀和知识积累，定期进行总结和分享，配合产品研发中心进行研发工作；',
            '3 、其他 协助进行项目投标、团队建设、人才培养、客户关系维护等工作。'
          ],
          demands: [
            '1、教育背景：本科以上学历；',
            '2、专业：建筑学及相关专业；',
            '3、工作经验： 5年以上建筑设计工作经验；',
            '4、基本技能：熟练掌握Office办公软件、CAD、Sketchup、Photoshop、Revit等专业绘图软件；',
            '5、外语水平：CET-4；',
            '6、能力素质： 熟悉建筑规范与设计流程，具有一定的方案创作与设计能力；具备良好的人际沟通与团队协作能力；具备一定的项目管理能力。'
          ]
        },
        {
          type: 'senior',
          title: '资深建筑师',
          address: '上海、广州、深圳',
          dutys: [
            '1.　项目职责　能够作为霍普标准C类/D类项目的项目负责人，对负责项目的质量、进度、成本、风险等进行总体把控；或作为霍普各类项目的项目主创建筑师PD，对项目规划方案负责；在不同项目中的职责因角色而定；',
            '2.　知识管理　进行项目沉淀和知识积累，定期进行总结和分享，配合产品研发中心进行研发工作；',
            '3.　其他　协助进行项目投标、团队建设、人才培养、客户关系维护等工作。'
          ],
          demands: [
            '1.　本科以上学历，建筑学及相关专业；',
            '2.　7年以上建筑设计工作经验；',
            '3.　熟练掌握Office办公软件、CAD、Sketchup、Photoshop、Revit等专业绘图软件；',
            '4.　思维敏锐、活跃，具有优秀的方案创作与建筑构思创意能力；',
            '5.　具备良好的人际沟通、团队协调与管理能力；',
            '6.　具备良好的项目管理能力。'
          ]
        }
      ],
      activeType: 'assistant',
      form: {
        dutyName: '',
        applicantName: '',
        applicantPhone: '',
        applicantEmail: '',
        fileId: ''
      }
    }
  },
  methods: {
    showMore (item) {
      if (this.activeType !== item.type) {
        this.form = {
          dutyName: '',
          applicantName: '',
          applicantPhone: '',
          applicantEmail: '',
          fileId: ''
        }
        this.file = { name: '' }
        this.activeType = item.type
      } else {
        this.activeType = ''
      }
    },
    tips (text) {
      clearTimeout(this.toastTimer)
      this.toast = { show: true, content: text }
      this.toastTimer = setTimeout(() => {
        this.toast = { show: false, content: ''}
      }, 3000)
    },
    async submit (key) {
      try {
        let reg = /^1[3|4|5|7|8|9][0-9]\d{8}$/
        if (!this.form.applicantName) {
          this.tips('请先输入姓名')
          return
        }
        if (!this.form.applicantPhone || !reg.test(this.form.applicantPhone)) {
          this.tips('请先输入正确电话')
          return
        }
        if (!this.form.applicantEmail) {
          this.tips('请先输入邮箱')
          return
        }
        if (!this.file) {
          this.tips('请先上传简历')
          return
        }
        this.loading = true
        if (this.file) {
          const file = await this.fileUpload(this.file)
          this.form.fileId = file.fileId
        }
        this.form.dutyName = key
        this.$axios.post(postDelicacyServlet, { action: 'EP_ResumeManagementProcessor', content: { ...this.form } })
        this.loading = false
      } catch (err) {
        this.loading = false
        console.log(err)
        this.tips(err.msg)
      }
    },
    async fileUpload (raw) {
      return new Promise(async (resolve, reject) => {
        try {
          let formData = new FormData()
          formData.append('Filedata', raw)
          formData.append("applicationId", 4)
          const { ResultSet } = await this.$axios.post(FileUpload, { formData: formData, isUpload: true }, { headers:{ "Content-Type": "multipart/form-data" } })
          resolve({ ...ResultSet.Result[0] })
        } catch (err) {
          console.log(err)
          reject(err)
        }
      })
    },
    selectFile () {
      this.$refs.uploadBtn.dispatchEvent(new MouseEvent('click'))
    },
    uploadFile ({ target }) {
      this.file = target.files[0]
    }
  }
} 
</script>

<style lang="scss" scoped>
.collapse-enter-active,
.collapse-leave-active {
  transition: all .3s ease;
  max-height: 1000px; /* 这里将最大高度设置为折叠元素不可能超越的高度 比如1000px */
}
.collapse-enter,
.collapse-leave-to {
  opacity: 0;
  max-height: 0px;
}
.join-container {
  padding: 10px 0;
}
.join-title {
  padding: 20px 0;
  font-size: 20px;
  color: #999;
}
.section {
  padding: 20px 40px;
  background: #F2F2F2;
  margin-bottom: 25px;
}
.section-title {
  font-size: 30px;
  line-height: 1;
  font-weight: bold;
  color: #333;
}
.section-address {
  margin-top: 10px;
  font-size: 14px;
  color: #999;
}
.section-dutys {
  margin-top: 40px;
}
.duty-title {
  font-size: 20px;
  color: #999;
  margin-bottom: 10px;
}
.duty-item,
.demand-item {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
}
.section-demands {
  margin-top: 20px;
}
.section-form {
  margin-top: 50px;
}
.section-form-inputs {
  display: flex;
  align-items: center;
  justify-content: space-around;
  .section-form-input {
    width: 33.333333%;
  }
  input {
    border: 1px solid #CCCCCC;
    background: #E6E6E6;
    height: 70px;
    width: 485px;
    padding: 0 20px;
    font-size: 18px;
  }
}
.section-form-ft {
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  .section-form-ft_item {
    margin: 0 10px;
    cursor: pointer;
    &.section-form-btn {
      width: 215px;
      height: 70px;
      line-height: 70px;
      color: #fff;
      font-size: 20px;
      background: #00A077;
      text-align: center;
    }
    &.section-form-upload {
      width: 220px;
      height: 70px;
      line-height: 70px;
      font-size: 20px;
      border-bottom: 1px solid #CCCCCC;
      color: #999;
    }
  }
}
.form-item-hd {
  font-size: 16px;
}
.form-item-file {
  font-size: 18px;
  margin-top: 10px;
  max-width: 256px;
  width: 256px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.section-hd {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  .section-hd-ft {
    .iconfont {
      font-size: 30px;
      transform: rotate(90deg);
    }
    &.is-show {
      .iconfont {
        transform: rotate(-90deg);
      }
    }
  }
}
.upload-toast {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,.7);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 99999;
}
.upload-toast-text {
  font-size: 16px;
  color: #fff;
  margin-top: 10px;
}
.upload-loading {
  width: 30px;
  height: 30px;
  margin: 0 auto;
  vertical-align: middle;
  animation: loading 1s steps(12, end) infinite;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;
  background-size: 100%;
}
@keyframes loading {
  0% {
    transform: rotate3d(0, 0, 1, 0deg);
  }

  100% {
    transform: rotate3d(0, 0, 1, 360deg);
  }
}
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 9999;
  padding: 10px;
  font-size: 18px;
  text-align: center;
  color: #fff;
  background: rgba(0,0,0,.7);
  border-radius: 6px;
  min-width: 100px;
}
.form-file-upload {
  display: none;
}
</style>
