import * as React from 'react';
import Header from "./Header";
import ListOfItems from "../containers/ListOfItems";
import Item from "../containers/Item";
import {Helmet} from "react-helmet";

const LanguageHandler = (props) => {
  const lang = props.match.params.lang ? props.match.params.lang : 'uk';
  const category = props.match.params.category ? props.match.params.category : 'all';
  const item = props.match.params.item ? props.match.params.item : false;
  const showAll = category === 'all';
  return (<>
    <Helmet>

      <title>Main page</title>
    </Helmet>

    <Header lang={lang} currentLocation={props.location.pathname}/>

    {item ? (
      <Item lang={lang} category={category} item={item} />
    ) : (
      <ListOfItems showAll={showAll} lang={lang} category={category}/>
    )}
  </>);
};
export default LanguageHandler;