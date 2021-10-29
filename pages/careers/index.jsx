// @flow

import React, { Fragment } from 'react';
import fetch from 'isomorphic-unfetch';

import Page from 'components/Page';
import SimpleHeader from 'components/SimpleHeader';
import Footer from 'panels/Home/Footer';
import Divider from 'components/Divider';
import CareerHero from 'panels/Careers/CareerHero';
import CareerPhotoCollage from 'panels/Careers/CareerPhotoCollage';
import CareerTestimonyPanel from 'panels/Careers/CareerTestimonyPanel';
import MathspaceCommunityPanel from 'panels/Careers/MathspaceCommunityPanel';
import PhotoPanel from 'panels/Careers/PhotoPanel';
import WhyWorkHerePanel from 'panels/Careers/WhyWorkHerePanel';
import JobsPanel from 'panels/Careers/JobPanel';

import { urlBuilders, endpoints } from 'utils/urls';
import { breakPoints, colors } from 'utils/theme';

type Props = {| jobs: Array<Object> |};
type State = {||};

class Careers extends React.Component<Props, State> {
  scrollMarker: any;
  handlePanelTransitionClick: () => {};

  static async getInitialProps() {
    let jobList;
    try {
      const res = await fetch(endpoints.workableJobs);
      const data = await res.json();
      jobList = data.jobs;
    } catch (e) {
      jobList = [];
    }
    return { jobs: jobList };
  }

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
        <SimpleHeader />
        <Page>
          <div className="heroPanelWrapper">
            <CareerHero
              animate
              imageName="careers/mathspace-career-hero-2.svg"
              title="Grow your career with Mathspace"
              description="Create learning experiences that support, innovate, and inspire"
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
          <div className="careersPanelWrapper">
            <div ref={this.scrollMarker} className="scrollMarker" />
            <JobsPanel animate jobs={this.props.jobs} />
          </div>
          <PhotoPanel animate imageName="careers/careers-at-mathspace.jpg" />
          <WhyWorkHerePanel
            description="At Mathspace you get the opportunity to work towards something truly
            special. Whether you're a developer or a designer, a teacher or a
            mathematician, our team is constantly developing and improving upon a
            program that helps to shape young minds, that helps them learn, and
            helps them grow."
          />
          <Divider />
          <CareerTestimonyPanel
            animate
            testimony1={{
              imageName: 'careers/andie-profile.jpg',
              name: 'Andie Hoyt',
              position: 'US Curriculum Lead',
              testimony:
                "I feel so connected to the people I work with across the globe. Sometimes I forget we haven't met in person! I love that i can geek out over math every day, and I'm continuously encouraged to develop my strengths. It's rare to find people you can collaborate with on that kind of level",
            }}
            testimony2={{
              imageName: 'careers/pantea-profile.jpg',
              name: 'Pantea Jouliany',
              position: 'Head of Content',
              testimony:
                'I love being in the company of people who are giving their very best in every in every moment, and who want their work to have meaning and significance.',
            }}
            testimony3={{
              imageName: 'careers/craig-profile.jpg',
              name: 'Craig Blake',
              position: 'School Liaison',
              testimony:
                'After teaching in schools for 20 years and being one of the newest staff members at Mathspace, I have been completely blown away by the dedication, passion, level of knowledge, friendliness and amazing sense of humour each and every team member brings to their role each and every day',
            }}
          />
          <CareerPhotoCollage
            animate
            box1={{
              title: 'Create.',
              description:
                "We're creating a truly innovative maths learning experience that supports students at every step of their journey.",
            }}
            box2={{
              title: 'Learn.',
              description:
                "Learn. We embrace a culture of learning. We don't only help others to learn, but we're also always learning ourselves",
            }}
            box3={{
              title: 'Grow.',
              description:
                'As a team we support each other in discovering our potential to contribute to the world of learning, and every day we push ourselves to see what else we’re able to achieve.',
            }}
          />
          <MathspaceCommunityPanel animate />
          <Footer country="AU" />
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
            z-index: 2;
            cursor: pointer;
          }
          .downIcon {
            width: 40px;
          }
          .careersPanelWrapper {
            position: relative;
            z-index: 1;
          }
          .scrollMarker {
            position: absolute;
            top: -40px;
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

export default Careers;
