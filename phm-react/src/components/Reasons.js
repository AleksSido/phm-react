import * as React from 'react';
import {Helmet} from "react-helmet";
import PageTitleContainer from "./PageTitleContainer";
import text from "../data/text";
import DeliveredVideo from "./DeliveredVideo";
import ScrollToTop from "../containers/ScrollToTop";
import moment from '../moment/momentInstance';
import {Link} from "react-router-dom";
import all from "../data/all";
import Recommended from "../containers/Recommended";

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
  const menuCategories = all.map((item, index) => {
    return (
      <Link
        className="FairReport__link"
        to={'/' + props.lang + '/' + item.idString + '/'}
        key={'menu-category-' + index}>{text[item.idString][props.lang]}</Link>);
  });
  const handmadeCategory = menuCategories[5];
  menuCategories.splice(5, 1);
  const joinedMenuCategories = menuCategories.map((item, index) => {
    if (index === menuCategories.length - 1) {
      return item;
    } else {
      return (
        <span key={'jmc'+index}>{item}{", "}</span>
      )
    }
  });

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
        <div className="HowToBuy__text">{text.reasonsToBuy.summary1[props.lang]}</div>
        <div className="HowToBuy__text">{text.reasonsToBuy.summary2[props.lang]}{joinedMenuCategories}{"."}</div>
        <div className="HowToBuy__text">
          {text.reasonsToBuy.summary3[props.lang]}
          {handmadeCategory}
          {text.reasonsToBuy.summary4[props.lang]}
        </div>
        <div className="HowToBuy__text">{text.reasonsToBuy.summary5[props.lang]}</div>
        <Recommended lang={props.lang}/>
        <DeliveredVideo lang={props.lang}/>
      </div>

    </>

  );
};
export default Reasons;