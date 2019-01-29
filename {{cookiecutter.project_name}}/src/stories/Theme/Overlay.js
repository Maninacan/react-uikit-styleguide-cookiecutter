import React from "react";
import photoImage from "../../images/photo.jpg";
import darkImage from "../../images/dark.jpg";

const Overlay = () => (
  <div>
    <div className="uk-inline">
      <img src={photoImage} alt="" />
      <div className="uk-overlay uk-light uk-position-bottom">
        <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div className="uk-child-width-1-2@m" data-uk-grid>
      <div>
        <div className="uk-inline">
          <img src={photoImage} alt="" />
          <div className="uk-overlay uk-overlay-default uk-position-bottom">
            <p>
              Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-inline">
          <img src={photoImage} alt="" />
          <div className="uk-overlay-default uk-position-cover" />
          <div className="uk-overlay uk-position-bottom uk-dark">
            <p>
              Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="uk-child-width-1-2@m" data-uk-grid>
      <div>
        <div className="uk-inline">
          <img src={photoImage} alt="" />
          <div className="uk-overlay uk-overlay-primary uk-position-bottom">
            <p>
              Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-inline">
          <img src={photoImage} alt="" />
          <div className="uk-overlay-primary uk-position-cover" />
          <div className="uk-overlay uk-position-bottom uk-light">
            <p>
              Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="uk-child-width-1-2@m" data-uk-grid>
      <div>
        <div className="uk-inline uk-light">
          <img src={darkImage} alt="" />
          <div className="uk-position-center">
            <span data-uk-overlay-icon />
          </div>
        </div>
      </div>
      <div>
        <div className="uk-inline uk-dark">
          <img src={photoImage} alt="" />
          <div className="uk-overlay-default uk-position-cover">
            <div className="uk-position-center">
              <span data-uk-overlay-icon />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="uk-child-width-1-2@m" data-uk-grid>
      <div>
        <div className="uk-inline">
          <img src={photoImage} alt="" />
          <div className="uk-overlay uk-overlay-default uk-position-top">
            <p>Top</p>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-inline">
          <img src={photoImage} alt="" />
          <div className="uk-overlay uk-overlay-default uk-position-center">
            <p>Center</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Overlay;
