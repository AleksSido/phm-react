import * as React from 'react';
import {Helmet} from "react-helmet";
import PageTitleContainer from "./PageTitleContainer";
import text from "../data/text";
import ScrollToTop from "../containers/ScrollToTop";
import {Link} from "react-router-dom";

const Fairs = (props) => {
  return (
    <>
      <Helmet>
        <title>{text.siteTitle + " - " + text.fairs.pageTitle[props.lang]}</title>
      </Helmet>
      <ScrollToTop/>
      <PageTitleContainer>{text.fairs.pageTitle[props.lang]}</PageTitleContainer>
      <div className="HowToBuy">
        <Link to={`/${props.lang}/fairs/fair_report_150920`} className={'Fairs__link'}>{text['fair_report_150920'].pageTitle[props.lang]}</Link>
        <Link to={`/${props.lang}/fairs/fair_announcement_290820`} className={'Fairs__link'}>{text['fair_announcement_290820'].pageTitle[props.lang]}</Link>
      </div>
    </>

  );
};
export default Fairs;