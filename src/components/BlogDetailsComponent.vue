<template>
    <div class="blog-banner"></div>
    <div id="articles">
        <ArticleItemComponent/>
    </div>
</template>

<script>
import ArticleItemComponent from "./ArticleItemComponent.vue";
export default{
    components:{
        ArticleItemComponent
    },
}
</script>