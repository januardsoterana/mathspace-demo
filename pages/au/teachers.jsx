// @flow

import React, { Fragment } from 'react';

import Page from 'components/Page';
import Header from 'components/Shared/Header';
import Lottie from 'components/Lottie';
import Footer from 'panels/Home/Footer';
import InfoStep from 'components/InfoStep';
import Divider from 'components/Divider';
import Intercom from 'components/Intercom';
import FeaturesPanel from 'panels/Homepages/FeaturesPanel';
import AwardsPanel from 'panels/Homepages/AwardsPanel';
import HeroPanel from 'panels/Homepages/HeroPanel';
import InfoPanel from 'panels/Homepages/InfoPanel';
import SegmentedPanel from 'panels/Homepages/SegmentedPanel';
import TestimonyPanel from 'panels/Homepages/TestimonyPanel';
import EddieWooPanel from 'panels/Homepages/EddieWoo';
import VideoPanel from 'panels/Homepages/VideoPanel';
import { urlBuilders } from 'utils/urls';
import { breakPoints, colors, panelGapMargin } from 'utils/theme';
import { type Banner } from 'utils/types';

const LottieImage = () => (
  <Fragment>
    <div className="lottieContainer">
      <Lottie
        path={urlBuilders.imageUrl('legacyHomepage/mathspace_school.json')}
        fallbackImagePath={urlBuilders.imageUrl(
          'legacyHomepage/mathspace_school.svg',
        )}
      />
    </div>
    <style jsx>{`
      .lottieContainer {
        padding: 0;
      }
      @media (min-width: ${breakPoints.medium}px) {
        .lottieContainer {
          padding: 40px 40px 0;
          display: flex;
          flex: 1;
        }
      }
    `}</style>
  </Fragment>
);

const WhyMathspacePanel = () => (
  <SegmentedPanel
    title="How does Mathspace work?"
    segmentList={[
      {
        name: '1',
        content: [
          <InfoStep
            key="Adaptive learning technology"
            animate
            imageName="legacyHomepage/student_teacher-practice_personalise-learning-AU-US.jpg"
            title="Adaptive learning technology"
            textContent="Our adaptive learning technology replicates the benefits of a one-to-one lesson by analysing student performance in real-time. We adapt questions and content to the individual’s level and pace."
          />,
          <InfoStep
            key="Interactive digital textbook"
            animate
            reversed
            imageName="legacyHomepage/interactive-digital-textbook-AU.jpg"
            title="Interactive digital textbook"
            textContent="Our digital textbook covers students from Years 3 to 12. With all content aligned to your curriculum, students can immerse themselves in any topic, watch video lessons, and learn through interactivity."
          />,
          <InfoStep
            key="Real-time student data"
            animate
            imageName="legacyHomepage/teacher-data-AU-US.jpg"
            title="Real-time student data"
            textContent="Track overall class progress as well as individual student performance. Easily identify knowledge gaps and use insights to improve the focus of your classroom lessons."
          />,
          <InfoStep
            key="Live chat support"
            animate
            reversed
            imageName="legacyHomepage/teacher-live-support-AU.jpg"
            title="Live chat support"
            textContent="Speak to our in-house teachers or technical team members anytime with Live Chat from your dashboard."
          />,
          <InfoStep
            key="Devices"
            animate
            imageName="legacyHomepage/mathspace-devices-1.gif"
            title="Works on many devices"
            textContent="Including Chromebooks, iPads, laptops and more."
          />,
        ],
      },
    ]}
  />
);

type Props = {| banners: Array<Banner> |};
type State = {||};

class SchoolAU extends React.Component<Props, State> {
  scrollMarker: any;
  handlePanelTransitionClick: () => {};

  constructor(props: Props) {
    super(props);
    this.scrollMarker = React.createRef();
    this.handlePanelTransitionClick = this.handlePanelTransitionClick.bind(
      this,
    );
  }

  handlePanelTransitionClick() {
    this.scrollMarker.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    this.scrollMarker.current.scrollTop += 64;
  }

  render() {
    return (
      <Fragment>
        <Header country="AU" bannerData={this.props.banners} />
        <Page
          title="Teachers :: Mathspace"
          description="Try Mathspace at your school for free.
        Improve student results. Curriculum-aligned content for primary/elementary school, secondary
        school and higher education across Australia, New Zealand, the United States and Hong Kong."
        >
          <div className="heroPanelWrapper">
            <HeroPanel
              animate
              imageComponent={LottieImage}
              ctaButton="demo"
              headerText=""
              mainText="Engage your students with step-by-step adaptive learning"
              subText=""
              country="AU"
            />
            <div className="transitionButtonWrapper">
              {/* eslint-disable-next-line */}
              <img
                className="downIcon"
                src={urlBuilders.imageUrl('common/down_arrow.svg')}
                alt=""
                onClick={this.handlePanelTransitionClick}
              />
            </div>
          </div>
          <div className="infoPanelWrapper">
            <div ref={this.scrollMarker} className="scrollMarker" />
            <InfoPanel
              animate
              backgroundColor="astronaut"
              headerText="You care about the steps, not just the final answer. We do too!"
              contentText="We want to put the focus back on learning for engagement, meaning and personal growth. That’s why we built Mathspace to support students every step of their working, with feedback, hints and suggestions. This helps them to develop a deeper understanding of important mathematical concepts, and build strong growth mindsets. With Mathspace you can easily see how individual students are tracking and can pinpoint areas of struggle."
            />
          </div>
          <div className="videoPanelWrapper">
            <VideoPanel
              animate
              video1={{
                id: 'qy3yxio7s4',
                title: 'Why is our technology unique',
                preview: 'legacyHomepage/Why-is-our-technology-unique_.jpg',
              }}
              video2={{
                id: '5of1k9citn',
                title: 'How do we create our maths content',
                preview:
                  'legacyHomepage/How-do-we-create-our-maths-content_.jpg',
              }}
            />
          </div>
          <WhyMathspacePanel />
          <Divider />
          <FeaturesPanel animate country="AU" />
          <Divider />
          <AwardsPanel animate />
          <EddieWooPanel animate />
          <TestimonyPanel
            animate
            testimony="&#34;Mathspace has become an invaluable resource for my school. My
            students enjoy learning through Mathspace because it provides
            immediate feedback and empowers them to have a greater role in
            improving their understanding.&#34;"
            author="Marcel van Otterdyk"
            school="Strathmore Secondary College"
            authorImage="legacyHomepage/strathmore_badge.png"
            backgroundImage="legacyHomepage/US_teacher_quote.jpg"
          />
          <Footer country="AU" backgroundColor={colors.cloudBurst} />
          <Intercom />
        </Page>
        <style jsx>{`
          .heroPanelWrapper {
            position: relative;
          }
          .transitionButtonWrapper {
            position: absolute;
            bottom: -20px;
            right: 16px;
            display: flex;
            align-items: flex-end;
            z-index: 1;
            cursor: pointer;
          }
          .downIcon {
            width: 40px;
          }
          .infoPanelWrapper {
            position: relative;
          }
          .scrollMarker {
            position: absolute;
            top: -40px;
          }
          .videoPanelWrapper {
            background-color: ${colors.astronaut};
            margin-right: ${panelGapMargin.default}px;
          }

          @media (min-width: ${breakPoints.medium}px) {
            .transitionButtonWrapper {
              bottom: -30px;
            }
            .downIcon {
              width: 60px;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

SchoolAU.getInitialProps = async ({ req }): Promise<Props> => {
  const isServerSide = !!req;
  let banners;
  if (isServerSide) {
    const bannerData = await import('public/website/banner.json');
    banners = bannerData.default;
  } else {
    const bannerData = await fetch('/website/banner.json');
    banners = await bannerData.json();
  }
  return { banners };
};

export default SchoolAU;
