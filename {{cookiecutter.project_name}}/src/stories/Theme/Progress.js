import React from "react";
import UIkit from "uikit";

class Progress extends React.PureComponent {
  componentDidMount = () => {
    UIkit.util.ready(function() {
      const bar = document.getElementById("js-progressbar");

      const animate = setInterval(() => {
        bar.value += 10;

        if (bar.value >= bar.max) {
          clearInterval(animate);
        }
      }, 10000);
    });
  };

  render = () => {
    return (
      <div>
        <progress
          id="js-progressbar"
          className="uk-progress"
          value="10"
          max="100"
        />
      </div>
    );
  };
}

export default Progress;
