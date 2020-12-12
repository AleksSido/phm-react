import * as React from 'react';
import {NavLink} from "react-router-dom";
import ItemCard from "../components/ItemCard";
import all from "../data/all";

const recommendedItems = [
  {category: 'collections', idString: 'collections_35'},
  {category: 'earrings', idString: 'earrings_42'},
  {category: 'beads', idString: 'beads_48'},
  {category: 'handmade', idString: 'handmade_28'}
];

class Recommended extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  returnCardLink = (item, index, lang) => {
    return (
      <NavLink key={item.categoryString + '-link-'+ index}
               className={'ItemCard__link'}
               to={'/' + lang + '/'+ item.categoryString +'/'+item.idString + '/'}>
        <ItemCard item={item} lang={this.props.lang}/>
      </NavLink>
    )
  };
  render() {
    const recommendedLinks = recommendedItems.map(item => {
      const foundedCategory = all.find(category => category.idString === item.category);
      const foundedItem = foundedCategory.items.find(categoryItem => categoryItem.idString === item.idString);
      return {...foundedItem, categoryString: item.category};
    });
    const recommendedLinkCards = recommendedLinks.map((item, index) => {
      return this.returnCardLink(item, index, this.props.lang);
    });
    return (
      <div className="item-cards">{recommendedLinkCards}</div>
    );
  }
}

export default Recommended;    