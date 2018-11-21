import * as React from 'react';
import {NavLink} from "react-router-dom";
import all from "../data/all";

class ListOfItems extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    const lang = this.props.match.params.lang;
    const category = this.props.match.params.category;
    const itemsCategory = all.find(catItem => {return catItem.idString === category});
    const links = itemsCategory[lang].map((item, index) => {
      return (<div key={'link-'+ index}>
        <NavLink  to={'/' + lang + '/'+category+'/'+item.idString + '/'}>
          {item.idString}
        </NavLink>
      </div>);
    });
    return (
      <div>
        <div>{category}</div>
        <div>
          {links}
        </div>
      </div>

    );

  }
}
export default ListOfItems;