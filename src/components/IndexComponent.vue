<template>
    <div class="cover">
        <div class="cover-content">
            <h1 class="cover-content__header">Let Your Home<br>
                Be Unique
            </h1>
            <p class="cover-content__text">There are many variations of the passages of
                lorem Ipsum fromavailable, majority
            </p>
            <button class="cover-content__button"><span>Get Started</span><svg width="19" height="17"
                    viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                        stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                </svg></button>
        </div>
    </div>
    <div class="projects">
        <div class="projects-header">
            <h1 class="projects-header__head">Follow Our Projects</h1>
            <p class="projects-header__text">It is a long established fact that a reader will be distracted by the of
                readable content of page
                lookings at its layouts points.
            </p>
        </div>
        <div class="projects-catalog">
            <div class="projects-item">
                <img class="projects-item__img" src="../assets/img/project1.png" alt="project">
                <div class="projects-item__content">
                    <div class="projects-item__textcontent">
                        <h3 class="projects-item__header">Modern Kitchen</h3>
                        <p class="projects-item__text">Decor / Artchitecture</p>
                    </div>
                    <router-link class="project-link" :to="{name: 'ProjectDetails', params:{id: 1}}">
                        <svg class="projects-item__circle" width="70" height="70" viewBox="0 0 70 70" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                        </svg>
                        <svg class="projects-item__arrow" width="10" height="20" viewBox="0 0 10 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </router-link>
                    
                </div>
            </div>
            <div class="projects-item">
                <img class="projects-item__img" src="../assets/img/project2.png" alt="project">
                <div class="projects-item__content">
                    <div class="projects-item__textcontent">
                        <h3 class="projects-item__header">Modern Kitchen</h3>
                        <p class="projects-item__text">Decor / Artchitecture</p>
                    </div>
                    <router-link class="project-link" :to="{name: 'ProjectDetails', params:{id: 2}}">
                        <svg class="projects-item__circle" width="70" height="70" viewBox="0 0 70 70" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                        </svg>
                        <svg class="projects-item__arrow" width="10" height="20" viewBox="0 0 10 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </router-link>
                    
                </div>
            </div>
            <div class="projects-item">
                <img class="projects-item__img" src="../assets/img/project3.png" alt="project">
                <div class="projects-item__content">
                    <div class="projects-item__textcontent">
                        <h3 class="projects-item__header">Modern Kitchen</h3>
                        <p class="projects-item__text">Decor / Artchitecture</p>
                    </div>
                    <router-link class="project-link" :to="{name: 'ProjectDetails', params:{id: 3}}">
                        <svg class="projects-item__circle" width="70" height="70" viewBox="0 0 70 70" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                        </svg>
                        <svg class="projects-item__arrow" width="10" height="20" viewBox="0 0 10 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </router-link>
                    
                </div>
            </div>
            <div class="projects-item">
                <img class="projects-item__img" src="../assets/img/project4.png" alt="project">
                <div class="projects-item__content">
                    <div class="projects-item__textcontent">
                        <h3 class="projects-item__header">Modern Kitchen</h3>
                        <p class="projects-item__text">Decor / Artchitecture</p>
                    </div>
                    <router-link class="project-link" :to="{name: 'ProjectDetails', params:{id: 4}}">
                        <svg class="projects-item__circle" width="70" height="70" viewBox="0 0 70 70" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                        </svg>
                        <svg class="projects-item__arrow" width="10" height="20" viewBox="0 0 10 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </router-link>
                    
                </div>
            </div>
        </div>
    </div>
    <div class="statistic">
        <div class="statistic-board">
            <div class="statistic-item">
                <h1 class="statistic-item__header">12</h1>
                <p class="statistic-item__text">Years Of Experiance</p>
            </div>
            <div class="statistic-line"></div>
            <div class="statistic-item">
                <h1 class="statistic-item__header">85</h1>
                <p class="statistic-item__text">Success Project</p>
            </div>
            <div class="statistic-line"></div>
            <div class="statistic-item">
                <h1 class="statistic-item__header">15</h1>
                <p class="statistic-item__text">Active Project</p>
            </div>
            <div class="statistic-line"></div>
            <div class="statistic-item">
                <h1 class="statistic-item__header">95</h1>
                <p class="statistic-item__text">Happy CUstomers</p>
            </div>
        </div>

    </div>
    <div class="articles">
        <div class="articles-header">
            <h1 class="articles-header__head">Articles & News</h1>
            <p class="articles-header__text">It is a long established fact that a reader will be distracted by the of
                readable content of a page when lookings at its layouts the points of using.</p>
        </div>
        
        <div class="articles-content">
            <CardComponent v-for="article in articles" :key="article.id" :article="article"/>
        </div>
    </div>
</template>

<script>
import CardComponent from "./CardComponent.vue";
import img1 from "../assets/img/article1.png";
import img2 from "../assets/img/article2.png";
import img3 from "../assets/img/article3.png";

export default {
    data() {
        return {
            articles: [
                {
                    id: 1, img: img1, rectangle: "Kitchen Design", header1: "Let’s Get Solution For Building Construction", header2: "Work", date: "26 December,2022"
                },
                {
                    id: 2, img: img2, rectangle: "Living Design", header1: "Low Cost Latest Invented Interior Designing", header2: "Ideas.", date: "22 December,2022"
                },
                {
                    id: 3, img: img3, rectangle: "Interior Design", header1: "Best For Any Office & Business Interior ", header2: "Solution", date: "25 December,2022"
                },
            ],
        };
    },
    components: { CardComponent }
}

</script>

<style>
</style>