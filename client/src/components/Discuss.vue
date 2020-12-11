<template>
  <div class="discuss">
    <div class="head">
      <h4 class="head-title">
        问答区
        <span>学习</span>
      </h4>
      <div class="classify">
        <button-group :data="classify" @buttonHandel="classifyQuery($event)" />
      </div>
    </div>
    <div class="content">
      <ul class="content-list">
        <li class="content-item">
          <div class="title">
            <i class="el-icon-edit"></i>
            昨天在三食堂遗失一本《c语言程序设计》
          </div>
          <div class="publish-infos">
            <span class="time">
              <i class="el-icon-time">2020-05-09 11:28 </i>
            </span>
            <span class="user">
              <i class="el-icon-user">buyi</i>
            </span>
          </div>
          <span class="views">
            <i class="el-icon-view">&nbsp;&nbsp;66</i>
          </span>
        </li>
        <li class="content-item">
          <div class="title">
            <i class="el-icon-edit"></i>
            昨天在三食堂遗失一本《c语言程序设计》
          </div>
          <div class="publish-infos">
            <span class="time">
              <i class="el-icon-time">2020-05-09 11:28 </i>
            </span>
            <span class="user">
              <i class="el-icon-user">buyi</i>
            </span>
          </div>
          <span class="views">
            <i class="el-icon-view">&nbsp;&nbsp;66</i>
          </span>
        </li>
      </ul>
    </div>
    <div>
      <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
    </div>
  </div>
</template>
<script>
import ButtonGroup from './ButtonGroup.vue'
export default {
  data() {
    return {
      classify: ['全部', '学习', '其他']
    }
  },
  methods: {
    classifyQuery(item) {
      console.log(item)
    }
  },
  components: {
    ButtonGroup
  }
}
</script>
<style lang="scss" scoped>
.discuss {
  .head-title {
    font-size: 36px;
    font-weight: border;
    color: #000;
    span {
      font-size: 22px;
      color: #8f98a0;
    }
  }
  .classify {
    margin: 20px 0;
  }

  .content-item {
    position: relative;
    padding: 10px 0;
    .title {
      color: #3b4348;
      font-weight: 600;
    }
    .publish-infos {
      height: 40px;
      line-height: 40px;
      padding-left: 20px;
      border-bottom: 1px solid #f2f2f2;
      color: #3b4348;
      span {
        margin-right: 40px;
      }
    }
    .views {
      position: absolute;
      right: 10px;
      bottom: 10px;
    }
  }
}
</style>
