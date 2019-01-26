import React from "react"

const Button = () => (
  <div>
    <p data-uk-margin>
      <a className="uk-button uk-button-default" href="#">
        Link
      </a>
      <button className="uk-button uk-button-default">Button</button>
      <button className="uk-button uk-button-default" disabled>
        Disabled
      </button>
    </p>

    <p data-uk-margin>
      <button className="uk-button uk-button-default">Default</button>
      <button className="uk-button uk-button-primary">Primary</button>
      <button className="uk-button uk-button-secondary">Secondary</button>
      <button className="uk-button uk-button-danger">Danger</button>
      <button className="uk-button uk-button-text">Text</button>
      <button className="uk-button uk-button-link">Link</button>
    </p>

    <p data-uk-margin>
      <button className="uk-button uk-button-default uk-button-small">
        Small button
      </button>
      <button className="uk-button uk-button-primary uk-button-small">
        Small button
      </button>
      <button className="uk-button uk-button-secondary uk-button-small">
        Small button
      </button>
    </p>

    <p data-uk-margin>
      <button className="uk-button uk-button-default uk-button-large">
        Large button
      </button>
      <button className="uk-button uk-button-primary uk-button-large">
        Large button
      </button>
      <button className="uk-button uk-button-secondary uk-button-large">
        Large button
      </button>
    </p>

    <button className="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom">
      Button
    </button>
    <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">
      Button
    </button>
    <button className="uk-button uk-button-secondary uk-width-1-1">
      Button
    </button>

    <div>
      <div className="uk-button-group">
        <button className="uk-button uk-button-secondary">Button</button>
        <button className="uk-button uk-button-secondary">Button</button>
        <button className="uk-button uk-button-secondary">Button</button>
      </div>
    </div>

    <div className="uk-margin-small">
      <div className="uk-button-group">
        <button className="uk-button uk-button-primary">Button</button>
        <button className="uk-button uk-button-primary">Button</button>
        <button className="uk-button uk-button-primary">Button</button>
      </div>
    </div>

    <div>
      <div className="uk-button-group">
        <button className="uk-button uk-button-danger">Button</button>
        <button className="uk-button uk-button-danger">Button</button>
        <button className="uk-button uk-button-danger">Button</button>
      </div>
    </div>

    <div className="uk-inline">
      <button className="uk-button uk-button-default" type="button">
        Dropdown
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

    <div className="uk-button-group">
      <button className="uk-button uk-button-default">Dropdown</button>
      <div className="uk-inline">
        <button className="uk-button uk-button-default" type="button">
          <span data-uk-icon="icon:  triangle-down" />
        </button>
        <div data-uk-dropdown="mode: click; boundary: ! .uk-button-group; boundary-align: true;">
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
)

export default Button
