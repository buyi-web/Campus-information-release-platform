<template>
  <div class="footer-wrapper">
    <footer>
      <el-row>
        <el-col :span="6">
          <div class="info fbox">
            <div class="info-func">
              <h2>网站主要功能</h2>
              <div>
                本站是攀枝花学院学生信息发布与交流平台，用户通过注册账号后就可以发布信息和评论，你可以在这里进行求助和帮助他人
              </div>
            </div>
            <div class="info-notice ">
              <h2>公告</h2>
              <div>
                禁止在本平台上发表不当言论
                禁止出现辱骂他人的语言，一经发现进行封号处理
              </div>
            </div>
          </div></el-col
        >
        <el-col :span="6">
          <div class="friend-link fbox">
            <h2>友情链接</h2>
          </div></el-col
        >
        <el-col :span="6">
          <div class="ad fbox">
            <h2>广告信息</h2>
          </div></el-col
        >
        <el-col :span="6">
          <div class="service fbox">
            <h2>客服中心</h2>
          </div></el-col
        >
      </el-row>
    </footer>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.footer-wrapper {
  width: 100%;
  padding: 10px 0;
  background-color: #3b4348;
  footer {
    width: 1170px;
    margin: 0 auto;
    .fbox {
      padding: 20px;
      h2 {
        color: #fff;
        font-size: 24px;
        margin: 30px 0;
      }
      div {
        color: #8f98a0;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
</style>
