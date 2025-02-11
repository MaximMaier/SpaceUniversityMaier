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
  ],
  campus: [
    {
      title: '$vuetify.campus.map.name',
      to: '/campus/map',
      icon: 'fa-map',
    },
  ],
  playground: [
    {
      title: '$vuetify.playground.hero.name',
      to: '/playground/hero',
      icon: 'fa-user-ninja',
    },
    {
      title: '$vuetify.playground.poll.name',
      to: '/playground/poll',
      icon: 'fa-poll',
    },
  ],
  study: [
    {
      title: '$vuetify.study.courses.name',
      to: '/study/courses',
      icon: 'fa-book-open',
    },
    {
      title: '$vuetify.study.timetable.name', // Add this section
      to: '/study/timetable',
      icon: 'fa-calendar-alt',
    },
  ],
};

export default routes;
