import * as React from 'react';
import text from "../data/text";

const DeliveredVideo = (props) => {
  return (
    <>
      <div className="HowToBuy__text Utube-video__title">
        {text.videoTitle[props.lang]}
      </div>
      <div className="Utube-video__container">
        <iframe className="Utube-video__iframe" height="315" src="https://www.youtube.com/embed/UgowrO3xNg4" frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
      </div>
    </>
  );
};

export default DeliveredVideo;