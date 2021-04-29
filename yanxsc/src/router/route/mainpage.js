export default [
    {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index/index')
    },
    {
        path: '/type',
        name: 'type',
        component: () => import('@/views/type/type')
    },
    {
        path: '/shopcar',
        name: 'shopcar',
        component: () => import('@/views/shopcar/shopcar')
    },
    {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/mine/mine')
    },
    {
        path: '/kanX',
        name: 'kanX',
        component: () => import('@/views/kanX/kanX')
    },
    {
        path: '/jplb',
        name: 'jplb',
        component: () => import('@/views/index/jplb')
    },
    {
        path: '/zlxq',
        name: 'zlxq',
        component: () => import('@/views/index/zlxq')
    }
]
