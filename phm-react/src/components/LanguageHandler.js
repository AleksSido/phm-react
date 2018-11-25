import * as React from 'react';
import Header from "./Header";
import {Route} from "react-router-dom";
import ListOfItems from "../containers/ListOfItems";
import Item from "../containers/Item";
import Content from "./Content";
import {Helmet} from "react-helmet";



const LanguageHandler = (props) => {

console.log(props.match);
  const lang = props.match.params.lang ? props.match.params.lang : 'uk';
  const category = props.match.params.category ? props.match.params.category : 'all';
  const item = props.match.params.item ? props.match.params.item : false;
  const showAll = category === 'all';
  return (<Content>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Main page</title>
    </Helmet>
    <Header lang={lang}/>
    {item ? (
      <Item lang={lang} category={category} item={item} />
    ) : (
      <ListOfItems showAll={showAll} lang={lang} category={category}/>
    )}

    {/*<Route exact  path={'/:lang/'} component={ListOfItems}/>*/}
    {/*<Route exact path={'/:lang/:category/'} component={ListOfItems}/>*/}
    {/*<Route exact path={'/:lang/:category/:item/'} component={Item}/>*/}
  </Content>);
};
export  default LanguageHandler;