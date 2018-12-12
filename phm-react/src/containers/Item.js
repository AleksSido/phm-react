import * as React from 'react';
import all from "../data/all";
import {Helmet} from "react-helmet";
import PageTitleContainer from "../components/PageTitleContainer";
import text from "../data/text";
import Slider from "react-slick";

class Item extends React.Component {
  handlePrev = (e) => {
    e.preventDefault();
    this.slider.slickPrev();
  };
  handleNext = (e) => {
    e.preventDefault();
    this.slider.slickNext();
  };
 render(){
   const lang = this.props.lang;
   const category = this.props.category;
   const item = this.props.item;
   const itemCategory = all.find(item=>{return item.idString === category});
   const itemObj = itemCategory[lang].find(itemObj => {return itemObj.idString === item});

   let thumbnails = [];
   let photos = [];
   for (let i=0; i < itemObj.imagesNumber; i++) {
     const thumbSrc = require(`./../assets/img/thumbnails_with_logo/${category}/${itemObj.idString}/${itemObj.idString}_${i+1}.jpg`);
     const photoSrc = require(`./../assets/img/fullsize_with_logo/${category}/${itemObj.idString}/${itemObj.idString}_${i+1}.jpg`);
     const thumbnail = (<div key={`item-${i}`} className="item-thumbnails__img-container" onClick={()=>{this.slider.slickGoTo(i)}}>
         <img className="item-thumbnails__img" src={thumbSrc} alt={itemObj.name} />
       </div>
       );
     const photo = (<div key={`item-photo-${i}`} className="item-slider__photo-container">
         <img className="item-slider__photo" src={photoSrc} alt={itemObj.name} />
       </div>
     );
     thumbnails.push(thumbnail);
     photos.push(photo);
   }
   const available = itemObj.available ? text.isAvailable[lang] : text.isNotAvailable[lang];
   const availableNote = itemObj.available ? null : text.isNotAvailableNote[lang];
   const categories = [category, ...itemObj.addCategories];
   const textCategories = categories.map((item, index) => {
     return (<span key={item + index}>{text[item][lang]}</span>);
   });
   const description = itemObj.description.map((item, index)=> {
     return (<div key={`${item}-desc-${index}`} className="item__section-text">{item}</div>)
   });
   return (

       <main className="main">
         <div className="main-wrapper">
           <PageTitleContainer>{itemObj.name}</PageTitleContainer>
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
               <div className="item__available-and-price">
                 <div className="item__available-and-note">
                   <div className="item__avialable">{available}</div>
                   <div className="item__note">{availableNote}</div>
                 </div>
                 <div className="item__price">{itemObj.price + ' ' + text.hryvny}</div>
               </div>
               <div className="item__categories">{textCategories}</div>
               <div className="pink-border"/>
               <div className="item__section-title">{text.description[lang]}</div>
               {description}
               <div className="pink-border"/>
               <div className="item__section-title">{text.dimensions[lang]}</div>
               <div className="item__section-text">{itemObj.dimensions}</div>
               <div className="pink-border"/>
               <div className="item__section-title">{text.orderItem[lang]}</div>
             </div>
           </div>
         </div>
       </main>





   );
 }
}
export default Item;