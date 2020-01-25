import * as React from 'react';
import {NavLink} from "react-router-dom";
import all from "../data/all";
import {Helmet} from "react-helmet";
import PageTitleContainer from "../components/PageTitleContainer";
import text from "../data/text";
import ItemCard from "../components/ItemCard";
import OtherItemsTitleContainer from "../components/OtherItemsTitleContainer";

class ListOfItems extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      offset: 12,
      count: 0,
      offsetIsSet: false
    };
  }
  returnCardLink = (item, index, lang) => {
    return (
      <NavLink key={item.categoryString + '-link-'+ index}
        className={'ItemCard__link'}
               to={'/' + lang + '/'+ item.categoryString +'/'+item.idString + '/'}>
        <ItemCard item={item} lang={this.props.lang} />
      </NavLink>
    )
  };
  scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };
  setOffset = () => {
    if (!this.state.offsetIsSet) {
      this.setState({
        offset: 12,
        offsetIsSet: true
      });
    }
  };
  componentDidUpdate(){
    this.setOffset();
    this.scrollToTop();
  };
  componentDidMount(){
    this.setOffset();
    this.scrollToTop();
  }
  render(){
    const lang = this.props.lang;
    const category = this.props.category;


    let links = [];
    if (this.props.showAll) {
      all.forEach(itemsCategory => {
        const itemsCategoryLinks = itemsCategory.items.map((item) => {
          return {...item, categoryString: itemsCategory.idString};
        });
        links.push(...itemsCategoryLinks);
      });
      links = links.filter(item => !item.sameId);
    } else {
      const itemsCategory = all.find(item => {
        return item.idString === this.props.category
      });
      links = itemsCategory.items.map((item) => {
        return {...item, categoryString: itemsCategory.idString};
      });
    }

    links.sort((a, b) => {
      return b.id - a.id;
    });
    if (this.props.exceptFor) {
      const exceptForIndex = links.findIndex(item => item.idString === this.props.exceptFor);
      links.splice(exceptForIndex, 1);
    }

    let linksToShow = [];
    let paginationIsShown = false;
    let pagesNumber = null;
    if (links.length <= this.state.offset) {
      linksToShow = links;
    } else {
      paginationIsShown = true;
      const fromIndex = this.state.count * this.state.offset;
      const toIndex = fromIndex + this.state.offset;
      linksToShow = links.slice(fromIndex, toIndex);
      pagesNumber = Math.ceil(links.length/this.state.offset);
    }


    const linksToItems = linksToShow.length ? linksToShow.map((item, index) => {
      return this.returnCardLink(item, index, lang);
    }) : null;

    let pagination = [];
    if (paginationIsShown) {
      for (let i=0; i < pagesNumber; i++) {
        const pageNumberClassName = this.state.count === i ? 'pagination__item pagination__item_active'
          : 'pagination__item';
        const pageNumberLink = this.state.count === i ?
          (<div key={`page-number-${i}`} className={pageNumberClassName}>{i+1}</div>)
          : (<div onClick={(e)=>{this.setState({count: i})}} key={`page-number-${i}`} className={pageNumberClassName}>{i+1}</div>);
        pagination.push(pageNumberLink);
      }
    }

    return (
        <>
          {this.props.exceptFor ? null : (
            <Helmet>
              <title>{text.siteTitle + " - " + text[category][lang]}</title>
            </Helmet>
          )}

          {this.props.exceptFor ? (
            <OtherItemsTitleContainer lang={lang}/>
            ) : (
            <PageTitleContainer>{text[category][lang]}</PageTitleContainer>
          )}
          <div className="item-cards">
            {linksToItems}
          </div>
          {paginationIsShown ? (
            <div className="pagination">{pagination}</div>
          ) : null}


        </>


    );

  }
}
export default ListOfItems;