import React from "react";
import lightImage from "../../images/light.jpg";
import photoImage from "../../images/photo.jpg";
import darkImage from "../../images/dark.jpg";

const Image = () => (
  <div>
    <img data-src={lightImage} width="1800" height="1200" alt="" data-uk-img />
    <img
      data-src="https://images.unsplash.com/photo-1522201949034-507737bce479?fit=crop&w=650&h=433&q=80"
      data-srcset="https://images.unsplash.com/photo-1522201949034-507737bce479?fit=crop&w=650&h=433&q=80 650w,
                  https://images.unsplash.com/photo-1522201949034-507737bce479?fit=crop&w=1300&h=866&q=80 1300w"
      sizes="(min-width: 650px) 650px, 100vw"
      width="650"
      height="433"
      alt=""
      data-uk-img
    />
    <div
      className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
      data-src={photoImage}
      data-uk-img
    >
      <h1>Background Image</h1>
    </div>
    <div
      className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
      data-src="https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80"
      data-srcset="https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80 650w,
                  https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=1300&h=866&q=80 1300w"
      data-sizes="(min-width: 650px) 650px, 100vw"
      data-uk-img
    >
      <h1>Background Image</h1>
    </div>
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabIndex="-1"
      data-uk-slideshow
    >
      <ul className="uk-slideshow-items">
        <li>
          <img
            data-src={photoImage}
            width="1800"
            height="1200"
            alt=""
            data-uk-cover
            data-uk-img="target: !.uk-slideshow-items"
          />
        </li>
        <li>
          <img
            data-src={darkImage}
            width="1800"
            height="1200"
            alt=""
            data-uk-cover
            data-uk-img="target: !.uk-slideshow-items"
          />
        </li>
        <li>
          <img
            data-src={lightImage}
            width="1800"
            height="1200"
            alt=""
            data-uk-cover
            data-uk-img="target: !.uk-slideshow-items"
          />
        </li>
      </ul>

      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-previous
        data-uk-slideshow-item="previous"
      />
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-next
        data-uk-slideshow-item="next"
      />
    </div>
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabIndex="-1"
      data-uk-slideshow
    >
      <ul className="uk-slideshow-items">
        <li>
          <img
            data-src={photoImage}
            width="1800"
            height="1200"
            alt=""
            data-uk-cover
            data-uk-img="target: !ul > :last-child, !* +*"
          />
        </li>
        <li>
          <img
            data-src={darkImage}
            width="1800"
            height="1200"
            alt=""
            data-uk-cover
            data-uk-img="target: !* -*, !* +*"
          />
        </li>
        <li>
          <img
            data-src={lightImage}
            width="1800"
            height="1200"
            alt=""
            data-uk-cover
            data-uk-img="target: !* -*, !ul > :first-child"
          />
        </li>
      </ul>

      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-previous
        data-uk-slideshow-item="previous"
      >
        <span className="icon-left-open" />
      </a>
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-next
        data-uk-slideshow-item="next"
      >
        <span className="icon-right-open" />
      </a>
    </div>
  </div>
);

export default Image;
