<template>
<div class="footer-wrap">
    <div class="footer">
        <p>Copyright © 2016-2017 <a href="http://www.sasonhe.com">www.sasonhe.com</a></p>
        <p>All Rights Reserved.Sason He 版权所有. <a href="http://beian.miit.gov.cn">粤ICP备17104686号-1</a></p>
    </div>
</div>
</template>
<script>
export default{
    components:{

    }
}
</script>
<style scoped>
.footer-wrap{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: #3b3e43;
}
.footer-wrap .footer{
    width: 980px;
    padding: 10px 0px;
    text-align: center;
    margin: 0 auto;
}
.footer-wrap .footer p,.footer-wrap .footer a{
    font-size: 12px;
    color: #e3e5e1
}
.footer-wrap .footer a:hover{
    text-decoration: underline;
}
</style>
