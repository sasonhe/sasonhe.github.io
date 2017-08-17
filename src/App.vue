<template>
<div>
    <v-header></v-header>
    <transition name="fade">
        <div class="show" v-show="isShow">
            <div class="user">
                <span class="img"><img src="./assets/images/mypic.jpg" alt=""></span>
                <span class="text">Sason He</span>
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
                <router-link to="/cssTool" exact class="tab-item">CSS预处理</router-link>
                <router-link to="/DevelTool" exact class="tab-item">开发工具</router-link>
            </div>
            <keep-alive>
                <transition name="slide-fade">
                    <router-view :tools = "tools" :hot = "hot" :css = "css" :software = "software"></router-view>
                </transition>
            </keep-alive>
        </div>
    </div>
    <v-footer></v-footer>
</div>

</template>
<script>
import header from './components/header.vue'
import aside from './components/aside.vue'
import footer from './components/footer.vue'
export default {
    data () {
        return {
            tools:[],
            hot:[],
            css:[],
            software:[],
            isShow: false,
            isfixed: false,
            scroll: ''
        }

    },
    methods: {
        handleScroll () {
          this.isfixed = window.scrollY > 70;
          this.isShow = window.scrollY > 292;
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll);
    },
    created () {
        this.$http.get('../src/static/data.json').then((res) => {
            res = res.body
            this.tools = res.tools
            this.hot = res.hot
            this.css = res.css
            this.software = res.software

        },(res) => {
            console.log("获取数据失败！！")
        })
    },
    components: {
        "v-header": header,
        "v-aside": aside,
        "v-footer": footer
    }
}
</script>
<style scoped>
.show{
    width: 100%;
    height: 61px;
    background: #fff;
    border-bottom: 1px solid #ccc;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
}
.show .user{
    width: 980px;
    height: 62px;
    margin: 0 auto;
}
.show .user .img{
    display: inline-block;
    width: 32px;
    height: 32px;
    padding: 15px 5px 0px 0px;
}
.show .user .img img{
    width: 32px;
    height: 32px;
    border-radius: 3px !important;
}
.show .user .text{
    display: inline-block;
    line-height: 62px;
    font-size: 14px;
}

.fade-enter-active, .fade-leave-active{
    transition: opacity .6s
}

.fade-enter, .fade-leave-to{
    opacity: 0
}



.main-wrap{
    width: 980px;
    padding: 20px 0;
    margin: 0 auto;
}
.aside{
    width: 207px;
    height: 380px;
    border: 1px solid #ccc;
    overflow: hidden;
    margin-right: 15px;
    border-radius: 5px;
}
.main{
    width: 748px;
    padding-left:8px;
}
.main .router{
    width: 742px;
    background: #fff;
    border-bottom: 1px solid #ccc;
}
.main .fixed{
    position: fixed;
    top:0;
    z-index: 101;
}
.main .router .tab-item:hover{
    transition: all 0.4s;
    color: red;
}
.main .router .tab-item{
    display: inline-block;
    padding: 20px;
    border-bottom: 2px solid transparent;
    font-size: 14px;
}
.main .router .router-link-active{
    border-bottom: 2px solid red;
    color: red;
}

.slide-fade-enter-active {
  transition: all 1s ease;
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(-20px);
}

</style>
