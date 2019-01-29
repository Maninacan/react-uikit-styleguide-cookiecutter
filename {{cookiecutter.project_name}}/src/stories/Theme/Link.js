import React from "react";

const Link = () => (
  <div>
    <div>
      <a className="uk-link-muted" href="#">
        Link
      </a>
      <p className="uk-link-muted">
        Lorem ipsum <a href="#">dolor sit</a> amet, consectetur adipiscing elit,
        sed do <a href="#">eiusmod</a> tempor incididunt ut{" "}
        <a href="#">labore et</a> dolore magna aliqua.
      </p>
    </div>
    <ul className="uk-list uk-link-text">
      <li>
        <a href="#">Link</a>
      </li>
      <li>
        <a href="#">Link</a>
      </li>
      <li>
        <a href="#">Link</a>
      </li>
    </ul>
    <h3>
      <a className="uk-link-heading" href="">
        Heading
      </a>
    </h3>
    <div>
      <a className="uk-link-reset" href="#">
        Link
      </a>
      <h3>
        <a className="uk-link-reset" href="">
          Heading
        </a>
      </h3>
    </div>
  </div>
);

export default Link;
