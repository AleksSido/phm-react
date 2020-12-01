import * as React from 'react';
import {Helmet} from "react-helmet";
import PageTitleContainer from "./PageTitleContainer";
import text from "../data/text";
import DeliveredVideo from "./DeliveredVideo";
import ScrollToTop from "../containers/ScrollToTop";
import moment from '../moment/momentInstance';

const definePageTitleEndKey = (monthIndex) => {
  if (monthIndex > 9) {
    return 'newYear';
  } else if (monthIndex < 3) {
    return 'startOfYear';
  } else {
    return 'afterMarch';
  }
};

const Reasons = (props) => {
  const currentMonth = moment().month();
  const pageTitleEndKey = definePageTitleEndKey(currentMonth);
  const pageTitle = text.reasonsToBuy.pageTitle[props.lang]
    + text.reasonsToBuy.pageTitleEnd[props.lang][pageTitleEndKey];
  return (
    <>
      <Helmet>
        <title>{text.siteTitle + " - " + pageTitle}</title>
      </Helmet>
      <ScrollToTop/>
      <PageTitleContainer>{pageTitle}</PageTitleContainer>
      <div className="HowToBuy">
        <div className="HowToBuy__text">
          {"1. "}<b>{text.reasonsToBuy.firstReasonTitle[props.lang]}</b> {" "}
          {text.reasonsToBuy.firstReasonText[props.lang]}
        </div>
        <div className="HowToBuy__divider"/>
        <div className="HowToBuy__text">
          {"2. "}<b>{text.reasonsToBuy.secondReasonTitle[props.lang]}</b> {" "}
          {text.reasonsToBuy.secondReasonText[props.lang]}
        </div>
        <div className="HowToBuy__divider"/>
        <div className="HowToBuy__text">
          {"3. "}<b>{text.reasonsToBuy.thirdReasonTitle[props.lang]}</b> {" "}
          {text.reasonsToBuy.thirdReasonText[props.lang]}
        </div>
        <div className="HowToBuy__divider"/>
        <div className="HowToBuy__text">
          {"4. "}<b>{text.reasonsToBuy.fourthReasonTitle[props.lang]}</b> {" "}
          {text.reasonsToBuy.fourthReasonText[props.lang]}
        </div>
        <div className="HowToBuy__divider"/>
        <div className="HowToBuy__text">
          {"5. "}<b>{text.reasonsToBuy.fifthReasonTitle[props.lang]}</b> {" "}
          {text.reasonsToBuy.fifthReasonText[props.lang]}
        </div>
        <div className="HowToBuy__divider"/>
        <DeliveredVideo lang={props.lang}/>
      </div>

    </>

  );
};
export default Reasons;