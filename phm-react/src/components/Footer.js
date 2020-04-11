import * as React from 'react';
import all from "../data/all";
import {NavLink} from "react-router-dom";
import text from "../data/text";
import FacebookSvg from "../svg-components/FacebookSvg.js";
import InstragramSvg from "../svg-components/InstagramSvg.js";
import HeaderContacts from "./HeaderContacts";

const Footer = (props) => {
  const menuCategories = all.map((item, index) => {
    return (
      <NavLink
        className="nav__link"
        activeClassName="nav__link_active"
        to={'/' + props.lang + '/' + item.idString + '/'}
        key={'menu-category-' + index}>{text[item.idString][props.lang]}</NavLink>);
  });
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer className="footer">
      <nav className="footer-nav">
        {menuCategories}
      </nav>
      <div className="footer-link-get__container">
        <NavLink to={`/${props.lang}/about/`} className={'footer-link-get__item'}>{text.about.pageTitle[props.lang]}</NavLink>
        <NavLink to={`/${props.lang}/how-to-buy/`} className={'footer-link-get__item'}>{text.howToBuy[props.lang]}</NavLink>
        <NavLink to={`/${props.lang}/how-to-order/`} className={'footer-link-get__item'}>{text.howToOrder.link[props.lang]}</NavLink>
        <NavLink to={`/${props.lang}/reasons-to-buy/`}  className={'footer-link-get__item'}>{text.reasonsToBuy.linkLabel[props.lang]}</NavLink>
      </div>
      <div className="footer__contacts">
       <HeaderContacts lang={props.lang}/>
      </div>
      <div className="social-contacts">
        <a href={"https://www.facebook.com/prykrasyHm"} target="_blank" rel="noopener noreferrer" className="social-contacts__item">
          <FacebookSvg/>
        </a>
        <a href={"https://www.instagram.com/prykrasy_hm/"} target="_blank" rel="noopener noreferrer" className="social-contacts__item">
          <InstragramSvg/>
        </a>
      </div>
      <div className="footer__copyright">{"Copyright © " + currentYear + " " + text.siteTitle}</div>
    </footer>
  );
};
export default Footer;