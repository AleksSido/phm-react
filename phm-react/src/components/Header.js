import * as React from 'react';
import all from "../data/all";
import {NavLink} from "react-router-dom";
import LogoSvg from "../svg-components/LogoSvg";
import SmartphoneSvg from "../svg-components/SmartphoneSvg";
import MailSvg from "../svg-components/MailSvg";
import text from "../data/text";

const Header = (props) => {
  const langLinkString = props.lang === 'uk' ? 'ru' : 'uk';
  const langLink = props.currentLocation === '/' ? '/' + langLinkString + '/'
    : props.currentLocation.replace('/' + props.lang + '/','/' + langLinkString + '/');
  const menuCategories = all.map((item, index) => {
    return (
      <NavLink
        className="nav__link"
        to={'/' + props.lang + '/' + item.idString + '/'}
        key={'menu-category-' + index}>{text[item.idString][props.lang]}</NavLink>);
  });
  return (
    <header className="header">
      <div className="header-row">
        <div className="header-contacts">
          <div className="header-contacts__phone">
            <div className="header-contacts__phone-ico">
              <SmartphoneSvg/>
            </div>
            <a href="" className="header-contacts__link">{text.tel}</a>
          </div>
          <div className="header-contacts__mail">
            <div className="header-contacts__mail-ico">
              <MailSvg/>
            </div>
            <a href="" className="header-contacts__link">{text.mail}</a>
          </div>
        </div>
        <div className="header-lang">
          <NavLink className="header-lang__link" to={langLink}>{langLinkString}</NavLink>
        </div>
      </div>
      <div className="header-row">
        <NavLink to={'/' + props.lang + '/'} className="logo">
          <LogoSvg/>
        </NavLink>
        <div className="header-title-and-motto">
          <h1 className="header-title">{text.siteTitle}</h1>
          <h2 className="header-motto">{text.siteMotto[props.lang]}</h2>
        </div>
        <div className="header-link-get__container">
          <a href="">{text.howToBuy[props.lang]}</a>
        </div>
      </div>
      <nav id="headerNav" className="nav">
        <div className="nav__m-ico">
          <div className="nav__m-ico-bar"></div>
          <div className="nav__m-ico-bar"></div>
          <div className="nav__m-ico-bar"></div>
        </div>
        <div className="nav__links-container">
          {menuCategories}
        </div>

      </nav>
    </header>
  );
};
export default Header;