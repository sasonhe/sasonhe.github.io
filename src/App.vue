<template>
<div>
  <v-header></v-header>
  <transition name="fade">
    <div class="show" v-show="isShow">
      <div class="user">
        <span class="img"><img src="@/assets/psb.jpg" alt=""></span>
        <span class="text">Json He</span>
      </div>
    </div>
  </transition>
  <div class="main-wrap clearfix">
    <div class="aside fl">
      <v-aside></v-aside>
    </div>
    <div class="main fr">
      <div class="router" :class="{ fixed: isfixed }">
        <router-link to="/" exact class="tab-item">构建工具</router-link>
        <router-link to="/frame" exact class="tab-item">热门框架</router-link>
        <router-link to="/csstool" exact class="tab-item">CSS预处理</router-link>
        <router-link to="/develtool" exact class="tab-item">开发工具</router-link>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
  <v-footer></v-footer>
</div>
</template>
<script>
import header from '@/components/header'
import aside from '@/components/aside'
import footer from '@/components/footer'
export default {
  data() {
    return {
      isShow: false,
      isfixed: false,
      scroll: ''
    }

  },
  methods: {
    handleScroll() {
      this.isfixed = window.scrollY > 70;
      this.isShow = window.scrollY > 292;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  created() {

  },
  components: {
    "v-header": header,
    "v-aside": aside,
    "v-footer": footer
  }
}
</script>
<style scoped>
.show {
  width: 100%;
  height: 61px;
  background: #fff;
  border-bottom: 1px solid #ccc;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

.show .user {
  width: 980px;
  height: 62px;
  margin: 0 auto;
}

.show .user .img {
  display: inline-block;
  width: 32px;
  /* height: 32px; */
  padding: 15px 5px 0px 0px;
}

.show .user .img img {
  width: 32px;
  /* height: 32px; */
  border-radius: 3px !important;
}

.show .user .text {
  display: inline-block;
  line-height: 62px;
  font-size: 14px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .6s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}



.main-wrap {
  width: 980px;
  padding: 20px 0;
  margin: 0 auto;
}

.aside {
  width: 207px;
  height: 380px;
  border: 1px solid #ccc;
  overflow: hidden;
  margin-right: 15px;
  border-radius: 5px;
}

.main {
  width: 748px;
  padding-left: 8px;
}

.main .router {
  width: 742px;
  background: #fff;
  border-bottom: 1px solid #ccc;
}

.main .fixed {
  position: fixed;
  top: 0;
  z-index: 101;
}

.main .router .tab-item:hover {
  transition: all 0.4s;
  color: red;
}

.main .router .tab-item {
  display: inline-block;
  padding: 20px;
  border-bottom: 2px solid transparent;
  font-size: 14px;
}

.main .router .router-link-active {
  border-bottom: 2px solid red;
  color: red;
}

.slide-fade-enter {
  opacity: 0;
}

.slide-fade-leave {
  opacity: 1;
}

.slide-fade-enter-active {
  transition: opacity .3s;
}

.slide-fade-leave-active {
  opacity: 0;
  transition: opacity .3s;
}
</style>
