import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: 'define',
        component: () => import('pages/Define.vue'),
        children: [
          { path: 'tree-view', component: () => import('components/TreeView.vue')}
        ]
      },
      { path: 'acquire', component: () => import('pages/Acquire.vue') },
      { path: 'analyse', component: () => import('pages/Analyse.vue') },
      { path: 'visualise', component: () => import('pages/Visualise.vue') },
      { path: 'decide', component: () => import('pages/Decide.vue') },
      { path: 'store', component: () => import('pages/Store.vue') },
      { path: 'settings', component: () => import('pages/Settings.vue') }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
