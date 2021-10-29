// @flow

import React, { Fragment } from 'react';
import classNames from 'classnames';

import Accordion from 'components/Accordion';
import CardSlider from 'components/CardSlider';
import Button from 'components/Button';
import CalendlyModal from 'components/CalendlyModal';

import {
  getListofCurriculums,
  getListofCountries,
  getListofStates,
  getCTAForCountry,
} from 'utils/curriculum';
import { type Curriculum } from 'utils/types';
import {
  breakPoints,
  colors,
  desktopFontSizes,
  mobileFontSizes,
  fontWeights,
  lineHeights,
  transitions,
  borderRadius,
} from 'utils/theme';
import { urlBuilders } from 'utils/urls';
import sendCTAClickEvent from 'utils/analytics';

const getCountryImage = (countryName: string) => {
  let imageName = '';
  switch (countryName) {
    case 'AU':
      imageName = 'curriculum/AU-Curriculum.svg';
      break;
    case 'CA':
      imageName = 'curriculum/CA-Curriculum.svg';
      break;
    case 'NZ':
      imageName = 'curriculum/NZ-Curriculum.svg';
      break;
    case 'US':
      imageName = 'curriculum/US-Curriculum.svg';
      break;
    case 'HK':
      imageName = 'curriculum/HK-Curriculum.svg';
      break;
    case 'International':
      imageName = 'curriculum/Int-Curriculum.svg';
      break;
    case 'SG':
      imageName = 'curriculum/SG-Curriculum.svg';
      break;
    case 'UK':
      imageName = 'curriculum/UK-Curriculum.svg';
      break;
    case 'IN':
      imageName = 'curriculum/IN-Curriculum.svg';
      break;
    default:
      break;
  }
  return imageName;
};

type CurriculumListProps = {|
  countryState: string,
  curriculums: Array<Curriculum>,
|};
const CurriculumList = ({ countryState, curriculums }: CurriculumListProps) => {
  return (
    <Fragment>
      {getListofCurriculums(countryState, curriculums).map(
        (curriculum, index) => (
          // No unique ids are given
          // eslint-disable-next-line react/no-array-index-key
          <div
            key={`curriculum.id+${index}`}
            className="curriculumListContainer"
          >
            <div className="curriculum">
              <span className="title">{curriculum.title}</span>
            </div>
          </div>
        ),
      )}
      <style jsx>{`
        .curriculum {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 4px;
        }
        .curriculumListContainer + .curriculumListContainer {
          border-top: 1px solid rgba(225, 225, 225, 0.2);
        }
        .title {
          color: ${colors.white};
        }
        .image {
          display: flex;
          max-width: 15px;
        }
        .noCurriculum {
          color: ${colors.white};
        }
      `}</style>
    </Fragment>
  );
};

type Props = {|
  country?: string,
  curriculums: Array<Curriculum>,
|};

type State = {
  selectedCountry: string,
  mobileCountryModalOpen: boolean,
  ctaInfo: { text: string, buttonText: string, link: string },
  showModal: boolean,
};

const TRANSITION_DURATION = 150;

const CONTACT_US = 'contact-us';
const QUICK_CHAT = 'quick-chat';

class CurriculumSelectionPanel extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const country = this.props.country || '';
    this.state = {
      selectedCountry: country,
      mobileCountryModalOpen: !!this.props.country,
      ctaInfo: getCTAForCountry(country, this.props.curriculums),
      showModal: false,
    };
  }
  render() {
    const cardList = getListofCountries(this.props.curriculums).map(
      countryName => ({
        name: countryName,
        imageUrl: urlBuilders.imageUrl(getCountryImage(countryName)),
        onClick: selected => {
          this.setState(state => {
            const ctaInfo = getCTAForCountry(selected, this.props.curriculums);
            return {
              ...state,
              selectedCountry: selected,
              mobileCountryModalOpen: true,
              ctaInfo,
            };
          });
        },
      }),
    );
    const countrySelectContainerClass = classNames({
      countrySelectContainer: true,
      showCountrySelectContainer: !!this.state.selectedCountry,
    });
    const dropdownContainerMobileClass = classNames({
      dropdownContainerMobile: true,
      showDropdownContainerMobile: this.state.mobileCountryModalOpen,
    });
    const dropdownWrapperMobileClass = classNames({
      dropdownWrapperMobile: true,
      hideDropdownWrapperMobile: !this.state.selectedCountry,
    });
    const stateListForCurrentCountry = getListofStates(
      this.state.selectedCountry,
      this.props.curriculums,
    );
    return (
      <Fragment>
        <div className="curriculumSelectionPanel">
          {!this.state.mobileCountryModalOpen && (
            <div className="mobileTitleContainer">
              <div className="mobileTitleMain">
                View Curriculas for your country
              </div>
              <div className="mobileTitleSub">Select a country</div>
            </div>
          )}
          <div className={countrySelectContainerClass}>
            <CardSlider
              cardList={cardList}
              selectedCardName={this.state.selectedCountry}
            />
          </div>
          <div className="dropdownContainerDesktop">
            {stateListForCurrentCountry.map(countryState => (
              // eslint-disable-next-line
              <div key={countryState} className="dropdownWrapper">
                <Accordion
                  title={countryState}
                  interactive={stateListForCurrentCountry.length > 1}
                >
                  <div className="accordionContent">
                    <CurriculumList
                      countryState={countryState}
                      curriculums={this.props.curriculums}
                    />
                  </div>
                </Accordion>
              </div>
            ))}
          </div>
          <div className={dropdownContainerMobileClass}>
            <div className={dropdownWrapperMobileClass}>
              {/* Since this is a mobile button, we don't require a key event handler */}
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
              <div
                className="exitIconContainer"
                role="button"
                tabIndex="0"
                onClick={() => {
                  this.setState(
                    state => ({
                      ...state,
                      mobileCountryModalOpen: false,
                    }),
                    () =>
                      setTimeout(
                        () =>
                          this.setState(state => ({
                            ...state,
                            selectedCountry: '',
                          })),
                        TRANSITION_DURATION,
                      ),
                  );
                }}
              >
                <img
                  className="exitIcon"
                  src={urlBuilders.imageUrl('curriculum/dropdown-icon.svg')}
                  alt=""
                />
              </div>
              <div className="countryDescriptionContainer">
                <img
                  src={urlBuilders.imageUrl(
                    getCountryImage(this.state.selectedCountry),
                  )}
                  alt={this.state.selectedCountry}
                />
                <div className="countryName">{this.state.selectedCountry}</div>
              </div>
              {stateListForCurrentCountry.map(countryState => (
                // eslint-disable-next-line
                <div key={countryState} className="dropdownWrapper">
                  <Accordion
                    title={countryState}
                    interactive={stateListForCurrentCountry.length > 1}
                  >
                    <div className="accordionContent">
                      <CurriculumList countryState={countryState} />
                    </div>
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
          <div className="expansionContainer">
            {this.state.ctaInfo.text && (
              <span className="expansionText">{this.state.ctaInfo.text}</span>
            )}
            {this.state.ctaInfo.link && (
              <div className="expansionButton">
                {this.state.ctaInfo.buttonText === 'Book a call' ? (
                  <Button
                    data-event-label={QUICK_CHAT}
                    hasBorder
                    isBlock
                    onClick={() => {
                      sendCTAClickEvent(QUICK_CHAT);
                      this.setState(state => ({
                        ...state,
                        showModal: true,
                      }));
                    }}
                  >
                    {this.state.ctaInfo.buttonText}
                  </Button>
                ) : (
                  <Button
                    data-event-label={CONTACT_US}
                    hasBorder
                    isBlock
                    href={this.state.ctaInfo.link}
                    onClick={event => {
                      event.preventDefault();
                      sendCTAClickEvent(CONTACT_US).then(() => {
                        window.location.assign(this.state.ctaInfo.link);
                      });
                    }}
                  >
                    {this.state.ctaInfo.buttonText}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
        {this.state.showModal && (
          <CalendlyModal
            bookingType="chat"
            country={this.state.selectedCountry}
            onClose={() =>
              this.setState(state => ({
                ...state,
                showModal: false,
              }))
            }
          />
        )}
        <style jsx>{`
          .curriculumSelectionPanel {
            background-color: ${colors.lochmara};
            padding: 0 24px 40px;
            margin-right: 16px;
          }
          .countrySelectContainer {
            padding: 20px 0;
            display: flex;
            flex-direction: row;
            max-width: 960px;
            margin: 0 auto;
            justify-content: center;
            display: block;
          }
          .showCountrySelectContainer {
            display: none;
          }
          .accordionContent {
            background-color: ${colors.blumine};
            border-radius: ${borderRadius.default}px;
            padding: 10px 20px;
          }
          .dropdownContainerDesktop {
            margin: 30px auto;
            padding: 0 15px;
            display: none;
          }
          .dropdownContainerMobile {
            height: 100%;
            width: 100%;
            background-color: ${colors.lochmara};
            transform: translateX(-110%);
            transition: transform ${transitions.default};
          }
          .showDropdownContainerMobile {
            transform: translateX(0%);
          }
          .dropdownWrapperMobile {
            padding: 24px 0;
          }
          .hideDropdownWrapperMobile {
            display: none;
          }
          .expansionContainer {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .expansionText {
            color: ${colors.white};
            font-size: ${desktopFontSizes.subInfo}px;
            font-weight: ${fontWeights.light};
            margin-right: 0;
          }
          .expansionButton {
            margin-top: 15px;
            width: 100%;
          }
          .exitIconContainer {
            width: 30px;
            height: 30px;
            cursor: pointer;
            transform: rotate(0.75turn);
          }
          .exitIcon {
            width: 100%;
          }
          .countryDescriptionContainer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 30px;
          }
          .countryName {
            margin-top: 10px;
            color: ${colors.white};
          }
          .expansionText {
            text-align: center;
          }
          .mobileTitleContainer {
            display: block;
            text-align: center;
            padding-top: 40px;
            color: ${colors.white};
          }
          .mobileTitleMain {
            font-size: ${mobileFontSizes.h4}px;
            line-height: ${lineHeights.body};
            font-weight: ${fontWeights.regular};
          }
          .mobileTitleSub {
            font-size: ${mobileFontSizes.body}px;
            font-weight: ${fontWeights.light};
          }

          @media (min-width: ${breakPoints.large}px) {
            .curriculumSelectionPanel {
              padding: 0 24px 112px;
            }
            .countrySelectContainer {
              display: block;
              padding: 0;
            }
            .dropdownContainerDesktop {
              max-width: 500px;
              width: 100%;
              display: block;
            }
            .dropdownContainerMobile {
              display: none;
            }
            .expansionContainer {
              flex-direction: row;
            }
            .expansionText {
              margin-right: 10px;
              text-align: left;
            }
            .expansionButton {
              margin-top: 0;
              max-width: 180px;
            }
            .mobileTitleContainer {
              display: none;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default CurriculumSelectionPanel;
