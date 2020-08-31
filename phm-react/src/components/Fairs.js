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
        <Link to={`/${props.lang}/fairs/fair2908020`} className={'Fairs__link'}>{text['fair2908020'].pageTitle[props.lang]}</Link>
      </div>
    </>

  );
};
export default Fairs;