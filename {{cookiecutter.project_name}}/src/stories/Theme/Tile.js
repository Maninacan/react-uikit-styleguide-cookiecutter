import React from "react";

const Tile = () => (
  <div>
    <div
      className="uk-child-width-1-2@s uk-grid-collapse uk-text-center"
      data-uk-grid
    >
      <div>
        <div className="uk-tile uk-tile-default">
          <p className="uk-h4">Default</p>
        </div>
      </div>
      <div>
        <div className="uk-tile uk-tile-muted">
          <p className="uk-h4">Muted</p>
        </div>
      </div>
      <div>
        <div className="uk-tile uk-tile-primary">
          <p className="uk-h4">Primary</p>
        </div>
      </div>
      <div>
        <div className="uk-tile uk-tile-secondary">
          <p className="uk-h4">Secondary</p>
        </div>
      </div>
    </div>
    <div
      className="uk-child-width-1-3@s uk-grid-small uk-text-center"
      data-uk-grid
    >
      <div>
        <div className="uk-tile uk-tile-muted uk-padding-remove">
          <p className="uk-h4">Remove</p>
        </div>
      </div>
      <div>
        <div className="uk-tile uk-tile-primary uk-padding-small">
          <p className="uk-h4">Small</p>
        </div>
      </div>
      <div>
        <div className="uk-tile uk-tile-secondary uk-padding-large">
          <p className="uk-h4">Large</p>
        </div>
      </div>
    </div>
  </div>
);

export default Tile;
