// @flow

import React, { Fragment } from 'react';

import Page from 'components/Page';
import SimpleHeader from 'components/SimpleHeader';
import Button from 'components/Button';
import Anchor from 'components/Anchor';
import Divider from 'components/Divider';
import CalendlyModal from 'components/CalendlyModal';

import {
  breakPoints,
  colors,
  desktopFontSizes,
  fontWeights,
  lineHeights,
  mobileFontSizes,
} from 'utils/theme';
import { urlBuilders } from 'utils/urls';
import sendCTAClickEvent from 'utils/analytics';

type Props = {};
type State = { showModal: boolean };

const QUICK_CHAT = 'quick-chat';

class DigitalEdge extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { showModal: false };
  }

  render() {
    return (
      <Fragment>
        <SimpleHeader />
        <Page title="DigitalEdge :: Mathspace">
          <div className="container">
            <div className="title">
              We are proud to announce Mathspace is an approved vendor with
              DigitalEdge.
            </div>
            <div className="titleDivider" />
            <div className="digitalEdgeLogoContainer">
              <img
                className="digitalEdgeLogo"
                src={urlBuilders.imageUrl('digitalEdge/digital-edge-logo.jpg')}
                alt="DigitalEdge"
              />
            </div>
            <div className="teacherDemoCTA">
              <Button
                size="large"
                isFilled
                isBlock
                onClick={() => {
                  sendCTAClickEvent(QUICK_CHAT);
                  this.setState(state => ({
                    ...state,
                    showModal: true,
                  }));
                }}
              >
                Schedule a teacher demo
              </Button>
            </div>
            <div>
              A little about Mathspace: this short video shows you what makes
              Mathspace so unique - it is the world&#39;s first adaptive math
              program that allows students to show every line of their math
              work, writing with their finger or stylus on their tablet or
              smartphone, and get immediate feedback at each step:
            </div>
            <Divider />
            <Anchor href="https://help.mathspace.co/faq-and-troubleshooting/what-makes-mathspace-so-unique">
              <div className="differentMathspaceContainer">
                <img
                  className="differentMathspaceImage"
                  src={urlBuilders.imageUrl('digitalEdge/so_different.png')}
                  alt=""
                />
              </div>
            </Anchor>
            <div className="priceListCTA">
              <Button
                href="https://drive.google.com/file/d/0BzZJHPiJXEpaYU9ad2ctdFplc09IX0l0RFFZNEZPUktRMXZB/view"
                size="large"
                isFilled
                isBlock
              >
                Click here for the DigitalEdge product price list
              </Button>
            </div>
            <div className="orderInstructions">
              <div className="orderHeader">Ordering Instructions</div>
              <blockquote className="quote">
                <div>Company Name: Mathspace</div>
                <div>Key Contact Person: Daniel Tu-Hoa</div>
                <div>
                  Email Address:{' '}
                  <Anchor href="accounts@mathspace.co">
                    accounts@mathspace.co
                  </Anchor>
                </div>
              </blockquote>
            </div>
            <div className="howToOrder">
              <div className="howToOrderTitle">
                How to order products from Mathspace USA
              </div>
              <div>
                To assist eligible purchasers in complying with their purchasing
                laws, all purchase orders must reference the{' '}
                <span className="bolding">
                  DigitalEdge Contract Number (#ESD112-DE-18A)
                </span>
                .
              </div>
              <ol type="1">
                <li className="listItems">
                  <div>
                    Purchasers will request a quote for products by clicking{' '}
                    <Anchor href="https://docs.google.com/a/mathspace.com.au/forms/d/e/1FAIpQLScsMxjpGzLRaXdPEsv1LAhn1_DgRqn5yv3SVZPcGrdChSDN7w/viewform?c=0&w=1">
                      here
                    </Anchor>
                    .
                  </div>
                  <div>
                    NOTE: Include &#34;DigitalEdge&#34; in the comments section.
                  </div>
                </li>
                <li className="listItems">
                  Awarded vendors will provide a quote to purchaser.
                </li>
                <li className="listItems">
                  <div className="paragraph">
                    Purchaser shall submit a purchase order or procurement card
                    number to the awarded vendor. All purchase documents must
                    contain this language:
                  </div>
                  <blockquote className="quote">
                    <div>Contract number for audit verification:</div>
                    <div>DigitalEdge #ESD112-DE-18A</div>
                  </blockquote>
                </li>
                <li className="listItems">
                  The awarded vendor shall fill the order and ship the products
                  directly to the purchaser at the &#34;ship to&#34; address.
                </li>
              </ol>
              <div className="paragraph">
                <span className="bolding">
                  Mathspace Shipping and Delivery:
                </span>{' '}
                no shipping required, completely digital product. Contact email
                must be provided.
              </div>
              <div className="paragraph">
                <span className="bolding">
                  Mathspace Return and Replacement Policy:
                </span>{' '}
                Product is purchased on annual subscription per student at a
                minimum of 10 student licenses per order. Licenses are
                non-transferable and non-refundable.
              </div>
            </div>
            {this.state.showModal && (
              <CalendlyModal
                bookingType="demo"
                country="International"
                onClose={() =>
                  this.setState(state => ({ ...state, showModal: false }))
                }
              />
            )}
            <style jsx>{`
              .container {
                max-width: 800px;
                margin: 0 auto;
                padding: 0 24px 50px;
              }
              .title {
                color: ${colors.cloudBurst};
                font-size: ${mobileFontSizes.h3}px;
                line-height: ${lineHeights.h3};
                text-align: center;
                padding: 24px 0;
                max-width: 630px;
                margin: 0 auto;
              }
              .titleDivider {
                max-width: 80px;
                width: 100%;
                border: 1px solid ${colors.cloudBurst};
                margin: 0 auto;
              }
              .digitalEdgeLogoContainer {
                margin: 24px 0;
                text-align: center;
              }
              .digitalEdgeLogo {
                width: 100%;
                max-width: 400px;
              }
              .teacherDemoCTA {
                text-align: center;
                margin: 24px auto;
                max-width: 300px;
              }
              .differentMathspaceContainer {
                line-height: 0;
                text-align: center;
                margin: 50px 0;
              }
              .differentMathspaceImage {
                max-width: 500px;
                width: 100%;
              }
              .priceListCTA {
                text-align: center;
                margin: 50px auto;
                max-width: 480px;
              }
              .quote {
                border-left: 3px solid ${colors.iron};
                padding: 0 0 0 16px;
                margin: 0 0 24px;
                font-size: 17px;
                font-weight: ${fontWeights.light};
                color: ${colors.cloudBurst};
              }
              .orderHeader {
                color: ${colors.cloudBurst};
                font-size: ${mobileFontSizes.h4}px;
                margin-bottom: 12px;
              }
              .howToOrderTitle {
                color: ${colors.cloudBurst};
                font-size: ${mobileFontSizes.h4}px;
                margin-bottom: 12px;
              }
              .bolding {
                color: ${colors.cloudBurst};
                font-weight: ${fontWeights.semibold};
              }
              .listItems {
                margin-bottom: 16px;
              }
              .paragraph {
                margin-bottom: 16px;
              }

              @media (min-width: ${breakPoints.medium}px) {
                .title {
                  font-size: ${desktopFontSizes.h3}px;
                }
                .orderHeader {
                  font-size: ${desktopFontSizes.h4}px;
                }
                .howToOrderTitle {
                  font-size: ${desktopFontSizes.h4}px;
                }
              }
            `}</style>
          </div>
        </Page>
      </Fragment>
    );
  }
}

export default DigitalEdge;
