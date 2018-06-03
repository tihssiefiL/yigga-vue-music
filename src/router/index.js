import Vue from 'vue'
import Router from 'vue-router'
import Contacts from '@/components/contacts.vue'
import Media from '@/components/media.vue'
import Menu from '@/components/menu'
import Search from '@/components/search'
import Discover from '@/components/child/discover'
import Mine from '@/components/child/mine'
import Radio from '@/components/child/radio'
import Music from '@/components/music'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Music
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/media',
      name: 'media',
      component: Media
    },
    {
      path: '/music',
      name: 'music',
      component: Music,
      children: [
        {
          path: '/music/discover',
          name: 'discover',
          component: Discover
        },
        {
          path: '/music/mine',
          name: 'mine',
          component: Mine
        },
        {
          path: '/music/radio',
          name: 'radio',
          component: Radio
        }
      ]
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ],
  mode: 'history'
})
