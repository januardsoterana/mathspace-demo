// @flow

import React, { Fragment } from 'react';

import Page from 'components/Page';
import SimpleHeader from 'components/SimpleHeader';
import Footer from 'panels/Home/Footer';
import CareerHero from 'panels/Careers/CareerHero';
import CareerPhotoCollage from 'panels/Careers/CareerPhotoCollage';
import CareerTestimonyPanel from 'panels/Careers/CareerTestimonyPanel';
import MathspaceCommunityPanel from 'panels/Careers/MathspaceCommunityPanel';
import PhotoPanel from 'panels/Careers/PhotoPanel';
import WhyWorkHerePanel from 'panels/Careers/WhyWorkHerePanel';
import TechnologyStack from 'panels/Careers/TechnologyStack';
import EngineeringJobPanel from 'panels/Careers/EngineeringJobPanel';
import { breakPoints, colors } from 'utils/theme';
import { urlBuilders, endpoints } from 'utils/urls';

type Props = {| jobs: Array<Object> |};
type State = {||};

class EngineeringCareers extends React.Component<Props, State> {
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
          <div className="heroWrapper">
            <CareerHero
              animate
              imageName="careers/mathspace-career-engineer.svg"
              title="Help us build the future of learning"
              description="Grow your engineering career with Mathspace"
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
          <div className="jobPanelWrapper">
            <div ref={this.scrollMarker} className="scrollMarker" />
            <EngineeringJobPanel animate jobs={this.props.jobs} />
          </div>
          <PhotoPanel animate imageName="careers/engineering-photo-cover.jpg" />
          <WhyWorkHerePanel description="At Mathspace you get the opportunity to work towards something truly special. Whether you're a developer or a designer our team is constantly developing and improving upon a program that helps to shape young minds, that helps them learn, and helps them grow." />
          <TechnologyStack animate />
          <CareerTestimonyPanel
            animate
            testimony1={{
              imageName: 'careers/cameron-profile.png',
              name: 'Cameron Chang',
              position: 'Software Developer',
              testimony:
                "Since joining Mathspace on the frontend team I've had the opportunity to work with some cool technology and learn from a team of highly experienced engineers. I feel lucky to be part of such a passionate team and proud to be building a program that has a real impact on the lives of students and teachers.",
            }}
            testimony2={{
              imageName: 'careers/steph-profile.png',
              name: 'Stephanie Lee',
              position: 'Product Manager',
              testimony:
                "We're encouraged to bring big ideas to the table...and then we're given every opportunity to make those ideas a reality. There's nothing better than that. The people here are some of the most passionate, talented, and committed people that I've ever had the chance to work with!",
            }}
            testimony3={{
              imageName: 'careers/mat-profile.png',
              name: 'Mathew Chong',
              position: 'Software Developer',
              testimony:
                "Education is one of my core values and working at Mathspace gives me the opportunity to have an impact in this area. I'm able to share ideas with an inspired, supportive and like-minded team. We also have a great culture. One of the things I particularly like are the weekly team lunches (which are partially coordinated by a bot!)",
            }}
          />
          <CareerPhotoCollage
            animate
            box1={{
              title: 'Innovate.',
              description:
                'Bring your ideas to the table and build the architecture that helps young minds grow. Help us to build interactive content and algorithms that diagnose and adapt to student performance.',
            }}
            box2={{
              title: 'Learn.',
              description:
                "We embrace a culture of learning. If there's something new you need or want to learn, we'll make it happen.",
            }}
            box3={{
              title: 'Grow.',
              description:
                "We want you to grow with us, so we always encourage each other to push ourselves further. If it's new, if it's untested, if it has the potential to contribute to maths education worldwide, then share your ideas at our weekly Guild meetings and  we'll back you to try it out.",
            }}
          />
          <MathspaceCommunityPanel animate />
          <Footer country="AU" />
        </Page>
        <style jsx>{`
          .heroWrapper {
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
          .jobPanelWrapper {
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

export default EngineeringCareers;
