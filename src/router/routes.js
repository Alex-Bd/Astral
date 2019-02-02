
const routes = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/Music',
    component: () => import('layouts/MusicLayout.vue'),
    children: [
      { path: 'file', component: () => import('pages/Music/MusicFolderPage.vue') },
      { path: 'youtube', component: () => import('pages/Music/YoutubePage.vue') },
      { path: 'player', component: () => import('pages/Music/MusicPlayerPage.vue') }

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
