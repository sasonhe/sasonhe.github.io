<template>
<div class="container">
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" style="margin-top: 51px;">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
            <div class="item active">
                <img src="../assets/images/01.jpg" alt="1" width="100%">
            </div>
            <div class="item">
                <img src="../assets/images/02.jpg" alt="1" width="100%">
            </div>
        </div>

        <!-- Controls -->
        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                </a>
        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a>
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

</style>
