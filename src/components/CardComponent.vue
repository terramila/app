<template>
    <router-link :to="{name: 'BlogDetails', params:{id:article.id}}">
        <div class="articles-item">
            <img class="articles-item__img" :src='article.img' alt="photo kitchen">
            <div class="articles-item__rectangle">
                {{article.rectangle}}
            </div>
            <div class="articles-item__content">
                <h2 class="articles-item__header">{{article.header1}}<br>{{article.header2}}</h2>
                <div class="articles-item__content__wrapper">
                    <p class="articles-item__text">{{article.date}}</p>
                    <svg class="articles-item__circle" width="52" height="53" viewBox="0 0 52 53" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                    </svg>
                    <svg class="articles-item__arrow" width="9" height="16" viewBox="0 0 9 16" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.77144 14.9527L7.71429 8.267L1.77144 1.58129" stroke="#292F36" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    </router-link>   
    
</template>

<script>
    export default {
        props:{
            article: Object
        }
    }
</script>

<style lang="scss" scoped>

</style>