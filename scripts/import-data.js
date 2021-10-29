// @flow

import { writeFileSync, existsSync, mkdirSync } from 'fs';
import path from 'path';
import { createClient } from 'contentful';

require('dotenv').config({ path: '.env' });

const SPACE = process.env.CONTENTFUL_SPACE_ID;
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT;
const RESULT_DIR = path.join(__dirname, '..', 'public', 'website');

const client = createClient({
  space: SPACE,
  accessToken: TOKEN,
  environment: ENVIRONMENT,
});

const writeFiles = (data, fileName) => {
  if (!existsSync(RESULT_DIR)) mkdirSync(RESULT_DIR);
  writeFileSync(
    path.join(RESULT_DIR, `${fileName}.json`),
    JSON.stringify(data),
  );
  console.log(`> ${fileName}.json has been saved`);
};

const formatArticle = article =>
  article.content.map(paragraph => {
    let content;
    switch (paragraph.nodeType) {
      case 'embedded-asset-block':
        content = paragraph.data.target.fields.file.url;
        break;
      case 'blockquote':
        content = paragraph.content.map(item => ({
          type: item.nodeType,
          content: item.content.map(sub => sub.value),
        }));
        break;
      case 'paragraph':
        content = paragraph.content.map(item => ({
          type: item.nodeType,
          mark: item.marks,
          content: item.value,
        }));
        break;
      case 'unordered-list':
        content = paragraph.content.map(listItem => ({
          type: listItem.nodeType,
          content: listItem.content.map(itemContent => ({
            type: itemContent.nodeType,
            content: itemContent.content.map(raw => raw.value),
          })),
        }));
        break;
      default:
        // heading-x
        content = paragraph.content.map(item => ({
          type: item.nodeType,
          content: item.value,
        }));
    }
    return {
      type: paragraph.nodeType,
      content,
    };
  });

const parseNewscardData = async () => {
  const data = await client
    .getEntries({ content_type: 'newsCard' })
    .then(entries => client.parseEntries(entries))
    .catch(e => console.log('News Card Error: ', e));
  const parsedNewscards = data.items
    .map(item => {
      const card = item.fields;
      return {
        ...card,
        download: card.download ? card.download.fields.file.url : '',
        preview: card.preview.fields.file.url,
      };
    })
    .sort((a, b) => a.id - b.id);
  writeFiles(parsedNewscards, 'newsroom');
};

const parseCurriculumData = async () => {
  const data = await client
    .getEntries({ content_type: 'curriculum' })
    .then(entries => client.parseEntries(entries))
    .catch(e => console.log('Curriculum Error: ', e));
  const parsedCurriculum = data.items.map(item => ({ ...item.fields }));
  writeFiles(parsedCurriculum, 'curriculum');
};

const parseWebinarPreviewData = async () => {
  const data = await client
    .getEntries({ content_type: 'webinarPreview' })
    .then(entries => client.parseEntries(entries))
    .catch(e => console.log('Webinar Preview Error: ', e));
  const parsedWebinarPreview = data.items
    .map(item => ({
      ...item.fields,
      image: item.fields.image.fields.file.url,
    }))
    .sort((a, b) => a.id - b.id);
  writeFiles(parsedWebinarPreview, 'webinarPreview');
};

const parseBannerData = async () => {
  const data = await client
    .getEntries({ content_type: 'banner' })
    .then(entries => client.parseEntries(entries))
    .catch(e => console.log('Banner Error: ', e));
  const parsedBannerData = data.items
    .filter(item => item.fields.active)
    .map(item => ({
      ...item.fields,
    }));
  writeFiles(parsedBannerData, 'banner');
};

const parseT20Data = async () => {
  const data = await client
    .getEntries({ content_type: 'transformative20Winner' })
    .then(entries => client.parseEntries(entries))
    .catch(e => console.log('T20 Winner Error: ', e));
  const parsedT20Data = data.items.map(item => ({
    ...item.fields,
    image: item.fields.image.fields.file.url,
  }));
  writeFiles(parsedT20Data, 'transformative20');
};

const parseHomepageContentData = async () => {
  const raw = await client
    .getEntries({ content_type: 'homepageContent', include: 5 })
    .then(entries => client.parseEntries(entries))
    .catch(e => console.log('Homepage Content Error: ', e));
  const parsedHomepageData = raw.items.map(data => {
    const item = data.fields;
    return {
      country: item.country,
      hero: {
        main: item.heroMain,
        body: item.heroBody,
      },
      difference: {
        title: item.differenceTitle,
        subTitle: item.differenceSubTitle,
        body: item.differenceBody,
        cards: item.differenceCards.map(card => ({
          title: card.fields.title,
          body: card.fields.body,
        })),
      },
      teacher: {
        title: item.teacherTitle,
        description: item.teacherDescription,
        list: item.teacherList.map(group => ({
          title: group.fields.title,
          items: group.fields.items.map(featureItem => ({
            text: featureItem.fields.text,
            icon: featureItem.fields.icon.fields.file.url,
          })),
        })),
        testimony: {
          info: item.teacherTestimony.fields.info,
          body: item.teacherTestimony.fields.body,
          image: item.teacherTestimony.fields.image.fields.file.url,
        },
      },
      student: {
        title: item.studentTitle,
        description: item.studentDescription,
        list: item.studentList.map(group => ({
          title: group.fields.title,
          items: group.fields.items.map(featureItem => ({
            text: featureItem.fields.text,
            icon: featureItem.fields.icon.fields.file.url,
          })),
        })),
        testimony: {
          info: item.studentTestimony.fields.info,
          body: item.studentTestimony.fields.body,
          image: item.studentTestimony.fields.image.fields.file.url,
        },
      },
      footerTitle: item.footerTitle,
    };
  });
  writeFiles(parsedHomepageData, 'homepageContent');
};

const parseCustomerStoriesData = async () => {
  const data = await client
    .getEntries({ content_type: 'customerStory' })
    .then(entries => client.parseEntries(entries))
    .catch(e => console.log('Customer Story Error: ', e));
  const parsedCustomerStoties = data.items.map(item => ({
    ...item.fields,
    coverImage: item.fields.coverImage.fields.file.url,
    videoLink: item.fields.videoLink ? item.fields.videoLink : '',
    videoCover: item.fields.videoCover
      ? item.fields.videoCover.fields.file.url
      : '',
    article: formatArticle(item.fields.article),
    snapshot: formatArticle(item.fields.snapshot),
    logo: item.fields.logo.fields.file.url,
  }));
  writeFiles(parsedCustomerStoties, 'customerStories');
};

const parseRemoteTeachingResourceData = async () => {
  const data = await client
    .getEntries({ content_type: 'remoteTeachingResource' })
    .then(entries => client.parseEntries(entries))
    .catch(e => console.log('Remote Teaching Resource Error: ', e));
  const remoteTeachingResource = data.items.map(item => ({
    ...item.fields,
    image: item.fields.image ? item.fields.image.fields.file.url : '',
    download: item.fields.download ? item.fields.download.fields.file.url : '',
  }));
  writeFiles(remoteTeachingResource, 'remoteTeachingResource');
};

const getContent = () => {
  parseNewscardData();
  parseCurriculumData();
  parseWebinarPreviewData();
  parseBannerData();
  parseT20Data();
  parseHomepageContentData();
  parseCustomerStoriesData();
  parseRemoteTeachingResourceData();
};

getContent();
