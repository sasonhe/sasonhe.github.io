import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'
import Frame from '@/page/frame'
import CssTool from '@/page/cssTool'
import DevelTool from '@/page/DevelTool'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        title:'构建工具'
      }
    },
    {
        path: '/frame',
        name: 'frame',
        component: Frame,
        meta:{
          title:'热门框架'
        }
    },
    {
        path: '/csstool',
        name: 'csstool',
        component: CssTool,
        meta:{
          title:'CSS工具'
        }
    },
    {
        path: '/develtool',
        name: 'develtool',
        component: DevelTool,
        meta:{
          title:'开发工具'
        }
    },
    {
      path: '*',
      redirect: '/',
      meta: { title: '404', icon: '' },
    },
  ]
})
