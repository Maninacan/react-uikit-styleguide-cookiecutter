import React from "react";
import photoImage from "../../images/photo.jpg";

const Modal = () => (
  <div>
    <div>
      {/* This is a button toggling the modal */}
      <button
        className="uk-button uk-button-default uk-margin-small-right"
        type="button"
        data-uk-toggle="target: #modal-example"
      >
        Open
      </button>

      {/* This is an anchor toggling the modal */}
      <a href="#modal-example" data-uk-toggle>
        Open
      </a>

      {/* This is the modal */}
      <div id="modal-example" data-uk-modal>
        <div className="uk-modal-dialog uk-modal-body">
          <h2 className="uk-modal-title">Headline</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="uk-text-right">
            <button
              className="uk-button uk-button-default uk-modal-close"
              type="button"
            >
              Cancel
            </button>
            <button className="uk-button uk-button-primary" type="button">
              Save
            </button>
          </p>
        </div>
      </div>
    </div>
    <div>
      {/* This is a button toggling the modal with the default close button */}
      <button
        className="uk-button uk-button-default uk-margin-small-right"
        type="button"
        data-uk-toggle="target: #modal-close-default"
      >
        Default
      </button>

      {/* This is the modal with the default close button */}
      <div id="modal-close-default" data-uk-modal>
        <div className="uk-modal-dialog uk-modal-body">
          <button
            className="uk-modal-close-default"
            type="button"
            data-uk-close
          />
          <h2 className="uk-modal-title">Default</h2>
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
      </div>

      {/* This is a button toggling the modal with the outside close button */}
      <button
        className="uk-button uk-button-default uk-margin-small-right"
        type="button"
        data-uk-toggle="target: #modal-close-outside"
      >
        Outside
      </button>

      {/* This is the modal with the outside close button */}
      <div id="modal-close-outside" data-uk-modal>
        <div className="uk-modal-dialog uk-modal-body">
          <button
            className="uk-modal-close-outside"
            type="button"
            data-uk-close
          />
          <h2 className="uk-modal-title">Outside</h2>
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
      </div>
    </div>
    <div>
      <a
        className="uk-button uk-button-default"
        href="#modal-center"
        data-uk-toggle
      >
        Open
      </a>

      <div id="modal-center" className="uk-flex-top" data-uk-modal>
        <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
          <button
            className="uk-modal-close-default"
            type="button"
            data-uk-close
          />

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
      </div>
    </div>
    <div>
      <a
        className="uk-button uk-button-default"
        href="#modal-sections"
        data-uk-toggle
      >
        Open
      </a>

      <div id="modal-sections" data-uk-modal>
        <div className="uk-modal-dialog">
          <button
            className="uk-modal-close-default"
            type="button"
            data-uk-close
          />
          <div className="uk-modal-header">
            <h2 className="uk-modal-title">Modal Title</h2>
          </div>
          <div className="uk-modal-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
    </div>
    <div>
      <a
        className="uk-button uk-button-default"
        href="#modal-container"
        data-uk-toggle
      >
        Open
      </a>

      <div id="modal-container" className="uk-modal-container" data-uk-modal>
        <div className="uk-modal-dialog uk-modal-body">
          <button
            className="uk-modal-close-default"
            type="button"
            data-uk-close
          />
          <h2 className="uk-modal-title">Headline</h2>
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
      </div>
    </div>
    <div>
      <a
        className="uk-button uk-button-default"
        href="#modal-full"
        data-uk-toggle
      >
        Open
      </a>

      <div id="modal-full" className="uk-modal-full" data-uk-modal>
        <div className="uk-modal-dialog">
          <button
            className="uk-modal-close-full uk-close-large"
            type="button"
            data-uk-close
          />
          <div
            className="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle"
            data-uk-grid
          >
            <div
              className="uk-background-cover"
              style={{ backgroundImage: `url(${photoImage})` }}
              data-uk-height-viewport
            />
            <div className="uk-padding-large">
              <h1>Headline</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <a
        className="uk-button uk-button-default"
        href="#modal-overflow"
        data-uk-toggle
      >
        Open
      </a>

      <div id="modal-overflow" data-uk-modal>
        <div className="uk-modal-dialog">
          <button
            className="uk-modal-close-default"
            type="button"
            data-uk-close
          />

          <div className="uk-modal-header">
            <h2 className="uk-modal-title">Headline</h2>
          </div>

          <div className="uk-modal-body" data-uk-overflow-auto>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
    </div>
    <div>
      <p data-uk-margin>
        <a
          className="uk-button uk-button-default"
          href="#modal-media-image"
          data-uk-toggle
        >
          Image
        </a>
        <a
          className="uk-button uk-button-default"
          href="#modal-media-video"
          data-uk-toggle
        >
          Video
        </a>
        <a
          className="uk-button uk-button-default"
          href="#modal-media-youtube"
          data-uk-toggle
        >
          YouTube
        </a>
        <a
          className="uk-button uk-button-default"
          href="#modal-media-vimeo"
          data-uk-toggle
        >
          Vimeo
        </a>
      </p>

      <div id="modal-media-image" className="uk-flex-top" data-uk-modal>
        <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
          <button
            className="uk-modal-close-outside"
            type="button"
            data-uk-close
          />
          <img src={photoImage} alt="" />
        </div>
      </div>

      <div id="modal-media-video" className="uk-flex-top" data-uk-modal>
        <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
          <button
            className="uk-modal-close-outside"
            type="button"
            data-uk-close
          />
          <video controls playsinline data-uk-video>
            <source
              src="https://quirksmode.org/html5/videos/big_buck_bunny.mp4"
              type="video/mp4"
            />
            <source
              src="https://quirksmode.org/html5/videos/big_buck_bunny.ogv"
              type="video/ogg"
            />
          </video>
        </div>
      </div>

      <div id="modal-media-youtube" className="uk-flex-top" data-uk-modal>
        <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
          <button
            className="uk-modal-close-outside"
            type="button"
            data-uk-close
          />
          <iframe
            src="https://www.youtube-nocookie.com/embed/YE7VzlLtp-4"
            width="560"
            height="315"
            frameBorder="0"
            data-uk-video
          />
        </div>
      </div>

      <div id="modal-media-vimeo" className="uk-flex-top" data-uk-modal>
        <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
          <button
            className="uk-modal-close-outside"
            type="button"
            data-uk-close
          />
          <iframe
            src="https://player.vimeo.com/video/1084537"
            width="500"
            height="281"
            frameBorder="0"
            data-uk-video
          />
        </div>
      </div>
    </div>
    <div>
      <p data-uk-margin>
        <a
          className="uk-button uk-button-default"
          href="#modal-group-1"
          data-uk-toggle
        >
          Modal 1
        </a>
        <a
          className="uk-button uk-button-default"
          href="#modal-group-2"
          data-uk-toggle
        >
          Modal 2
        </a>
      </p>

      <div id="modal-group-1" data-uk-modal>
        <div className="uk-modal-dialog">
          <button
            className="uk-modal-close-default"
            type="button"
            data-uk-close
          />
          <div className="uk-modal-header">
            <h2 className="uk-modal-title">Headline 1</h2>
          </div>
          <div className="uk-modal-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="uk-modal-footer uk-text-right">
            <button
              className="uk-button uk-button-default uk-modal-close"
              type="button"
            >
              Cancel
            </button>
            <a
              href="#modal-group-2"
              className="uk-button uk-button-primary"
              data-uk-toggle
            >
              Next
            </a>
          </div>
        </div>
      </div>

      <div id="modal-group-2" data-uk-modal>
        <div className="uk-modal-dialog">
          <button
            className="uk-modal-close-default"
            type="button"
            data-uk-close
          />
          <div className="uk-modal-header">
            <h2 className="uk-modal-title">Headline 2</h2>
          </div>
          <div className="uk-modal-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="uk-modal-footer uk-text-right">
            <button
              className="uk-button uk-button-default uk-modal-close"
              type="button"
            >
              Cancel
            </button>
            <a
              href="#modal-group-1"
              className="uk-button uk-button-primary"
              data-uk-toggle
            >
              Previous
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
