<template>
  <div class="app-container">
    <el-table
      :data="tableData5"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="初试专业科目">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="硕士专业大类">
              <span>{{ props.row.postgraduateMajorTypeId }}</span>
            </el-form-item>
            <el-form-item label="年级">
              <span>{{ props.row.grade }}</span>
            </el-form-item>
            <el-form-item label="学习方式">
              <span>{{ props.row.studyMode }}</span>
            </el-form-item>
            <el-form-item label="回答意愿">
              <span>{{ props.row.answerWill }}</span>
            </el-form-item>
            <el-form-item label="初试公共科目">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="录取证明图片">
              <template slot-scope="scope">
                <image-previewer :prePictureList="scope.row.educationPicture">
                </image-previewer>
              </template>
            </el-form-item>
            <el-form-item label="推荐人">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="真实姓名"
        prop="userName">
      </el-table-column>
      <el-table-column
        label="手机号"
        prop="phoneNumber">
      </el-table-column>
      <el-table-column
        label="硕士阶段学号"
        prop="postgraduateNumber">
      </el-table-column>
      <el-table-column
        label="初试专业科目"
        prop="publicSubjectFirst">
      </el-table-column>
      <el-table-column
        fixed="right"
        prop="desc" label="操作" min-width="200">
        <template slot-scope="scope">
          <el-button type="primary" size="medium" class="blue cur-pointer" @click="audit(scope.row.userId)">通过审核
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page.currentPage"
      :page-sizes="page.pageSizes"
      :page-size="page.pageLimit"
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

  import ImagePreviewer from '@/components/ImagePreviewer'
  // import request from '@/js/request'
  import pagination from '@/mixins/pagination'
  // import { mapGetters } from 'vuex'
  // import permission from 'mixins/permission'
  // import CONSTDATA from '@/js/const'
  // import util from '../js/util'

  export default {
    name: 'audit',
    components: {
      ImagePreviewer
    },
    mixins: [pagination],
    directives: {},
    data () {
      const a = []
      for (let i = 0; i < 11; i++) {
        const temp = {
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
          educationPicture: ['https://crm-test.jingdaka.com/pic/1527047890608_23aedf045bc244caa2130f0416e605c7.jpg', 'https://crm-test.jingdaka.com/pic/1527047890608_23aedf045bc244caa2130f0416e605c7.jpg'],
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
    methods: {
      init (event) {
      },
      audit (event) {
      },
      getList (event) {
      },
      jumpPage (event) {
      }
    }
  }
</script>


<style scoped>
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
