import * as React from 'react';
import text from "../data/text";
import {Link} from "react-router-dom";

const Announcement = (props) => {
  return (
    <div className="Announcement">
      <div className="Announcement__heading">{text.announcement290820.heading[props.lang]}</div>
      <Link className="Announcement__linkText" to={`/${props.lang}/fairs/fair_announcement_290820`}>
        {text.announcement290820.linkText[props.lang]}</Link>
    </div>
  );
};

export default Announcement;