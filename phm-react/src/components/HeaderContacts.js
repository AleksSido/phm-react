import * as React from 'react';
import SmartphoneSvg from "../svg-components/SmartphoneSvg";
import text from "../data/text";
import CopySvg from "../svg-components/CopySvg";
import MailSvg from "../svg-components/MailSvg";

class HeaderContacts extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      isPhoneCopied: false,
      isMailCopied: false
    };
  }

  copyContact = (contact, stateProp) => {
    const textField = document.createElement('textarea');
    textField.innerText =  contact;
    if (document.body) {
      document.body.appendChild(textField);
      textField.select();
      document.execCommand('copy');
      textField.remove();
    }
    this.setState({[stateProp]: true});
  };
  render(){
    const contactsPhoneClassName = this.state.isPhoneCopied ?
      "header-contacts__phone header-contacts__phone_copied"
      : "header-contacts__phone";
    const contactsMailClassName = this.state.isMailCopied ?
      "header-contacts__mail header-contacts__mail_copied"
      : "header-contacts__mail";
    return (
      <>
        <div className={contactsPhoneClassName}>
          <div className="header-contacts__phone-ico">
            <SmartphoneSvg/>
          </div>
          <a href={"tel:"+text.tel} className="header-contacts__link">{text.tel}</a>
          <div className="header-contacts__copy-btn" onClick={()=>this.copyContact(text.tel, 'isPhoneCopied')}>
            <CopySvg/>
          </div>
        </div>
        <div className={contactsMailClassName}>
          <div className="header-contacts__mail-ico">
            <MailSvg/>
          </div>
          <a href={"mailto:"+text.mail} className="header-contacts__link">{text.mail}</a>
          <div className="header-contacts__copy-btn" onClick={()=>this.copyContact(text.mail, 'isMailCopied')}>
            <CopySvg/>
          </div>
        </div>
      </>
    );
  }
}

export default HeaderContacts;