import * as React from 'react';
import all from "../data/all";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    const style = {
      padding: '20px',
      display: 'block'
    };
  // const lang = props.match.params.lang;
  console.log(props);
    const langLink = props.lang === 'uk' ? 'ru' : 'uk';
    const menuCategories = all.map((item, index) => {
        return (<NavLink style={style} to={'/' + props.lang + '/' + item.idString + '/'} key={'menu-category-' + index}>{item.idString}</NavLink>);
    });
    return (
        <div>
            {menuCategories}
            <div>
              <NavLink style={style} to={'/' + langLink + '/'}>{langLink}</NavLink>
            </div>
        </div>
    );
};
export default Header;