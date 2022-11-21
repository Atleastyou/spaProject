const informations = [
  {
    title: '霍普医疗设计聘请刘殿奎先生担任首席医疗顾问专家',
    time: '2022-03-08',
    id: 1,
    type: 'release'
  },
  {
    title: '霍普股份旗下千旭医疗咨询参与全国首家公立临床研究型医院——瑞金医院海南医院暨博鳌研究型医院建设',
    time: '2022-01-05',
    id: 2,
    type: 'release'
  },
  {
    title: '为设计赋能 | 2021普霍杯终评会',
    time: '2021-12-31',
    id: 3,
    type: 'release'
  },
  {
    title: '数智营城 | 霍普股份探索用数字化技术重塑城市建设',
    time: '2021-11-26',
    id: 4,
    type: 'release'
  },
  {
    title: '热烈祝贺苏州市中医医院二期竣工开业',
    time: '2021-11-25',
    id: 5,
    type: 'release'
  },
  {
    title: '共鉴湾区设计之夜——霍普股份受邀参加保利虎门TOD城市发展论坛',
    time: '2021-11-18',
    id: 6,
    type: 'release'
  },
  {
    title: '上海交通大学船舶海洋与建筑工程学院-霍普股份数字城市联合实验室成立',
    time: '2021-11-05',
    id: 7,
    type: 'release'
  },
  {
    title: '“渝”你一起，“蓉”耀未来—霍普股份落子西南区域',
    time: '2021-11-04',
    id: 8,
    type: 'release'
  },
  {
    title: '从辞掉铁饭碗到深交所敲钟，一个建筑设计师要经历什么？',
    time: '2021-09-17',
    id: 9,
    type: 'release'
  },
  {
    title: '霍普股份丨受邀出席IDA颁奖典礼',
    time: '2021-09-06',
    id: 10,
    type: 'release'
  },
  {
    title: '霍普股份丨受邀出席北京保利发布会',
    time: '2021-09-05',
    id: 11,
    type: 'release'
  },
  {
    title: '建筑科技化，霍普股份全资设立上海创汇星科技有限公司！',
    time: '2021-09-03',
    id: 12,
    type: 'release'
  },
  {
    title: '探索节能新方向：中国国际太阳能十项全能竞赛火热进行中，重大-西南院-美的-霍普联队披荆斩棘！',
    time: '2021-09-01',
    id: 13,
    type: 'release'
  },
  {
    title: '祝贺CMC中标 | 霍普医疗健康业务发展中心整合优势',
    time: '2021-08-31',
    id: 14,
    type: 'release'
  },
  {
    title: '霍普股份商办事业部乔迁上海浦西办公室',
    time: '2021-08-27',
    id: 15,
    type: 'release'
  },
  {
    title: '霍普股份（股票代码：301024）进入医疗健康咨询、策划和建筑设计领域',
    time: '2021-08-19',
    id: 16,
    type: 'release'
  },
  {
    title: '智能@未来丨霍普股份上市答谢晚宴圆满举行',
    time: '2021-08-16',
    id: 17,
    type: 'release'
  },
  {
    title: '热烈祝贺！霍普股份今日在深圳交易所正式敲钟上市！',
    time: '2021-07-28',
    id: 18,
    type: 'release'
  },
  {
    title: '设计观点：转化医学重点科室的通风空调设计要点',
    time: '2022-03-16',
    id: 19,
    type: 'design'
  },
  {
    title: '现代思维下去同质化高端产品研发｜河南保利·璞岸',
    time: '2022-01-24',
    id: 20,
    type: 'design'
  },
  {
    title: '湘江雁归 | 衡阳·保利阅江台展示中心',
    time: '2022-01-11',
    id: 21,
    type: 'design'
  },
  {
    title: '香樟树下，离尘不离城的品质生活 | 保利·拾光年展示中心',
    time: '2021-12-29',
    id: 22,
    type: 'design'
  },
  {
    title: '以TOD模式打造枢纽级城市综合体新地标 | 福州阳光城大都会',
    time: '2021-12-29',
    id: 23,
    type: 'design'
  },
  {
    title: '霍普股份荣获 2021美国IDA国际设计奖',
    time: '2022-01-07',
    id: 24,
    type: 'honor'
  },
  {
    title: '霍普股份设计荣获Pro+ Award 普罗奖',
    time: '2021-12-24',
    id: 25,
    type: 'honor'
  },
  {
    title: '成都保利成华区二仙桥TOD荣获PIO城市TOD设计标杆奖',
    time: '2021-11-29',
    id: 26,
    type: 'honor'
  },
  {
    title: '霍普股份作品荣获2021美国建筑大师奖',
    time: '2021-11-03',
    id: 27,
    type: 'honor'
  },
  {
    title: '霍普股份荣获三项CREDAWARD地产设计大奖·中国优秀奖',
    time: '2021-09-02',
    id: 28,
    type: 'honor'
  },
  {
    title: '上海市建筑学会第九届建筑创作奖公布，霍普再获佳绩！',
    time: '2021-07-22',
    id: 29,
    type: 'honor'
  },
  {
    title: '四个项目斩获ICONIC AWARDS 2021德国标志性设计奖！',
    time: '2021-07-13',
    id: 30,
    type: 'honor'
  },
  {
    title: '霍普股份佳作斩获IDA美国国际设计大奖银奖殊荣！',
    time: '2021-01-28',
    id: 31,
    type: 'honor'
  },
  {
    title: '2022霍普杯 | 神秘人物重磅来袭，你准备好了吗？',
    time: '2022-03-28',
    id: 32,
    type: 'trophy'
  },
  {
    title: '2021 UIA-霍普杯国际大学生建筑设计竞赛获奖全名单首发！',
    time: '2021-11-13',
    id: 33,
    type: 'trophy'
  },
  {
    title: '霍普杯解题 | 龚俊：基于乡村可持续发展，提出解决乡村困境新思路',
    time: '2021-09-23',
    id: 34,
    type: 'trophy'
  },
  {
    title: '霍普杯解题 | 崔愷：乡村处处皆可设计',
    time: '2021-09-22',
    id: 35,
    type: 'trophy'
  },
  {
    title: '霍普杯解题 | 张利：了解乡村的人，才能设计未来的乡村',
    time: '2021-09-07',
    id: 36,
    type: 'trophy'
  },
  {
    title: '霍普设计 | 深圳凤鸣水岸荣获佳兆业集团最佳住宅设计金奖',
    time: '2021-12-16',
    id: 37,
    type: 'design'
  },
  {
    title: '霍普设计 | 长江边上的山谷秀居 | 重庆保利麓谷林语',
    time: '2021-12-14',
    id: 38,
    type: 'design'
  },
  {
    title: '霍普设计 | 百年西水东的优雅赋新 | 绿地香港无锡西水东·檀宫',
    time: '2021-12-10',
    id: 39,
    type: 'design'
  },
  {
    title: '霍普设计 | 隐藏的人间星河 | 保利时代 · 汕美星城示范区',
    time: '2021-12-04',
    id: 40,
    type: 'design'
  },
  {
    title: '霍普杯解题 | 孙一民：乡村设计的过程就是自主创新思辨的过程',
    time: '2021-09-18',
    id: 41,
    type: 'trophy'
  },
  {
    title: '霍普杯解题 | 孔宇航：用更高更广的视角去思考新乡村设计',
    time: '2021-08-18',
    id: 42,
    type: 'trophy'
  },
  {
    title: '霍普杯解题 | 吕品晶：以系统的思考介入乡村建设，以创新的理念表达乡村迭代',
    time: '2021-08-18',
    id: 43,
    type: 'trophy'
  },
  {
    title: '霍普杯解题 | 李振宇：要提出有意义的畅想，更要提出有表现力的乡村设计形式',
    time: '2021-08-18',
    id: 44,
    type: 'trophy'
  },
  {
    title: '2021 UIA-霍普杯评委会主席⸺“怪人”雷姆·库哈斯',
    time: '2021-06-16',
    id: 45,
    type: 'trophy'
  },
  {
    title: '霍普设计 | 融古汇今的闽北画卷 | 福州保利·海丝居艺小镇',
    time: '2021-11-08',
    id: 46,
    type: 'design'
  },
  {
    title: '霍普研发丨三房“两卫”，独梯入户，看101㎡高层如何拥有洋房级生活体验',
    time: '2021-09-18',
    id: 47,
    type: 'design'
  },
  {
    title: '霍普设计 | 居山水之间者为上，昆明阳光城文澜东方·生活馆设计',
    time: '2021-07-09',
    id: 48,
    type: 'design'
  },
  {
    title: '霍普设计 | 济宁保利城艺术馆 · 悬浮都市的月光宝盒',
    time: '2021-07-02',
    id: 49,
    type: 'design'
  },
  {
    title: '2021 UIA-霍普杯竞赛开题首发！普利兹克奖得主雷姆·库哈斯担任主席',
    time: '2021-04-28',
    id: 50,
    type: 'trophy'
  },
  {
    title: 'UIA-霍普杯 2020 国际大学生建筑设计竞赛获奖全名单首发',
    time: '2020-10-24',
    id: 51,
    type: 'trophy'
  },
  {
    title: '霍普杯评委龚俊专访 | 重要的不是手法，而是解决问题的逻辑',
    time: '2020-08-26',
    id: 52,
    type: 'trophy'
  },
  {
    title: 'UIA-霍普杯丨看遍精品，往届8年一等奖回访（下篇）',
    time: '2020-04-26',
    id: 53,
    type: 'trophy'
  },
  {
    title: 'UIA-霍普杯丨看遍精品，往届8年一等奖回访（上篇）',
    time: '2020-04-16',
    id: 54,
    type: 'trophy'
  },
  {
    title: '霍普股份荣获 LONDON DESIGN AWARDS 2020 伦敦设计大奖银奖',
    time: '2020-11-23',
    id: 55,
    type: 'honor'
  },
  {
    title: '霍普股份作品一举斩获第十五届金盘奖全国总评选年度两项大奖',
    time: '2020-11-20',
    id: 56,
    type: 'honor'
  },
  {
    title: '霍普股份作品一举斩获第十五届金盘奖福深赛区最佳预售楼盘两项大奖',
    time: '2020-10-24',
    id: 57,
    type: 'honor'
  },
  {
    title: '霍普股份作品一举斩获第十五届金盘奖宁波赛区最佳预售楼盘大奖',
    time: '2020-09-28',
    id: 58,
    type: 'honor'
  }
]

export default informations