// @flow

// == React Types == \\

export type RefType<T> = { current: null | T };

// Website Types \\

export type CountryCodes = 'AU' | 'US';

export type CountryRoutes = {
  homepage: string,
  teachers?: string,
  curriculum: string,
  privacy: string,
};

// == Contentful Types \\

export type Curriculum = {
  code: CountryCodes,
  country: string,
  category: string,
  titleOfCurriculum: string,
  curriculumId: number,
  link: string,
  ctaText: string,
  buttonText: string,
  ctaLink: string,
};

export type Newsroom = {
  id: number,
  featured: boolean,
  title: string,
  description: string,
  type: 'article' | 'video' | 'audio' | 'download',
  link?: string,
  preview: string,
  country: CountryCodes,
  download?: string,
};

export type Transformative20 = {
  year: number,
  type: 'student' | 'teacher',
  name: string,
  school: string,
  description: string,
};

export type WebinarPreview = {
  id: number,
  duration: string,
  title: string,
  link: string,
  image: string,
  regions: Array<string>,
};

export type Banner = {
  title: string,
  colour: string,
  allowedCountries: Array<string>,
  active: boolean,
  desktopText: string,
  mobileText: Array<string>,
  ctaText: string,
  ctaLink: string,
  tracker: string,
};

export type HomepageContent = {
  country: string,
  hero: { main: string, body: string },
  difference: {
    title: string,
    subTitle: string,
    body: string,
    cards: Array<{ title: string, body: string }>,
  },
  teacher: {
    title: string,
    description: string,
    list: Array<{
      title: string,
      items: Array<{ text: string, icon: string }>,
    }>,
    testimony: {
      info: string,
      body: string,
      image: string,
    },
  },
  student: {
    title: string,
    description: string,
    list: Array<{
      title: string,
      items: Array<{ text: string, icon: string }>,
    }>,
    testimony: {
      info: string,
      body: string,
      image: string,
    },
  },
  footerTitle: string,
};

export type CustomerStory = {
  country: 'AU' | 'US',
  organisation: string,
  title: string,
  slug: string,
  featured: boolean,
  logo: string,
  testimony: string,
  quotee: string,
  quoteeRole: string,
  coverImage: string,
  videoLink: string,
  videoCover: string,
  keyPoints: Array<string>,
  snapshot: Array<{ type: 'text' | 'image', content: string }>,
  article: Array<{ type: 'text' | 'image', content: string }>,
};

export type RemoteTeachingResource = {
  id: number,
  country: 'AU' | 'US',
  title: string,
  image: string,
  action: string,
  link?: string,
  download?: string,
};

export type ClassCode = {
  country: 'AU' | 'US',
  region: string,
  courseName: string,
  classCode: string,
};
