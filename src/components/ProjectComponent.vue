<template>
    <BannerComponent :info="infoBanner"/>
    <div class="project">
        <div class="project-buttons">
            <button class="project-buttons__item" @click="getProject('bathroom')">Bathroom</button>
            <button class="project-buttons__item" @click="getProject('bedroom')">Bedroom</button>
            <button class="project-buttons__item" @click="getProject('kitchen')">Kitchen</button>
            <button class="project-buttons__item" @click="getProject('living')">Living Area</button>
        </div>
        <div class="project-content">            
                <div class="project-content__item"  v-for="project in temp" :key="project.id" >
                    <img :src="project.img" alt="" @click="addFavourite">
                    <svg class="star" width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_993_142)">
                            <path d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z" 
                            fill="#000"/>
                        </g>
                    </svg>
                    <div class="project-content__item__text">
                        <div>
                            <h3 >{{project.header}}</h3>
                            <p >{{project.text}}</p>
                        </div>
                        <router-link :to="{name: 'ProjectDetails', params:{id: project.id}}">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                             </svg>
                        </router-link>                   
                        
                    </div>
                </div>
        </div>   
        
    </div>
    <PaginationComponent/> 
    <div class="indent"></div>
    <FooterComponent/>
</template>

<script>
import BannerComponent from './BannerComponent.vue';
import imgProject from '../assets/img/projectBanner.png';
import img20 from '../assets/img/projectItem1.png';
import img21 from '../assets/img/projectItem2.png';
import img22 from '../assets/img/projectItem3.png';
import img23 from '../assets/img/projectItem4.png';
import img24 from '../assets/img/projectItem5.png';
import img25 from '../assets/img/projectItem6.png';
import img26 from '../assets/img/projectItem7.png';
import img27 from '../assets/img/projectItem8.png';
import img28 from '../assets/img/bathroom1.jpg';
import img29 from '../assets/img/bathroom2.png';
import img30 from '../assets/img/bathroom3.jpg';
import img31 from '../assets/img/bathroom4.jpg';
import img32 from '../assets/img/bathroom5.jpg';
import img33 from '../assets/img/bathroom6.jpg';
import img34 from '../assets/img/bathroom7.jpg';
import img35 from '../assets/img/bathroom8.jpeg';
import img36 from '../assets/img/kitchen1.png';
import img37 from '../assets/img/kitchen2.jpg';
import img38 from '../assets/img/kitchen3.jpg';
import img39 from '../assets/img/kitchen4.jpg';
import img40 from '../assets/img/kitchen5.jpg';
import img41 from '../assets/img/kitchen6.png';
import img42 from '../assets/img/kitchen7.jpg';
import img43 from '../assets/img/kitchen8.jpg';
import img44 from '../assets/img/living1.jpg';
import img45 from '../assets/img/living2.jpg';
import img46 from '../assets/img/living3.jpg';
import img47 from '../assets/img/living4.jpg';
import img48 from '../assets/img/living5.jpg';
import img49 from '../assets/img/living6.jpg';
import img50 from '../assets/img/living7.jpg';
import img51 from '../assets/img/living8.jpg';
import PaginationComponent from './PaginationComponent.vue';
import FooterComponent from './FooterComponent.vue';



    export default {
     
    components: {  BannerComponent, PaginationComponent, FooterComponent },
    data(){
       const projects = [
                {
                    id: 1,
                    tag: "bedroom",
                    img: img20,
                    header: "Minimal Bedroom",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 2,
                    tag: "bedroom",
                    img: img21,
                    header: "Modern Bedroom",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 3,
                    tag: "bedroom",
                    img: img22,
                    header: "System Table",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 4,
                    tag: "bedroom",
                    img: img23,
                    header: "Modern Bedroom",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 5,
                    tag: "bedroom",
                    img: img24,
                    header: "Modern Bedroom",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 6,
                    tag: "bedroom",
                    img: img25,
                    header: "Modern Bedroom",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 7,
                    tag: "bedroom",
                    img: img26,
                    header: "Modern Bedroom",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 8,
                    tag: "bedroom",
                    img: img27,
                    header: "Modern Bedroom",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 9,
                    tag: "bathroom",
                    img: img28,
                    header: "Bathroom Suites",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 10,
                    tag: "bathroom",
                    img: img29,
                    header: "Bathroom Furniture & Cabinets",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 11,
                    tag: "bathroom",
                    img: img30,
                    header: "Baths & Accessories",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 12,
                    tag: "bathroom",
                    img: img31,
                    header: "Bathroom Wall & Floor Tiles",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 13,
                    tag: "bathroom",
                    img: img32,
                    header: "Bathroom Lighting",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 14,
                    tag: "bathroom",
                    img: img33,
                    header: "Bathroom Flooring",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 15,
                    tag: "bathroom",
                    img: img34,
                    header: "Bathroom Paint",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 16,
                    tag: "bathroom",
                    img: img35,
                    header: "Bathroom Suite Packages",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 17,
                    tag: "kitchen",
                    img: img36,
                    header: "Kitchen island",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 18,
                    tag: "kitchen",
                    img: img37,
                    header: "Luxury kitchen",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 19,
                    tag: "kitchen",
                    img: img38,
                    header: "Restaurant interior",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 20,
                    tag: "kitchen",
                    img: img39,
                    header: "Kitchen wall",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 21,
                    tag: "kitchen",
                    img: img40,
                    header: "Kitchen countertop",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 22,
                    tag: "kitchen",
                    img: img41,
                    header: "Modern kitchen",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 23,
                    tag: "kitchen",
                    img: img42,
                    header: "Kitchen background",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 24,
                    tag: "kitchen",
                    img: img43,
                    header: "Kitchen furniture",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 25,
                    tag: "living",
                    img: img44,
                    header: "Levitate Your Living",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 26,
                    tag: "living",
                    img: img45,
                    header: "Living Room Trend",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 27,
                    tag: "living",
                    img: img46,
                    header: "Try More Observant Design",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 28,
                    tag: "living",
                    img: img47,
                    header: "Multifunctional, Airy Spaces",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 29,
                    tag: "living",
                    img: img48,
                    header: "Colour Living",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 30,
                    tag: "living",
                    img: img49,
                    header: "Modern Scandinavian Interiors",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 31,
                    tag: "living",
                    img: img50,
                    header: "Zoning Out",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 32,
                    tag: "living",
                    img: img51,
                    header: "Wallpapers & Wallcoverings",
                    text: "Decor / Artchitecture" 
                },
            ]
        return{
            infoBanner:{
                img: imgProject,
                header: "Our Project",
                text: "Home / Project"
            },
            projects: projects,
            temp:[
            {
                    id: 1,
                    tag: "bedroom",
                    img: img20,
                    header: "Minimal Bedroom",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 2,
                    tag: "bedroom",
                    img: img21,
                    header: "Modern Bedroom",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 3,
                    tag: "bedroom",
                    img: img22,
                    header: "System Table",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 4,
                    tag: "bedroom",
                    img: img23,
                    header: "Modern Bedroom",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 5,
                    tag: "bedroom",
                    img: img24,
                    header: "Modern Bedroom",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 6,
                    tag: "bedroom",
                    img: img25,
                    header: "Modern Bedroom",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 7,
                    tag: "bedroom",
                    img: img26,
                    header: "Modern Bedroom",
                    text: "Decor / Artchitecture" 
                },
                {
                    id: 8,
                    tag: "bedroom",
                    img: img27,
                    header: "Modern Bedroom",
                    text: "Decor / Artchitecture" 
                },
            ],
        }
    },
    methods:{
        getProject(tag){
            this.temp = this.projects.filter(item => item.tag === tag);
              
        },
        addFavourite(event){
            const element = event.target;
            const parent = element.parentElement;
            const path = parent.getElementsByTagName('path');
            if (path[0].style.fill === ""){
                path[0].style.fill = "#FFA928";
            } else {
                path[0].style.fill = "";
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .project{
        padding-left: calc(50% - 600px);
        padding-right: calc(50% - 600px);
        margin-bottom: 61px;
        &-buttons{            
            width: 880px;
            border: 1px solid #CDA274;
            border-radius: 18px;
            display: flex;
            flex-direction: row;
            align-content: center;
            justify-content: space-around;
            margin: 0 auto;
            margin-bottom: 61px;
            &__item{
                border: none;
                background-color: #fff;
                width: 219px;
                height: 75px;
                border-radius: 18px;
                font-family: "Jost";
                font-size: 18px;
               font-weight: 700;
               
            }
            &__item:hover{
                color: #fff;
                background-color: #CDA274;
                cursor: pointer;
            }
        }
        &-content{
            column-count: 2;
            column-gap: 0;
            
        
            &__item{
               break-inside: avoid;
               max-width: 563px;
               position: relative;
               margin-bottom: 36px;
               img{
                max-width: 100%;
                margin-bottom: 24px;
               }
               .star{
                    position: absolute;
                    right: 5px;
                    top: 5px;
                    path{
                        fill: none;
                    }
                    
               }
            }
            &__item:hover{
                cursor: pointer;
            }
            .project-content__item__text{
                display: flex;
                align-items: center;
                justify-content: space-between;
                div{
                    h3{
                        font-family: 'DM Serif Display';
                        font-size: 25px;
                    }
                    p{
                        font-family: 'Jost';
                        font-size: 22px;
                    }
                }
                svg:hover{
                    circle{
                        fill: #CDA274;
                    }                    
                    cursor: pointer;
                }
            }
        }
    }
    .indent{
        margin-bottom: 200px;
    }
</style>