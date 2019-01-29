import React from "react";
import slider1Image from "../../images/slider1.jpg";
import slider2Image from "../../images/slider2.jpg";
import slider3Image from "../../images/slider3.jpg";
import slider4Image from "../../images/slider4.jpg";
import slider5Image from "../../images/slider5.jpg";
import photoImage from "../../images/photo.jpg";
import photo2Image from "../../images/photo2.jpg";
import photo3Image from "../../images/photo3.jpg";
import darkImage from "../../images/dark.jpg";
import lightImage from "../../images/light.jpg";

const Slider = () => (
  <div>
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabIndex="-1"
      data-uk-slider
    >
      <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
        <li>
          <img src={slider1Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>1</h1>
          </div>
        </li>
        <li>
          <img src={slider2Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>2</h1>
          </div>
        </li>
        <li>
          <img src={slider3Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>3</h1>
          </div>
        </li>
        <li>
          <img src={slider4Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>4</h1>
          </div>
        </li>
        <li>
          <img src={slider5Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>5</h1>
          </div>
        </li>
        <li>
          <img src={slider1Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>6</h1>
          </div>
        </li>
        <li>
          <img src={slider2Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>7</h1>
          </div>
        </li>
        <li>
          <img src={slider3Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>8</h1>
          </div>
        </li>
        <li>
          <img src={slider4Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>9</h1>
          </div>
        </li>
        <li>
          <img src={slider5Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>10</h1>
          </div>
        </li>
      </ul>

      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-previous
        data-uk-slider-item="previous"
      />
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-next
        data-uk-slider-item="next"
      />
    </div>
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabIndex="-1"
      data-uk-slider
    >
      <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
        <li>
          <div className="uk-panel">
            <img src={slider1Image} alt="" />
            <div className="uk-position-center uk-panel">
              <h1>1</h1>
            </div>
          </div>
        </li>
        <li>
          <div className="uk-panel">
            <img src={slider2Image} alt="" />
            <div className="uk-position-center uk-panel">
              <h1>2</h1>
            </div>
          </div>
        </li>
        <li>
          <div className="uk-panel">
            <img src={slider3Image} alt="" />
            <div className="uk-position-center uk-panel">
              <h1>3</h1>
            </div>
          </div>
        </li>
        <li>
          <div className="uk-panel">
            <img src={slider4Image} alt="" />
            <div className="uk-position-center uk-panel">
              <h1>4</h1>
            </div>
          </div>
        </li>
        <li>
          <div className="uk-panel">
            <img src={slider5Image} alt="" />
            <div className="uk-position-center uk-panel">
              <h1>5</h1>
            </div>
          </div>
        </li>
        <li>
          <div className="uk-panel">
            <img src={slider1Image} alt="" />
            <div className="uk-position-center uk-panel">
              <h1>6</h1>
            </div>
          </div>
        </li>
        <li>
          <div className="uk-panel">
            <img src={slider2Image} alt="" />
            <div className="uk-position-center uk-panel">
              <h1>7</h1>
            </div>
          </div>
        </li>
        <li>
          <div className="uk-panel">
            <img src={slider3Image} alt="" />
            <div className="uk-position-center uk-panel">
              <h1>8</h1>
            </div>
          </div>
        </li>
        <li>
          <div className="uk-panel">
            <img src={slider4Image} alt="" />
            <div className="uk-position-center uk-panel">
              <h1>9</h1>
            </div>
          </div>
        </li>
        <li>
          <div className="uk-panel">
            <img src={slider5Image} alt="" />
            <div className="uk-position-center uk-panel">
              <h1>10</h1>
            </div>
          </div>
        </li>
      </ul>

      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-previous
        data-uk-slider-item="previous"
      />
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-next
        data-uk-slider-item="next"
      />
    </div>
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabIndex="-1"
      data-uk-slider="center: true"
    >
      <ul className="uk-slider-items uk-grid">
        <li className="uk-width-3-4">
          <div className="uk-panel">
            <img src={photoImage} alt="" />
            <div className="uk-position-center uk-panel">
              <h1>1</h1>
            </div>
          </div>
        </li>
        <li className="uk-width-3-4">
          <div className="uk-panel">
            <img src={darkImage} alt="" />
            <div className="uk-position-center uk-panel">
              <h1>2</h1>
            </div>
          </div>
        </li>
        <li className="uk-width-3-4">
          <div className="uk-panel">
            <img src={lightImage} alt="" />
            <div className="uk-position-center uk-panel">
              <h1>3</h1>
            </div>
          </div>
        </li>
        <li className="uk-width-3-4">
          <div className="uk-panel">
            <img src={photo2Image} alt="" />
            <div className="uk-position-center uk-panel">
              <h1>4</h1>
            </div>
          </div>
        </li>
        <li className="uk-width-3-4">
          <div className="uk-panel">
            <img src={photo3Image} alt="" />
            <div className="uk-position-center uk-panel">
              <h1>5</h1>
            </div>
          </div>
        </li>
      </ul>

      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-previous
        data-uk-slider-item="previous"
      />
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-next
        data-uk-slider-item="next"
      />
    </div>
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabIndex="-1"
      data-uk-slider="sets: true"
    >
      <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m">
        <li>
          <img src={slider1Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>1</h1>
          </div>
        </li>
        <li>
          <img src={slider2Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>2</h1>
          </div>
        </li>
        <li>
          <img src={slider3Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>3</h1>
          </div>
        </li>
        <li>
          <img src={slider4Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>4</h1>
          </div>
        </li>
        <li>
          <img src={slider5Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>5</h1>
          </div>
        </li>
        <li>
          <img src={slider1Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>6</h1>
          </div>
        </li>
        <li>
          <img src={slider2Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>7</h1>
          </div>
        </li>
        <li>
          <img src={slider3Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>8</h1>
          </div>
        </li>
        <li>
          <img src={slider4Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>9</h1>
          </div>
        </li>
        <li>
          <img src={slider5Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>10</h1>
          </div>
        </li>
      </ul>

      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-previous
        data-uk-slider-item="previous"
      />
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-next
        data-uk-slider-item="next"
      />
    </div>
    <div data-uk-slider>
      <div
        className="uk-position-relative uk-visible-toggle uk-light"
        tabIndex="-1"
      >
        <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
          <li>
            <img src={slider1Image} alt="" />
            <div className="uk-position-center uk-panel">
              <h1>1</h1>
            </div>
          </li>
          <li>
            <img src={slider2Image} alt="" />
            <div className="uk-position-center uk-panel">
              <h1>2</h1>
            </div>
          </li>
          <li>
            <img src={slider3Image} alt="" />
            <div className="uk-position-center uk-panel">
              <h1>3</h1>
            </div>
          </li>
          <li>
            <img src={slider4Image} alt="" />
            <div className="uk-position-center uk-panel">
              <h1>4</h1>
            </div>
          </li>
          <li>
            <img src={slider5Image} alt="" />
            <div className="uk-position-center uk-panel">
              <h1>5</h1>
            </div>
          </li>
          <li>
            <img src={slider1Image} alt="" />
            <div className="uk-position-center uk-panel">
              <h1>6</h1>
            </div>
          </li>
          <li>
            <img src={slider2Image} alt="" />
            <div className="uk-position-center uk-panel">
              <h1>7</h1>
            </div>
          </li>
          <li>
            <img src={slider3Image} alt="" />
            <div className="uk-position-center uk-panel">
              <h1>8</h1>
            </div>
          </li>
          <li>
            <img src={slider4Image} alt="" />
            <div className="uk-position-center uk-panel">
              <h1>9</h1>
            </div>
          </li>
          <li>
            <img src={slider5Image} alt="" />
            <div className="uk-position-center uk-panel">
              <h1>10</h1>
            </div>
          </li>
        </ul>

        <a
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          data-uk-slidenav-previous
          data-uk-slider-item="previous"
        />
        <a
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          data-uk-slidenav-next
          data-uk-slider-item="next"
        />
      </div>

      <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin" />
    </div>
    <div data-uk-slider>
      <div className="uk-position-relative">
        <div className="uk-slider-container uk-light">
          <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
            <li>
              <img src={slider1Image} alt="" />
              <div className="uk-position-center uk-panel">
                <h1>1</h1>
              </div>
            </li>
            <li>
              <img src={slider2Image} alt="" />
              <div className="uk-position-center uk-panel">
                <h1>2</h1>
              </div>
            </li>
            <li>
              <img src={slider3Image} alt="" />
              <div className="uk-position-center uk-panel">
                <h1>3</h1>
              </div>
            </li>
            <li>
              <img src={slider4Image} alt="" />
              <div className="uk-position-center uk-panel">
                <h1>4</h1>
              </div>
            </li>
            <li>
              <img src={slider5Image} alt="" />
              <div className="uk-position-center uk-panel">
                <h1>5</h1>
              </div>
            </li>
            <li>
              <img src={slider1Image} alt="" />
              <div className="uk-position-center uk-panel">
                <h1>6</h1>
              </div>
            </li>
            <li>
              <img src={slider2Image} alt="" />
              <div className="uk-position-center uk-panel">
                <h1>7</h1>
              </div>
            </li>
            <li>
              <img src={slider3Image} alt="" />
              <div className="uk-position-center uk-panel">
                <h1>8</h1>
              </div>
            </li>
            <li>
              <img src={slider4Image} alt="" />
              <div className="uk-position-center uk-panel">
                <h1>9</h1>
              </div>
            </li>
            <li>
              <img src={slider5Image} alt="" />
              <div className="uk-position-center uk-panel">
                <h1>10</h1>
              </div>
            </li>
          </ul>
        </div>

        <div className="uk-hidden@s uk-light">
          <a
            className="uk-position-center-left uk-position-small"
            href="#"
            data-uk-slidenav-previous
            data-uk-slider-item="previous"
          />
          <a
            className="uk-position-center-right uk-position-small"
            href="#"
            data-uk-slidenav-next
            data-uk-slider-item="next"
          />
        </div>

        <div className="uk-visible@s">
          <a
            className="uk-position-center-left-out uk-position-small"
            href="#"
            data-uk-slidenav-previous
            data-uk-slider-item="previous"
          />
          <a
            className="uk-position-center-right-out uk-position-small"
            href="#"
            data-uk-slidenav-next
            data-uk-slider-item="next"
          />
        </div>
      </div>

      <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin" />
    </div>
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabIndex="-1"
      data-uk-slider="center: true"
    >
      <ul
        className="uk-slider-items uk-grid uk-grid-match"
        data-uk-height-viewport="offset-top: true; offset-bottom: 30"
      >
        <li className="uk-width-3-4">
          <div className="uk-cover-container">
            <img src={photoImage} alt="" data-uk-cover />
            <div className="uk-position-center uk-panel">
              <h1>1</h1>
            </div>
          </div>
        </li>
        <li className="uk-width-3-4">
          <div className="uk-cover-container">
            <img src={darkImage} alt="" data-uk-cover />
            <div className="uk-position-center uk-panel">
              <h1>2</h1>
            </div>
          </div>
        </li>
        <li className="uk-width-3-4">
          <div className="uk-cover-container">
            <img src={lightImage} alt="" data-uk-cover />
            <div className="uk-position-center uk-panel">
              <h1>3</h1>
            </div>
          </div>
        </li>
        <li className="uk-width-3-4">
          <div className="uk-cover-container">
            <img src={photo2Image} alt="" data-uk-cover />
            <div className="uk-position-center uk-panel">
              <h1>4</h1>
            </div>
          </div>
        </li>
        <li className="uk-width-3-4">
          <div className="uk-cover-container">
            <img src={photo3Image} alt="" data-uk-cover />
            <div className="uk-position-center uk-panel">
              <h1>5</h1>
            </div>
          </div>
        </li>
      </ul>

      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-previous
        data-uk-slider-item="previous"
      />
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-next
        data-uk-slider-item="next"
      />
    </div>
    <div data-uk-slider="center: true">
      <div
        className="uk-position-relative uk-visible-toggle uk-light"
        tabIndex="-1"
      >
        <ul className="uk-slider-items uk-child-width-1-2@s uk-grid">
          <li>
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top">
                <img src={photoImage} alt="" />
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Headline</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top">
                <img src={darkImage} alt="" />
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Headline</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top">
                <img src={lightImage} alt="" />
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Headline</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top">
                <img src={photo2Image} alt="" />
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Headline</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top">
                <img src={photo3Image} alt="" />
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Headline</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </li>
        </ul>

        <a
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          data-uk-slidenav-previous
          data-uk-slider-item="previous"
        />
        <a
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          data-uk-slidenav-next
          data-uk-slider-item="next"
        />
      </div>

      <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin" />
    </div>
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabIndex="-1"
      data-uk-slider
    >
      <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
        <li>
          <img src={slider1Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>1</h1>
          </div>
        </li>
        <li>
          <img src={slider2Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>2</h1>
          </div>
        </li>
        <li>
          <img src={slider3Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>3</h1>
          </div>
        </li>
        <li>
          <img src={slider4Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>4</h1>
          </div>
        </li>
        <li>
          <img src={slider5Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>5</h1>
          </div>
        </li>
        <li>
          <img src={slider1Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>6</h1>
          </div>
        </li>
        <li>
          <img src={slider2Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>7</h1>
          </div>
        </li>
        <li>
          <img src={slider3Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>8</h1>
          </div>
        </li>
        <li>
          <img src={slider4Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>9</h1>
          </div>
        </li>
        <li>
          <img src={slider5Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1>10</h1>
          </div>
        </li>
      </ul>

      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-previous
        data-uk-slider-item="previous"
      />
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-next
        data-uk-slider-item="next"
      />
    </div>
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabIndex="-1"
      data-uk-slider
    >
      <ul className="uk-slider-items uk-grid">
        <li className="uk-width-4-5">
          <div className="uk-panel">
            <img src={photoImage} alt="" />
            <div className="uk-position-center uk-text-center">
              <h2 data-uk-slider-parallax="x: 100,-100">Heading</h2>
              <p data-uk-slider-parallax="x: 200,-200">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </li>
        <li className="uk-width-4-5">
          <div className="uk-panel">
            <img src={darkImage} alt="" />
            <div className="uk-position-center uk-text-center">
              <h2 data-uk-slider-parallax="x: 100,-100">Heading</h2>
              <p data-uk-slider-parallax="x: 200,-200">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </li>
        <li className="uk-width-4-5">
          <div className="uk-panel">
            <img src={lightImage} alt="" />
            <div className="uk-position-center uk-text-center">
              <h2 data-uk-slider-parallax="x: 100,-100">Heading</h2>
              <p data-uk-slider-parallax="x: 200,-200">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </li>
        <li className="uk-width-4-5">
          <div className="uk-panel">
            <img src={photo2Image} alt="" />
            <div className="uk-position-center uk-text-center">
              <h2 data-uk-slider-parallax="x: 100,-100">Heading</h2>
              <p data-uk-slider-parallax="x: 200,-200">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </li>
        <li className="uk-width-4-5">
          <div className="uk-panel">
            <img src={photo3Image} alt="" />
            <div className="uk-position-center uk-text-center">
              <h2 data-uk-slider-parallax="x: 100,-100">Heading</h2>
              <p data-uk-slider-parallax="x: 200,-200">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </li>
      </ul>

      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-previous
        data-uk-slider-item="previous"
      />
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-next
        data-uk-slider-item="next"
      />
    </div>
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabIndex="-1"
      data-uk-slider="clsActivated: uk-transition-active; center: true"
    >
      <ul className="uk-slider-items uk-grid">
        <li className="uk-width-3-4">
          <div className="uk-panel">
            <img src={photoImage} alt="" />
            <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
              <h3 className="uk-margin-remove">Bottom</h3>
              <p className="uk-margin-remove">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </li>
        <li className="uk-width-3-4">
          <div className="uk-panel">
            <img src={darkImage} alt="" />
            <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
              <h3 className="uk-margin-remove">Bottom</h3>
              <p className="uk-margin-remove">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </li>
        <li className="uk-width-3-4">
          <div className="uk-panel">
            <img src={lightImage} alt="" />
            <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
              <h3 className="uk-margin-remove">Bottom</h3>
              <p className="uk-margin-remove">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </li>
        <li className="uk-width-3-4">
          <div className="uk-panel">
            <img src={photo2Image} alt="" />
            <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
              <h3 className="uk-margin-remove">Bottom</h3>
              <p className="uk-margin-remove">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </li>
        <li className="uk-width-3-4">
          <div className="uk-panel">
            <img src={photo3Image} alt="" />
            <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
              <h3 className="uk-margin-remove">Bottom</h3>
              <p className="uk-margin-remove">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </li>
      </ul>

      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-previous
        data-uk-slider-item="previous"
      />
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-next
        data-uk-slider-item="next"
      />
    </div>
    <div data-uk-slider>
      <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-light">
        <li className="uk-transition-toggle" tabIndex="0">
          <img src={slider1Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1 className="uk-transition-slide-bottom-small">1</h1>
          </div>
        </li>
        <li className="uk-transition-toggle" tabIndex="0">
          <img src={slider2Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1 className="uk-transition-slide-bottom-small">2</h1>
          </div>
        </li>
        <li className="uk-transition-toggle" tabIndex="0">
          <img src={slider3Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1 className="uk-transition-slide-bottom-small">3</h1>
          </div>
        </li>
        <li className="uk-transition-toggle" tabIndex="0">
          <img src={slider4Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1 className="uk-transition-slide-bottom-small">4</h1>
          </div>
        </li>
        <li className="uk-transition-toggle" tabIndex="0">
          <img src={slider5Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1 className="uk-transition-slide-bottom-small">5</h1>
          </div>
        </li>
        <li className="uk-transition-toggle" tabIndex="0">
          <img src={slider1Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1 className="uk-transition-slide-bottom-small">6</h1>
          </div>
        </li>
        <li className="uk-transition-toggle" tabIndex="0">
          <img src={slider2Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1 className="uk-transition-slide-bottom-small">7</h1>
          </div>
        </li>
        <li className="uk-transition-toggle" tabIndex="0">
          <img src={slider3Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1 className="uk-transition-slide-bottom-small">8</h1>
          </div>
        </li>
        <li className="uk-transition-toggle" tabIndex="0">
          <img src={slider4Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1 className="uk-transition-slide-bottom-small">9</h1>
          </div>
        </li>
        <li className="uk-transition-toggle" tabIndex="0">
          <img src={slider5Image} alt="" />
          <div className="uk-position-center uk-panel">
            <h1 className="uk-transition-slide-bottom-small">10</h1>
          </div>
        </li>
      </ul>

      <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin" />
    </div>
  </div>
);

export default Slider;
