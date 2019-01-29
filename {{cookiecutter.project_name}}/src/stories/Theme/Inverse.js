import React from "react";

const Inverse = () => (
  <div>
    <div className="uk-child-width-1-2@s" data-uk-grid>
      <div>
        <div className="uk-light uk-background-secondary uk-padding">
          <h3>Light</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="uk-button uk-button-default">Button</button>
        </div>
      </div>
      <div>
        <div className="uk-dark uk-background-muted uk-padding">
          <h3>Dark</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="uk-button uk-button-default">Button</button>
        </div>
      </div>
    </div>
  </div>
);

export default Inverse;
