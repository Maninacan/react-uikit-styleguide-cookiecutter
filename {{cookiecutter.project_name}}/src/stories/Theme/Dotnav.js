import React from "react";
import photoImage from "../../images/photo.jpg";
import darkImage from "../../images/dark.jpg";
import size1Image from "../../images/size1.jpg";

const Dotnav = () => (
  <div>
    <ul className="uk-dotnav">
      <li className="uk-active">
        <a href="#">Item 1</a>
      </li>
      <li>
        <a href="#">Item 2</a>
      </li>
      <li>
        <a href="#">Item 3</a>
      </li>
      <li>
        <a href="#">Item 4</a>
      </li>
      <li>
        <a href="#">Item 5</a>
      </li>
    </ul>
    <ul className="uk-dotnav uk-dotnav-vertical">
      <li className="uk-active">
        <a href="#">Item 1</a>
      </li>
      <li>
        <a href="#">Item 2</a>
      </li>
      <li>
        <a href="#">Item 3</a>
      </li>
      <li>
        <a href="#">Item 4</a>
      </li>
      <li>
        <a href="#">Item 5</a>
      </li>
    </ul>
    <div className="uk-position-relative uk-light" data-uk-slideshow>
      <ul className="uk-slideshow-items">
        <li>
          <img src={photoImage} alt="" data-uk-cover />
        </li>
        <li>
          <img src={darkImage} alt="" data-uk-cover />
        </li>
        <li>
          <img src={size1Image} alt="" data-uk-cover />
        </li>
      </ul>

      <div className="uk-position-bottom-center uk-position-small">
        <ul className="uk-dotnav">
          <li data-uk-slideshow-item="0">
            <a href="#">Item 1</a>
          </li>
          <li data-uk-slideshow-item="1">
            <a href="#">Item 2</a>
          </li>
          <li data-uk-slideshow-item="2">
            <a href="#">Item 3</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Dotnav;
