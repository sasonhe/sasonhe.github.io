<template>
<div class="home-wrap">
    <div class="title">
        <h2>开发工具</h2>
    </div>
    <ul class="content clearfix" id="list">
        <li v-for="item in software">
            <div class="top">
                <a :href="item.url">
                    <img :src="item.imgSrc" alt="item.description">
                </a>
            </div>
            <div class="btm">
                <h3><a :href="item.url">{{item.name}}</a></h3>
                <div>{{item.description}}</div>
            </div>
        </li>

    </ul>
</div>
</template>
<script>
export default {
    props: {
        software: {
            type: Array
        }
    },
    methods:{

    },
    components: {

    }
}

</script>
<style scoped>
.home-wrap{padding: 15px 0;}
.home-wrap .title{
    padding-left: 18px;
    margin-bottom: 15px;
    border-left: 2px solid #ccc;
}
.home-wrap .content li{
    width: 228px;
    height: 285px;
    padding: 4px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: all .3s ease 0s;
    margin: 0 6px 20px 5px;
    float: left;
}
.home-wrap .content li:hover{
    border-color: red;
}
.home-wrap .content .no-margin-right{margin-right: 0px;}
.home-wrap .content .top{overflow: hidden;}
.home-wrap .content .top a{}
.home-wrap .content .top a img{
    width: 230px;
    height: 164px;
    transition: all 0.8s;

}
.home-wrap .content .top a img:hover{

    transform: scale(1.2);
}
.home-wrap .content .btm{
    padding: 10px 0;
    overflow: hidden;
}
.home-wrap .content .btm h3{font-size: 18px;}
.home-wrap .content .btm h3 a:hover{
    color: red;
}
.home-wrap .content .btm div{
    padding-top: 8px;
    width: 100%;
    height: 65px;
    font-size: 14px;
    color: #989898;
}
</style>
