<template>
  <div class="app-container">
    <div>
      <h1>问题</h1>
      <div>{{questionContent}}</div>
      <image-previewer :prePictureList="questionPic"></image-previewer>
    </div>
    <div>
      <h1>答案</h1>
      <div>{{answerContent}}</div>
      <image-previewer :prePictureList="answerPic"></image-previewer>
    </div>
  </div>

</template>

<script>
  import ImagePreviewer from '@/components/ImagePreviewer'
  import pagination from '@/mixins/pagination'
  const a = '为鼓励用户自发分享喜爱的内容，减少“强制分享至不同群”等滥用分享能力，破坏用户体验的行为，微信公众平台分享功能即日起做出如下调整：\n' +
    '\n' +
    '1、7月5日起新提交的版本，用户从小程序、小游戏中分享消息给好友时，开发者将无法获知用户是否分享完成，也无法在分享后立即获得群ID。该策略在最新版开发者工具上，可以选择基础库 2.0.8版本预先体验。具体调整点为：\n' +
    '\n' +
    '（1）分享接口调用后，将不再返回分享结果事件。详情可参考转发介绍\n' +
    '\n' +
    '（2）通过调用 wx.showShareMenu 并且设置 withShareTicket 为 true ，当用户将小程序转发到任一群聊之后，不再支持获取到此次转发的 shareTicket。但是当此转发卡片在群聊中被其他用户打开时，依然可以在 App.onLaunch() 或 App.onShow 获取到 shareTicket。详情可参考获取更多转发信息\n' +
    '\n' +
    '2、6月份新版微信客户端发布后，用户从微信内的网页分享消息给微信好友，以及分享到朋友圈，开发者将无法获知用户是否分享完成。具体调整点为：'

  const b = '1）分享接口调用后，不再返回用户是否分享完成事件，即原先的cancel事件和success事件将统一为success事件。详情可参考微信JSSDK说明文档\n' +
    '\n' +
    '（2）在6月份新版微信客户端上，微信会提供新的自定义分享卡片标题、简介和配图的能力。该接口不支持获知用户是否分享出自己的网页。\n' +
    '\n' +
    '（3）在新版自定义分享能力发布后，原有认证公众号的“获取分享到朋友圈按钮点击状态及自定义分享内容接口”和“获取分享给朋友按钮点击状态及自定义分享内容接口”权限将逐步回收，请开发者关注后续站内信通知。\n' +
    '\n' +
    '3、6月份新版微信客户端发布后，用户从App中分享消息给微信好友，或分享到朋友圈时，开发者将无法获知用户是否分享完成。具体调整点为：\n' +
    '\n' +
    '（1）分享接口调用后，不再返回用户是否分享完成事件，即原先的cancel事件和success事件将统一为success事件。'

  export default {
    name: 'audit',
    components: {
      ImagePreviewer
    },
    mixins: [pagination],
    directives: {},
    data () {
      return {
        cost: 10,
        questionId: '', // 提问id
        questionerId: '', // 提问者id
        questionerName: '', // 提答者姓名
        questionPic: ['https://crm-test.jingdaka.com/pic/1527047890608_23aedf045bc244caa2130f0416e605c7.jpg'],
        questionContent: a,
        answerId: '', // 回答id
        answererId: '', // 回答者id
        answerName: '', // 回答者姓名
        answerPic: ['https://crm-test.jingdaka.com/pic/1527047890608_23aedf045bc244caa2130f0416e605c7.jpg'],
        answerContent: b
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

<style scoped>

</style>
