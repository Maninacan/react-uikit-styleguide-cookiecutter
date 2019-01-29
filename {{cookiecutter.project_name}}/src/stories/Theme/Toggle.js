import React from "react";

const Toggle = () => (
  <div>
    <div>
      <button
        className="uk-button uk-button-default"
        type="button"
        data-uk-toggle="target: #toggle-usage"
      >
        Toggle
      </button>
      <p id="toggle-usage">What's up?</p>
    </div>
    <div>
      <button
        className="uk-button uk-button-default"
        type="button"
        data-uk-toggle="target: .toggle"
      >
        Toggle
      </button>
      <p className="toggle">Hello!</p>
      <p className="toggle" hidden>
        Bazinga!
      </p>
    </div>
    <div>
      <button
        className="uk-button uk-button-default"
        type="button"
        data-uk-toggle="target: #toggle-custom; cls: uk-card-primary"
      >
        Toggle
      </button>
      <div
        id="toggle-custom"
        className="uk-card uk-card-default uk-card-body uk-margin-small"
      >
        Custom class
      </div>
    </div>
    <div>
      <button
        href="#toggle-animation"
        className="uk-button uk-button-default"
        type="button"
        data-uk-toggle="target: #toggle-animation; animation: uk-animation-fade"
      >
        Toggle
      </button>
      <div
        id="toggle-animation"
        className="uk-card uk-card-default uk-card-body uk-margin-small"
      >
        Animation
      </div>
    </div>
    <div>
      <button
        className="uk-button uk-button-default"
        type="button"
        data-uk-toggle="target: #toggle-animation-multiple; animation:  uk-animation-slide-left, uk-animation-slide-bottom"
      >
        Toggle
      </button>
      <div
        id="toggle-animation-multiple"
        className="uk-card uk-card-default uk-card-body uk-margin-small"
      >
        Animation
      </div>
    </div>
    <div>
      <button
        className="uk-button uk-button-default"
        type="button"
        data-uk-toggle="target: .toggle-animation-queued; animation: uk-animation-fade; queued: true; duration: 300"
      >
        Toggle
      </button>
      <p className="toggle-animation-queued uk-card uk-card-default uk-card-body uk-margin-small">
        Animation
      </p>
      <p
        className="toggle-animation-queued uk-card uk-card-primary uk-card-body uk-margin-small"
        hidden
      >
        Animation
      </p>
    </div>
    <div>
      <button
        className="uk-button uk-button-default"
        type="button"
        data-uk-toggle="target: #toggle-hover; mode: hover"
      >
        hover
      </button>
      <p id="toggle-hover">What's up?</p>
    </div>
    <div>
      <div
        className="uk-card uk-card-default uk-card-body uk-width-medium"
        data-uk-toggle="cls: uk-card-primary; mode: media; media: @l"
      >
        Primary on large screens
      </div>
    </div>
  </div>
);

export default Toggle;
