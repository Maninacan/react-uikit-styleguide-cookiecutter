import React from "react";

const Tab = () => (
  <div>
    <ul data-uk-tab="">
      <li className="uk-active">
        <a href="#">Left</a>
      </li>
      <li>
        <a href="#">Item</a>
      </li>
      <li>
        <a href="#">Item</a>
      </li>
      <li className="uk-disabled">
        <a>Disabled</a>
      </li>
    </ul>
    <ul className="uk-tab-bottom" data-uk-tab="">
      <li className="uk-active">
        <a href="#">Left</a>
      </li>
      <li>
        <a href="#">Item</a>
      </li>
      <li>
        <a href="#">Item</a>
      </li>
    </ul>
    <div className="uk-child-width-1-2@s" data-uk-grid>
      <div>
        <ul className="uk-tab-left" data-uk-tab="">
          <li className="uk-active">
            <a href="#">Left</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
        </ul>
      </div>

      <div>
        <ul className="uk-tab-right" data-uk-tab="">
          <li className="uk-active">
            <a href="#">Right</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div className="uk-margin-medium-top">
        <ul className="uk-flex-center" data-uk-tab="">
          <li className="uk-active">
            <a href="#">Center</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
        </ul>
      </div>

      <div>
        <ul className="uk-flex-right" data-uk-tab="">
          <li className="uk-active">
            <a href="#">Right</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
        </ul>
      </div>

      <div>
        <ul className="uk-child-width-expand" data-uk-tab="">
          <li className="uk-active">
            <a href="#">Justify</a>
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
    </div>
    <ul data-uk-tab="">
      <li className="uk-active">
        <a href="#">Active</a>
      </li>
      <li>
        <a href="#">Item</a>
      </li>
      <li>
        <a href="#">
          More{" "}
          <span
            className="uk-margin-small-left"
            data-uk-icon="icon: triangle-down"
          />
        </a>
        <div data-uk-dropdown="mode: click">
          <ul className="uk-nav uk-dropdown-nav">
            <li className="uk-active">
              <a href="#">Active</a>
            </li>
            <li>
              <a href="#">Item</a>
            </li>
            <li className="uk-nav-header">Header</li>
            <li>
              <a href="#">Item</a>
            </li>
            <li>
              <a href="#">Item</a>
            </li>
            <li className="uk-nav-divider" />
            <li>
              <a href="#">Item</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
);

export default Tab;
