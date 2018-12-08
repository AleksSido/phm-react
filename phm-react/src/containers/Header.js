import * as React from 'react';
import all from "../data/all";
import {NavLink} from "react-router-dom";
import LogoSvg from "../svg-components/LogoSvg";
import SmartphoneSvg from "../svg-components/SmartphoneSvg";
import MailSvg from "../svg-components/MailSvg";
import text from "../data/text";

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mobileMenuIsShown: false
    };
  }
  toggleMobileMenu = () => {
    this.setState({mobileMenuIsShown: !this.state.mobileMenuIsShown});
  };
  hideMobileMenu = () => {
    this.setState({mobileMenuIsShown: false});
  };
  render(){
    const langLinkString = this.props.lang === 'uk' ? 'ru' : 'uk';
    const langLink = this.props.currentLocation === '/' ? '/' + langLinkString + '/'
      : this.props.currentLocation.replace('/' + this.props.lang + '/','/' + langLinkString + '/');
    const menuCategories = all.map((item, index) => {
      return (
        <NavLink
          onClick={this.hideMobileMenu}
          className="nav__link"
          to={'/' + this.props.lang + '/' + item.idString + '/'}
          key={'menu-category-' + index}>{text[item.idString][this.props.lang]}</NavLink>);
    });
    const headerNavClassName = this.state.mobileMenuIsShown ? "nav nav_m-open" : "nav";
    return (
      <header className="header">
        <div className="header-row">
          <div className="header-contacts">
            <div className="header-contacts__phone">
              <div className="header-contacts__phone-ico">
                <SmartphoneSvg/>
              </div>
              <a href={"tel"+text.tel} className="header-contacts__link">{text.tel}</a>
            </div>
            <div className="header-contacts__mail">
              <div className="header-contacts__mail-ico">
                <MailSvg/>
              </div>
              <a href={"mailto:"+text.mail} className="header-contacts__link">{text.mail}</a>
            </div>
          </div>
          <div className="header-lang">
            <NavLink className="header-lang__link" to={langLink}>{langLinkString}</NavLink>
          </div>
        </div>
        <div className="header-row">
          <NavLink to={'/' + this.props.lang + '/'} className="logo">
            <LogoSvg/>
          </NavLink>
          <div className="header-title-and-motto">
            <h1 className="header-title">{text.siteTitle}</h1>
            <h2 className="header-motto">{text.siteMotto[this.props.lang]}</h2>
          </div>
          <div className="header-link-get__container">
            <a href="">{text.howToBuy[this.props.lang]}</a>
          </div>
        </div>
        <nav id="headerNav" className={headerNavClassName}>
          <div className="nav__m-ico" onClick={this.toggleMobileMenu}>
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
  }
}
export default Header;