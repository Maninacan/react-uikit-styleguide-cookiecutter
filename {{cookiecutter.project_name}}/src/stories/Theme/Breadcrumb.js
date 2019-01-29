import React from "react";

const Breadcrumb = () => (
  <ul className="uk-breadcrumb">
    <li>
      <a href="#">Item</a>
    </li>
    <li>
      <a href="#">Item</a>
    </li>
    <li className="uk-disabled">
      <a>Disabled</a>
    </li>
    <li>
      <span>Active</span>
    </li>
  </ul>
);

export default Breadcrumb;
