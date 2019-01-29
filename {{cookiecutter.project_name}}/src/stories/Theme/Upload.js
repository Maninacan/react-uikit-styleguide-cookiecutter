import React from "react";
import UIkit from "uikit";

class Upload extends React.PureComponent {
  componentDidMount = () => {
    const bar = document.getElementById("js-progressbar");

    UIkit.upload(".js-upload", {
      url: "",
      multiple: true,

      beforeSend: function() {
        // console.log("beforeSend", arguments);
      },
      beforeAll: function() {
        // console.log("beforeAll", arguments);
      },
      load: function() {
        // console.log("load", arguments);
      },
      error: function() {
        // console.log("error", arguments);
      },
      complete: function() {
        // console.log("complete", arguments);
      },

      loadStart: function(e) {
        // console.log("loadStart", arguments);

        bar.removeAttribute("hidden");
        bar.max = e.total;
        bar.value = e.loaded;
      },

      progress: function(e) {
        // console.log("progress", arguments);

        bar.max = e.total;
        bar.value = e.loaded;
      },

      loadEnd: function(e) {
        // console.log("loadEnd", arguments);

        bar.max = e.total;
        bar.value = e.loaded;
      },

      completeAll: function() {
        // console.log("completeAll", arguments);

        setTimeout(function() {
          bar.setAttribute("hidden", "hidden");
        }, 1000);

        window.alert("Upload Completed");
      }
    });
  };
  render = () => {
    return (
      <div>
        <div className="js-upload" data-uk-form-custom="">
          <input type="file" multiple />
          <button
            className="uk-button uk-button-default"
            type="button"
            tabIndex="-1"
          >
            Select
          </button>
        </div>
        <div>
          <div className="js-upload uk-placeholder uk-text-center">
            <span data-uk-icon="icon: cloud-upload" />
            <span className="uk-text-middle">
              Attach binaries by dropping them here or
            </span>
            <div data-uk-form-custom="">
              <input type="file" multiple />
              <span className="uk-link">selecting one</span>
            </div>
          </div>

          <progress
            id="js-progressbar"
            className="uk-progress"
            value="0"
            max="100"
            hidden
          />
        </div>
      </div>
    );
  };
}

export default Upload;
