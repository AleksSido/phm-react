import * as React from 'react';
import {Helmet} from "react-helmet";
import PageTitleContainer from "./PageTitleContainer";
import text from "../data/text";

const HowToBuy = (props) => {
  return (
    <>
      <Helmet>
        <title>{text.siteTitle + " - " + text.howToBuy[props.lang]}</title>
      </Helmet>
      <PageTitleContainer>{text.howToBuy[props.lang]}</PageTitleContainer>


    </>

  );
};
export default HowToBuy;