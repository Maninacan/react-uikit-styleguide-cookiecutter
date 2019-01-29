import React from "react";
import lightImage from "../../images/light.jpg";
import darkImage from "../../images/dark.jpg";
import photoImage from "../../images/photo.jpg";
import photo2Image from "../../images/photo2.jpg";
import avatarImage from "../../images/avatar.jpg";
import logoPlaceholderSVG from "../../images/logo-placeholder.svg";
import logoPlaceholderLightSVG from "../../images/logo-placeholder-light.svg";

const Utility = () => (
  <div>
    <div className="uk-child-width-1-3@s" data-uk-grid="">
      <div>
        <div className="uk-panel">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div>
        <div className="uk-panel">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div>
        <div className="uk-panel">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
    <div className="uk-panel uk-panel-scrollable">
      <ul className="uk-list">
        <li>
          <label>
            <input className="uk-checkbox" type="checkbox" /> Category 1
          </label>
        </li>
        <li>
          <label>
            <input className="uk-checkbox" type="checkbox" /> Category 2
          </label>
          <ul>
            <li>
              <label>
                <input className="uk-checkbox" type="checkbox" /> Category 2.1
              </label>
            </li>
            <li>
              <label>
                <input className="uk-checkbox" type="checkbox" /> Category 2.2
              </label>
            </li>
            <li>
              <label>
                <input className="uk-checkbox" type="checkbox" /> Category 2.3
              </label>
              <ul>
                <li>
                  <label>
                    <input className="uk-checkbox" type="checkbox" /> Category
                    2.3.1
                  </label>
                </li>
                <li>
                  <label>
                    <input className="uk-checkbox" type="checkbox" /> Category
                    2.3.2
                  </label>
                </li>
              </ul>
            </li>
            <li>
              <label>
                <input className="uk-checkbox" type="checkbox" /> Category 2.4
              </label>
            </li>
          </ul>
        </li>
        <li>
          <label>
            <input className="uk-checkbox" type="checkbox" /> Category 3
          </label>
        </li>
        <li>
          <label>
            <input className="uk-checkbox" type="checkbox" /> Category 4
          </label>
        </li>
      </ul>
    </div>
    <div className="uk-clearfix">
      <div className="uk-float-right">
        <div className="uk-card uk-card-default uk-card-body">Right</div>
      </div>
      <div className="uk-float-left">
        <div className="uk-card uk-card-default uk-card-body">Left</div>
      </div>
    </div>
    <div className="uk-overflow-auto uk-height-small">
      <table className="uk-table uk-table-striped uk-table-condensed uk-text-nowrap">
        <thead>
          <tr>
            <th>Table Heading</th>
            <th>Table Heading</th>
            <th>Table Heading</th>
            <th>Table Heading</th>
            <th>Table Heading</th>
            <th>Table Heading</th>
            <th>Table Heading</th>
            <th>Table Heading</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td>Table Footer</td>
            <td>Table Footer</td>
            <td>Table Footer</td>
            <td>Table Footer</td>
            <td>Table Footer</td>
            <td>Table Footer</td>
            <td>Table Footer</td>
            <td>Table Footer</td>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
          </tr>
          <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="uk-height-medium">
      <div className="js-wrapper">
        <p>Some content before the overflow auto container.</p>

        <div data-uk-overflow-auto="selContainer: .uk-height-medium; selContent: .js-wrapper">
          <div className="uk-grid-small" data-uk-grid="">
            <div className="uk-width-1-2">
              <img src={lightImage} alt="" />
            </div>
            <div className="uk-width-1-2">
              <img src={darkImage} alt="" />
            </div>
            <div className="uk-width-1-2">
              <img src={photoImage} alt="" />
            </div>
            <div className="uk-width-1-2">
              <img src={photo2Image} alt="" />
            </div>
          </div>
        </div>

        <p>Some content after the overflow auto container.</p>
      </div>
    </div>
    <a
      className="uk-button uk-button-default"
      href="#modal-overflow"
      data-uk-toggle=""
    >
      Open
    </a>

    <div id="modal-overflow" data-uk-modal="">
      <div className="uk-modal-dialog">
        <button
          className="uk-modal-close-default"
          type="button"
          data-uk-close=""
        />

        <div className="uk-modal-header">
          <h2 className="uk-modal-title">Headline</h2>
        </div>

        <div className="uk-modal-body" data-uk-overflow-auto="">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="uk-modal-footer uk-text-right">
          <button
            className="uk-button uk-button-default uk-modal-close"
            type="button"
          >
            Cancel
          </button>
          <button className="uk-button uk-button-primary" type="button">
            Save
          </button>
        </div>
      </div>
    </div>
    <div className="uk-child-width-1-2@s" data-uk-grid="">
      <div>
        <pre className="uk-resize-vertical">
          <code>
            &lt;!-- Resize vertically --&gt; &lt;div uk-grid&gt; &lt;div
            class="uk-width-1-2"&gt;...&lt;/div&gt; &lt;div
            class="uk-width-1-2"&gt;...&lt;/div&gt; &lt;/div&gt; &lt;div
            class="uk-child-width-1-2" uk-grid&gt; &lt;div&gt;&lt;/div&gt;
            &lt;div&gt;&lt;/div&gt; &lt;/div&gt;
          </code>
        </pre>
      </div>
      <div>
        <pre className="uk-resize">
          <code>
            &lt;!-- Resize horizontally and vertically --&gt; &lt;div
            uk-grid&gt; &lt;div class="uk-width-1-2"&gt;...&lt;/div&gt; &lt;div
            class="uk-width-1-2"&gt;...&lt;/div&gt; &lt;/div&gt; &lt;div
            class="uk-child-width-1-2" uk-grid&gt; &lt;div&gt;&lt;/div&gt;
            &lt;div&gt;&lt;/div&gt; &lt;/div&gt;
          </code>
        </pre>
      </div>
    </div>
    <div className="uk-inline">
      <img src={photoImage} width="300" alt="" />
      <div className="uk-position-medium uk-position-cover uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">
        Overlay
      </div>
    </div>
    <div>
      <img
        className="uk-border-rounded"
        src={avatarImage}
        width="200"
        height="200"
        alt="Border rounded"
      />
      <img
        className="uk-border-circle"
        src={avatarImage}
        width="200"
        height="200"
        alt="Border circle"
      />
      <img
        className="uk-border-pill"
        src={avatarImage}
        width="200"
        height="200"
        alt="Border pill"
      />
    </div>
    <div className="uk-child-width-1-2@s uk-text-center" data-uk-grid="">
      <div>
        <div className="uk-box-shadow-small uk-padding">Small</div>
      </div>

      <div>
        <div className="uk-box-shadow-medium uk-padding">Medium</div>
      </div>

      <div>
        <div className="uk-box-shadow-large uk-padding">Large</div>
      </div>

      <div>
        <div className="uk-box-shadow-xlarge uk-padding">XLarge</div>
      </div>
    </div>
    <div className="uk-box-shadow-bottom uk-box-shadow-small uk-width-1-2@s uk-text-center">
      <div className="uk-background-default uk-padding-large">
        Box shadow bottom
      </div>
    </div>
    <div className="uk-child-width-1-2@s uk-text-center" data-uk-grid="">
      <div>
        <div className="uk-box-shadow-hover-small uk-padding">Hover Small</div>
      </div>

      <div>
        <div className="uk-box-shadow-hover-xlarge uk-padding">
          Hover XLarge
        </div>
      </div>

      <div>
        <div className="uk-box-shadow-small uk-box-shadow-hover-large uk-padding">
          Small + Hover Large
        </div>
      </div>

      <div>
        <div className="uk-box-shadow-xlarge uk-box-shadow-hover-medium uk-padding">
          XLarge + Hover Medium
        </div>
      </div>
    </div>
    <p className="uk-dropcap">
      Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <a className="uk-logo" href="#">
      Logo
    </a>
    <div className="uk-child-width-expand@s" data-uk-grid="">
      <div>
        <div className="uk-panel uk-padding uk-background-muted">
          <a className="uk-logo" href="#">
            <img src={logoPlaceholderSVG} alt="" />
            <img
              className="uk-logo-inverse"
              src={logoPlaceholderLightSVG}
              alt=""
            />
          </a>
        </div>
      </div>
      <div>
        <div className="uk-panel uk-padding uk-background-secondary uk-light">
          <a className="uk-logo" href="#">
            <img src={logoPlaceholderSVG} alt="" />
            <img
              className="uk-logo-inverse"
              src={logoPlaceholderLightSVG}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
    <div
      className="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-small uk-light"
      data-uk-grid=""
    >
      <div>
        <div className="uk-inline uk-background-primary">
          <img
            className="uk-blend-multiply"
            src={darkImage}
            alt="Blend Multiply"
          />
          <div className="uk-position-center">
            <p className="uk-h4 uk-margin-remove">Multiply</p>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-inline uk-background-primary">
          <img className="uk-blend-screen" src={darkImage} alt="Blend Screen" />
          <div className="uk-position-center">
            <p className="uk-h4 uk-margin-remove">Screen</p>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-inline uk-background-primary">
          <img
            className="uk-blend-overlay"
            src={darkImage}
            alt="Blend Overlay"
          />
          <div className="uk-position-center">
            <p className="uk-h4 uk-margin-remove">Overlay</p>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-inline uk-background-primary">
          <img className="uk-blend-darken" src={darkImage} alt="Blend Darken" />
          <div className="uk-position-center">
            <p className="uk-h4 uk-margin-remove">Darken</p>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-inline uk-background-primary">
          <img
            className="uk-blend-lighten"
            src={darkImage}
            alt="Blend Lighten"
          />
          <div className="uk-position-center">
            <p className="uk-h4 uk-margin-remove">Lighten</p>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-inline uk-background-primary">
          <img
            className="uk-blend-color-dodge"
            src={darkImage}
            alt="Blend Color Dodge"
          />
          <div className="uk-position-center">
            <p className="uk-h4 uk-margin-remove">Color Dodge</p>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-inline uk-background-primary">
          <img
            className="uk-blend-color-burn"
            src={darkImage}
            alt="Blend Color Burn"
          />
          <div className="uk-position-center">
            <p className="uk-h4 uk-margin-remove">Color Burn</p>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-inline uk-background-primary">
          <img
            className="uk-blend-hard-light"
            src={darkImage}
            alt="Blend Hard Light"
          />
          <div className="uk-position-center">
            <p className="uk-h4 uk-margin-remove">Hard Light</p>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-inline uk-background-primary">
          <img
            className="uk-blend-soft-light"
            src={darkImage}
            alt="Blend Soft Light"
          />
          <div className="uk-position-center">
            <p className="uk-h4 uk-margin-remove">Soft Light</p>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-inline uk-background-primary">
          <img
            className="uk-blend-difference"
            src={darkImage}
            alt="Blend Difference"
          />
          <div className="uk-position-center">
            <p className="uk-h4 uk-margin-remove">Difference</p>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-inline uk-background-primary">
          <img
            className="uk-blend-exclusion"
            src={darkImage}
            alt="Blend Exclusion"
          />
          <div className="uk-position-center">
            <p className="uk-h4 uk-margin-remove">Exclusion</p>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-inline uk-background-primary">
          <img className="uk-blend-hue" src={darkImage} alt="Blend Hue" />
          <div className="uk-position-center">
            <p className="uk-h4 uk-margin-remove">Hue</p>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-inline uk-background-primary">
          <img
            className="uk-blend-saturation"
            src={darkImage}
            alt="Blend Saturation"
          />
          <div className="uk-position-center">
            <p className="uk-h4 uk-margin-remove">Saturation</p>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-inline uk-background-primary">
          <img className="uk-blend-color" src={darkImage} alt="Blend Color" />
          <div className="uk-position-center">
            <p className="uk-h4 uk-margin-remove">Color</p>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-inline uk-background-primary">
          <img
            className="uk-blend-luminosity"
            src={darkImage}
            alt="Blend Luminosity"
          />
          <div className="uk-position-center">
            <p className="uk-h4 uk-margin-remove">Luminosity</p>
          </div>
        </div>
      </div>
    </div>
    <div className="uk-inline">
      <img src={lightImage} alt="" />
      <a
        className="uk-position-absolute uk-transform-center"
        style={{ left: "50%", top: "50%" }}
        href="#"
        data-uk-marker=""
      />
    </div>
    <div className="uk-child-width-1-3@m" data-uk-grid="">
      <div className="uk-animation-toggle" tabIndex="0">
        <div className="uk-transform-origin-bottom-right uk-card uk-card-default uk-card-body uk-animation-scale-up">
          <p className="uk-text-center">Bottom Right</p>
        </div>
      </div>
      <div className="uk-animation-toggle" tabIndex="0">
        <div className="uk-transform-origin-top-center uk-card uk-card-default uk-card-body uk-animation-scale-up">
          <p className="uk-text-center">Top Center</p>
        </div>
      </div>
      <div className="uk-animation-toggle" tabIndex="0">
        <div className="uk-transform-origin-bottom-center uk-card uk-card-default uk-card-body uk-animation-scale-up">
          <p className="uk-text-center">Bottom Center</p>
        </div>
      </div>
    </div>
    <a className="uk-disabled uk-button uk-button-default" href="#">
      Disabled
    </a>
    <div className="uk-drag uk-width-small uk-padding uk-background-muted uk-text-center">
      <i data-uk-icon="icon: move; ratio: 2" />
    </div>
  </div>
);

export default Utility;
