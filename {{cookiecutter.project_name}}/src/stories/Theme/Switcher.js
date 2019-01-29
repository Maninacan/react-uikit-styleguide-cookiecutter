import React from "react";

const Switcher = () => (
  <div>
    <div>
      <ul className="uk-subnav uk-subnav-pill" data-uk-switcher="">
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

      <ul className="uk-switcher uk-margin">
        <li>Hello!</li>
        <li>Hello again!</li>
        <li>Bazinga!</li>
      </ul>
    </div>

    <div>
      <ul className="uk-subnav uk-subnav-pill" data-uk-switcher="">
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
      <ul className="uk-switcher uk-margin">
        <li>
          Hello!{" "}
          <a href="#" data-uk-switcher-item="2">
            Switch to item 3
          </a>
        </li>
        <li>
          Hello again!{" "}
          <a href="#" data-uk-switcher-item="next">
            Next item
          </a>
        </li>
        <li>
          Bazinga!{" "}
          <a href="#" data-uk-switcher-item="previous">
            Previous item
          </a>
        </li>
      </ul>
    </div>

    <div>
      <ul
        className="uk-subnav uk-subnav-pill"
        data-uk-switcher="connect: .switcher-container"
      >
        <li>
          <a href="#">Active</a>
        </li>
        <li>
          <a href="#">Item</a>
        </li>
        <li>
          <a href="#">Item</a>
        </li>
      </ul>

      <h4>Container 1</h4>

      <ul className="uk-switcher switcher-container uk-margin">
        <li>Hello!</li>
        <li>Hello again!</li>
        <li>Bazinga!</li>
      </ul>

      <h4>Container 2</h4>

      <ul className="uk-switcher switcher-container uk-margin">
        <li>Hello! The first item.</li>
        <li>Hello again! The second item.</li>
        <li>Bazinga! The third item.</li>
      </ul>
    </div>

    <div>
      <ul
        className="uk-subnav uk-subnav-pill"
        data-uk-switcher="animation: uk-animation-fade"
      >
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

      <ul className="uk-switcher uk-margin">
        <li>Hello!</li>
        <li>Hello again!</li>
        <li>Bazinga!</li>
      </ul>
    </div>
    <div>
      <ul
        className="uk-subnav uk-subnav-pill"
        data-uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium"
      >
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

      <ul className="uk-switcher uk-margin">
        <li>Hello!</li>
        <li>Hello again!</li>
        <li>Bazinga!</li>
      </ul>
    </div>
    <div>
      <ul className="uk-subnav uk-subnav-pill" data-uk-switcher="">
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

      <ul className="uk-switcher uk-margin">
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </li>
        <li>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </li>
        <li>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur, sed do eiusmod.
        </li>
      </ul>
    </div>
    <div>
      <ul data-uk-tab>
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

      <ul className="uk-switcher uk-margin">
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </li>
        <li>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </li>
        <li>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur, sed do eiusmod.
        </li>
      </ul>
    </div>
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid>
        <div>
          <div data-uk-grid>
            <div className="uk-width-auto@m">
              <ul
                className="uk-tab-left"
                data-uk-tab="connect: #component-tab-left; animation: uk-animation-fade"
              >
                <li>
                  <a href="#">Active</a>
                </li>
                <li>
                  <a href="#">Item</a>
                </li>
                <li>
                  <a href="#">Item</a>
                </li>
              </ul>
            </div>
            <div className="uk-width-expand@m">
              <ul id="component-tab-left" className="uk-switcher">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur, sed do eiusmod.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div data-uk-grid>
            <div className="uk-width-auto@m uk-flex-last@m">
              <ul
                className="uk-tab-right"
                data-uk-tab="connect: #component-tab-right; animation: uk-animation-fade"
              >
                <li>
                  <a href="#">Active</a>
                </li>
                <li>
                  <a href="#">Item</a>
                </li>
                <li>
                  <a href="#">Item</a>
                </li>
              </ul>
            </div>
            <div className="uk-width-expand@m">
              <ul id="component-tab-right" className="uk-switcher">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur, sed do eiusmod.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div data-uk-switcher="animation: uk-animation-fade; toggle: > *">
        <button className="uk-button uk-button-default" type="button">
          Item
        </button>
        <button className="uk-button uk-button-default" type="button">
          Item
        </button>
        <button className="uk-button uk-button-default" type="button">
          Item
        </button>
      </div>

      <ul className="uk-switcher uk-margin">
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </li>
        <li>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </li>
        <li>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur, sed do eiusmod.
        </li>
      </ul>
    </div>
    <div data-uk-grid>
      <div className="uk-width-small@m">
        <ul
          className="uk-nav uk-nav-default"
          data-uk-switcher="connect: #component-nav; animation: uk-animation-fade"
        >
          <li>
            <a href="#">Active</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
        </ul>
      </div>
      <div className="uk-width-expand@m">
        <ul id="component-nav" className="uk-switcher">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </li>
          <li>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur, sed do eiusmod.
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Switcher;
