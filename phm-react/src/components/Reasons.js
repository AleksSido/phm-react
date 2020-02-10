import * as React from 'react';
import {Helmet} from "react-helmet";
import PageTitleContainer from "./PageTitleContainer";
import text from "../data/text";

const Reasons = (props) => {
  return (
    <>
      <Helmet>
        <title>{text.siteTitle + " - " + text.reasonsToBuy.pageTitle[props.lang]}</title>
      </Helmet>
      <PageTitleContainer>{text.reasonsToBuy.pageTitle[props.lang]}</PageTitleContainer>
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
      </div>



    </>

  );
};
export default Reasons;