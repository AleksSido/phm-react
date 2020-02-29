import * as React from 'react';
import {Helmet} from "react-helmet";
import PageTitleContainer from "./PageTitleContainer";
import text from "../data/text";
import DeliveredVideo from "./DeliveredVideo";
import ScrollToTop from "../containers/ScrollToTop";

const HowToOrder = (props) => {
  return (
    <>
      <Helmet>
        <title>{text.siteTitle + " - " + text.howToOrder.pageTitle[props.lang]}</title>
      </Helmet>
      <ScrollToTop/>
      <PageTitleContainer>{text.howToOrder.pageTitle[props.lang]}</PageTitleContainer>
      <div className="HowToBuy">
        <div className="HowToBuy__text">{text.howToOrder.p1[props.lang]}</div>
        <div className="HowToBuy__divider"/>
        <div className="HowToBuy__text">{text.howToOrder.p2[props.lang]}</div>
        <div className="HowToBuy__divider"/>
        <div className="HowToBuy__text">{text.howToOrder.p3[props.lang]}</div>
        <div className="HowToBuy__divider"/>
        <DeliveredVideo lang={props.lang}/>
      </div>
    </>

  );
};
export default HowToOrder;