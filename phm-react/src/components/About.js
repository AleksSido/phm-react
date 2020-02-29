import * as React from 'react';
import {Helmet} from "react-helmet";
import PageTitleContainer from "./PageTitleContainer";
import text from "../data/text";
import faceImg from "../assets/img/face2.jpg";
import ScrollToTop from "../containers/ScrollToTop";

const About = (props) => {
  return (
    <>
      <Helmet>
        <title>{text.siteTitle + " - " + text.about.pageTitle[props.lang]}</title>
      </Helmet>
      <ScrollToTop/>
      <PageTitleContainer>{text.about.pageTitle[props.lang]}</PageTitleContainer>
      <div className="HowToBuy">
        <div className="HowToBuy__text About__motto">{text.about.motto[props.lang]}</div>
        <div className="HowToBuy__note About__text">{text.about.p0[props.lang]}</div>
        <div className="HowToBuy__note About__text">{text.about.p1[props.lang]}</div>
        <div className="HowToBuy__divider"/>
        <div className="HowToBuy__note About__text">{text.about.p2[props.lang]}</div>
        <div className="HowToBuy__divider"/>
        <div className="HowToBuy__note About__text">{text.about.p3[props.lang]}</div>
        <div className="HowToBuy__divider"/>
        <div className="HowToBuy__note About__text">{text.about.p4[props.lang]}</div>
        <div className="HowToBuy__note About__text">{text.about.p5[props.lang]}</div>
        <div className="About__photo-container">
          <img className={'About__photo'} src={faceImg} alt={text.about.p6[props.lang]}/>
        </div>
        <div className="HowToBuy__note About__text About__sign">{text.about.p6[props.lang]}</div>
      </div>
    </>

  );
};
export default About;