<template>
    <div class="banner">
       <img :src= "info.img" alt="">
        <div class="banner-block">
            <h1 class="banner-block__header">{{info.header}}</h1>
            <p class="banner-block__text">{{info.text}}</p>
        </div>
    </div>
</template>

<script>

    export default {
        props:{
            info: Object
        },
        
  }
  
</script>

<style lang="scss" scoped>
    .banner{
    height: 356px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 216px;
    &-block{
        background-color: #fff;
        padding: 41px 78px 41px 78px;
        position: absolute;
        border-radius: 37px 37px 0 0;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        &__header{
            font-size: 50px;
            line-height: 125%;
        }
        &__text{
            font-family: 'Jost';
            font-size: 22px;
            color: #292F36;
        }
        }
    }
</style>