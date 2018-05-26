<template>
  <div class="audit app-container">
    <div>
      <span class="title">姓名</span>
      <span>{{userName}}</span>
    </div>
    <div>
      <span class="title">电话</span>
      <span>{{phoneNumber}}</span>
    </div>
    <!--undergraduateSchoolId: '222',-->
    <!--undergraduateMajorId: '1123',-->
    <!--postgraduateSchoolId: '1123',-->
    <!--postgraduateMajorId: '1',-->
    <div>
      <span class="title">本科学校</span>
      <span>{{userName}}</span>
    </div>
    <div>
      <span class="title">本科专业</span>
      <span>{{userName}}</span>
    </div>
    <div>
      <span class="title">研究生学校</span>
      <span>{{userName}}</span>
    </div>
    <div>
      <span class="title">研究生专业</span>
      <span>{{userName}}</span>
    </div>
    <div>
      <span class="title">专业大类</span>
      <span>{{majorTypesArr[postgraduateMajorTypeId - 1]}}</span>
    </div>
    <div>
      <span class="title">学位性质</span>
      <span>{{degreesArr[degreeNature]}}</span>
    </div>
    <div>
      <span class="title">就读学习方式</span>
      <span>{{studyModesArr[studyMode]}}</span>
    </div>
    <div>
      <span class="title">年级</span>
      <span>{{gradesArr[grade]}}</span>
    </div>
    <div>
      <!--todo-->
      <span class="title">初试公共科目</span>
      <span>{{publicSubjectFirstArr[publicSubjectFirst]}}</span>
    </div>
    <div>
      <span class="title">初试专业科目</span>
      <span>{{professionalSubjectFirst}}</span>
    </div>
    <div>
      <span class="title">回答意愿</span>
      <span>{{answerWill}}</span>
    </div>
    <div>
      <span class="title">拟录取证明图片</span>
      <image-previewer :prePictureList="educationPicture"></image-previewer>
    </div>
    <p>
    </p>
  </div>

</template>

<script>
  import ImagePreviewer from '@/components/ImagePreviewer'

  const degreesArr = ['学术型', '专业型']
  const studyModesArr = ['全日制', '非全日制']
  const gradesArr = ['准研究生', '研一', '研二', '研三']
  const publicSubjectFirstArr = [
    {
      'id': 14,
      txt: '政治'
    },
    {
      'id': 15,
      txt: '数学一'
    },
    {
      'id': 16,
      txt: '数学二'
    },
    {
      'id': 17,
      txt: '数学三'
    },
    {
      'id': 18,
      txt: '英语一'
    },
    {
      'id': 19,
      txt: '英语二'
    },
    {
      'id': 20,
      txt: '公共日语'
    },
    {
      'id': 21,
      txt: '管理类联考'
    },
    {
      'id': 22,
      txt: '西医综合'
    }
  ]
  const majorTypesArr = ['哲学', '经济学', '法学', '教育学', '文学', '历史学',
    '理学', '工学', '农学', '医学', '军事学', '管理学', '艺术学']
  const willTypes = [
    {
      txt: '院校及专业咨询',
      value: '5',
      choose: false
    },
    {
      txt: '13大学科',
      value: '1',
      choose: false
    },
    {
      txt: '复试科目类问题咨询',
      value: '3',
      choose: false
    },
    {
      txt: '公共科目类',
      value: '2',
      choose: false
    },
    {
      txt: '考研四大选择题与考研规划问题',
      value: '4',
      choose: false
    },
    {
      txt: '专业科目类',
      value: '6',
      choose: false
    }
  ]

  export default {
    name: 'audit',
    components: {
      ImagePreviewer
    },
    directives: {},
    data () {
      return {
        degreesArr,
        studyModesArr,
        gradesArr,
        publicSubjectFirstArr,
        majorTypesArr,
        willTypes,
        userId: 123,
        userName: '李四',
        phoneNumber: 17223422334,
        undergraduateSchoolId: '222',
        undergraduateMajorId: '1123',
        postgraduateSchoolId: '1123',
        postgraduateMajorTypeId: 111, // 专业大类
        postgraduateMajorId: '1',
        postgraduateNumber: '2',
        degreeNature: 1, //  学位性质 1学术型、2专业型
        studyMode: 1, // 就读学习方式 1:全日制、2:非全日制
        grade: 1, // 年级 1.准研究生、2.研一、3.研二、4.研三
        publicSubjectFirst: '1,2', // 初试公共科目
        professionalSubjectFirst: '初试专业科目', // 初试专业科目，逗号分割
        answerWill: '1, 2', //  回答意愿   1:13大学科 2：公共科目类 3：复试科目类问题咨询 4：考研四大选择题与考研规划问题 5 院校及专业咨询
        educationPicture: ['https://crm-test.jingdaka.com/pic/1527047890608_23aedf045bc244caa2130f0416e605c7.jpg']
      }
    },
    methods: {
      init () {
      },
      audit () {
      },
      getList () {
      },
      jumpPage () {
      }
    }
  }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  .audit{
    padding:20px;
    div{
      margin: 20px 0;
      .title{
        color: #3c4856;
        display: inline-block;
        min-width:150px ;
        margin-right: 50px;
        text-align: right;
      }
      span:last-child{
        color: #8b97a4;
      }
    }
  }

</style>
