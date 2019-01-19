import * as React from 'react';
import all from "../data/all";
import {Helmet} from "react-helmet";
import PageTitleContainer from "../components/PageTitleContainer";
import text from "../data/text";
import Slider from "react-slick";
import FacebookSvg from "../svg-components/FacebookSvg";
import TwitterSvg from "../svg-components/TwitterSvg";
import PinterestSvg from "../svg-components/PinterestSvg";
import {NavLink} from "react-router-dom";
import HeaderContacts from "../components/HeaderContacts";

class Item extends React.Component {
  handlePrev = (e) => {
    e.preventDefault();
    this.slider.slickPrev();
  };
  handleNext = (e) => {
    e.preventDefault();
    this.slider.slickNext();
  };
  scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };
  componentDidUpdate(){
    this.scrollToTop();
  };
  componentDidMount(){
    this.scrollToTop();
  }
 render(){
   const lang = this.props.lang;
   const category = this.props.category;
   const item = this.props.item;
   const itemCategory = all.find(item=>{return item.idString === category});
   const itemObj = itemCategory.items.find(itemObj => {return itemObj.idString === item});

   let thumbnails = [];
   let photos = [];
   for (let i=0; i < itemObj.imagesNumber; i++) {
     const thumbSrc = require(`./../assets/img/thumbnails_with_logo/${category}/${itemObj.idString}/${itemObj.idString}_${i+1}.jpg`);
     const photoSrc = require(`./../assets/img/fullsize_with_logo/${category}/${itemObj.idString}/${itemObj.idString}_${i+1}.jpg`);
     const thumbnail = (<div key={`item-${i}`} className="item-thumbnails__img-container" onClick={()=>{this.slider.slickGoTo(i)}}>
         <img className="item-thumbnails__img" src={thumbSrc} alt={itemObj.name[lang]} />
       </div>
       );
     const photo = (<div key={`item-photo-${i}`} className="item-slider__photo-container">
         <img className="item-slider__photo" src={photoSrc} alt={itemObj.name[lang]} />
       </div>
     );
     thumbnails.push(thumbnail);
     photos.push(photo);
   }
   const available = text.available[itemObj.available][lang];
   const availableNote = itemObj.available === "ORDER" ? text.isNotAvailableNote[lang] : null;
   // const categories = itemObj.addCategories ? [category, ...itemObj.addCategories] : [category];
   // const textCategories = categories.map((item, index) => {
   //   return (<span key={item + index}>{text[item][lang]}</span>);
   // });
   const relatedLinks = itemObj.related ? itemObj.related.map((relatedLinksItem,index)=> {
     const category = relatedLinksItem.split('_')[0];
     const categoryArr = all.find(item => item.idString === category);
     const relatedItem = categoryArr.items.find(item => item.idString === relatedLinksItem);
     return (
       <NavLink
         key={`item__related-link-${index}`}
         to={`/${lang}/${category}/${relatedLinksItem}/`}
         className="item__related-link">
         {relatedItem.name[lang] + ' (' + relatedItem.type[lang] + ')'}
       </NavLink>
     )
   }) : null;
   const description = itemObj.description[lang].map((item, index)=> {
     return (<div key={`${item}-desc-${index}`} className="item__section-text">{item}</div>)
   });
   return (

       <>
         <Helmet>
           <title>{text.siteTitle + " - " + itemObj.name[lang]}</title>
         </Helmet>

         <PageTitleContainer>{itemObj.name[lang]}</PageTitleContainer>

         <div className="item-data">
           <div className="item-photos">
             <div className="item-thumbnails">
               {thumbnails}
             </div>
             <div className="item-slider">
               <Slider ref={c => (this.slider = c)} >
                 {photos}
               </Slider>
             </div>
             <div className="item-slider__img-controls">
               <div className="ItemCard__left-arrow" onClick={this.handlePrev}/>
               <div className="ItemCard__right-arrow" onClick={this.handleNext}/>
             </div>
           </div>

           <div className="item-text">

             <div className="item__type-and-price">
               <div className="item__type">{itemObj.type[lang]}</div>
               <div className="item__price">{itemObj.price + ' ' + text.hryvny}</div>
             </div>
             <div className="item__available-and-note">
               <div className="item__avialable">{available}</div>
               <div className="item__note">{availableNote}</div>
             </div>
             {/*<div className="item__categories">{textCategories}</div>*/}
             {itemObj.related ? (
              <>
                <div className="pink-border"/>
                <div className="item__section-title">{text.collection[lang]}</div>
                <div className="item__related-links">
                  {relatedLinks}
                </div>
              </>
             ) : null}


             <div className="pink-border"/>
             <div className="item__section-title">{text.description[lang]}</div>
             {description}

             {itemObj.dimensions ? (
              <>
                <div className="pink-border"/>
                <div className="item__section-title">{text.dimensions[lang]}</div>
                <div className="item__section-text">{itemObj.dimensions[lang]}</div>
              </>
             ) : null}

             <div className="pink-border"/>
             <div className="item__section-title">{text.orderItem[lang]}</div>
             <div className="item__buy-contacts">
               <HeaderContacts/>
             </div>
             <div className="pink-border"/>
             <div className="item__share-btns">
               <a href="" className="item__share-btn"><FacebookSvg/></a>
               <a href="" className="item__share-btn"><PinterestSvg/></a>
               <a href="" className="item__share-btn"><TwitterSvg/></a>
             </div>
           </div>
         </div>
       </>
   );
 }
}
export default Item;