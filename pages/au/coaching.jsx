// @flow

import React, { Fragment } from 'react';

import Page from 'components/Page';

import Hero from 'panels/Coaching/Hero';
import HowItWorks from 'panels/Coaching/HowItWorks';
import Pricing from 'panels/Coaching/Pricing';
import MeetTheTeam from 'panels/Coaching/MeetTheTeam';
import Footer from 'panels/Coaching/Footer';

import { breakPoints, colors } from 'utils/theme';
import { urlBuilders } from 'utils/urls';

type Props = {||};
type State = {|
  showModal: boolean,
|};

class Coaching extends React.Component<Props, State> {
  howItWorksMarker: any;

  constructor(props: Props) {
    super(props);
    this.state = { showModal: false };
    this.howItWorksMarker = React.createRef();
    this.handlePanelTransitionClick.bind(this);
  }

  handlePanelTransitionClick(markerName: string) {
    switch (markerName) {
      case 'howItWorksMarker':
        this.howItWorksMarker.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <Fragment>
        <div className="background">
          <Page>
            <div className="heroWrapper">
              <Hero />
              <div className="transitionButtonWrapper">
                {/* eslint-disable-next-line */}
                <img
                  className="downIcon"
                  src={urlBuilders.imageUrl('common/down_arrow.svg')}
                  alt=""
                  onClick={() =>
                    this.handlePanelTransitionClick('howItWorksMarker')
                  }
                />
              </div>
            </div>
            <div ref={this.howItWorksMarker} className="scrollMarker" />
            <HowItWorks />
            <Pricing />
            <MeetTheTeam
              showModal={this.state.showModal}
              onOpen={() =>
                this.setState(state => ({ ...state, showModal: true }))
              }
              onClose={() =>
                this.setState(state => ({ ...state, showModal: false }))
              }
            />
            <Footer />
          </Page>
        </div>
        <style jsx>{`
          .background {
            background-color: ${colors.bayOfMany};
          }
          .heroWrapper {
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
          :global(.background) > :global(.pageWrapper) {
            padding-top: 56px;
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

export default Coaching;
