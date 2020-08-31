import * as React from 'react';
import {Helmet} from "react-helmet";
import PageTitleContainer from "./PageTitleContainer";
import text from "../data/text";
import ScrollToTop from "../containers/ScrollToTop";
import schemeImg from "../assets/img/fair-plan.jpg";

const Fair = (props) => {
  return (
    <>
      <Helmet>
        <title>{text.siteTitle + " - " + text[props.item].pageTitle[props.lang]}</title>
      </Helmet>
      <ScrollToTop/>
      <PageTitleContainer>{text[props.item].pageTitle[props.lang]}</PageTitleContainer>
      <div className="HowToBuy">
        <div className="HowToBuy__text">{text[props.item].text1[props.lang]}</div>
        <div className="HowToBuy__text">{text[props.item].text2[props.lang]}</div>
        <div className="HowToBuy__text">{text[props.item].text3[props.lang]}</div>
        <div className="Fair__scheme">
          <img src={schemeImg} alt="Fair scheme"/>
        </div>
        <div className="HowToBuy__text">{text[props.item].text4[props.lang]}</div>
        <div className="HowToBuy__text">{text[props.item].text5[props.lang]}</div>
        <a className={'Fair__externalLink'} href="https://rukodelie-bh.com/cp82156-mistse-dati-ta-godini-provedennya-vistavki.html"
           target="_blank" rel="noopener noreferrer" >
          https://rukodelie-bh.com/cp82156-mistse-dati-ta-godini-provedennya-vistavki.html</a>
      </div>
    </>

  );
};
export default Fair;