import * as React from 'react';
import all from "../data/all";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    const style = {padding: '20px'};
    const menuCategories = all.map((item, index) => {
        return (<NavLink style={style} to={'/' + item.idString + '/'} key={'menu-category-' + index}>{item.idString}</NavLink>);
    });
    return (
        <div>
            {menuCategories}
        </div>
    );
};
export default Header;