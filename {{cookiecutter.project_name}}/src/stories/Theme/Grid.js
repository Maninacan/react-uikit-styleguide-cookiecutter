import React from "react";

const Grid = () => (
  <div>
    <div className="uk-child-width-expand@s uk-text-center" data-uk-grid>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
    </div>
    <div
      className="uk-grid-small uk-child-width-expand@s uk-text-center"
      data-uk-grid
    >
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
    </div>
    <div
      className="uk-grid-medium uk-child-width-expand@s uk-text-center"
      data-uk-grid
    >
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
    </div>
    <div
      className="uk-grid-large uk-child-width-expand@s uk-text-center"
      data-uk-grid
    >
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
    </div>
    <div
      className="uk-grid-collapse uk-child-width-expand@s uk-text-center"
      data-uk-grid
    >
      <div>
        <div className="uk-background-muted uk-padding">Item</div>
      </div>
      <div>
        <div className="uk-background-primary uk-padding uk-light">Item</div>
      </div>
      <div>
        <div className="uk-background-secondary uk-padding uk-light">Item</div>
      </div>
    </div>
    <div className="uk-child-width-1-2 uk-text-center" data-uk-grid>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div className="uk-child-width-1-2 uk-text-center" data-uk-grid>
          <div>
            <div className="uk-card uk-card-primary uk-card-body">Item</div>
          </div>
          <div>
            <div className="uk-card uk-card-primary uk-card-body">Item</div>
          </div>
        </div>
      </div>
    </div>
    <div className="uk-grid-divider uk-child-width-expand@s" data-uk-grid>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </div>
      <div>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </div>
    </div>
    <div
      className="uk-grid-match uk-child-width-expand@s uk-text-center"
      data-uk-grid
    >
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">
          Item
          <br />
          ...
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">
          Item
          <br />
          ...
          <br />
          ...
        </div>
      </div>
    </div>
    <div className="uk-child-width-expand@s" data-uk-grid>
      <div className="uk-grid-item-match">
        <div className="uk-card uk-card-default uk-card-body">
          <h3>Heading</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div>
        <h3>Heading</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <div
      className="uk-child-width-expand@s uk-text-center"
      data-uk-grid
      data-uk-height-match="target: > div > .uk-card"
    >
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">
          Item
          <br />
          ...
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">
          Item
          <br />
          ...
          <br />
          ...
        </div>
      </div>
    </div>
    <div className="uk-text-center" data-uk-grid>
      <div className="uk-width-auto@m">
        <div className="uk-card uk-card-default uk-card-body">Auto</div>
      </div>
      <div className="uk-width-1-3@m">
        <div className="uk-card uk-card-default uk-card-body">1-3</div>
      </div>
      <div className="uk-width-expand@m">
        <div className="uk-card uk-card-default uk-card-body">Expand</div>
      </div>
    </div>
    <div
      className="uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center"
      data-uk-grid
    >
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
    </div>
    <div
      className="uk-grid-small uk-child-width-1-4@s uk-flex-center uk-text-center"
      data-uk-grid
    >
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item 1</div>
      </div>
      <div className="uk-flex-last">
        <div className="uk-card uk-card-secondary uk-card-body">Item 2</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item 3</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item 4</div>
      </div>
      <div className="uk-flex-first">
        <div className="uk-card uk-card-primary uk-card-body">Item 5</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item 6</div>
      </div>
    </div>
    <div
      className="uk-child-width-1-2@s uk-child-width-1-3@m"
      data-uk-grid="masonry: true"
    >
      <div>
        <div
          className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
          data-style="height: 100px"
        >
          Item
        </div>
      </div>
      <div>
        <div
          className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
          data-style="height: 130px"
        >
          Item
        </div>
      </div>
      <div>
        <div
          className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
          data-style="height: 150px"
        >
          Item
        </div>
      </div>
      <div>
        <div
          className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
          data-style="height: 160px"
        >
          Item
        </div>
      </div>
      <div>
        <div
          className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
          data-style="height: 120px"
        >
          Item
        </div>
      </div>
      <div>
        <div
          className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
          data-style="height: 140px"
        >
          Item
        </div>
      </div>
      <div>
        <div
          className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
          data-style="height: 200px"
        >
          Item
        </div>
      </div>
      <div>
        <div
          className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
          data-style="height: 180px"
        >
          Item
        </div>
      </div>
      <div>
        <div
          className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
          data-style="height: 140px"
        >
          Item
        </div>
      </div>
    </div>
    <div
      className="uk-child-width-expand@s uk-text-center"
      data-uk-grid="parallax: 150"
    >
      <div>
        <div className="uk-card uk-card-default uk-card-body uk-grid-margin">
          Item
        </div>
        <div className="uk-card uk-card-default uk-card-body uk-grid-margin">
          Item
        </div>
        <div className="uk-card uk-card-default uk-card-body uk-grid-margin">
          Item
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body uk-grid-margin">
          Item
        </div>
        <div className="uk-card uk-card-default uk-card-body uk-grid-margin">
          Item
        </div>
        <div className="uk-card uk-card-default uk-card-body uk-grid-margin">
          Item
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body uk-grid-margin">
          Item
        </div>
        <div className="uk-card uk-card-default uk-card-body uk-grid-margin">
          Item
        </div>
        <div className="uk-card uk-card-default uk-card-body uk-grid-margin">
          Item
        </div>
      </div>
    </div>
    <div
      className="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-text-center"
      data-uk-grid="parallax: 150"
    >
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Item</div>
      </div>
    </div>
  </div>
);

export default Grid;
