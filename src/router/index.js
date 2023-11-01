import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/components/IndexComponent'
import Project from '@/components/ProjectComponent'
import Blog from '@/components/ArticleComponent'
import NotFound from '@/components/NotFoundComponent'
import ProjectDetails from '@/components/ProjectDetailsComponent'
import BlogDetails from '@/components/BlogDetailsComponent'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/project',
        name: 'Project',
        component: Project
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/project-details/:id?',
        name: 'ProjectDetails',
        component: ProjectDetails
    },
    {
        path: '/blog-details/:id?',
        name: 'BlogDetails',
        component: BlogDetails
    },
    {
        path: '/:CatchAll(.*)',
        name: 'NotFound',
        component: NotFound
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), 
    routes
})

export default router