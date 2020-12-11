<template>
  <div class="header-wrapper">
    <header>
      <div class="header-top">
        <div class="header-top-box">
          <div class="logo">
            <img src="../assets/images/logo.jpg" alt="" />
            <span>攀枝花学院学生服务平台</span>
          </div>
          <nav class="nav">
            <ul>
              <li><router-link to="/">首页</router-link></li>
              <li><router-link to="discuss">问答</router-link></li>
              <li><router-link to="activity">活动</router-link></li>
              <li><router-link to="login">二手信息</router-link></li>
              <li><router-link to="login">文章/新闻</router-link></li>
              <li><router-link to="login">登录/注册</router-link></li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="header-search">
        <p class="desc">
          Information sharing and communication platform of PANZHIHUA University
          , Makes information transfer easier
        </p>
        <div class="search">
          <el-input
            placeholder="请输入内容"
            v-model="searchVal"
            style="width: 70%;margin-right: 10px"
          >
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <el-button type="primary">搜索</el-button>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchVal: '233'
    }
  }
}
</script>
<style lang="scss" scoped>
.header-wrapper {
  .header-top {
    background-color: #3b4348;
    .header-top-box {
      height: 80px;
      line-height: 80px;
      min-width: 1170px;
      width: 1170px;
      margin: 0 auto;
      overflow: hidden;
    }
    .logo {
      display: inline-block;
      height: 100%;
      img {
        margin-right: 10px;
        width: 60px;
        height: 60px;
        background-size: 100%;
        border-radius: 50%;
        vertical-align: middle;
      }
      span {
        color: #fff;
      }
    }
    .nav {
      float: right;
      li {
        display: inline-block;
        padding: 0 10px;
        cursor: pointer;
        color: #c1cad1;
        a {
          color: #c1cad1;
        }
      }
    }
  }
  .header-search {
    width: 100%;
    height: 100px;
    padding: 50px 0 50px 0;
    text-align: center;
    background: url(../assets/images/main-bg.jpg) no-repeat;
    background-size: 100%;
    .desc {
      color: #fff;
      font-size: 18px;
      margin-bottom: 20px;
    }
  }
}
</style>
