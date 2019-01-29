import React from "react";

const Subnav = () => (
  <div>
    <ul className="uk-subnav" data-uk-margin="">
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
        <span>Disabled</span>
      </li>
    </ul>
    <ul className="uk-subnav uk-subnav-divider" data-uk-margin="">
      <li className="uk-active">
        <a href="#">Active</a>
      </li>
      <li>
        <a href="#">Item</a>
      </li>
      <li>
        <a href="#">Item</a>
      </li>
    </ul>
    <ul className="uk-subnav uk-subnav-pill" data-uk-margin="">
      <li className="uk-active">
        <a href="#">Active</a>
      </li>
      <li>
        <a href="#">Item</a>
      </li>
      <li>
        <a href="#">Item</a>
      </li>
    </ul>
    <ul className="uk-subnav uk-subnav-pill" data-uk-margin="">
      <li className="uk-active">
        <a href="#">Active</a>
      </li>
      <li>
        <a href="#">Item</a>
      </li>
      <li>
        <a href="#">
          More <span data-uk-icon="icon:  triangle-down" />
        </a>
        <div data-uk-dropdown="mode: click;">
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

export default Subnav;
