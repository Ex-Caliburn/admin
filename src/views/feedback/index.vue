<template>
  <div class="app-container">
    <div>
      <h1>投诉的问题类型</h1>
      <div>{{complainTypeArr[complainType]}}</div>
    </div>
    <div>
      <h1>投诉内容</h1>
      <div>{{content}}</div>
      <image-previewer :prePictureList="pictures"></image-previewer>
    </div>
  </div>
</template>

<script>
  import ImagePreviewer from '@/components/ImagePreviewer'

  const complainTypeArr = ['功能异常','产品建议', '其它问题', '该研究生回答内容', '该研究生沟通态度问题', '其它问题']

  export default {
    components: {
      ImagePreviewer
    },
    filters: {},
    mixins: {},
    props: {},
    data () {
      return {
        complainTypeArr,
        content: '',
        pictures: ['https://crm-test.jingdaka.com/pic/1527047890608_23aedf045bc244caa2130f0416e605c7.jpg'],
        complainType: 1,
        feedbackType: 2
      }
    },

    computed: {},
    watch: {},
    mounted () {

    },

    methods: {
      openPicker () {
        this.$refs.picker.open()
      }
    }
  }
</script>

<style lang="scss" scoped>
  // 私有样式
</style>
