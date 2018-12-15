import * as React from 'react';
import text from "../data/text";

const OtherItemsTitleContainer = (props) => {
  return (
    <div className="OtherItemsTitleContainer">
      <div className="OtherItemsTitleContainer__back-line"/>
      <div className="OtherItemsTitleContainer__text">{text.otherItemsTitle[props.lang]}</div>
    </div>
  );
};
export default OtherItemsTitleContainer;