import React from "react"
import lightImage from "../../images/uikit-theme-images/light.jpg"
import avatarImage from "../../images/uikit-theme-images/avatar.jpg"

const Card = () => (
  <div>
    <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
      <h3 className="uk-card-title">Default</h3>
      <p>
        Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div
      className="uk-child-width-1-3@m uk-grid-small uk-grid-match"
      data-uk-grid
    >
      <div>
        <div className="uk-card uk-card-default uk-card-body">
          <h3 className="uk-card-title">Default</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-primary uk-card-body">
          <h3 className="uk-card-title">Primary</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-secondary uk-card-body">
          <h3 className="uk-card-title">Secondary</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
    <div className="uk-child-width-1-2@s uk-grid-match" data-uk-grid>
      <div>
        <div className="uk-card uk-card-hover uk-card-body">
          <h3 className="uk-card-title">Hover</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-hover uk-card-body">
          <h3 className="uk-card-title">Default</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-primary uk-card-hover uk-card-body uk-light">
          <h3 className="uk-card-title">Primary</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-secondary uk-card-hover uk-card-body uk-light">
          <h3 className="uk-card-title">Secondary</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
    <div className="uk-child-width-1-2@s" data-uk-grid>
      <div>
        <div className="uk-card uk-card-default uk-card-small uk-card-body">
          <h3 className="uk-card-title">Small</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-large uk-card-body">
          <h3 className="uk-card-title">Large</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
    <div className="uk-card uk-card-default uk-width-1-2@m">
      <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle" data-uk-grid>
          <div className="uk-width-auto">
            <img
              className="uk-border-circle"
              width="40"
              height="40"
              src={avatarImage}
            />
          </div>
          <div className="uk-width-expand">
            <h3 className="uk-card-title uk-margin-remove-bottom">Title</h3>
            <p className="uk-text-meta uk-margin-remove-top">
              <time dateTime="2016-04-01T19:00">April 01, 2016</time>
            </p>
          </div>
        </div>
      </div>
      <div className="uk-card-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className="uk-card-footer">
        <a href="#" className="uk-button uk-button-text">
          Read more
        </a>
      </div>
    </div>
    <div className="uk-child-width-1-2@m" data-uk-grid>
      <div>
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
            <img src={lightImage} alt="" />
          </div>
          <div className="uk-card-body">
            <h3 className="uk-card-title">Media Top</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-default">
          <div className="uk-card-body">
            <h3 className="uk-card-title">Media Bottom</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="uk-card-media-bottom">
            <img src={lightImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Card
