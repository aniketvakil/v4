module.exports = {
  siteTitle: 'Aniket Vakil',
  siteDescription:
    'Aniket Vakil is a Computer Science student, with a specialization and keen interest in the field of Data Analytics.',
  siteKeywords:
    'Aniket Vakil, Aniket, Vakil, software engineer, machine learning, data analytics, nirma university, deep learing, neural networks',
  siteUrl: 'https://brittanychiang.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Aniket Vakil',
  location: 'Vadodara, Gujarat, India',
  email: 'aniketvakil3@gmail.com',
  github: 'https://github.com/aniketvakil',
  twitterHandle: '@AniketVakil',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/aniketvakil',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/aniket-vakil/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/aniketvakil/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/AniketVakil',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
