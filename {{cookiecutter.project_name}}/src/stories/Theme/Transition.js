import React from "react";
import darkImage from "../../images/dark.jpg";
import lightImage from "../../images/light.jpg";

const Transition = () => (
  <div>
    <div
      className="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small"
      data-uk-grid=""
    >
      <div className="uk-text-center">
        <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
          <img src={darkImage} alt="" />
          <div className="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">
            <p className="uk-h4 uk-margin-remove">Fade</p>
          </div>
        </div>
        <p className="uk-margin-small-top">Fade</p>
      </div>
      <div className="uk-text-center">
        <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
          <img src={darkImage} alt="" />
          <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
            <p className="uk-h4 uk-margin-remove">Bottom</p>
          </div>
        </div>
        <p className="uk-margin-small-top">Bottom</p>
      </div>
      <div className="uk-text-center">
        <div
          className="uk-inline-clip uk-transition-toggle uk-light"
          tabIndex="0"
        >
          <img src={darkImage} alt="" />
          <div className="uk-position-center">
            <span
              className="uk-transition-fade"
              data-uk-icon="icon: plus; ratio: 2"
            />
          </div>
        </div>
        <p className="uk-margin-small-top">Icon</p>
      </div>
      <div className="uk-text-center">
        <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
          <img src={darkImage} alt="" />
          <img
            className="uk-transition-scale-up uk-position-cover"
            src={lightImage}
            alt=""
          />
        </div>
        <p className="uk-margin-small-top">2 Images</p>
      </div>
      <div className="uk-text-center">
        <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
          <img
            className="uk-transition-scale-up uk-transition-opaque"
            src={darkImage}
            alt=""
          />
        </div>
        <p className="uk-margin-small-top">Scale Up Image</p>
      </div>
      <div className="uk-text-center">
        <div
          className="uk-inline-clip uk-transition-toggle uk-light"
          tabIndex="0"
        >
          <img src={darkImage} alt="" />
          <div className="uk-position-center">
            <div className="uk-transition-slide-top-small">
              <h4 className="uk-margin-remove">Headline</h4>
            </div>
            <div className="uk-transition-slide-bottom-small">
              <h4 className="uk-margin-remove">Subheadline</h4>
            </div>
          </div>
        </div>
        <p className="uk-margin-small-top">Small Top + Bottom</p>
      </div>
    </div>
  </div>
);

export default Transition;
