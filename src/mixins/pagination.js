/*
 * 分页抽离出公共方法
 * */
export default {
  data () {
    return {
      page: {
        pageSizes: [10, 20, 50],
        pageLimit: 10,
        currentPage: 1
      },
      totalCount: 11
    }
  },
  methods: {
    handleSizeChange (val) {
      this.page.pageLimit = val
      this.page.currentPage = 1
      this.jumpPage()
    },
    handleCurrentChange (val) {
      this.page.currentPage = val
      this.jumpPage(val)
    }
  }
}
