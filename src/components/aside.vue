<template>
    <div class="info">
        <img src="@/assets/psb.jpg" alt="">
        <div class="my-info">
            <h2>web前端</h2>
            <h3>Json He</h3>
        </div>
        <div class="text">
            <p>I think success has no rules,</p>
            <p>but you can learn a lot from failure.</p>
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
.info{
    width: 100%;
    height: 100%;
    color: #333;
}
.info .my-info{
    text-align: center;
    padding: 10px;
    /*border-bottom:1px solid #ccc;*/
}

.info .text{
    padding: 10px;
    font-size: 14px;
    text-align:justify;
}
.info img{
  max-width: 100%;
}
</style>
