import React from "react";
import darkImage from "../../images/dark.jpg";

const Section = () => (
  <div>
    <div className="uk-section uk-section-muted">
      <div className="uk-container">
        <h3>Section</h3>

        <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="uk-section uk-section-default">
      <div className="uk-container">
        <h3>Section Default</h3>

        <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="uk-section uk-section-muted">
      <div className="uk-container">
        <h3>Section Muted</h3>

        <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="uk-section uk-section-primary uk-light">
      <div className="uk-container">
        <h3>Section Primary</h3>

        <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="uk-section uk-section-secondary uk-light">
      <div className="uk-container">
        <h3>Section Secondary</h3>

        <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="uk-section-default">
      <div
        className="uk-section uk-light uk-background-cover"
        style={{ backgroundImage: `url(${darkImage})` }}
      >
        <div className="uk-container">
          <h3>Section with Images</h3>

          <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="uk-section uk-section-primary uk-preserve-color">
      <div className="uk-container">
        <div className="uk-panel uk-light uk-margin-medium">
          <h3>Section Primary with cards</h3>
        </div>

        <div className="uk-grid-match uk-child-width-expand@m" data-uk-grid>
          <div>
            <div className="uk-card uk-card-default uk-card-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="uk-section uk-section-large uk-section-muted">
      <div className="uk-container">
        <h3>Section Large</h3>

        <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Section;
