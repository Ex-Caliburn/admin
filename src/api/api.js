/**
 * get请求一律get开头
 * post请求一律动作行为单词开头
 */
const base = '/api/crm/'

class Api {
  /* 账号列表查询与相关操作 */
  login = 'sys/login'
  logout = 'sys/logout'
  /* 账号管理 */
  getUserList = 'sys/user/list' // 账号列表查询
  addCount = 'sys/user/save' // 新增账号
  updatePassword = 'sys/user/password' // 修改密码
  getApi (name) {
    return base + this[name]
  }
}

export default new Api()
