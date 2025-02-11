const routeAbout = [
/*   {
    path: 'pochta',
    name: 'aboutPochta',
    components: {
      default: () => import('@/components/about/AboutPochta.vue'),
    },
    meta: {
      breadcrumbs: [
        { text: 'Home', to: '/' },
        { text: 'About', to: '/about' },
        { text: 'Pochta', to: '/about/pochta' },
      ],
    },
  },
  {
    path: 'vue',
    name: 'aboutVue',
    components: {
      default: () => import('@/components/about/AboutVue.vue'),
    },
    meta: {
      breadcrumbs: [
        { text: 'Home', to: '/' },
        { text: 'About', to: '/about' },
        { text: 'Vue', to: '/about/vue' },
      ],
    },
  },
  {
    path: 'vuetify',
    name: 'about Vuetify',
    components: {
      default: () => import('@/components/about/AboutVuetify.vue'),
    },
    meta: {
      breadcrumbs: [
        { text: 'Home', to: '/' },
        { text: 'About', to: '/about' },
        { text: 'Vuetify', to: '/about/vuetify' },
      ],
    },
  }, */
  {
    path: 'bugtracker',
    name: 'aboutBugtracker',
    components: {
      default: () => import('@/components/about/Bugtracker.vue'),
    },
    meta: {
      breadcrumbs: [
        { text: 'Home', to: '/' },
        { text: 'About', to: '/about' },
        { text: 'Bugtracker', to: '/about/bugtracker' },
      ],
    },
  },
  {
    path: 'faq',
    name: 'aboutFaq',
    components: {
      default: () => import('@/components/about/Faq.vue'),
    },
    meta: {
      breadcrumbs: [
        { text: 'Home', to: '/' },
        { text: 'About', to: '/about' },
        { text: 'FAQ', to: '/about/faq' },
      ],
    },
  },
  {
    path: 'tutorial',
    name: 'aboutTutorial',
    components: {
      default: () => import('@/components/about/Tutorial.vue'),
    },
    meta: {
      breadcrumbs: [
        { text: 'Home', to: '/' },
        { text: 'About', to: '/about' },
        { text: 'Tutorial', to: '/about/tutorial' },
      ],
    },
  },
  {
    path: 'login',
    name: 'aboutLogin',
    components: {
      default: () => import('@/components/about/Login.vue'),
    },
    meta: {
      breadcrumbs: [
        { text: 'Home', to: '/' },
        { text: 'About', to: '/about' },
        { text: 'Login', to: '/about/login' },
      ],
    },
  },
];

export default routeAbout;
