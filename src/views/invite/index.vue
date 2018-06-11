<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="头像"
        prop="nickName">
        <template slot-scope="scope">
          <avatar :key="scope.row.faceUrl" class="avatar" :pictureSrc="scope.row.faceUrl"></avatar>
        </template>
      </el-table-column>
      <el-table-column
        label="用户名"
        prop="content">
        <template slot-scope="scope">
          {{scope.row.nickName}}
        </template>
      </el-table-column>
      <el-table-column
        label="邀请人数"
        width="100"
        prop="inviteNum">
      </el-table-column>
      <el-table-column
        label="邀请码"
        width="100"
        prop="invite_code">
      </el-table-column>
      <el-table-column
        label="注册时间"
        width="100"
        prop="invite_code">
        <template slot-scope="scope">
          {{scope.row.created_at | dateFormat("yyyy-MM-dd hh:mm:ss")}}
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
  import avatar from '@/components/avatar'

  import request from '@/api/request'
  import pagination from '@/mixins/pagination'

  import { dateFormat } from '@/utils/'

  export default {
    name: 'invite',
    components: {
      avatar
    },
    filters: {
      dateFormat
    },
    mixins: [pagination],
    directives: {},
    data () {
      return {
        tableData: [{
          "userId": 1536,
          "nickName": "李佳旭",
          "faceUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKyMDiaCgCKgSPuyibZ33CBqpQX8GXBbFN09QBqH9DsYf8NIy6w6YIJZItAQ5xopAXFoZuWudeA3o9Q/132",
          "schoolName": "中国矿业大学(北京)",
          "majorName": "矿产普查与勘探\t081801",
          "grade": 2,
          "creditScore": 60,
          "creditScoreStatus": null,
          "avgAnswerTime": 0
        }]
      }
    },
    mounted () {
      this.init()
    },

    methods: {
      init () {
        request.get('getInviteInfoList', {
          pageSize: this.page.pageSize,
          pageNum: this.page.pageNum
        })
          .then(res => {
            this.totalCount = res.count
            this.tableData = res.data
          }).catch(err => {
            console.log(err)
          })
      },
      goDetail (id, questionType) {
        this.routePush('questionDetail', { questionId: id, questionType })
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
</style>
