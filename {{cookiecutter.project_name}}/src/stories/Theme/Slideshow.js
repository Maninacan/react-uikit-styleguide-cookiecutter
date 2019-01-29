import React from "react";
import photoImage from "../../images/photo.jpg";
import darkImage from "../../images/dark.jpg";
import lightImage from "../../images/light.jpg";

const Slideshow = () => (
  <div>
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabIndex="-1"
      data-uk-slideshow=""
    >
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

      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-previous=""
        data-uk-slideshow-item="previous"
      />
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-next=""
        data-uk-slideshow-item="next"
      />
    </div>
    <div className="uk-child-width-1-2@m" data-uk-grid="">
      <div>
        <div className="uk-h3">Slide</div>

        <div
          className="uk-position-relative uk-visible-toggle uk-light"
          tabIndex="-1"
          data-uk-slideshow=""
        >
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

          <a
            className="uk-position-center-left uk-position-small uk-hidden-hover"
            href="#"
            data-uk-slidenav-previous=""
            data-uk-slideshow-item="previous"
          />
          <a
            className="uk-position-center-right uk-position-small uk-hidden-hover"
            href="#"
            data-uk-slidenav-next=""
            data-uk-slideshow-item="next"
          />
        </div>
      </div>
      <div>
        <div className="uk-h3">Fade</div>

        <div
          className="uk-position-relative uk-visible-toggle uk-light"
          tabIndex="-1"
          data-uk-slideshow="animation: fade"
        >
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

          <a
            className="uk-position-center-left uk-position-small uk-hidden-hover"
            href="#"
            data-uk-slidenav-previous=""
            data-uk-slideshow-item="previous"
          />
          <a
            className="uk-position-center-right uk-position-small uk-hidden-hover"
            href="#"
            data-uk-slidenav-next=""
            data-uk-slideshow-item="next"
          />
        </div>
      </div>
      <div>
        <div className="uk-h3">Scale</div>

        <div
          className="uk-position-relative uk-visible-toggle uk-light"
          tabIndex="-1"
          data-uk-slideshow="animation: scale"
        >
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

          <a
            className="uk-position-center-left uk-position-small uk-hidden-hover"
            href="#"
            data-uk-slidenav-previous=""
            data-uk-slideshow-item="previous"
          />
          <a
            className="uk-position-center-right uk-position-small uk-hidden-hover"
            href="#"
            data-uk-slidenav-next=""
            data-uk-slideshow-item="next"
          />
        </div>
      </div>
      <div>
        <div className="uk-h3">Pull</div>

        <div
          className="uk-position-relative uk-visible-toggle uk-light"
          tabIndex="-1"
          data-uk-slideshow="animation: pull"
        >
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

          <a
            className="uk-position-center-left uk-position-small uk-hidden-hover"
            href="#"
            data-uk-slidenav-previous=""
            data-uk-slideshow-item="previous"
          />
          <a
            className="uk-position-center-right uk-position-small uk-hidden-hover"
            href="#"
            data-uk-slidenav-next=""
            data-uk-slideshow-item="next"
          />
        </div>
      </div>
      <div>
        <div className="uk-h3">Push</div>

        <div
          className="uk-position-relative uk-visible-toggle uk-light"
          tabIndex="-1"
          data-uk-slideshow="animation: push"
        >
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

          <a
            className="uk-position-center-left uk-position-small uk-hidden-hover"
            href="#"
            data-uk-slidenav-previous=""
            data-uk-slideshow-item="previous"
          />
          <a
            className="uk-position-center-right uk-position-small uk-hidden-hover"
            href="#"
            data-uk-slidenav-next=""
            data-uk-slideshow-item="next"
          />
        </div>
      </div>
    </div>
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabIndex="-1"
      data-uk-slideshow="ratio: 7:3; animation: push"
    >
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

      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-previous=""
        data-uk-slideshow-item="previous"
      />
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-next=""
        data-uk-slideshow-item="next"
      />
    </div>
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabIndex="-1"
      data-uk-slideshow="min-height: 300; max-height: 600; animation: push"
    >
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

      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-previous=""
        data-uk-slideshow-item="previous"
      />
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-next=""
        data-uk-slideshow-item="next"
      />
    </div>
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabIndex="-1"
      data-uk-slideshow="ratio: false"
    >
      <ul
        className="uk-slideshow-items"
        data-uk-height-viewport="offset-top: true; offset-bottom: 30"
      >
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

      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-previous=""
        data-uk-slideshow-item="previous"
      />
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-next=""
        data-uk-slideshow-item="next"
      />
    </div>
    <div data-uk-slideshow="animation: push">
      <div
        className="uk-position-relative uk-visible-toggle uk-light"
        tabIndex="-1"
      >
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

        <a
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          data-uk-slidenav-previous=""
          data-uk-slideshow-item="previous"
        />
        <a
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          data-uk-slidenav-next=""
          data-uk-slideshow-item="next"
        />
      </div>

      <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin" />
    </div>
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabIndex="-1"
      data-uk-slideshow="animation: push"
    >
      <ul className="uk-slideshow-items">
        <li>
          <img src={photoImage} alt="" data-uk-cover="" />
        </li>
        <li>
          <video autoPlay loop muted playsinline data-uk-cover>
            <source
              src="https://quirksmode.org/html5/videos/big_buck_bunny.mp4"
              type="video/mp4"
            />
            <source
              src="https://quirksmode.org/html5/videos/big_buck_bunny.ogv"
              type="video/ogg"
            />
          </video>
        </li>
        <li>
          <iframe
            src="https://www.youtube-nocookie.com/embed/YE7VzlLtp-4?autoplay=1&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;loop=1&amp;modestbranding=1&amp;wmode=transparent&amp;playsinline=1"
            width="560"
            height="315"
            frameBorder="0"
            allowFullScreen
            data-uk-cover
          />
        </li>
      </ul>

      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-previous=""
        data-uk-slideshow-item="previous"
      />
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-next=""
        data-uk-slideshow-item="next"
      />
    </div>
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabIndex="-1"
      data-uk-slideshow="animation: push"
    >
      <ul className="uk-slideshow-items">
        <li>
          <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
            <img src={photoImage} alt="" data-uk-cover="" />
          </div>
        </li>
        <li>
          <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-top-right">
            <img src={darkImage} alt="" data-uk-cover="" />
          </div>
        </li>
        <li>
          <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-bottom-left">
            <img src={lightImage} alt="" data-uk-cover="" />
          </div>
        </li>
      </ul>

      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-previous=""
        data-uk-slideshow-item="previous"
      />
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-next=""
        data-uk-slideshow-item="next"
      />
    </div>
    <div
      className="uk-position-relative uk-visible-toggle"
      tabIndex="-1"
      data-uk-slideshow="animation: push"
    >
      <ul className="uk-slideshow-items">
        <li>
          <img src={photoImage} alt="" data-uk-cover="" />
          <div className="uk-position-center uk-position-small uk-text-center uk-light">
            <h2 className="uk-margin-remove">Center</h2>
            <p className="uk-margin-remove">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </li>
        <li>
          <img src={darkImage} alt="" data-uk-cover="" />
          <div className="uk-position-bottom uk-position-medium uk-text-center uk-light">
            <h3 className="uk-margin-remove">Bottom</h3>
            <p className="uk-margin-remove">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </li>
        <li>
          <img src={lightImage} alt="" data-uk-cover="" />
          <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center">
            <h3 className="uk-margin-remove">Overlay Bottom</h3>
            <p className="uk-margin-remove">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </li>
        <li>
          <img src={darkImage} alt="" data-uk-cover="" />
          <div className="uk-overlay uk-overlay-default uk-position-bottom-right uk-position-small">
            <h3 className="uk-margin-remove">Overlay Bottom Right</h3>
            <p className="uk-margin-remove">Lorem ipsum dolor sit amet.</p>
          </div>
        </li>
      </ul>

      <div className="uk-light">
        <a
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          data-uk-slidenav-previous=""
          data-uk-slideshow-item="previous"
        />
        <a
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          data-uk-slidenav-next=""
          data-uk-slideshow-item="next"
        />
      </div>
    </div>
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabIndex="-1"
      data-uk-slideshow="animation: push"
    >
      <ul className="uk-slideshow-items">
        <li>
          <img src={photoImage} alt="" data-uk-cover="" />
          <div className="uk-position-center uk-position-small uk-text-center">
            <h2 data-uk-slideshow-parallax="x: 100,-100">Heading</h2>
            <p data-uk-slideshow-parallax="x: 200,-200">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </li>
        <li>
          <img src={darkImage} alt="" data-uk-cover="" />
          <div className="uk-position-center uk-position-small uk-text-center">
            <h2 data-uk-slideshow-parallax="x: 100,-100">Heading</h2>
            <p data-uk-slideshow-parallax="x: 200,-200">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </li>
        <li>
          <img src={lightImage} alt="" data-uk-cover="" />
          <div className="uk-position-center uk-position-small uk-text-center">
            <h2 data-uk-slideshow-parallax="y: -50,0,0; opacity: 1,1,0">
              Heading
            </h2>
            <p data-uk-slideshow-parallax="y: 50,0,0; opacity: 1,1,0">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </li>
      </ul>

      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-previous=""
        data-uk-slideshow-item="previous"
      />
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-next=""
        data-uk-slideshow-item="next"
      />
    </div>
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabIndex="-1"
      data-uk-slideshow="animation: push"
    >
      <ul className="uk-slideshow-items">
        <li>
          <div
            className="uk-position-cover"
            data-uk-slideshow-parallax="scale: 1.2,1.2,1"
          >
            <img src={photoImage} alt="" data-uk-cover="" />
          </div>
          <div
            className="uk-position-cover"
            data-uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"
          />
          <div className="uk-position-center uk-position-medium uk-text-center">
            <div data-uk-slideshow-parallax="scale: 1,1,0.8">
              <h2 data-uk-slideshow-parallax="x: 200,0,0">Heading</h2>
              <p data-uk-slideshow-parallax="x: 400,0,0;">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div
            className="uk-position-cover"
            data-uk-slideshow-parallax="scale: 1.2,1.2,1"
          >
            <img src={darkImage} alt="" data-uk-cover="" />
          </div>
          <div
            className="uk-position-cover"
            data-uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"
          />
          <div className="uk-position-center uk-position-medium uk-text-center">
            <div data-uk-slideshow-parallax="scale: 1,1,0.8">
              <h2 data-uk-slideshow-parallax="x: 200,0,0">Heading</h2>
              <p data-uk-slideshow-parallax="x: 400,0,0;">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div
            className="uk-position-cover"
            data-uk-slideshow-parallax="scale: 1.2,1.2,1"
          >
            <img src={lightImage} alt="" data-uk-cover="" />
          </div>
          <div
            className="uk-position-cover"
            data-uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"
          />
          <div className="uk-position-center uk-position-medium uk-text-center">
            <div data-uk-slideshow-parallax="scale: 1,1,0.8">
              <h2 data-uk-slideshow-parallax="x: 200,0,0">Heading</h2>
              <p data-uk-slideshow-parallax="x: 400,0,0;">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </li>
      </ul>

      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-previous=""
        data-uk-slideshow-item="previous"
      />
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-next=""
        data-uk-slideshow-item="next"
      />
    </div>
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabIndex="-1"
      data-uk-slideshow="animation: fade"
    >
      <ul className="uk-slideshow-items">
        <li>
          <img src={photoImage} alt="" data-uk-cover="" />
          <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
            <h3 className="uk-margin-remove">Bottom</h3>
            <p className="uk-margin-remove">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </li>
        <li>
          <img src={darkImage} alt="" data-uk-cover="" />
          <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
            <h3 className="uk-margin-remove">Bottom</h3>
            <p className="uk-margin-remove">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </li>
        <li>
          <img src={lightImage} alt="" data-uk-cover="" />
          <div className="uk-overlay uk-overlay-primary uk-position-right uk-text-center uk-transition-slide-right uk-width-medium">
            <h3 className="uk-margin-remove">Left</h3>
            <p className="uk-margin-remove">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </li>
      </ul>

      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-previous=""
        data-uk-slideshow-item="previous"
      />
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-next=""
        data-uk-slideshow-item="next"
      />
    </div>
  </div>
);

export default Slideshow;
