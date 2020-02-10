import * as React from 'react';
import ListOfItems from "../containers/ListOfItems";
import Item from "../containers/Item";
import {Helmet} from "react-helmet";
import HowToBuy from "./HowToBuy";
import Page from "./Page";
import text from "../data/text";
import ReactGA from "react-ga";
import Reasons from "./Reasons";

const LanguageHandler = (props) => {
  const lang = props.match.params.lang ? props.match.params.lang : 'uk';
  const category = props.match.params.category ? props.match.params.category : 'all';
  const item = props.match.params.item ? props.match.params.item : false;
  const showAll = category === 'all';

  if (process.env.NODE_ENV === 'production') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  if (category === 'how-to-buy') {
    return (
      <Page lang={lang} currentLocation={props.location.pathname}>
        <HowToBuy lang={lang}/>
      </Page>
      );
  }
  if (category === 'reasons-to-buy') {
    return (
      <Page lang={lang} currentLocation={props.location.pathname}>
        <Reasons lang={lang}/>
      </Page>
      );
  }
  return (<>
    <Helmet>
      <meta name="description" content={text.metaDescription[lang]}/>
      <title>{text.siteTitle}</title>
    </Helmet>
    <Page lang={lang} currentLocation={props.location.pathname}>
      {item ? (
        <>
          <Item lang={lang} category={category} item={item} />
          <ListOfItems showAll={showAll} lang={lang} category={category} exceptFor={item}/>
        </>
      ) : (
        <ListOfItems showAll={showAll} lang={lang} category={category}/>
      )}
    </Page>
  </>);
};
export default LanguageHandler;