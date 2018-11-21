import * as React from 'react';
import Header from "./Header";
import {Route} from "react-router-dom";
import ListOfItems from "../containers/ListOfItems";
import Item from "../containers/Item";
import Content from "./Content";


const LanguageHandler = (props) => {
  const lang = props.match.params.lang ? props.match.params.lang : 'uk';
  return (<Content>
    <Header lang={lang}/>
    <Route exact path={'/:lang/:category/'} component={ListOfItems}/>
    <Route exact path={'/:lang/:category/:item/'} component={Item}/>
  </Content>);
};
export  default LanguageHandler;