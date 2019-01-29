import React from "react";

const Dropdown = () => (
  <div>
    <div>
      <div className="uk-inline">
        <button className="uk-button uk-button-default" type="button">
          Hover
        </button>
        <div data-uk-dropdown>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </div>
      </div>

      <div className="uk-inline">
        <button className="uk-button uk-button-default" type="button">
          Click
        </button>
        <div data-uk-dropdown="mode: click">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </div>
      </div>
    </div>
    <div>
      <button className="uk-button uk-button-default" type="button">
        Hover
      </button>
      <div data-uk-dropdown>
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
    </div>
    <div>
      <button className="uk-button uk-button-default" type="button">
        Hover
      </button>
      <div className="uk-width-large" data-uk-dropdown>
        <div className="uk-dropdown-grid uk-child-width-1-2@m" data-uk-grid>
          <div>
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
          <div>
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
        </div>
      </div>
      <div>
        <div className="uk-inline">
          <button className="uk-button uk-button-default" type="button">
            Top Right
          </button>
          <div data-uk-dropdown="pos: top-right">
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
        </div>

        <div className="uk-inline">
          <button className="uk-button uk-button-default" type="button">
            Bottom Justify
          </button>
          <div data-uk-dropdown="pos: bottom-justify">
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
        </div>

        <div className="uk-inline">
          <button className="uk-button uk-button-default" type="button">
            Right Center
          </button>
          <div data-uk-dropdown="pos: right-center">
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
        </div>
      </div>
    </div>
    <div className="boundary uk-panel uk-placeholder uk-width-2-3@s">
      <button
        className="uk-button uk-button-default uk-float-left"
        type="button"
      >
        Hover
      </button>
      <div data-uk-dropdown="boundary: .boundary">
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

      <button
        className="uk-button uk-button-default uk-float-right"
        type="button"
      >
        Hover
      </button>
      <div data-uk-dropdown="boundary: .boundary">
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
    </div>
    <div className="boundary-align uk-panel uk-placeholder">
      <button
        className="uk-button uk-button-default uk-float-left"
        type="button"
      >
        Justify
      </button>
      <div data-uk-dropdown="pos: bottom-justify; boundary: .boundary-align; boundary-align: true">
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

      <button
        className="uk-button uk-button-default uk-float-right"
        type="button"
      >
        Center
      </button>
      <div data-uk-dropdown="pos: bottom-center; boundary: .boundary-align; boundary-align: true">
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
    </div>
    <div>
      <button className="uk-button uk-button-default" type="button">
        Hover
      </button>
      <div data-uk-dropdown="offset: 80">
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
    </div>
  </div>
);

export default Dropdown;
