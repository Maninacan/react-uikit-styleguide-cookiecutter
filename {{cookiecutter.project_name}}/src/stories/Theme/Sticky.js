import React from "react";

const Sticky = () => (
  <div>
    <div
      className="uk-card uk-card-default uk-card-body"
      style={{ zIndex: 980 }}
      data-uk-sticky="bottom: #offset"
    >
      Stick to the top
    </div>
    <div
      className="uk-card uk-card-default uk-card-body"
      style={{ zIndex: 980 }}
      data-uk-sticky="offset: 100; bottom: #top"
    >
      Stick 100px below the top
    </div>
    <div className="uk-child-width-1-2@s" data-uk-grid="">
      <div>
        <div
          className="uk-card uk-card-default uk-card-body"
          style={{ zIndex: 980 }}
          data-uk-sticky="top: 200; bottom: #animation"
        >
          Stick to the top but only after 200px scrolling
        </div>
      </div>
      <div>
        <div
          id="container-1"
          className="uk-background-muted uk-height-medium"
          style={{ marginBottom: 200 }}
        >
          <div
            className="uk-card uk-card-default uk-card-body"
            style={{ zIndex: 980 }}
            data-uk-sticky="top: #container-1; bottom: #animation"
          >
            Stick to the top but below the box
          </div>
        </div>
      </div>
    </div>
    <div
      className="uk-card uk-card-default uk-card-body"
      style={{ marginBottom: 200, zIndex: 980 }}
      data-uk-sticky="top: 100; animation: uk-animation-slide-top; bottom: #sticky-on-scroll-up"
    >
      Animation Slide Top
    </div>
    <div
      className="uk-card uk-card-default uk-card-body"
      style={{ marginBottom: 200, zIndex: 980 }}
      data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top; bottom: #bottom"
    >
      Slide in on scroll up
    </div>
    <div className="uk-child-width-1-2@s" data-uk-grid="">
      <div>
        <div className="uk-background-muted uk-height-medium">
          <div className="uk-height-medium uk-background-muted">
            <div
              className="uk-card uk-card-default uk-card-body"
              style={{ zIndex: 980 }}
              data-uk-sticky="bottom: true"
            >
              Stick until the bottom of its parent container
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div
            className="uk-card uk-card-default uk-card-body"
            style={{ zIndex: 980 }}
            data-uk-sticky="bottom: #container-2"
          >
            Stick until the next headline
          </div>
        </div>
      </div>
    </div>

    <h3 id="container-2">Some Headline</h3>
  </div>
);

export default Sticky;
