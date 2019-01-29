import React from "react";
import lightImage from "../../images/light.jpg";

const Flex = () => (
  <div>
    <div className="uk-flex">
      <div className="uk-card uk-card-default uk-card-body">Item 1</div>
      <div className="uk-card uk-card-default uk-card-body uk-margin-left">
        Item 2
      </div>
      <div className="uk-card uk-card-default uk-card-body uk-margin-left">
        Item 3
      </div>
    </div>
    <div className="uk-flex uk-flex-center">
      <div className="uk-card uk-card-default uk-card-body">Item 1</div>
      <div className="uk-card uk-card-default uk-card-body uk-margin-left">
        Item 2
      </div>
      <div className="uk-card uk-card-default uk-card-body uk-margin-left">
        Item 3
      </div>
    </div>
    <div className="uk-flex uk-flex-center@m uk-flex-right@l">
      <div className="uk-card uk-card-default uk-card-body">Item 1</div>
      <div className="uk-card uk-card-default uk-card-body uk-margin-left">
        Item 2
      </div>
      <div className="uk-card uk-card-default uk-card-body uk-margin-left">
        Item 3
      </div>
    </div>
    <div className="uk-flex uk-flex-middle uk-text-center">
      <div className="uk-card uk-card-default uk-card-body">Item 1</div>
      <div className="uk-card uk-card-default uk-card-body uk-margin-left">
        Item 2<br />
        ...
      </div>
      <div className="uk-card uk-card-default uk-card-body uk-margin-left">
        Item 3<br />
        ...
        <br />
        ...
      </div>
    </div>
    <div className="uk-flex uk-flex-column uk-width-1-3">
      <div className="uk-card uk-card-default uk-card-body">Item 1</div>
      <div className="uk-card uk-card-default uk-card-body uk-margin-top">
        Item 2
      </div>
      <div className="uk-card uk-card-default uk-card-body uk-margin-top">
        Item 3
      </div>
    </div>
    <div className="uk-flex uk-flex-wrap uk-flex-wrap-around uk-background-muted uk-height-medium">
      <div className="uk-width-1-3 uk-card uk-card-default uk-card-body uk-card-small">
        Item 1
      </div>
      <div className="uk-width-1-2 uk-card uk-card-default uk-card-body uk-card-small uk-margin-left">
        Item 2
      </div>
      <div className="uk-width-1-3 uk-card uk-card-default uk-card-body uk-card-small">
        Item 3
      </div>
      <div className="uk-width-1-3 uk-card uk-card-default uk-card-body uk-card-small uk-margin-left">
        Item 4
      </div>
      <div className="uk-width-1-2 uk-card uk-card-default uk-card-body uk-card-small">
        Item 5
      </div>
      <div className="uk-width-1-3 uk-card uk-card-default uk-card-body uk-card-small uk-margin-left">
        Item 6
      </div>
    </div>
    <div className="uk-flex">
      <div className="uk-card uk-card-default uk-card-body uk-flex-last uk-margin-left">
        Item 1
      </div>
      <div className="uk-card uk-card-default uk-card-body uk-flex-first">
        Item 2
      </div>
      <div className="uk-card uk-card-default uk-card-body uk-margin-left">
        Item 3
      </div>
    </div>
    <div className="uk-flex-middle" data-uk-grid>
      <div className="uk-width-2-3@m">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>
      </div>
      <div className="uk-width-1-3@m uk-flex-first">
        <img src={lightImage} alt="Image" />
      </div>
    </div>
  </div>
);

export default Flex;
