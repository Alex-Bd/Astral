const routes = [
  {
    path: "/",
    component: () => import("layouts/HomeLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }]
  },
  {
    path: "/music",
    component: () => import("layouts/MusicLayout.vue"),
    children: [{ path: "/music/folders", component: () => import("components/Music/FolderComponent.vue") },
               { path: "/music/youtube", component: () => import("components/Music/FolderComponent.vue") },
               { path: "/", component: () => import("components/Music/PlayerComponent.vue") }
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
