import React from "react";

const Sortable = () => (
  <div>
    <ul
      className="uk-grid-small uk-child-width-1-2 uk-child-width-1-4@s uk-text-center"
      data-uk-sortable="handle: .uk-card"
      data-uk-grid=""
    >
      <li>
        <div className="uk-card uk-card-default uk-card-body">Item 1</div>
      </li>
      <li>
        <div className="uk-card uk-card-default uk-card-body">Item 2</div>
      </li>
      <li>
        <div className="uk-card uk-card-default uk-card-body">Item 3</div>
      </li>
      <li>
        <div className="uk-card uk-card-default uk-card-body">Item 4</div>
      </li>
      <li>
        <div className="uk-card uk-card-default uk-card-body">Item 5</div>
      </li>
      <li>
        <div className="uk-card uk-card-default uk-card-body">Item 6</div>
      </li>
      <li>
        <div className="uk-card uk-card-default uk-card-body">Item 7</div>
      </li>
      <li>
        <div className="uk-card uk-card-default uk-card-body">Item 8</div>
      </li>
    </ul>
    <ul
      className="uk-grid-small uk-child-width-1-2 uk-child-width-1-4@s uk-text-center"
      data-uk-sortable="handle: .uk-sortable-handle"
      data-uk-grid=""
    >
      <li>
        <div className="uk-card uk-card-default uk-card-body">
          <span
            className="icon-menu uk-sortable-handle uk-margin-small-right"
            data-uk-icon=""
          />
          Item 1
        </div>
      </li>
      <li>
        <div className="uk-card uk-card-default uk-card-body">
          <span
            className="icon-menu uk-sortable-handle uk-margin-small-right"
            data-uk-icon=""
          />
          Item 2
        </div>
      </li>
      <li>
        <div className="uk-card uk-card-default uk-card-body">
          <span
            className="icon-menu uk-sortable-handle uk-margin-small-right"
            data-uk-icon=""
          />
          Item 3
        </div>
      </li>
      <li>
        <div className="uk-card uk-card-default uk-card-body">
          <span
            className="icon-menu uk-sortable-handle uk-margin-small-right"
            data-uk-icon=""
          />
          Item 4
        </div>
      </li>
      <li>
        <div className="uk-card uk-card-default uk-card-body">
          <span
            className="icon-menu uk-sortable-handle uk-margin-small-right"
            data-uk-icon=""
          />
          Item 5
        </div>
      </li>
      <li>
        <div className="uk-card uk-card-default uk-card-body">
          <span
            className="icon-menu uk-sortable-handle uk-margin-small-right"
            data-uk-icon=""
          />
          Item 6
        </div>
      </li>
      <li>
        <div className="uk-card uk-card-default uk-card-body">
          <span
            className="icon-menu uk-sortable-handle uk-margin-small-right"
            data-uk-icon=""
          />
          Item 7
        </div>
      </li>
      <li>
        <div className="uk-card uk-card-default uk-card-body">
          <span
            className="icon-menu uk-sortable-handle uk-margin-small-right"
            data-uk-icon=""
          />
          Item 8
        </div>
      </li>
    </ul>
    <div className="uk-child-width-1-3@s" data-uk-grid="">
      <div>
        <h4>Group 1</h4>
        <div data-uk-sortable="group: sortable-group">
          <div className="uk-margin">
            <div className="uk-card uk-card-default uk-card-body uk-card-small">
              Item 1
            </div>
          </div>
          <div className="uk-margin">
            <div className="uk-card uk-card-default uk-card-body uk-card-small">
              Item 2
            </div>
          </div>
          <div className="uk-margin">
            <div className="uk-card uk-card-default uk-card-body uk-card-small">
              Item 3
            </div>
          </div>
          <div className="uk-margin">
            <div className="uk-card uk-card-default uk-card-body uk-card-small">
              Item 4
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4>Group 2</h4>
        <div data-uk-sortable="group: sortable-group">
          <div className="uk-margin">
            <div className="uk-card uk-card-default uk-card-body uk-card-small">
              Item 1
            </div>
          </div>
          <div className="uk-margin">
            <div className="uk-card uk-card-default uk-card-body uk-card-small">
              Item 2
            </div>
          </div>
          <div className="uk-margin">
            <div className="uk-card uk-card-default uk-card-body uk-card-small">
              Item 3
            </div>
          </div>
          <div className="uk-margin">
            <div className="uk-card uk-card-default uk-card-body uk-card-small">
              Item 4
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h4>Empty Group</h4>
      <div data-uk-sortable="group: sortable-group" />
    </div>
    <ul
      className="uk-nav uk-nav-default uk-width-medium"
      data-uk-sortable="cls-custom: uk-box-shadow-small uk-flex uk-flex-middle uk-background"
    >
      <li className="uk-active">
        <a href="#">Active</a>
      </li>
      <li>
        <a href="#">Item</a>
      </li>
      <li>
        <a href="#">Item</a>
      </li>
      <li>
        <a href="#">Item</a>
      </li>
      <li>
        <a href="#">Item</a>
      </li>
    </ul>
  </div>
);

export default Sortable;
