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
      images.push(<img key={this.props.item.idString + '_' + i}
                       src={require(`./../assets/img/thumbnails_with_logo/${this.props.item.categoryString}/${this.props.item.idString}/${this.props.item.idString}_${i}.jpg`)}
                       alt={this.props.item.name} className="ItemCard__img"/>);
    }
    const available = this.props.item.available ? text.isAvailable[this.props.lang] : text.isNotAvailable[this.props.lang];
    const availableNote = this.props.item.available ? null : text.isNotAvailableNote[this.props.lang];
    const categories = this.props.item.addCategories ? [...this.props.item.addCategories, this.props.item.categoryString]
      : [this.props.item.categoryString];
    const textCategories = categories.map(item => text[item][this.props.lang]);
    const joinedTextCategories = textCategories.join('   ');
    const sliderSettings = {

    };
    return (
      <div className="ItemCard">
        <div className="ItemCard__img-container">
          <Slider ref={c => (this.slider = c)} settings={sliderSettings}>
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
        <div className="ItemCard__name">{this.props.item.name}</div>
        <div className="ItemCard__price">{this.props.item.price + ' ' + text.hryvny}</div>
        <div className="ItemCard__categories">{joinedTextCategories}</div>
      </div>
    );
  }
}
export default ItemCard;