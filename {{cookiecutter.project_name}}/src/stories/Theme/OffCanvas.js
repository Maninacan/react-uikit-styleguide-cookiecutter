import React from "react";

const OffCanvas = () => (
  <div>
    <div>
      <button
        className="uk-button uk-button-default uk-margin-small-right"
        type="button"
        data-uk-toggle="target: #offcanvas-usage"
      >
        Open
      </button>
      <div id="offcanvas-usage" data-uk-offcanvas>
        <div className="uk-offcanvas-bar">
          <button className="uk-offcanvas-close" type="button" data-uk-close />

          <h3>Title</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
    <div>
      <button
        className="uk-button uk-button-default"
        type="button"
        data-uk-toggle="target: #offcanvas-overlay"
      >
        Open
      </button>

      <div id="offcanvas-overlay" data-uk-offcanvas="overlay: true">
        <div className="uk-offcanvas-bar">
          <button className="uk-offcanvas-close" type="button" data-uk-close />

          <h3>Title</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
    <div>
      <button
        className="uk-button uk-button-default"
        type="button"
        data-uk-toggle="target: #offcanvas-flip"
      >
        Open
      </button>

      <div id="offcanvas-flip" data-uk-offcanvas="flip: true; overlay: true">
        <div className="uk-offcanvas-bar">
          <button className="uk-offcanvas-close" type="button" data-uk-close />

          <h3>Title</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
    <div>
      <button
        className="uk-button uk-button-default uk-margin-small-right"
        type="button"
        data-uk-toggle="target: #offcanvas-slide"
      >
        Slide
      </button>

      <button
        className="uk-button uk-button-default uk-margin-small-right"
        type="button"
        data-uk-toggle="target: #offcanvas-push"
      >
        Push
      </button>

      <button
        className="uk-button uk-button-default uk-margin-small-right"
        type="button"
        data-uk-toggle="target: #offcanvas-reveal"
      >
        Reveal
      </button>

      <button
        className="uk-button uk-button-default uk-margin-small-right"
        type="button"
        data-uk-toggle="target: #offcanvas-none"
      >
        None
      </button>

      <div id="offcanvas-slide" data-uk-offcanvas="overlay: true">
        <div className="uk-offcanvas-bar">
          <button className="uk-offcanvas-close" type="button" data-uk-close />

          <h3>Title</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div id="offcanvas-push" data-uk-offcanvas="mode: push; overlay: true">
        <div className="uk-offcanvas-bar">
          <button className="uk-offcanvas-close" type="button" data-uk-close />

          <h3>Title</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div
        id="offcanvas-reveal"
        data-uk-offcanvas="mode: reveal; overlay: true"
      >
        <div className="uk-offcanvas-bar">
          <button className="uk-offcanvas-close" type="button" data-uk-close />

          <h3>Title</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div id="offcanvas-none" data-uk-offcanvas="mode: none; overlay: true">
        <div className="uk-offcanvas-bar">
          <button className="uk-offcanvas-close" type="button" data-uk-close />

          <h3>Title</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
    <div>
      <button
        className="uk-button uk-button-default uk-margin-small-right"
        type="button"
        data-uk-toggle="target: #offcanvas-nav-primary"
      >
        Primary Nav
      </button>

      <button
        className="uk-button uk-button-default"
        type="button"
        data-uk-toggle="target: #offcanvas-nav"
      >
        Default Nav
      </button>

      <div id="offcanvas-nav-primary" data-uk-offcanvas="overlay: true">
        <div className="uk-offcanvas-bar uk-flex uk-flex-column">
          <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
            <li className="uk-active">
              <a href="#">Active</a>
            </li>
            <li className="uk-parent">
              <a href="#">Parent</a>
              <ul className="uk-nav-sub">
                <li>
                  <a href="#">Sub item</a>
                </li>
                <li>
                  <a href="#">Sub item</a>
                </li>
              </ul>
            </li>
            <li className="uk-nav-header">Header</li>
            <li>
              <a href="#">
                <span
                  className="uk-margin-small-right"
                  data-uk-icon="icon: table"
                />{" "}
                Item
              </a>
            </li>
            <li>
              <a href="#">
                <span
                  className="uk-margin-small-right"
                  data-uk-icon="icon: thumbnails"
                />{" "}
                Item
              </a>
            </li>
            <li className="uk-nav-divider" />
            <li>
              <a href="#">
                <span
                  className="uk-margin-small-right"
                  data-uk-icon="icon: trash"
                />{" "}
                Item
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div id="offcanvas-nav" data-uk-offcanvas="overlay: true">
        <div className="uk-offcanvas-bar">
          <ul className="uk-nav uk-nav-default">
            <li className="uk-active">
              <a href="#">Active</a>
            </li>
            <li className="uk-parent">
              <a href="#">Parent</a>
              <ul className="uk-nav-sub">
                <li>
                  <a href="#">Sub item</a>
                </li>
                <li>
                  <a href="#">Sub item</a>
                </li>
              </ul>
            </li>
            <li className="uk-nav-header">Header</li>
            <li>
              <a href="#">
                <span
                  className="uk-margin-small-right"
                  data-uk-icon="icon: table"
                />{" "}
                Item
              </a>
            </li>
            <li>
              <a href="#">
                <span
                  className="uk-margin-small-right"
                  data-uk-icon="icon: thumbnails"
                />{" "}
                Item
              </a>
            </li>
            <li className="uk-nav-divider" />
            <li>
              <a href="#">
                <span
                  className="uk-margin-small-right"
                  data-uk-icon="icon: trash"
                />{" "}
                Item
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default OffCanvas;
