import React from "react";
import photoImage from "../../images/photo.jpg";
import darkImage from "../../images/dark.jpg";
import lightImage from "../../images/light.jpg";

const Lightbox = () => (
  <div>
    <div data-uk-lightbox>
      <a className="uk-button uk-button-default" href={photoImage}>
        Open Lightbox
      </a>
    </div>
    <div data-uk-lightbox>
      <a
        className="uk-button uk-button-default"
        href={photoImage}
        data-alt="Image"
      >
        Open Lightbox
      </a>
    </div>
    <div data-uk-lightbox>
      <a
        className="uk-button uk-button-default"
        href={photoImage}
        data-caption="Caption"
      >
        Open Lightbox
      </a>
    </div>
    <div>
      <div className="uk-h3">Slide</div>
      <div
        className="uk-child-width-1-3@m"
        data-uk-grid
        data-uk-lightbox="animation: slide"
      >
        <div>
          <a className="uk-inline" href={photoImage} data-caption="Caption 1">
            <img src={photoImage} alt="" />
          </a>
        </div>
        <div>
          <a className="uk-inline" href={darkImage} data-caption="Caption 2">
            <img src={darkImage} alt="" />
          </a>
        </div>
        <div>
          <a className="uk-inline" href={lightImage} data-caption="Caption 3">
            <img src={lightImage} alt="" />
          </a>
        </div>
      </div>

      <div className="uk-h3">Fade</div>
      <div
        className="uk-child-width-1-3@m"
        data-uk-grid
        data-uk-lightbox="animation: fade"
      >
        <div>
          <a className="uk-inline" href={photoImage} data-caption="Caption 1">
            <img src={photoImage} alt="" />
          </a>
        </div>
        <div>
          <a className="uk-inline" href={darkImage} data-caption="Caption 2">
            <img src={darkImage} alt="" />
          </a>
        </div>
        <div>
          <a className="uk-inline" href={lightImage} data-caption="Caption 3">
            <img src={lightImage} alt="" />
          </a>
        </div>
      </div>

      <div className="uk-h3">Scale</div>
      <div
        className="uk-child-width-1-3@m"
        data-uk-grid
        data-uk-lightbox="animation: scale"
      >
        <div>
          <a className="uk-inline" href={photoImage} data-caption="Caption 1">
            <img src={photoImage} alt="" />
          </a>
        </div>
        <div>
          <a className="uk-inline" href={darkImage} data-caption="Caption 2">
            <img src={darkImage} alt="" />
          </a>
        </div>
        <div>
          <a className="uk-inline" href={lightImage} data-caption="Caption 3">
            <img src={lightImage} alt="" />
          </a>
        </div>
      </div>
    </div>
    <div data-uk-lightbox>
      <a
        className="uk-button uk-button-default"
        href={photoImage}
        data-caption="Image"
      >
        Image
      </a>
      <a
        className="uk-button uk-button-default"
        href="https://quirksmode.org/html5/videos/big_buck_bunny.mp4"
        data-caption="Video"
      >
        Video
      </a>
      <a
        className="uk-button uk-button-default"
        href="https://www.youtube.com/watch?v=YE7VzlLtp-4"
        data-caption="YouTube"
      >
        YouTube
      </a>
      <a
        className="uk-button uk-button-default"
        href="https://vimeo.com/1084537"
        data-caption="Vimeo"
      >
        Vimeo
      </a>
      <a
        className="uk-button uk-button-default"
        href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4740.819266853735!2d9.99008871708242!3d53.550454675412404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3f9d24afe84a0263!2sRathaus!5e0!3m2!1sde!2sde!4v1499675200938"
        data-caption="Google Maps"
        data-type="iframe"
      >
        Google Maps
      </a>
    </div>
  </div>
);

export default Lightbox;
