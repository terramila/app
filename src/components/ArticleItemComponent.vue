<template>
    <div class="blog">
        <div class="blog-article">
            <div class="blog-article__item" v-for="item in this.temp" :key="item.id">
                    <h1 class="blog-article__header">{{item.header}}</h1>
                    <img class="blog-article__img1" :src="item.img1" alt="blog foto">
                    <div class="blog-article__nav">
                        <p>{{item.date}}</p>
                        <p>Interior / Home / Decore</p>
                    </div>
                    <p class="blog-article__text">
                        {{item.text1}}
                    </p>
                    <p class="blog-article__text"> 
                        {{item.text2}}
                    </p>
                    <div class="blog-article__quote">
                        <svg width="74" height="56" viewBox="0 0 74 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z"
                                fill="#CDA274" />
                        </svg>
                        <p>
                            {{item.quote}}
                        </p>
                    </div>
                    <h2 class="blog-article__subheader">
                        {{item.subheader}}
                    </h2>
                    <p class="blog-article__text">
                        {{item.text3}}
                    </p>
                    <ol>
                        <li>
                            Contrary to popular belief.There are many variations of passages of
                            Lorem Ipsum available, but the
                            majority have suffered.
                        </li>
                        <li>
                            Contrary to popular belief.There are many variations of passages of
                            Lorem Ipsum available, but the
                            majority have suffered.
                        </li>
                        <li>
                            Contrary to popular belief.There are many variations of passages of
                            Lorem Ipsum available, but the
                            majority have suffered.
                        </li>
                    </ol>
                    <img class="blog-article__img2" :src="item.img2" alt="blog foto">
                    <p class="blog-article__text">
                        {{item.text4}}
                    </p>
            </div>
        </div>
        <div class="tags">
                <h2 class="tags-header">Tags</h2>
                <div class="tags-buttons">
                    <button class="tags-buttons__item" @click="getArticle('Kitchen')">Kitchen</button>
                    <button class="tags-buttons__item" @click="getArticle('Bedroom')">Bedroom</button>
                    <button class="tags-buttons__item" @click="getArticle('Building')">Building</button>
                    <button class="tags-buttons__item" @click="getArticle('Architecture')">Architecture</button>
                    <button class="tags-buttons__item" @click="getArticle('Kitchen Planning')">Kitchen Planning</button>
                    <button class="tags-buttons__item" @click="getArticle('Bedroom')">Bedroom</button>
                </div>
            </div>
    </div>
</template>
<script>
import img10 from "../assets/img/blog1.png";
import img11 from "../assets/img/blog2.png";
import img12 from "../assets/img/blog3.jpg";
import img13 from "../assets/img/blog4.jpg";
import img14 from "../assets/img/blog5.jpg";
import img15 from "../assets/img/blog6.png";
import img16 from "../assets/img/blog7.jpg";
import img17 from "../assets/img/blog8.jpeg";
import img18 from "../assets/img/blog9.jpg";
import img19 from "../assets/img/blog10.jpeg";

export default{
    data(){
        const articles = [
            {
                id:1, tag:"Kitchen", 
                header: "Let’s Get Solution for Building Construction Work",
                img1:img10, date:"26 December,2022",
                text1: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular
                belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.`,
                text2: `Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary.`,
                quote:"The details are not the details. They make the design.",
                subheader:"Design sprints are great", 
                text3:`Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular
                belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
                img2:img11, 
                text4:`Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular
                belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.` 
            },
            {
                id:2, tag:"Bedroom", 
                header:"Low Cost Latest Invented Interior Designing Ideas.",
                img1:img12, date:"13 October,2022",
                text1:`In larger Victorian houses it was common to have accessible from the bedroom a boudoir for the lady of the house and a 
                dressing room for the gentleman.`, 
                text2:`In the 14th century the lower class slept on mattresses that were stuffed with hay and broom straws.
                During the 16th century mattresses stuffed with feathers started to gain popularity, with those who could afford them.`,
                quote:"Design is intelligence made visible.",
                subheader:"Make it simple, but significant",
                text3:`Furniture and other items in bedrooms vary greatly, depending on taste, local traditions and the socioeconomic 
                status of an individual.`,
                img2:img13,
                text4:`Night stands are also popular. They are used to put various items on, such as an alarm clock or a small lamp.`
            },
            {
                id:3, tag:"Building",
                header:"Best For Any Office & Business Interior Solution",
                img1:img14, date:"1 November,2022",
                text1:`A building or edifice is an enclosed structure with a roof and walls, usually standing permanently in one place,
                such as a house or factory.`,
                text2: `Buildings come in a variety of sizes, shapes, and functions, and have been adapted throughout history for numerous 
                factors, from building materials available, to weather conditions, land prices, ground conditions, specific uses, prestige, 
                and aesthetic reasons. `,
                quote:"The function of design is letting design function.",
                subheader:"Design is not a single object or dimension",
                text3:`Buildings serve several societal needs – occupancy, primarily as shelter from weather, security, living space, privacy, 
                to store belongings, and to comfortably live and work.`,
                img2:img15,
                text4:`There is clear evidence of homebuilding from around 18,000 BC.`
            },
            {
                id:4, tag:"Architecture",
                header:"What Is Architecture?",
                img1:img16, date:"31 December,2022",
                text1:`Architecture is the art and technique of designing and building, as distinguished from the skills associated with construction.`,
                text2: `It is both the process and the product of sketching, conceiving,[4] planning, designing, and constructing buildings or other structures. `,
                quote:"Design is a formal response to a strategic question.",
                subheader:"A Dive Into the World of Architecture in Art",
                text3:`Architecture is the discipline of designing and building a range of structures that are used to meet both functional and aesthetic requirements. 
                Since every culture has a unique relationship with the natural world and with the other cultures around them, the structures it creates convey a great 
                deal about its traditions, history, environment, artistic sensibilities, and many other facets of everyday life.`,
                img2:img17,
                text4:`In architecture, all of these requirements must be satisfied. The second requirement listed is regarded as a constant, whereas the first and third 
                change in importance depending on the social utility of the structure. `
            },
            {
                id:5, tag:"Kitchen Planning",
                header:"Planning a kitchen: where do I start?",
                img1:img18, date:"11 June,2022",
                text1:`All beginnings are difficult. To mark out key points for yourself, it’s best to start with a checklist. Among the important blocks of topics are: 
                Kitchen style, kitchen size, budget and timeline.`,
                text2: `The Internet is, of course, filled with a wealth of information about kitchen planning. Here it can help to pay attention to neutral portals that 
                report independently of brands. Photo galleries provide inspiration. `,
                quote:"Good design is good business.",
                subheader:"Planning a kitchen: how much does it cost?",
                text3:`On average, kitchen buyers in German-speaking countries spend €7,125 (as of 2018, published May 2019, statista.com) to buy their new kitchen. `,
                img2:img19,
                text4:`However, the upscale premium segment in particular is booming: a growing group of buyers is forming in the kitchen segment starting at 12,000 euros, 
                who see kitchens as a high-quality, long-lasting investment. Correspondingly, a lot of financial reserves are therefore increasingly being used for planning 
                a kitchen instead of for a new car or a vacation.`
            },
            {
                id:6, tag:"Building",
                header:"Best For Any Office & Business Interior Solution",
                img1:img14, date:"1 November,2022",
                text1:`A building or edifice is an enclosed structure with a roof and walls, usually standing permanently in one place,
                such as a house or factory.`,
                text2: `Buildings come in a variety of sizes, shapes, and functions, and have been adapted throughout history for numerous 
                factors, from building materials available, to weather conditions, land prices, ground conditions, specific uses, prestige, 
                and aesthetic reasons. `,
                quote:"The function of design is letting design function.",
                subheader:"Design is not a single object or dimension",
                text3:`Buildings serve several societal needs – occupancy, primarily as shelter from weather, security, living space, privacy, 
                to store belongings, and to comfortably live and work.`,
                img2:img15,
                text4:`There is clear evidence of homebuilding from around 18,000 BC.`
            },
        ]
        const temp =  articles.find((art) => art.id === Number(this.$route.params.id));
        return{
            articles: articles,
            temp: [temp]
        }
    },
    methods: {
        getArticle(tag){
            this.temp = this.articles.filter(item=>item.tag === tag);
        }
    },
}
</script>