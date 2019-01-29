import React from "react";
import darkImage from "../../images/dark.jpg";
import lightImage from "../../images/light.jpg";

const Parallax = () => (
  <div>
    <div
      className="uk-height-large uk-background-cover uk-light uk-flex"
      data-uk-parallax="bgy: -200"
      style={{ backgroundImage: `url(${darkImage})` }}
    >
      <h1 className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        Headline
      </h1>
    </div>
    <div
      className="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top"
      style={{ backgroundImage: `url(${darkImage})` }}
    >
      <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        <h1 data-uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">
          Headline
        </h1>
        <p data-uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
    <div
      className="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top"
      style={{ backgroundImage: `url(${darkImage})` }}
    >
      <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        <h1 data-uk-parallax="opacity: 0,1,1; y: -100,0,0; x: 100,100,0; scale: 2,1,1; viewport: 0.5;">
          Headline
        </h1>
        <p data-uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; viewport: 0.5;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
    <div
      className="uk-height-large uk-background-cover uk-light uk-flex uk-flex-top"
      style={{ backgroundImage: `url(${darkImage})` }}
    >
      <h1
        className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical"
        data-uk-parallax="opacity: 0,1; y: 100,0; viewport: 0.5"
      >
        Headline
      </h1>
    </div>
    <div
      className="uk-height-large uk-background-cover uk-light uk-flex uk-flex-top"
      data-uk-parallax="bgy: -200"
      style={{ backgroundImage: `url(${darkImage})` }}
    >
      <h1
        className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical"
        data-uk-parallax="y: 100,0"
      >
        Headline
      </h1>
    </div>
    <div
      id="test-target"
      className="uk-height-large uk-background-cover uk-light uk-flex uk-flex-top"
      data-uk-parallax="bgy: -200"
      style={{ backgroundImage: `url(${darkImage})` }}
    >
      <h1
        className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical"
        data-uk-parallax="target: #test-target; y: 100,0"
      >
        Headline
      </h1>
    </div>
    <div
      id="test-easing"
      className="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex"
      style={{ backgroundImage: `url(${darkImage})` }}
    >
      <div className="uk-grid uk-margin-auto uk-margin-auto-vertical uk-flex-inline">
        <div>
          <div
            className="uk-card uk-card-default uk-padding-small"
            data-uk-parallax="target: #test-easing; y: 200; easing: 0"
          >
            0
          </div>
        </div>
        <div>
          <div
            className="uk-card uk-card-default uk-padding-small"
            data-uk-parallax="target: #test-easing; y: 200; easing: 0.5"
          >
            0.5
          </div>
        </div>
        <div>
          <div
            className="uk-card uk-card-default uk-padding-small"
            data-uk-parallax="target: #test-easing; y: 200; easing: 0.6"
          >
            0.6
          </div>
        </div>
        <div>
          <div
            className="uk-card uk-card-default uk-padding-small"
            data-uk-parallax="target: #test-easing; y: 200; easing: 0.8"
          >
            0.8
          </div>
        </div>
        <div>
          <div
            className="uk-card uk-card-default uk-padding-small"
            data-uk-parallax="target: #test-easing; y: 200; easing: 1"
          >
            1
          </div>
        </div>
        <div>
          <div
            className="uk-card uk-card-default uk-padding-small"
            data-uk-parallax="target: #test-easing; y: 200; easing: 2"
          >
            2
          </div>
        </div>
        <div>
          <div
            className="uk-card uk-card-default uk-padding-small"
            data-uk-parallax="target: #test-easing; y: 200; easing: 4;"
          >
            4
          </div>
        </div>
      </div>
    </div>
    <div
      id="test-color"
      className="test-color uk-height-large uk-overflow-hidden uk-flex uk-flex-top"
      data-uk-parallax="background-color: yellow,white; border-color: #00f,#f00; viewport: 0.5"
      style={{ border: "10px solid #000" }}
    >
      <h1
        className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical"
        data-uk-parallax="target: #test-target; color: #0f0; viewport: 0.5"
      >
        Headline
      </h1>
    </div>
    <div
      id="test-filter"
      className="uk-height-large uk-background-cover uk-overflow-hidden uk-flex uk-flex-top"
      data-uk-parallax="sepia: 100;"
      style={{ backgroundImage: `url('${lightImage}')` }}
    >
      <h1
        className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical"
        data-uk-parallax="target: #test-filter; blur: 0,10;"
      >
        Headline
      </h1>
    </div>
  </div>
);

export default Parallax;
