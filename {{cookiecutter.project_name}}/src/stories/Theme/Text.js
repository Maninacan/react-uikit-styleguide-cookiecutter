import React from "react";
import avatarImage from "../../images/avatar.jpg";

const Text = () => (
  <div>
    <div className="uk-child-width-1-3@s uk-grid-small" data-uk-grid="">
      <div>
        <div className="uk-card uk-card-default uk-card-small">
          <div className="uk-text-left uk-card-body">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.{" "}
            <code>.uk-text-left</code>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-small">
          <div className="uk-text-right uk-card-body">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.{" "}
            <code>.uk-text-right</code>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-small">
          <div className="uk-text-center uk-card-body">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.{" "}
            <code>.uk-text-center</code>
          </div>
        </div>
      </div>
    </div>
    <div className="uk-child-width-1-3@s uk-grid-small" data-uk-grid="">
      <div>
        <div className="uk-card uk-card-default uk-card-small">
          <div className="uk-text-center@s uk-card-body">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.{" "}
            <code>.uk-text-center@s</code>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-small">
          <div className="uk-text-right@l uk-card-body">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.{" "}
            <code>.uk-text-right@l</code>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-small">
          <div className="uk-text-center@m uk-card-body">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.{" "}
            <code>.uk-text-center@m</code>
          </div>
        </div>
      </div>
    </div>
    <div className="uk-child-width-1-3@m uk-child-width-1-2@s" data-uk-grid="">
      <div>
        <img src={avatarImage} width="50" height="50" alt="" />
        <span className="uk-text-top">Lorem ipsum.</span>
      </div>
      <div>
        <img src={avatarImage} width="50" height="50" alt="" />
        <span className="uk-text-middle">Lorem ipsum.</span>
      </div>
      <div>
        <img src={avatarImage} width="50" height="50" alt="" />
        <span className="uk-text-bottom">Lorem ipsum.</span>
      </div>
    </div>
    <div className="uk-child-width-1-2@s" data-uk-grid="">
      <div>
        <div className="uk-panel uk-panel-box uk-text-truncate">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div>
        <div className="uk-panel uk-panel-box uk-text-break">
          Loremipsumdolorsitamet,consecteturadipiscingelit,seddoeiusmodtemporincididuntutlaboreetdoloremagnaaliqua.
        </div>
      </div>
    </div>
  </div>
);

export default Text;
