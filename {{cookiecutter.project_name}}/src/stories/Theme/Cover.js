import React from "react";
import darkImage from "../../images/dark.jpg";

const Cover = () => (
  <div>
    <div className="uk-cover-container uk-height-medium uk-width-xlarge">
      <img src={darkImage} alt="" data-uk-cover />
    </div>
    <div className="uk-cover-container uk-height-medium uk-width-xlarge">
      <video autoPlay loop muted playsinline data-uk-cover>
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
);

export default Cover;
