
const routes = [
  {
    path: '/',
    component: () => import('layouts/layout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/Index.vue'),
        name:'home',
        meta:{
          title:"Pokemon Apps"
        } 
      }
    ]
  },
  {
    path: '/pokemon/:id/:title',
    component: () => import('layouts/layout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/details.vue'),
        name:'details'
      }
    ]
  },
  {
    path: '/mypokemon',
    component: () => import('layouts/layout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/mylist.vue'),
        name:'my pokemon',
        meta:{
          title:"My Pokemons"
        }
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
