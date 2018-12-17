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
      paginationIsShown: false,
      links: [],
      linksToShow: [],
      pagesNumber: null
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
  handleListOfItems = () => {
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
    this.setState({paginationIsShown, links, linksToShow, pagesNumber});
  };
  componentDidMount() {
    this.handleListOfItems();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count
    || prevProps.showAll !== this.props.showAll
    || prevProps.lang !== this.props.lang
    || prevProps.category !== this.props.category
    || prevProps.exceptFor !== this.props.exceptFor) {
      this.handleListOfItems();
    }
  }
  render(){
    const lang = this.props.lang;
    const category = this.props.category;

    const linksToItems = this.state.linksToShow.length ? this.state.linksToShow.map((item, index) => {
      return this.returnCardLink(item, index, lang);
    }) : null;

    let pagination = [];
    if (this.state.paginationIsShown) {
      for (let i=0; i < this.state.pagesNumber; i++) {
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
          {this.state.paginationIsShown ? (
            <div className="pagination">{pagination}</div>
          ) : null}


        </>


    );

  }
}
export default ListOfItems;