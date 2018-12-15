import * as React from 'react';
import all from "../data/all";
import {NavLink} from "react-router-dom";
import text from "../data/text";
import SmartphoneSvg from "../svg-components/SmartphoneSvg";
import MailSvg from "../svg-components/MailSvg";
import FacebookSvg from "../svg-components/FacebookSvg.js";
import InstragramSvg from "../svg-components/InstagramSvg.js";

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
        <NavLink to={`/${props.lang}/how-to-buy/`}>{text.howToBuy[props.lang]}</NavLink>
      </div>
      <div className="footer__contacts">
        <div className="header-contacts__mail">
          <div className="header-contacts__mail-ico">
            <MailSvg/>
          </div>
          <a href={"mailto:"+text.mail} className="header-contacts__link">{text.mail}</a>
        </div>
        <div className="header-contacts__phone">
          <div className="header-contacts__phone-ico">
            <SmartphoneSvg/>
          </div>
          <a href={"tel"+text.tel} className="header-contacts__link">{text.tel}</a>
        </div>
      </div>
      <div className="social-contacts">
        <a href={"https://www.facebook.com/prykrasyHm"} target="_blank" className="social-contacts__item">
          <FacebookSvg/>
        </a>
        <a href={"https://www.instagram.com/prykrasy_hm/"} target="_blank" className="social-contacts__item">
          <InstragramSvg/>
        </a>
      </div>
      <div className="footer__copyright">{"Copyright © " + currentYear + " " + text.siteTitle}</div>
    </footer>
  );
};
export default Footer;