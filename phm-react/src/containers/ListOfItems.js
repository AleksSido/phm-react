import * as React from 'react';
import {NavLink} from "react-router-dom";
import all from "../data/all";
import {Helmet} from "react-helmet";

class ListOfItems extends React.Component{
  // constructor(props){
  //   super(props);
  //
  // }
  returnCardLink = (item, index, lang, category) => {
    return (<div key={category + '-link-'+ index}>
      <NavLink  to={'/' + lang + '/'+ category +'/'+item.idString + '/'}>
        {item.idString}
      </NavLink>
    </div>)
  };
  render(){
    console.log('kjl');

    console.log(this.props);
    // console.log(this.props.match.params);
    // const lang = this.props.showAll ? this.props.lang : this.props.match.params.lang;
    // const category = this.props.showAll ? 'all' : this.props.match.params.category;
    const lang = this.props.lang;
    const category = this.props.category;
    let links = [];
    if (this.props.showAll) {
      links = all.map(itemsCategory => {
        const itemsCategoryLinks = itemsCategory[lang].map((item, index) => {
          return this.returnCardLink(item, index, lang, itemsCategory.idString);
        });
        return [...itemsCategoryLinks];
      });
    } else {
      const itemsCategory = all.find(item => {return item.idString === category});
     links = item sCategory[lang].map((item, index) => {
        return this.returnCardLink(item, index, lang, itemsCategory.idString);;
      });
    }



    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Page {category}</title>
        </Helmet>
        <div>{category}</div>
        <div>
          {links}
        </div>
      </div>

    );

  }
}
export default ListOfItems;