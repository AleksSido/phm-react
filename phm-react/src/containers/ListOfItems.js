import * as React from 'react';
import {NavLink} from "react-router-dom";
import all from "../data/all";

class ListOfItems extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    const category = this.props.match.params.category;
    const itemsCategory = all.find(catItem => {return catItem.idString === category});
    const links = itemsCategory.items.map((item, index) => {
      return (<div key={'link-'+ index}>
        <NavLink  to={'/'+category+'/'+item.idString + '/'}>
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