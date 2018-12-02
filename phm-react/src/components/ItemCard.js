import * as React from 'react';
import text from "../data/text";

const ItemCard = (props) => {
  let images = [];
  for (let i=1; i < (props.item.imagesNumber+1); i++) {
    images.push(<img key={props.item.idString + '_' + i}
      src={require(`./../assets/img/thumbnails_with_logo/${props.item.categoryString}/${props.item.idString}/${props.item.idString}_${i}.jpg`)}
                     alt={props.item.name} className="ItemCard__img"/>);
  }
  const available = props.item.available ? text.isAvailable[props.lang] : text.isNotAvailable[props.lang];
  const availableNote = props.item.available ? null : text.isNotAvailableNote[props.lang];
  const categories = props.item.addCategories ? [...props.item.addCategories, props.item.categoryString]
    : [props.item.categoryString];
  const textCategories = categories.map(item => text[item][props.lang]);
  const joinedTextCategories = textCategories.join('   ');
  return (
    <div className="ItemCard">
      <div className="ItemCard__img-container">
        {images}
      </div>
      <div className="flex">
        <div className="ItemCard__available-container">
          <div className="ItemCard__available">{available}</div>
          <div className="ItemCard__available-note">{availableNote}</div>
        </div>
        <div className="ItemCard__img-controls"></div>
      </div>
      <div className="ItemCard__name">{props.item.name}</div>
      <div className="ItemCard__price">{props.item.price + ' ' + text.hryvny}</div>
      <div className="ItemCard__categories">{joinedTextCategories}</div>
    </div>
  );
};
export default ItemCard;