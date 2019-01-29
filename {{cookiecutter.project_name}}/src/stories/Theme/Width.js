import React from "react";

const Width = () => (
  <div>
    <div>
      <div className="uk-text-center" data-uk-grid="">
        <div className="uk-width-1-3">
          <div className="uk-card uk-card-default uk-card-body">1-3</div>
        </div>
        <div className="uk-width-1-3">
          <div className="uk-card uk-card-default uk-card-body">1-3</div>
        </div>
        <div className="uk-width-1-3">
          <div className="uk-card uk-card-default uk-card-body">1-3</div>
        </div>
      </div>

      <div className="uk-text-center" data-uk-grid="">
        <div className="uk-width-1-2">
          <div className="uk-card uk-card-default uk-card-body">1-2</div>
        </div>
        <div className="uk-width-1-2">
          <div className="uk-card uk-card-default uk-card-body">1-2</div>
        </div>
      </div>

      <div className="uk-text-center" data-uk-grid="">
        <div className="uk-width-1-4">
          <div className="uk-card uk-card-default uk-card-body">1-4</div>
        </div>
        <div className="uk-width-3-4">
          <div className="uk-card uk-card-default uk-card-body">3-4</div>
        </div>
      </div>
    </div>
    <div className="uk-text-center" data-uk-grid="">
      <div className="uk-width-auto">
        <div className="uk-card uk-card-default uk-card-body">Auto</div>
      </div>
      <div className="uk-width-expand">
        <div className="uk-card uk-card-default uk-card-body">Expand</div>
      </div>
    </div>
    <div
      className="uk-child-width-1-4 uk-grid-small uk-text-center"
      data-uk-grid=""
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
    </div>
    <div
      className="uk-child-width-expand uk-grid-small uk-text-center"
      data-uk-grid=""
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
    </div>
    <div>
      <div className="uk-width-small uk-margin">
        <div className="uk-card uk-card-small uk-card-default uk-card-body">
          Small
        </div>
      </div>
      <div className="uk-width-medium uk-margin">
        <div className="uk-card uk-card-small uk-card-default uk-card-body">
          Medium
        </div>
      </div>
      <div className="uk-width-large uk-margin">
        <div className="uk-card uk-card-small uk-card-default uk-card-body">
          Large
        </div>
      </div>
      <div className="uk-width-xlarge uk-margin">
        <div className="uk-card uk-card-small uk-card-default uk-card-body">
          X Large
        </div>
      </div>
      <div className="uk-width-xxlarge uk-margin">
        <div className="uk-card uk-card-small uk-card-default uk-card-body">
          XX Large
        </div>
      </div>
    </div>
    <div
      className="uk-child-width-expand uk-grid-small uk-text-center"
      data-uk-grid=""
    >
      <div>
        <div className="uk-card uk-card-default uk-card-body">Expand</div>
      </div>
      <div className="uk-width-1-3">
        <div className="uk-card uk-card-default uk-card-body">1-3</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Expand</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body">Expand</div>
      </div>
    </div>
    <div>
      <div
        className="uk-grid-match uk-grid-small uk-text-center"
        data-uk-grid=""
      >
        <div className="uk-width-1-2@m">
          <div className="uk-card uk-card-default uk-card-body">1-2@m</div>
        </div>
        <div className="uk-width-1-4@m">
          <div className="uk-card uk-card-default uk-card-body">1-4@m</div>
        </div>
        <div className="uk-width-1-4@m">
          <div className="uk-card uk-card-default uk-card-body">1-4@m</div>
        </div>
        <div className="uk-width-1-5@m uk-hidden@l">
          <div className="uk-card uk-card-secondary uk-card-body">
            1-5@m
            <br />
            hidden@l
          </div>
        </div>
        <div className="uk-width-1-5@m uk-width-1-3@l">
          <div className="uk-card uk-card-default uk-card-body">
            1-5@m
            <br />
            1-3@l
          </div>
        </div>
        <div className="uk-width-3-5@m uk-width-2-3@l">
          <div className="uk-card uk-card-default uk-card-body">
            3-5@m
            <br />
            2-3@l
          </div>
        </div>
      </div>

      <div
        className="uk-grid-match uk-grid-small uk-text-center"
        data-uk-grid=""
      >
        <div className="uk-width-auto@m uk-visible@l">
          <div className="uk-card uk-card-primary uk-card-body">
            auto@m
            <br />
            visible@l
          </div>
        </div>
        <div className="uk-width-1-3@m">
          <div className="uk-card uk-card-default uk-card-body">1-3@m</div>
        </div>
        <div className="uk-width-expand@m">
          <div className="uk-card uk-card-default uk-card-body">expand@m</div>
        </div>
      </div>
    </div>
  </div>
);

export default Width;
