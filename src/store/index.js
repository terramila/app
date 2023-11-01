import { createStore } from "vuex";
import img1 from '../assets/img/bedroom1.png';
import img2 from '../assets/img/bedroom2.jpg';
import img3 from '../assets/img/bedroom3.jpg';
import img4 from '../assets/img/bedroom4.jpg';
import img5 from '../assets/img/bedroom5.jpg';
import img6 from '../assets/img/bedroom6.jpeg';
import img7 from '../assets/img/bedroom7.jpeg';
import img8 from '../assets/img/bedroom8.jpg';

export default createStore({
    state:{
        articles:[
        {
            id: 1,
            header: "Minimal Look Bedrooms",
            text1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, 
            vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh
            in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. `,
            text2: `In nec sem suscipit, convallis leo vitae, lacinia nibh. 
            Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id,
            pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,
            elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta.
            Proin tincidunt ligula id purus porttitor.`,
            img1: img1,
            img2: img2,
            img3: img3
        },
        {
            id: 2,
            header: "Classic Minimal Bedroom",
            text1: `The hottest looks touch all corners of interior design – and kitchens are no exception 
            in 2023! This means kitchens of the future hold a world of excitement to look forward to too! 
            According to trend predictors, we’re moving into neutral territory with form taking center stage.`,
            text2: `But there is so much more – read on to see the kitchen trends 2023 sure to fire up any interior.`,
            img1: img2,
            img2: img3,
            img3: img4
        },
        {
            id: 3,
            header: "Minimal Bedroom table",
            text1: `Just like interior design trends, 2023 kitchen trends see more personalization and self-expression.
             The key to current and future designs is creating a space that truly feels like you or those that dwell within 
             the interior.`,
             text2: `This may mean customizing the room to your every like, while either opting for a sleek minimal look 
             or a bolder, wild design. Similarly, function and layout follow suit to adapt to your way of living.`,
             img1: img3,
            img2: img4,
            img3: img5
        },
        {
            id: 4,
            header: "Modern Medroom",
            text1: `That said, trends don’t dictate or necessitate a kitchen remodel. Fortunately, many trendy 
            options can spruce up your interior without an overhaul.`,
            text2: `Whether a coat of paint for a daring look or updated fixtures, there’s a way to include the 
            newest vogue in any space.`,
            img1: img4,
            img2: img5,
            img3: img6
        },
        {
            id: 5,
            header: "Minimal Look Bedrooms",
            text1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, 
            vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh
            in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. `,
            text2: `In nec sem suscipit, convallis leo vitae, lacinia nibh. 
            Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id,
            pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,
            elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta.
            Proin tincidunt ligula id purus porttitor.`,
            img1: img5,
            img2: img6,
            img3: img7
        },
        {
            id: 6,
            header: "Modern Bedroom",
            text1: `The hottest looks touch all corners of interior design – and kitchens are no exception 
            in 2023! This means kitchens of the future hold a world of excitement to look forward to too! 
            According to trend predictors, we’re moving into neutral territory with form taking center stage.`,
            text2: `But there is so much more – read on to see the kitchen trends 2023 sure to fire up any interior.`,
            img1: img6,
            img2: img7,
            img3: img8
        },
        {
            id: 7,
            header: "System Table",
            text1: `Just like interior design trends, 2023 kitchen trends see more personalization and self-expression.
             The key to current and future designs is creating a space that truly feels like you or those that dwell within 
             the interior.`,
             text2: `This may mean customizing the room to your every like, while either opting for a sleek minimal look 
             or a bolder, wild design. Similarly, function and layout follow suit to adapt to your way of living.`,
             img1: img7,
            img2: img8,
            img3: img1
        },
        {
            id: 8,
            header: "Modern Medroom",
            text1: `That said, trends don’t dictate or necessitate a kitchen remodel. Fortunately, many trendy 
            options can spruce up your interior without an overhaul.`,
            text2: `Whether a coat of paint for a daring look or updated fixtures, there’s a way to include the 
            newest vogue in any space.`,
            img1: img8,
            img2: img2,
            img3: img3
        }
    ]},
    getters:{},
    mutations:{},
    
})