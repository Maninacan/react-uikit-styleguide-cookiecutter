import React from "react";
import photoImage from "../../images/photo.jpg";
import darkImage from "../../images/dark.jpg";
import lightImage from "../../images/light.jpg";

const Slidenav = () => (
  <div>
    <div>
      <a href="#" data-uk-slidenav-previous />
      <a href="#" data-uk-slidenav-next />
    </div>
    <div>
      <a href="#" className="uk-slidenav-large" data-uk-slidenav-previous />
      <a href="#" className="uk-slidenav-large" data-uk-slidenav-next />
    </div>
    <div className="uk-slidenav-container">
      <a href="" data-uk-slidenav-previous />
      <a href="" data-uk-slidenav-next />
    </div>
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabIndex="-1"
      data-uk-slideshow
    >
      <ul className="uk-slideshow-items">
        <li>
          <img src={photoImage} alt="" data-uk-cover />
        </li>
        <li>
          <img src={darkImage} alt="" data-uk-cover />
        </li>
        <li>
          <img src={lightImage} alt="" data-uk-cover />
        </li>
      </ul>

      <a
        className="uk-slidenav-large uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-previous
        data-uk-slideshow-item="previous"
      />
      <a
        className="uk-slidenav-large uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-next
        data-uk-slideshow-item="next"
      />
    </div>
  </div>
);

export default Slidenav;
