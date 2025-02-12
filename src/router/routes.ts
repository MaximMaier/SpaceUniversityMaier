const routes = {
  about: [
    {
      title: '$vuetify.aboutBugtracker.name',
      to: '/about/bugtracker',
      icon: 'fa-bug',
    },
    {
      title: '$vuetify.aboutFaq.name',
      to: '/about/faq',
      icon: 'fa-question-circle',
    },
    {
      title: '$vuetify.aboutTutorial.name',
      to: '/about/tutorial',
      icon: 'fa-info-circle',
    },
    {
      title: '$vuetify.aboutLogin.name',
      to: '/about/login',
      icon: 'fa-sign-in-alt',
    },
  ],
  campus: [
    {
      title: '$vuetify.campus.map.name',
      to: '/campus/map',
      icon: 'fa-map',
    },
  ],
  study: [
    {
      title: '$vuetify.study.courses.name',
      to: '/study/courses',
      icon: 'fa-book-open',
    },
    {
      title: '$vuetify.study.timetable.name',
      to: '/study/timetable',
      icon: 'fa-calendar-alt',
    },
  ],
};

export default routes;
