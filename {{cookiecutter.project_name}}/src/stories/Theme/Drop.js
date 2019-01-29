import React from "react";

const Drop = () => (
  <div>
    <div>
      <div className="uk-inline">
        <button className="uk-button uk-button-default" type="button">
          Hover
        </button>
        <div data-uk-drop>
          <div className="uk-card uk-card-body uk-card-default">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </div>
        </div>
      </div>

      <div className="uk-inline">
        <button className="uk-button uk-button-default" type="button">
          Click
        </button>
        <div data-uk-drop="mode: click">
          <div className="uk-card uk-card-body uk-card-default">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </div>
        </div>
      </div>
    </div>
    <div>
      <button className="uk-button uk-button-default" type="button">
        Hover
      </button>
      <div className="uk-width-large" data-uk-drop>
        <div className="uk-card uk-card-body uk-card-default">
          <div className="uk-drop-grid uk-child-width-1-2@m" data-uk-grid>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="uk-inline">
        <button className="uk-button uk-button-default" type="button">
          Top Right
        </button>
        <div data-uk-drop="pos: top-right">
          <div className="uk-card uk-card-body uk-card-default">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </div>
        </div>
      </div>

      <div className="uk-inline">
        <button className="uk-button uk-button-default" type="button">
          Bottom Justify
        </button>
        <div data-uk-drop="pos: bottom-justify">
          <div className="uk-card uk-card-body uk-card-default">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </div>
        </div>
      </div>

      <div className="uk-inline">
        <button className="uk-button uk-button-default" type="button">
          Right Center
        </button>
        <div data-uk-drop="pos: right-center">
          <div className="uk-card uk-card-body uk-card-default">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </div>
        </div>
      </div>
    </div>
    <div className="boundary uk-panel uk-placeholder uk-width-2-3@s">
      <button
        className="uk-button uk-button-default uk-float-left"
        type="button"
      >
        Hover
      </button>
      <div data-uk-drop="boundary: .boundary">
        <div className="uk-card uk-card-body uk-card-default">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </div>
      </div>

      <button
        className="uk-button uk-button-default uk-float-right"
        type="button"
      >
        Hover
      </button>
      <div data-uk-drop="boundary: .boundary">
        <div className="uk-card uk-card-body uk-card-default">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </div>
      </div>
    </div>
    <div className="boundary-align uk-panel uk-placeholder">
      <button
        className="uk-button uk-button-default uk-float-left"
        type="button"
      >
        Justify
      </button>
      <div data-uk-drop="pos: bottom-justify; boundary: .boundary-align; boundary-align: true">
        <div className="uk-card uk-card-body uk-card-default">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </div>
      </div>

      <button
        className="uk-button uk-button-default uk-float-right"
        type="button"
      >
        Center
      </button>
      <div data-uk-drop="pos: bottom-center; boundary: .boundary-align; boundary-align: true">
        <div className="uk-card uk-card-body uk-card-default">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </div>
      </div>
    </div>
    <div>
      <button className="uk-button uk-button-default" type="button">
        Hover
      </button>
      <div data-uk-drop="animation: uk-animation-slide-top-small; duration: 1000">
        <div className="uk-card uk-card-body uk-card-default">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </div>
      </div>
    </div>
  </div>
);

export default Drop;
