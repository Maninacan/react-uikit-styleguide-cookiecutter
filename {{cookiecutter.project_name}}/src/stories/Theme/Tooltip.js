import React from "react";

const Tooltip = () => (
  <div>
    <button
      className="uk-button uk-button-default"
      data-uk-tooltip="Hello World"
    >
      Hover
    </button>
    <p data-uk-margin="">
      <button
        className="uk-button uk-button-default"
        data-uk-tooltip="Hello World"
      >
        Top
      </button>
      <button
        className="uk-button uk-button-default"
        data-uk-tooltip="title: Hello World; pos: top-left"
      >
        Top Left
      </button>
      <button
        className="uk-button uk-button-default"
        data-uk-tooltip="title: Hello World; pos: top-right"
      >
        Top Right
      </button>
      <button
        className="uk-button uk-button-default"
        data-uk-tooltip="title: Hello World; pos: bottom"
      >
        Bottom
      </button>
      <button
        className="uk-button uk-button-default"
        data-uk-tooltip="title: Hello World; pos: bottom-left"
      >
        Bottom Left
      </button>
      <button
        className="uk-button uk-button-default"
        data-uk-tooltip="title: Hello World; pos: bottom-right"
      >
        Bottom Right
      </button>
      <button
        className="uk-button uk-button-default"
        data-uk-tooltip="title: Hello World; pos: left"
      >
        Left
      </button>
      <button
        className="uk-button uk-button-default"
        data-uk-tooltip="title: Hello World; pos: right"
      >
        Right
      </button>
    </p>
    <button
      className="uk-button uk-button-default"
      data-uk-tooltip="title: Hello World; delay: 500"
    >
      Hover
    </button>
  </div>
);

export default Tooltip;
