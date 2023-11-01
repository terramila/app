<template>
  <HeaderComponent/>
  <router-view/>
</template>

<script>
// import IndexComponent from './components/IndexComponent.vue'
// import ArticleComponent from './components/ArticleComponent.vue';
// import BlogDetailsComponent from './components/BlogDetailsComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
// import FooterComponent from './components/FooterComponent.vue';
// import ProjectComponent from './components/ProjectComponent.vue';
// import ProjectDetailsComponent from './components/ProjectDetailsComponent.vue';

export default {
  name: 'App',
  components: {
    // IndexComponent, ArticleComponent, BlogDetailsComponent,
    HeaderComponent,
    // FooterComponent,
    // ProjectComponent,
    // ProjectDetailsComponent
}
}
</script>

<style>

</style>
