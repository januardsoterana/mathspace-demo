// @flow

import React, { type Node, Fragment } from 'react';
import Router from 'next/router';

import Page from 'components/Page';
import SimpleHeader from 'components/SimpleHeader';
import Anchor from 'components/Anchor';
import Hero from 'panels/NewWorkbook/Hero';
import WhatsNew from 'panels/NewWorkbook/WhatsNew';
import ForStudents from 'panels/NewWorkbook/ForStudents';
import Action from 'panels/NewWorkbook/Action';
import Footer from 'panels/NewWorkbook/Footer';

import { urls } from 'utils/urls';
import sendCTAClickEvent from 'utils/analytics';
import { fontWeights, colors } from 'utils/theme';
import { type RefType } from 'utils/types';

const HEADER_LOGIN = 'header-login';

type Props = {||};
type State = {||};

class NewWorkbook extends React.Component<Props, State> {
  whatsNewMarker: RefType<HTMLDivElement> = React.createRef();
  forStudentsMarker: RefType<HTMLDivElement> = React.createRef();

  handlePanelTransitionClick = (markerName: string) => {
    if (markerName === 'whatsNew' && this.whatsNewMarker.current) {
      this.whatsNewMarker.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    if (markerName === 'forStudents' && this.forStudentsMarker.current) {
      this.forStudentsMarker.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  render() {
    return (
      <Fragment>
        <SimpleHeader
          background={colors.ebony}
          cta={(): Node => (
            <Anchor
              color="lochmara"
              href={urls.login}
              onClick={event => {
                event.preventDefault();
                sendCTAClickEvent(HEADER_LOGIN).then(() => {
                  Router.push(urls.login);
                });
              }}
            >
              <span className="loginAction">Login</span>
            </Anchor>
          )}
        />
        <Page>
          <Hero
            newAppOnclick={() => this.handlePanelTransitionClick('forStudents')}
            whatsNewOnclick={() => this.handlePanelTransitionClick('whatsNew')}
          />
          <div className="whatsNewWrapper">
            <div className="scrollMarker" ref={this.whatsNewMarker} />
            <WhatsNew />
          </div>
          <div className="forStudentsWrapper">
            <div className="scrollMarker" ref={this.forStudentsMarker} />
            <ForStudents />
          </div>
          <div className="divider" />
          <Action />
          <div className="divider" />
          <Footer />
        </Page>
        <style jsx>{`
          .divider {
            border-bottom: 1px solid #d8d8d8;
            margin: 50px 0 20px;
          }
          .loginAction {
            font-weight: ${fontWeights.semibold};
          }
          .scrollMarker {
            position: absolute;
            top: -64px;
          }
          .whatsNewWrapper {
            position: relative;
          }
          .forStudentsWrapper {
            position: relative;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default NewWorkbook;
