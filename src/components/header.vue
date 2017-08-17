<template>
    <div class="header-wrap">
        <div class="header clearfix">
            <ul class="fl menu-fl">
                <li><a href="#" class="icon-home3"></a></li>
                <li><a href="#">WEB前端</a></li>
            </ul>
            <ul class="fr menu-fr">
                <li><a href="#">首页</a></li>
                <li><a href="#">我的简历</a></li>
                <li><a href="#">GitHub</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    components: {

    }
}
</script>
<style scoped>
.header-wrap{
    width: 100%;
    height: 50px;
    background: rgb(36,41,46);
}
.header{
    width: 980px;
    height: 30px;
    padding: 10px 0;
    margin: 0 auto;
}
.header .menu-fl li{
    float: left;
    margin-right: 8px;
}
.header .menu-fl li a{
    font-size: 20px;
    color: #e3e5e1;
    line-height: 30px;}
.header ul li a:hover{color: #fff;}
.header .menu-fl li img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
.header .menu-fr li{float: left;}
.header .menu-fr li a{
    font-size: 14px;
    color: #e3e5e1;
    line-height: 30px;
    margin-left: 35px;
}
.header .menu-fr li a:hover{text-decoration: underline;}
</style>
