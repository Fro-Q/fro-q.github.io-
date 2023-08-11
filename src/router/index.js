import { createRouter, createWebHistory } from 'vue-router'

import Menubar from '../components/Menubar.vue'
import TableOfContents from '../components/TableOfContents.vue'
import TagList from '../components/TagList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        sidebarLeft: Menubar,
        sidebarRight: TagList,
        mainContent: TableOfContents,
      }
    },

    {
      path: '/long-time-no-see',
      name: 'long-time-no-see',
      components: {
        sidebarLeft: Menubar,
        sidebarRight: TagList,
        mainContent: () => import('@/components/posts-vue/long-time-no-see.vue'),
      }
    },
    {
      path: '/what-is-prompt',
      name: 'what-is-prompt',
      components: {
        sidebarLeft: Menubar,
        sidebarRight: TagList,
        mainContent: () => import('@/components/posts-vue/what-is-prompt.vue'),
      }
    },
    {
      path: '/need-time',
      name: 'need-time',
      components: {
        sidebarLeft: Menubar,
        sidebarRight: TagList,
        mainContent: () => import('@/components/posts-vue/need-time.vue'),
      }
    },
    {
      path: '/basics-of-prompting',
      name: 'basics-of-prompting',
      components: {
        sidebarLeft: Menubar,
        sidebarRight: TagList,
        mainContent: () => import('@/components/posts-vue/basics-of-prompting.vue'),
      }
    },
    {
      path: '/making-obsidian-theme',
      name: 'making-obsidian-theme',
      components: {
        sidebarLeft: Menubar,
        sidebarRight: TagList,
        mainContent: () => import('@/components/posts-vue/making-obsidian-theme.vue'),
      }
    },    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components: {
        // sidebarLeft: sidebarLeft,
      }
    }
  ]
})

export default router
