<template>
    <div class="project-banner"></div>
    <div class="description">
        <h1>{{ art.header }}</h1>
        <p>{{ art.text1 }}</p>
        <p>{{ art.text2 }}</p>
    </div>
    <swiper
        :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
        }"
        :zoom="true"
        :navigation="true"
        :pagination="{
        clickable: true,
        }"
        :modules="modules"
        class="mySwiper">
        <swiper-slide>
            <div class="swiper-zoom-container">
                <img :src='art.img1' alt="">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiper-zoom-container">
                <img :src='art.img2' alt="">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiper-zoom-container">
                <img :src='art.img3' alt="">
            </div>
        </swiper-slide>
    </swiper>
    <FooterComponent/>
</template>

<script>

import { mapState } from 'vuex';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';

import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Zoom, Navigation, Pagination } from 'swiper/modules';
import img1 from '../assets/img/bedroom1.png';
import img2 from '../assets/img/bedroom2.jpg';
import img3 from '../assets/img/bedroom3.jpg';
import FooterComponent from './FooterComponent.vue';

    export default {
       
    components: { Swiper, SwiperSlide, FooterComponent },
    setup() {
      return {
        modules: [Zoom, Navigation, Pagination],
      };
    },
    data(){
        return{
            img1: img1,
            img2: img2,
            img3: img3,
        }
    },
    computed:{
        ...mapState(['articles']),
        art() {
            return this.articles.find((art) => art.id === Number(this.$route.params.id));
        }
        },        
    }

</script>

<style lang="scss" scoped>
    body{
        position: relative;
        height: 100%;
    }
    .project-banner{
        background-image: url('../assets/img/bannerBlogDetails.png');
        background-repeat: no-repeat;
        background-size: cover;
        height: 351px;
        margin-bottom: 200px;
    }
    .description{
        padding-left: calc(50% - 329px);
        padding-right: calc(50% - 329px);
        display: flex;
        flex-direction: column;
        margin-bottom: 100px;
        gap: 12px;
       
        h1{
            font-size: 50px;
        }
        p{
            font-size: 22px;
            font-family: 'Jost';
            line-height: 150%;
        }
    }
    .swiper {
        width: 100%;
        height: 100%;
        margin-bottom: 100px;
    }

    .swiper-slide {
        overflow: hidden;
    }
    img{
        border-radius: 55px;
    }
</style>
<style>
    .swiper-pagination{
        position: unset;
    }
    .swiper-pagination-bullet{
        border: 1px solid #000;
        background: none;
        opacity: 1;
        width: 10px;
        height: 10px;
    }
    .swiper-wrapper{
        margin-bottom: 20px;
    }
</style>