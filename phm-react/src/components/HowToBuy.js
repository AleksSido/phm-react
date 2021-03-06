import * as React from 'react';
import {Helmet} from "react-helmet";
import PageTitleContainer from "./PageTitleContainer";
import text from "../data/text";
import DeliveredVideo from "./DeliveredVideo";
import ScrollToTop from "../containers/ScrollToTop";

const HowToBuy = (props) => {
  return (
    <>
      <Helmet>
        <title>{text.siteTitle + " - " + text.howToBuy[props.lang]}</title>
      </Helmet>
      <ScrollToTop/>
      <PageTitleContainer>{text.howToBuy[props.lang]}</PageTitleContainer>
      <div className="HowToBuy">
        <div className="HowToBuy__text">{text.delivery[props.lang]}</div>
        <div className="HowToBuy__divider"/>
        <div className="HowToBuy__text">{text.payment[props.lang]}</div>
        <div className="HowToBuy__text">{text.payment1case[props.lang]}</div>
        <div className="HowToBuy__text">{text.payment2case[props.lang]}</div>
        <div className="HowToBuy__divider"/>
        <div className="HowToBuy__note">{text.freeDelivery[props.lang]}</div>
        <div className="HowToBuy__divider"/>
        <div className="HowToBuy__note">{text.deliveryInKyiv[props.lang]}</div>
        <div className="HowToBuy__divider"/>
        <DeliveredVideo lang={props.lang}/>
      </div>



    </>

  );
};
export default HowToBuy;