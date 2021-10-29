// @flow

import React, { Fragment } from 'react';

import Page from 'components/Page';
import Header from 'components/Shared/Header';
import Footer from 'panels/Home/Footer';
import Hero from 'panels/Newsroom/Hero';
import NewsPanel from 'panels/Newsroom/NewsPanel';
import { breakPoints, colors } from 'utils/theme';
import { getNonFeaturedNews, getFeaturedNews } from 'utils/news';
import { urlBuilders } from 'utils/urls';
import { type Newsroom, type Banner } from 'utils/types';

type Props = {|
  newsCards: Array<Newsroom>,
  banners: Array<Banner>,
|};
type State = {||};

class NewsroomPageUS extends React.Component<Props, State> {
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
    const featuredCard = getFeaturedNews(this.props.newsCards, 'US')[0];
    const newsCardList = getNonFeaturedNews(this.props.newsCards, 'US');
    return (
      <Fragment>
        <Header country="US" bannerData={this.props.banners} />
        <Page title="Newsroom :: Mathspace">
          <div className="heroWrapper">
            <Hero />
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
          <div className="newPanelWrapper">
            <div ref={this.scrollMarker} className="scrollMarker" />
            <NewsPanel
              featuredCard={featuredCard}
              newsCardList={newsCardList}
            />
          </div>
          <Footer backgroundColor={colors.purpleHeart} country="US" />
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
            z-index: 1;
            cursor: pointer;
          }
          .downIcon {
            width: 40px;
          }
          .newPanelWrapper {
            position: relative;
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

NewsroomPageUS.getInitialProps = async ({ req }): Promise<Props> => {
  const isServerSide = !!req;
  let newsCards;
  let banners;
  if (isServerSide) {
    const data = await import('public/website/newsroom.json');
    const bannerData = await import('public/website/banner.json');
    banners = bannerData.default;
    newsCards = data.default;
  } else {
    const data = await fetch('/website/newsroom.json');
    const bannerData = await fetch('/website/banner.json');
    banners = await bannerData.json();
    newsCards = await data.json();
  }
  return { newsCards, banners };
};

export default NewsroomPageUS;
