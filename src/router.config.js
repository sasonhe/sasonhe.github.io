import home from './page/home.vue'
import frame from './page/frame.vue'
import cssTool from './page/cssTool.vue'
import DevelTool from './page/DevelTool.vue'
// 路由配置
export default [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/frame',
        name: 'frame',
        component: frame
    },
    {
        path: '/cssTool',
        name: 'cssTool',
        component: cssTool
    },
    {
        path: '/DevelTool',
        name: 'DevelTool',
        component: DevelTool
    }
]
