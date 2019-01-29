import React from "react";

const Icon = () => (
  <div>
    <div className="uk-child-width-1-3@s" data-uk-grid>
      <div>
        <div className="uk-height-small uk-card uk-card-default uk-card-body uk-flex uk-flex-center uk-flex-middle">
          Small
        </div>
      </div>
      <div>
        <div className="uk-height-medium uk-card uk-card-default uk-card-body uk-flex uk-flex-center uk-flex-middle">
          Medium
        </div>
      </div>
      <div>
        <div className="uk-height-large uk-card uk-card-default uk-card-body uk-flex uk-flex-center uk-flex-middle">
          Large
        </div>
      </div>
    </div>
    <div
      className="uk-child-width-1-2@s"
      data-uk-grid
      data-uk-height-match="target: > div > .uk-card"
    >
      <div>
        <div className="uk-card uk-card-default uk-card-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Lorem Ipsum</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Lorem Ipsum</div>
      </div>
    </div>
    <div
      className="uk-child-width-1-2@s"
      data-uk-grid
      data-uk-height-match="target: > div > .uk-card; row: false"
    >
      <div className="uk-first-column">
        <div className="uk-card uk-card-default uk-card-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Lorem Ipsum</div>
      </div>
      <div className="uk-grid-margin uk-first-column">
        <div className="uk-card uk-card-default uk-card-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div className="uk-grid-margin">
        <div className="uk-card uk-card-default uk-card-body">Lorem Ipsum</div>
      </div>
    </div>
  </div>
);

export default Icon;
