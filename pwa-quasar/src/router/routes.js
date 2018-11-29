
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  },

  {
    path: '/candidate',
    component: () => import('layouts/personnal_layouts/candidate/candidate'),
    children: [
      { path: '', component: () => import('pages/personnal_pages/candidate/candidate_subscription') }
    ]
  },

  {
    path: '/company',
    component: () => import('layouts/personnal_layouts/company/company'),
    children: [
      { path: '', component: () => import('pages/personnal_pages/company/company_subscription') }
    ]
  },

  {
    path: '/candidate_profile',
    component: () => import('layouts/personnal_layouts/candidate/candidate'),
    children: [
      { path: '', component: () => import('pages/personnal_pages/candidate/candidate_profile') }
    ]
  },

  {
    path: '/company_profile',
    component: () => import('layouts/personnal_layouts/company/company'),
    children: [
      { path: '', component: () => import('pages/personnal_pages/company/company_profile') }
    ]
  },

  {
    path: '/candidate_achievements',
    component: () => import('layouts/personnal_layouts/candidate/candidate'),
    children: [
      { path: '', component: () => import('pages/personnal_pages/candidate/candidate_achievements') }
    ]
  },

  {
    path: '/company_achievements',
    component: () => import('layouts/personnal_layouts/company/company'),
    children: [
      { path: '', component: () => import('pages/personnal_pages/company/company_achievements') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
