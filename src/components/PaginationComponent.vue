<template>
     <div class="articles-pagination">
            <div class="articles-pagination__item">
                <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                </svg>
                <p>01</p>
            </div>
            <div class="articles-pagination__item">
                <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                </svg>
                <p>02</p>
            </div>
            <div class="articles-pagination__item">
                <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                </svg>
                <p>03</p>
            </div>
            <div class="articles-pagination__item">
                <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                    <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .articles{    
    &-pagination{
        display: flex;
        justify-content: center;
        padding-top: 51px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        &__item{
            position: relative;
            p{
                position: absolute;
                top: 15px;
                right: 20px;
            }
        }
        &__item:hover{
            border: none;
            cursor: pointer;
            svg{
                circle{
                    fill:#F4F0EC;
                    stroke:none;
                }
            }
        }
    }
}
</style>