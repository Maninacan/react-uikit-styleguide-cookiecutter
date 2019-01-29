import React from "react";

const Visibility = () => (
  <div>
    <div
      className="uk-grid-small uk-child-width-1-2 uk-child-width-1-4@s uk-text-center"
      data-uk-grid
    >
      <div>
        <div className="uk-panel">
          <div className="uk-alert uk-margin-remove uk-alert-success">
            ✔ Small
          </div>
          <div className="uk-alert uk-position-cover uk-margin-remove uk-hidden@s">
            Small
          </div>
        </div>
      </div>
      <div>
        <div className="uk-panel">
          <div className="uk-alert uk-margin-remove uk-alert-success">
            ✔ Medium
          </div>
          <div className="uk-alert uk-position-cover uk-margin-remove uk-hidden@m">
            Medium
          </div>
        </div>
      </div>
      <div>
        <div className="uk-panel">
          <div className="uk-alert uk-margin-remove uk-alert-success">
            ✔ Large
          </div>
          <div className="uk-alert uk-position-cover uk-margin-remove uk-hidden@l">
            Large
          </div>
        </div>
      </div>
      <div>
        <div className="uk-panel">
          <div className="uk-alert uk-margin-remove uk-alert-success">
            ✔ XLarge
          </div>
          <div className="uk-alert uk-position-cover uk-margin-remove uk-hidden@xl">
            XLarge
          </div>
        </div>
      </div>
    </div>
    <div
      className="uk-grid-small uk-child-width-1-2 uk-child-width-1-4@s uk-text-center"
      data-uk-grid
    >
      <div>
        <div className="uk-panel">
          <div className="uk-alert uk-margin-remove">Small</div>
          <div className="uk-alert uk-alert-success uk-position-cover uk-margin-remove uk-visible@s">
            ✔ Small
          </div>
        </div>
      </div>
      <div>
        <div className="uk-panel">
          <div className="uk-alert uk-margin-remove">Medium</div>
          <div className="uk-alert uk-alert-success uk-position-cover uk-margin-remove uk-visible@m">
            ✔ Medium
          </div>
        </div>
      </div>
      <div>
        <div className="uk-panel">
          <div className="uk-alert uk-margin-remove">Large</div>
          <div className="uk-alert uk-alert-success uk-position-cover uk-margin-remove uk-visible@l">
            ✔ Large
          </div>
        </div>
      </div>
      <div>
        <div className="uk-panel">
          <div className="uk-alert uk-margin-remove">XLarge</div>
          <div className="uk-alert uk-alert-success uk-position-cover uk-margin-remove uk-visible@xl">
            ✔ XLarge
          </div>
        </div>
      </div>
    </div>
    <div className="uk-child-width-1-2@s" data-uk-grid>
      <div className="uk-visible-toggle" tabIndex="-1">
        <h4>Hidden when not hovered</h4>

        <div data-uk-grid>
          <div className="uk-width-expand">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="uk-width-auto">
            <ul className="uk-hidden-hover uk-iconnav">
              <li>
                <a href="#" data-uk-icon="icon: pencil" />
              </li>
              <li>
                <a href="#" data-uk-icon="icon: copy" />
              </li>
              <li>
                <a href="#" data-uk-icon="icon: trash" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="uk-visible-toggle" tabIndex="-1">
        <h4>Invisible when not hovered</h4>

        <div data-uk-grid>
          <div className="uk-width-expand">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="uk-width-auto">
            <ul className="uk-invisible-hover uk-iconnav">
              <li>
                <a href="#" data-uk-icon="icon: pencil" />
              </li>
              <li>
                <a href="#" data-uk-icon="icon: copy" />
              </li>
              <li>
                <a href="#" data-uk-icon="icon: trash" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      className="uk-grid-small uk-child-width-1-2 uk-child-width-auto@s uk-text-center"
      data-uk-grid
    >
      <div>
        <div className="uk-panel">
          <div className="uk-alert uk-margin-remove uk-alert-success">
            ✔ Hidden Touch
          </div>
          <div className="uk-alert uk-position-cover uk-margin-remove uk-hidden-touch">
            Hidden Touch
          </div>
        </div>
      </div>
      <div>
        <div className="uk-panel">
          <div className="uk-alert uk-margin-remove uk-alert-success">
            ✔ Hidden No-Touch
          </div>
          <div className="uk-alert uk-position-cover uk-margin-remove uk-hidden-notouch">
            Hidden No-Touch
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Visibility;
