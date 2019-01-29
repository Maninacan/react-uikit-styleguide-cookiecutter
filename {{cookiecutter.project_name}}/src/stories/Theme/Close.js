import React from "react";

const Close = () => (
  <div>
    <div>
      <button type="button" data-uk-close />
    </div>
    <div>
      <button className="uk-close-large" type="button" data-uk-close />
    </div>
    <div data-uk-alert>
      <button className="uk-alert-close" type="button" data-uk-close />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
    </div>
    <div className="uk-inline">
      <button className="uk-button uk-button-default" type="button">
        Click
      </button>
      <div data-uk-drop="mode: click">
        <div className="uk-card uk-card-body uk-card-default">
          <button className="uk-drop-close" type="button" data-uk-close />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
      </div>
    </div>
    <a className="uk-button uk-button-default" data-uk-toggle="target: #modal">
      Open modal
    </a>
    <div id="modal" data-uk-modal>
      <div className="uk-modal-dialog uk-modal-body">
        <button
          className="uk-modal-close-default"
          type="button"
          data-uk-close
        />
        <h2 className="uk-modal-title">Headline</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="uk-text-right">
          <button
            className="uk-button uk-button-default uk-modal-close"
            type="button"
          >
            Cancel
          </button>
          <button className="uk-button uk-button-primary" type="button">
            Save
          </button>
        </p>
      </div>
    </div>
  </div>
);

export default Close;
