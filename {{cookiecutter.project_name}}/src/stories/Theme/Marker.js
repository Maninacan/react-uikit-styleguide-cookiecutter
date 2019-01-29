import React from "react";
import lightImage from "../../images/light.jpg";
import darkImage from "../../images/dark.jpg";

const Marker = () => (
  <div>
    <div className="uk-child-width-1-2" data-uk-grid>
      <div>
        <div className="uk-inline uk-dark">
          <img src={lightImage} alt="" />
          <a
            className="uk-position-absolute uk-transform-center"
            style={{ left: "20%", top: "30%" }}
            href="#"
            data-uk-marker
          >
            <span className="icon-plus" />
          </a>
          <a
            className="uk-position-absolute uk-transform-center"
            style={{ left: "60%", top: "40%" }}
            href="#"
            data-uk-marker
          >
            <span className="icon-plus" />
          </a>
          <a
            className="uk-position-absolute uk-transform-center"
            style={{ left: "80%", top: "70%" }}
            href="#"
            data-uk-marker
          >
            <span className="icon-plus" />
          </a>
        </div>
      </div>
      <div>
        <div className="uk-inline uk-light">
          <img src={darkImage} alt="" />
          <a
            className="uk-position-absolute uk-transform-center"
            style={{ left: "20%", top: "30%" }}
            href="#"
            data-uk-marker
          >
            <span className="icon-plus" />
          </a>
          <a
            className="uk-position-absolute uk-transform-center"
            style={{ left: "60%", top: "40%" }}
            href="#"
            data-uk-marker
          >
            <span className="icon-plus" />
          </a>
          <a
            className="uk-position-absolute uk-transform-center"
            style={{ left: "80%", top: "70%" }}
            href="#"
            data-uk-marker
          >
            <span className="icon-plus" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Marker;
