import home from './page/home.vue'
import frame from './page/frame.vue'
import cssTool from './page/cssTool.vue'
import DevelTool from './page/DevelTool.vue'
// 路由配置
export default[
    {
        path: '/',
        name: 'home',
        meta: {
            keepAlive: true
        },
        component: home
    }, {
        path : '/frame',
        name: 'frame',
        meta: {
            keepAlive: true
        },
        component: frame
    }, {
        path : '/cssTool',
        name: 'cssTool',
        meta: {
            keepAlive: true
        },
        component: cssTool
    }, {
        path : '/DevelTool',
        name: 'DevelTool',
        meta: {
            keepAlive: true
        },
        component: DevelTool
    }
]
