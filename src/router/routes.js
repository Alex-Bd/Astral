const routes = [
  {
    path: "/",
    component: () => import("layouts/HomeLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }]
  },
  {
    path: "/music",
    component: () => import("layouts/MusicLayout.vue"),
    children: [{ path: "/", component: () => import("components/music/ArtistComponent.vue") },
               { path: "/", component: () => import("components/music/ArtistComponent.vue") },
               { path: "/", component: () => import("components/music/ArtistComponent.vue") }
    ]
  }


];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
