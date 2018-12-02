import * as React from 'react';
import {NavLink} from "react-router-dom";
import all from "../data/all";
import {Helmet} from "react-helmet";
import PageTitleContainer from "../components/PageTitleContainer";
import text from "../data/text";
import ItemCard from "../components/ItemCard";

class ListOfItems extends React.Component{
  returnCardLink = (item, index, lang) => {
    return (<div key={item.categoryString + '-link-'+ index}>
      <NavLink className={'ItemCard__link'} to={'/' + lang + '/'+ item.categoryString +'/'+item.idString + '/'}>
        <ItemCard item={item} lang={this.props.lang} />
      </NavLink>
    </div>)
  };
  render(){
    const lang = this.props.lang;
    const category = this.props.category;
    let links = [];
    if (this.props.showAll) {
      all.forEach(itemsCategory => {
        const itemsCategoryLinks = itemsCategory[lang].map((item) => {
          return {...item, categoryString: itemsCategory.idString};
        });
        links.push(...itemsCategoryLinks);
      });
      links = links.filter(item => !item.sameId);
      console.log(links);
    } else {
      const itemsCategory = all.find(item => {return item.idString === category});
     links = itemsCategory[lang].map((item) => {
       return {...item, categoryString: itemsCategory.idString};
      });
    }

    links.sort((a, b) => {return b.id - a.id;});
    const linksToItems = links.map((item, index) => {
      return this.returnCardLink(item, index, lang);
    });

    return (
        <main className="main">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Page {category}</title>
          </Helmet>
          <div className="main-wrapper">
            <PageTitleContainer>{text[category][lang]}</PageTitleContainer>
            <div>
              {linksToItems}
            </div>

          </div>
        </main>


    );

  }
}
export default ListOfItems;