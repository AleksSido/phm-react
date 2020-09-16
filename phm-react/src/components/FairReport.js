import * as React from 'react';
import {Helmet} from "react-helmet";
import PageTitleContainer from "./PageTitleContainer";
import text from "../data/text";
import ScrollToTop from "../containers/ScrollToTop";
import schemeImg from "../assets/img/fair-plan.jpg";
import {Link} from "react-router-dom";
import Slider from "react-slick";

class FairReport extends React.Component {
  handlePrev = (e) => {
    e.preventDefault();
    this.slider.slickPrev();
  };
  handleNext = (e) => {
    e.preventDefault();
    this.slider.slickNext();
  };
  render() {
    let thumbnails = [];
    let photos = [];
    for (let i=0; i < 7; i++) {
      const thumbSrc = require(`./../assets/img/thumbnails_with_logo/fairs/${this.props.item}/${this.props.item}_${i+1}.jpg`);
      const thumbWebpSrc = require(`./../assets/img/thumbnails_with_logo/fairs/${this.props.item}/${this.props.item}_${i+1}.webp`);
      const photoSrc = require(`./../assets/img/fullsize_with_logo/fairs/${this.props.item}/${this.props.item}_${i+1}.jpg`);
      const photoWebpSrc = require(`./../assets/img/fullsize_with_logo/fairs/${this.props.item}/${this.props.item}_${i+1}.webp`);
      const thumbnail = (
        <div key={`item-${i}`} className="item-thumbnails__img-container" onClick={()=>{this.slider.slickGoTo(i)}}>
          <picture>
            <source srcSet={thumbWebpSrc}/>
            <img className="item-thumbnails__img" src={thumbSrc} alt={text[this.props.item].text1[this.props.lang]} />
          </picture>
        </div>
      );
      const photo = (
        <div key={`item-photo-${i}`} className="item-slider__photo-container">
          <picture>
            <source srcSet={photoWebpSrc}/>
            <img className="item-slider__photo" src={photoSrc} alt={text[this.props.item].text1[this.props.lang]} />
          </picture>
        </div>
      );
      thumbnails.push(thumbnail);
      photos.push(photo);
    }
    return (
      <>
        <Helmet>
          <title>{text.siteTitle + " - " + text[this.props.item].pageTitle[this.props.lang]}</title>
        </Helmet>
        <ScrollToTop/>
        <PageTitleContainer>{text[this.props.item].pageTitle[this.props.lang]}</PageTitleContainer>
        <div className="item-data">
          <div className="item-photos">
            <div className="item-thumbnails">
              {thumbnails}
            </div>
            <div className="item-slider">
              <Slider lazyLoad={'progressive'} ref={c => (this.slider = c)} >
                {photos}
              </Slider>
            </div>
            <div className="item-slider__img-controls">
              <div className="ItemCard__left-arrow" onClick={this.handlePrev}/>
              <div className="ItemCard__right-arrow" onClick={this.handleNext}/>
            </div>
          </div>

          <div className="item-text">
            <div className="HowToBuy__text FairReport__text">{text[this.props.item].text1[this.props.lang]}</div>
            <div className="HowToBuy__text FairReport__text">{text[this.props.item].text2[this.props.lang]}</div>
            <div className="HowToBuy__text FairReport__text">{text[this.props.item].text3[this.props.lang]}</div>
            <div className="HowToBuy__text FairReport__text">{text[this.props.item].text4[this.props.lang]}</div>
            <div className="HowToBuy__text FairReport__text">{text[this.props.item].text5[this.props.lang]}</div>
            <div className="HowToBuy__text FairReport__text">{text[this.props.item].text6[this.props.lang]}
              <Link to={`/${this.props.lang}/fairs/`} className={'FairReport__link'}>{text[this.props.item].linkToFairsText[this.props.lang]}</Link>
            </div>
          </div>
        </div>


      </>

    );
  }


};
export default FairReport;