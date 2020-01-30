import * as React from 'react';
import text from "../data/text";
import Slider from "react-slick";

class ItemCard extends React.Component {
  handlePrev = (e) => {
    e.preventDefault();
    this.slider.slickPrev();
  };
  handleNext = (e) => {
    e.preventDefault();
    this.slider.slickNext();
  };
  render(){
    let images = [];
    for (let i=1; i < (this.props.item.imagesNumber+1); i++) {
      images.push(
        <picture>
          <source srcSet={require(`./../assets/img/thumbnails_with_logo/${this.props.item.categoryString}/${this.props.item.idString}/${this.props.item.idString}_${i}.webp`)}/>
          <img key={this.props.item.idString + '_' + i}
               src={require(`./../assets/img/thumbnails_with_logo/${this.props.item.categoryString}/${this.props.item.idString}/${this.props.item.idString}_${i}.jpg`)}
               alt={this.props.item.name[this.props.lang]} className="ItemCard__img"/>
        </picture>);
    }

    const available = text.available[this.props.item.available][this.props.lang];
    const availableNote = this.props.item.available === "ORDER" ? text.isNotAvailableNote[this.props.lang] : null;
    const categories = this.props.item.addCategories ? [...this.props.item.addCategories, this.props.item.categoryString]
      : [this.props.item.categoryString];
    const textCategories = categories.map((item, index) => {
      return (<span key={item + index}>{text[item][this.props.lang]}</span>);
    });

    return (
      <div className="ItemCard">
        <div className="ItemCard__img-container">
          <Slider ref={c => (this.slider = c)}>
            {images}
          </Slider>
        </div>
        <div className="ItemCard__available-and-controls">
          <div className="ItemCard__available-container">
            <div className="ItemCard__available">{available}</div>
            <div className="ItemCard__available-note">{availableNote}</div>
          </div>
          <div className="ItemCard__img-controls">
            <div className="ItemCard__left-arrow" onClick={this.handlePrev}/>
            <div className="ItemCard__right-arrow" onClick={this.handleNext}/>
          </div>
        </div>
        <div className="ItemCard__name">{this.props.item.name[this.props.lang]}</div>
        <div className="ItemCard__price">{this.props.item.price + ' ' + text.hryvny}</div>
        <div className="ItemCard__categories">{textCategories}</div>
      </div>
    );
  }
}
export default ItemCard;