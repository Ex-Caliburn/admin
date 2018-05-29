<template>
  <div class="app-container">

    <el-table
      :data="tableData5"
      style="width: 100%">
      <el-table-column
        label="头像"
        prop="nickName">
        <template slot-scope="scope">
          <img class="avatar" :src="scope.row.faceUrl"></img>
        </template>
      </el-table-column>
      <el-table-column
        label="昵称"
        prop="nickName">
      </el-table-column>
      <el-table-column
        label="学校"
        prop="schoolName">
      </el-table-column>
      <el-table-column
        label="专业"
        prop="majorName">
      </el-table-column>
      <el-table-column
        label="年级"
        prop="grade">
        <template slot-scope="scope">
          {{gradesArr[scope.row.grade - 1]}}
        </template>
      </el-table-column>
      <el-table-column
        label="信誉"
        prop="creditScore">
      </el-table-column>
      <el-table-column
        label="星级"
        prop="creditScoreStatus">
      </el-table-column>
      <el-table-column
        label="回答耗时"
        prop="avgAnswerTime">
      </el-table-column>
      <el-table-column
        fixed="right"
        prop="desc" label="操作" min-width="100">
        <template slot-scope="scope">
          <el-button type="primary" size="medium" class="cur-pointer" @click="goDetail(scope.row.userId)">详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page.pageNum"
      :page-sizes="page.pageSizes"
      :page-size="page.pageSize"
      layout="->, sizes, prev, pager, next, jumper"
      :total="totalCount">
    </el-pagination>
  </div>
</template>

<script>
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

  import request from '@/api/request'
  import pagination from '@/mixins/pagination'

  export default {
    name: 'audit',
    components: {},
    mixins: [pagination],
    directives: {},
    data () {
      const a = []
      for (let i = 0; i < 11; i++) {
        const temp = {
          "nickName": "郊外的时光",
          "faceUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJLm5x09VxIThGvjNJ8koLTjm8pGqJSbykMFQafrOWpnHA3IFC7B80PGic5abjhPx8x1fCFfsUId0Q/132",
          "schoolName": "上海大学",
          "majorName": "电磁场与微波技术\t080904",
          "grade": 3,
          "creditScore": 60,
          "creditScoreStatus": null,
          "avgAnswerTime": 0,
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
          // grade: 1, // 年级 1.准研究生、2.研一、3.研二、4.研三
          // publicSubjectFirst: '1,2', // 初试公共科目
          // professionalSubjectFirst: '初试专业科目', // 初试专业科目，逗号分割
          answerWill: '1, 2', //  回答意愿   1:13大学科 2：公共科目类 3：复试科目类问题咨询 4：考研四大选择题与考研规划问题 5 院校及专业咨询
          educationPicture: ['https://crm-test.jingdaka.com/pic/1527047890608_23aedf045bc244caa2130f0416e605c7.jpg', 'https://crm-test.jingdaka.com/pic/1527047890608_23aedf045bc244caa2130f0416e605c7.jpg']
        }
        temp.id = i
        a.push(temp)
      }
      return {
        degreesArr,
        studyModesArr,
        gradesArr,
        publicSubjectFirstArr,
        majorTypesArr,
        willTypes,
        tableData5: a
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      init () {
        request.get('getPostgraduateInfoList', {
          pageSize: this.page.pageSize,
          pageNum: this.page.pageNum
        })
          .then(res => {
            this.tableData5 = res
            this.totalCount = res.count
          }).catch(err => {
            console.log(err)
          })
      },
      audit () {
      },
      goDetail (id) {
        this.routePush('pSDetail', { pgUserId: id })
      },
      jumpPage () {
        this.init()
      }
    }
  }
</script>


<style scoped>
  .avatar{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
