import * as React from 'react';
import BeadsSvg from "../svg-components/BeadsSvg";

const PageTitleContainer = (props) => {
  return (
    <div className="page-title__container">
      <div className="page-title__ico">
        <BeadsSvg/>
      </div>
      <h1 className="page-title">{props.children}</h1>
      <div className="page-title__ico">
        <BeadsSvg/>
      </div>
    </div>
  );
};
export default PageTitleContainer;