import React from "react";
import photoImage from "../../images/photo.jpg";
import darkImage from "../../images/dark.jpg";
import lightImage from "../../images/light.jpg";

const Thumbnav = () => (
  <div>
    <ul className="uk-thumbnav" data-uk-margin="">
      <li className="uk-active">
        <a href="#">
          <img src={photoImage} width="100" alt="" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={darkImage} width="100" alt="" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={lightImage} width="100" alt="" />
        </a>
      </li>
    </ul>
    <ul className="uk-thumbnav uk-thumbnav-vertical" data-uk-margin="">
      <li className="uk-active">
        <a href="#">
          <img src={photoImage} width="100" alt="" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={darkImage} width="100" alt="" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={lightImage} width="100" alt="" />
        </a>
      </li>
    </ul>
    <div className="uk-position-relative" data-uk-slideshow="animation: fade">
      <ul className="uk-slideshow-items">
        <li>
          <img src={photoImage} alt="" data-uk-cover="" />
        </li>
        <li>
          <img src={darkImage} alt="" data-uk-cover="" />
        </li>
        <li>
          <img src={lightImage} alt="" data-uk-cover="" />
        </li>
      </ul>

      <div className="uk-position-bottom-center uk-position-small">
        <ul className="uk-thumbnav">
          <li data-uk-slideshow-item="0">
            <a href="#">
              <img src={photoImage} width="100" alt="" />
            </a>
          </li>
          <li data-uk-slideshow-item="1">
            <a href="#">
              <img src={darkImage} width="100" alt="" />
            </a>
          </li>
          <li data-uk-slideshow-item="2">
            <a href="#">
              <img src={lightImage} width="100" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Thumbnav;
