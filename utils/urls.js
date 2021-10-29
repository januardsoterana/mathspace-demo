// @flow

import { type CountryCodes, type CountryRoutes } from 'utils/types';

const getConfig = (key, fallback): string => {
  if (process.env[key] === undefined || process.env[key] === null) {
    if (fallback !== undefined) {
      return fallback;
    }
  }
  return process.env[key] || fallback;
};

const LEADERBOARD_LINK = getConfig('LEADERBOARD_LINK', '');
const GOOGLE_API_KEY = getConfig('GOOGLE_API_KEY', '');
const RSS_LEADERBOARD_LINK = getConfig('RSS_LEADERBOARD_LINK', '');
const VBS_LEADERBOARD_LINK = getConfig('VBS_LEADERBOARD_LINK', '');
const US_GROWTH_2020_LEADERBOARD_LINK = getConfig(
  'US_GROWTH_2020_LEADERBOARD_LINK',
  '',
);

export const urls = {
  // Extrernal links
  blog: 'https://blog.mathspace.co',
  bookDemo: 'https://calendly.com/mathspace-global-website-demos',
  quickChat: 'https://calendly.com/mathspaceglobal',
  bookDemoAU: 'https://calendly.com/mathspace-australia/demo',
  quickChatAU: 'https://calendly.com/mathspace-australia/quick-chat',
  twitter: 'https://twitter.com/mathspace',
  facebook: 'https://www.facebook.com/learnmaths',
  ted:
    'https://www.ted.com/talks/mohamad_jebara_this_company_pays_kids_to_do_their_math_homework',
  financialReview:
    'http://www.afr.com/leadership/entrepreneur/mathspace-elearning-product-has-gained-entry-to-hong-kongs-highlycompetitive-school-system-20170217-gufg4e',
  dailyTelegraph:
    'https://www.dailytelegraph.com.au/news/nsw/westpac-offers-99-maths-app-free-to-students/news-story/012320873a1ff7d738bfb5d199384a61',
  forbes:
    'https://www.forbes.com/sites/under30network/2016/01/07/dont-lose-track-of-education-technology-in-the-new-education-law/#63200a0c7d73',
  educationWeek:
    'http://blogs.edweek.org/edweek/DigitalEducation/2016/06/iste_2016_preview.html',

  appleApp: 'https://itunes.apple.com/us/app/mathspace/id586612052?mt=8',
  appleAppForStudents:
    'https://itunes.apple.com/us/app/mathspace-for-students/id1445097311',
  androidApp:
    'https://play.google.com/store/apps/details?id=co.mathspace&hl=en',
  windowsApp: 'https://www.microsoft.com/en-au/store/p/mathspace/9wzdncrdqgtw',
  eddieWoo: 'https://wootube.mathspace.co/',
  stripeDocumentation: 'https://stripe.com/docs/security/stripe',
  westpacPartnership:
    'https://help.mathspace.co/westpac-partnership/solve-to-save/what-is-solve-to-save',
  mathspaceStatus: 'https://status.mathspace.co/',
  fifySixCreations: 'https://fiftysixcreations.com.au',
  challengeAUSignup:
    'https://docs.google.com/forms/d/1Ip9iLRhAvtd4F-loIdqjzZBrb9kzyNnt0-QVsVMckNM/viewform?edit_requested=true',
  challengeUSSignup:
    'https://docs.google.com/forms/d/e/1FAIpQLSeGHBujf6Y7Yu0LAdwkOruhQjPkMTGqkGzfWm-qU2xqxTMWgg/viewform?usp=sf_link',
  workable: 'https://mathspace.workable.com/',
  bookCoaching: 'https://calendly.com/mathspace-australia',
  points: 'https://help.mathspace.co/understanding-features/student-points',
  diagnosticTypeForm: 'https://nicola77.typeform.com/to/KQ5JHL',
  diagnosticDemo:
    'https://diagnostic2018.mathspace.co/demo/dashboard/curriculumDemo',
  helpCenter: 'https://help.mathspace.co/',
  webinar: 'https://webinar.mathspace.co',
  webinarUS: 'https://webinar.mathspace.co/us',

  // Internal links
  homeRedirect: '/',
  teachersRedirect: '/schools',
  curriculumRedirect: '/curriculum',
  homepageAU: '/au',
  homepageUS: '/us',
  aboutUsAU: '/au/about-us',
  aboutUsUS: '/us/about-us',
  teachersAU: '/au/teachers',
  curriculumAU: '/au/curriculum',
  curriculumUS: '/us/curriculum',
  challengeAU: '/au/challenge',
  challengeUS: '/us/challenge',
  challengeRSS: '/us/rss-challenge',
  challengeRulesAU: '/au/challenge-rules',
  challengeRulesUS: '/us/challenge-rules',
  careers: '/careers',
  careersEngineering: 'careers/engineering',
  joinClass: '/signup/join-class/',
  login: '/accounts/login/',
  signupWestpacEssentials: 'https://mathspace.co/westpac/signup/essentials/',
  terms: '/terms-of-use',
  privacy: '/privacy-policy',
  privacyAU: '/au/privacy-policy',
  privacyUS: '/us/privacy-policy',
  newsroomRedirect: '/newsroom',
  newsroomAU: '/au/newsroom',
  newsroomUS: '/us/newsroom',
  coachingAU: '/au/coaching',
  maintenance: '/maintenance',
  newWorkbook: '/new-workbook',
  diagnostic: '/au/diagnostic',
  diagnosticUS: '/us/diagnostic',
  weeklyInsights: '/weekly-insights',
  customerStoriesAU: '/au/customer-stories',
  customerStoriesUS: '/us/customer-stories',
  customerStory: '/customer-story',
  nteLanding: '/new-teacher-experience',
  teachingRemotelyAU: '/au/teachingremotely',
  teachingRemotelyUS: '/us/teachingremotely',
  parentsAU: '/au/parents',
  parentsUS: '/us/parents',
  coronavirus: '/coronavirus',
  waypointsAU: '/au/waypoints',
  waypointsUS: '/us/waypoints',
};

export const mailtoLink = 'mailto:hello@mathspace.co';
export const telLink = 'tel:+61 1300 833 194';

export const endpoints = {
  workableJobs: 'https://www.workable.com/api/accounts/76493',
  overallLeaderboardSheet: `https://sheets.googleapis.com/v4/spreadsheets/${LEADERBOARD_LINK}/values/Overall Leaderboard!A2:H21?key=${GOOGLE_API_KEY}`,
  weeklyLeaderboardSheet: `https://sheets.googleapis.com/v4/spreadsheets/${LEADERBOARD_LINK}/values/Weekly Leaderboard!A2:H21?key=${GOOGLE_API_KEY}`,
};

// TODO: Delete this after the challenge is over
export const rssCompUrls = {
  rssGrade6Leaderboard: `https://sheets.googleapis.com/v4/spreadsheets/${RSS_LEADERBOARD_LINK}/values/Grade 6!A2:D22?key=${GOOGLE_API_KEY}`,
  rssGrade7Leaderboard: `https://sheets.googleapis.com/v4/spreadsheets/${RSS_LEADERBOARD_LINK}/values/Grade 7!A2:D22?key=${GOOGLE_API_KEY}`,
  rssGrade8Leaderboard: `https://sheets.googleapis.com/v4/spreadsheets/${RSS_LEADERBOARD_LINK}/values/Grade 8!A2:D22?key=${GOOGLE_API_KEY}`,
};

export const vbSchoolsComp = {
  gradeSix: `https://sheets.googleapis.com/v4/spreadsheets/${VBS_LEADERBOARD_LINK}/values/Grade 6!A2:D22?key=${GOOGLE_API_KEY}`,
  gradeSeven: `https://sheets.googleapis.com/v4/spreadsheets/${VBS_LEADERBOARD_LINK}/values/Grade 7!A2:D22?key=${GOOGLE_API_KEY}`,
  gradeEight: `https://sheets.googleapis.com/v4/spreadsheets/${VBS_LEADERBOARD_LINK}/values/Grade 8!A2:D22?key=${GOOGLE_API_KEY}`,
  algebraOne: `https://sheets.googleapis.com/v4/spreadsheets/${VBS_LEADERBOARD_LINK}/values/Algebra I!A2:D22?key=${GOOGLE_API_KEY}`,
  geometry: `https://sheets.googleapis.com/v4/spreadsheets/${VBS_LEADERBOARD_LINK}/values/Geometry!A2:D22?key=${GOOGLE_API_KEY}`,
  algebraTwo: `https://sheets.googleapis.com/v4/spreadsheets/${VBS_LEADERBOARD_LINK}/values/Algebra II!A2:D22?key=${GOOGLE_API_KEY}`,
};

export const challengeUS2020 = {
  newSchools: `https://sheets.googleapis.com/v4/spreadsheets/${US_GROWTH_2020_LEADERBOARD_LINK}/values/New Schools!A2:D22?key=${GOOGLE_API_KEY}`,
  existingSchools: `https://sheets.googleapis.com/v4/spreadsheets/${US_GROWTH_2020_LEADERBOARD_LINK}/values/Existing Schools!A2:D22?key=${GOOGLE_API_KEY}`,
};

export const urlBuilders = {
  imageUrl: (filename: string) => `/website/images/${filename}`,
  fontUrl: (filename: string) => `/website/fonts/${filename}`,
  faviconUrl: (filename: string) => `/website/favicons/${filename}`,
  downloadUrl: (filename: string) => `/website/downloads/${filename}`,
  cssUrl: (filename: string) => `/website/css/${filename}`,
};

export const getUrlsForCounty = (countryCode?: CountryCodes): CountryRoutes => {
  switch (countryCode) {
    case 'AU':
      return {
        homepage: urls.homepageAU,
        teachers: urls.teachersAU,
        curriculum: urls.curriculumAU,
        privacy: urls.privacyAU,
        coachingAU: urls.coachingAU,
        diagnostic: urls.diagnostic,
      };
    case 'US':
      return {
        homepage: urls.homepageUS,
        curriculum: urls.curriculumUS,
        privacy: urls.privacyUS,
        challenge: urls.challengeRulesUS,
        rssChallenge: urls.challengeRSS,
      };
    default:
      return {
        homepage: urls.homeRedirect,
        teachers: urls.teachersRedirect,
        curriculum: urls.curriculumRedirect,
        privacy: urls.privacy,
      };
  }
};

// Legacy menu items as of 31-07-2019
export const teacherNavigation = {
  title: 'Teachers',
  links: [
    {
      name: 'Overview',
      href: urls.teachersAU,
      country: 'AU',
      exclude: [],
    },
    {
      name: 'Curriculum',
      href: urls.curriculumRedirect,
      country: 'All',
      exclude: [],
    },
  ],
};
export const resourceNavigation = {
  title: 'Resources',
  links: [
    {
      name: 'Our Blog',
      href: urls.blog,
      country: 'All',
      exclude: [],
      external: true,
    },
    {
      name: 'Newsroom',
      href: urls.newsroomRedirect,
      country: 'All',
      exclude: [],
      external: true,
    },
    {
      name: 'Help Center',
      href: urls.helpCenter,
      country: 'All',
      exclude: ['AU'],
      external: true,
    },
    {
      name: 'Eddie Woo',
      href: urls.eddieWoo,
      country: 'AU',
      exclude: [],
      external: true,
    },
    {
      name: 'Webinars',
      href: urls.webinar,
      country: 'AU',
      exclude: [],
      external: true,
    },
    {
      name: 'Webinars',
      href: urls.webinarUS,
      country: 'US',
      exclude: [],
      external: true,
    },
    {
      name: 'Help Centre',
      href: urls.helpCenter,
      country: 'AU',
      exclude: [],
      external: true,
    },
  ],
};

// New Navigation menu as of 31-07-2019
// TODO: Remove Legacy menu items
export const aboutMenu = {
  title: 'About',
  items: [
    { name: 'Our Story', link: '', isExternal: false, country: 'All' },
    { name: 'Our Team', link: '', isExternal: false, country: 'All' },
    { name: 'Out Clients', link: '', isExternal: false, country: 'All' },
  ],
};
export const featuresMenu = {
  title: 'Features',
  items: [
    { name: 'Teachers', link: '', isExternal: false, country: 'All' },
    { name: 'Students', link: '', isExternal: false, country: 'All' },
    { name: 'Parents', link: '', isExternal: false, country: 'All' },
  ],
};
export const companyMenuAU = {
  title: 'Company',
  items: [
    {
      name: 'About Us',
      link: urls.aboutUsAU,
      isExternal: false,
      country: 'All',
    },
    {
      name: 'Customer Stories',
      link: urls.customerStoriesAU,
      isExternal: false,
      country: 'All',
    },
    {
      name: 'Careers',
      link: urls.careers,
      isExternal: false,
      country: 'All',
    },
  ],
};
export const companyMenuUS = {
  title: 'Company',
  items: [
    {
      name: 'About Us',
      link: urls.aboutUsUS,
      isExternal: false,
      country: 'All',
    },
    {
      name: 'Customer Stories',
      link: urls.customerStoriesUS,
      isExternal: false,
      country: 'All',
    },
    {
      name: 'Careers',
      link: urls.careers,
      isExternal: false,
      country: 'All',
    },
  ],
};
export const resourcesMenuAU = {
  title: 'Resources',
  items: [
    { name: 'Our Blog', link: urls.blog, isExternal: false, country: 'All' },
    {
      name: 'Newsroom',
      link: urls.newsroomAU,
      isExternal: false,
      country: 'All',
    },
    {
      name: 'Help Centre',
      link: urls.helpCenter,
      isExternal: false,
      country: 'All',
    },
    {
      name: 'Eddie Woo',
      link: urls.eddieWoo,
      isExternal: false,
      country: 'AU',
    },
    { name: 'Webinars', link: urls.webinar, isExternal: false, country: 'All' },
  ],
};
export const resourcesMenuUS = {
  title: 'Resources',
  items: [
    { name: 'Our Blog', link: urls.blog, isExternal: false, country: 'All' },
    {
      name: 'Newsroom',
      link: urls.newsroomUS,
      isExternal: false,
      country: 'All',
    },
    {
      name: 'Help Center',
      link: urls.helpCenter,
      isExternal: false,
      country: 'All',
    },
    {
      name: 'Webinars',
      link: urls.webinarUS,
      isExternal: false,
      country: 'All',
    },
  ],
};
export const teacherMenuAU = {
  title: 'Teachers',
  items: [
    {
      name: 'Overview',
      link: urls.teachersAU,
      isExternal: false,
      country: 'AU',
    },
    {
      name: 'Curriculum',
      link: urls.curriculumAU,
      isExternal: false,
      country: 'AU',
    },
    {
      name: 'Teaching Remotely',
      link: urls.teachingRemotelyAU,
      isExternal: false,
      country: 'AU',
    },
  ],
};

export const teacherMenuUS = {
  title: 'Teachers',
  items: [
    {
      name: 'Curriculum',
      link: urls.curriculumUS,
      isExternal: false,
      country: 'US',
    },
    {
      name: 'Teaching Remotely',
      link: urls.teachingRemotelyUS,
      isExternal: false,
      country: 'US',
    },
  ],
};

export const whyMenuAU = {
  title: 'Why Mathspace?',
  items: [
    {
      subtitle: 'Our Products',
      subItems: [
        {
          name: 'Teaching and Learning',
          link: '',
          country: 'AU',
          isExternal: false,
        },
        {
          name: 'Continuous Assessment',
          link: '',
          country: 'AU',
          isExternal: false,
        },
        {
          name: 'Homeschooling',
          link: '',
          country: 'AU',
          isExternal: false,
        },
      ],
    },
    {
      subtitle: 'Research',
      subItems: [
        {
          name: 'Research behind Mathspace',
          link: '',
          country: 'AU',
          isExternal: false,
        },
        {
          name: 'Efficacy Studies',
          link: '',
          country: 'AU',
          isExternal: false,
        },
      ],
    },
    {
      subtitle: 'Testimonials',
      subItems: [
        {
          name: 'Customer Stories',
          link: '',
          country: 'AU',
          isExternal: false,
        },
        {
          name: 'Case Studies',
          link: '',
          country: 'AU',
          isExternal: false,
        },
      ],
    },
    {
      subtitle: 'Curriculum Alignment',
      subItems: [],
    },
  ],
};

export const resourceMenuAU = {
  title: 'Resources',
  items: [
    {
      subtitle: 'Our Products',
      subItems: [
        {
          name: 'Teaching and Learning',
          link: '',
          country: 'AU',
          isExternal: false,
        },
        {
          name: 'Continuous Assessment',
          link: '',
          country: 'AU',
          isExternal: false,
        },
      ],
    },
    {
      subtitle: 'Research',
      subItems: [
        {
          name: 'Research behind Mathspace',
          link: '',
          country: 'AU',
          isExternal: false,
        },
        {
          name: 'Efficacy Studies',
          link: '',
          country: 'AU',
          isExternal: false,
        },
      ],
    },
    {
      subtitle: 'Testimonials',
      subItems: [
        {
          name: 'Customer Stories',
          link: '',
          country: 'AU',
          isExternal: false,
        },
        {
          name: 'Case Studies',
          link: '',
          country: 'AU',
          isExternal: false,
        },
      ],
    },
    {
      subtitle: 'Curriculum Alignment',
      subItems: [],
    },
  ],
};

export const aboutUsMenuAU = {
  title: 'About Us',
  items: [
    {
      subtitle: 'Our Products',
      subItems: [
        {
          name: 'Teaching and Learning',
          link: '',
          country: 'AU',
          isExternal: false,
        },
        {
          name: 'Continuous Assessment',
          link: '',
          country: 'AU',
          isExternal: false,
        },
        {
          name: 'Homeschooling',
          link: '',
          country: 'AU',
          isExternal: false,
        },
      ],
    },
    {
      subtitle: 'Testimonials',
      subItems: [
        {
          name: 'Customer Stories',
          link: '',
          country: 'AU',
          isExternal: false,
        },
        {
          name: 'Case Studies',
          link: '',
          country: 'AU',
          isExternal: false,
        },
      ],
    },
    {
      subtitle: 'Curriculum Alignment',
      subItems: [],
    },
  ],
};

export const priceMenuAU = {
  title: 'Pricing',
  items: [
    {
      subtitle: 'Research',
      subItems: [
        {
          name: 'Research behind Mathspace',
          link: 'sss',
          country: 'AU',
          isExternal: false,
        },
        {
          name: 'Efficacy Studies',
          link: '',
          country: 'AU',
          isExternal: false,
        },
      ],
    },
    {
      subtitle: 'Curriculum Alignment',
      subItems: [],
    },
  ],
};

export const whyMenuUS = {
  title: 'Why Mathspace?',
  items: [
    {
      subtitle: 'Our Products',
      subItems: [
        {
          name: 'Teaching and Learning',
          link: '',
          country: 'AU',
          isExternal: false,
        },
        {
          name: 'Continuous Assessment',
          link: '',
          country: 'AU',
          isExternal: false,
        },
        {
          name: 'Homeschooling',
          link: '',
          country: 'AU',
          isExternal: false,
        },
      ],
    },
    {
      subtitle: 'Research',
      subItems: [
        {
          name: 'Research behind Mathspace',
          link: '',
          country: 'AU',
          isExternal: false,
        },
        {
          name: 'Efficacy Studies',
          link: '',
          country: 'AU',
          isExternal: false,
        },
      ],
    },
    {
      subtitle: 'Testimonials',
      subItems: [
        {
          name: 'Customer Stories',
          link: '',
          country: 'AU',
          isExternal: false,
        },
        {
          name: 'Case Studies',
          link: '',
          country: 'AU',
          isExternal: false,
        },
      ],
    },
    {
      subtitle: 'Curriculum Alignment',
      subItems: [],
    },
  ],
};

export const resourceMenuUS = {
  title: 'Resources',
  items: [
    {
      subtitle: 'Our Products',
      subItems: [
        {
          name: 'Teaching and Learning',
          link: '',
          country: 'AU',
          isExternal: false,
        },
        {
          name: 'Continuous Assessment',
          link: '',
          country: 'AU',
          isExternal: false,
        },
      ],
    },
    {
      subtitle: 'Research',
      subItems: [
        {
          name: 'Research behind Mathspace',
          link: '',
          country: 'AU',
          isExternal: false,
        },
        {
          name: 'Efficacy Studies',
          link: '',
          country: 'AU',
          isExternal: false,
        },
      ],
    },
    {
      subtitle: 'Testimonials',
      subItems: [
        {
          name: 'Customer Stories',
          link: '',
          country: 'AU',
          isExternal: false,
        },
        {
          name: 'Case Studies',
          link: '',
          country: 'AU',
          isExternal: false,
        },
      ],
    },
    {
      subtitle: 'Curriculum Alignment',
      subItems: [],
    },
  ],
};

export const aboutUsMenuUS = {
  title: 'About Us',
  items: [
    {
      subtitle: 'Our Products',
      subItems: [
        {
          name: 'Teaching and Learning',
          link: '',
          country: 'AU',
          isExternal: false,
        },
        {
          name: 'Continuous Assessment',
          link: '',
          country: 'AU',
          isExternal: false,
        },
        {
          name: 'Homeschooling',
          link: '',
          country: 'AU',
          isExternal: false,
        },
      ],
    },
    {
      subtitle: 'Testimonials',
      subItems: [
        {
          name: 'Customer Stories',
          link: '',
          country: 'AU',
          isExternal: false,
        },
        {
          name: 'Case Studies',
          link: '',
          country: 'AU',
          isExternal: false,
        },
      ],
    },
    {
      subtitle: 'Curriculum Alignment',
      subItems: [],
    },
  ],
};

export const priceMenuUS = {
  title: 'Pricing',
  items: [
    {
      subtitle: 'Research',
      subItems: [
        {
          name: 'Research behind Mathspace',
          link: 'sss',
          country: 'AU',
          isExternal: false,
        },
        {
          name: 'Efficacy Studies',
          link: '',
          country: 'AU',
          isExternal: false,
        },
      ],
    },
    {
      subtitle: 'Curriculum Alignment',
      subItems: [],
    },
  ],
};
