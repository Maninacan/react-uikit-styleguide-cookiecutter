import React from "react";

const Video = () => (
  <div>
    <div>
      <button
        className="uk-button uk-button-default uk-margin"
        type="button"
        data-uk-toggle="target: +"
      >
        Toggle HTML5 Video
      </button>

      <video controls playsinline hidden data-uk-video>
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
    <video loop muted playsinline data-uk-video="autoplay: inview">
      <source
        src="https://quirksmode.org/html5/videos/big_buck_bunny.mp4"
        type="video/mp4"
      />
      <source
        src="https://quirksmode.org/html5/videos/big_buck_bunny.ogv"
        type="video/ogg"
      />
    </video>
    <div>
      <button
        className="uk-button uk-button-default uk-margin-bottom"
        type="button"
        data-uk-toggle="target: +"
      >
        Toggle YouTube Video
      </button>

      <iframe
        src="https://www.youtube-nocookie.com/embed/YE7VzlLtp-4?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1"
        width="560"
        height="315"
        frameBorder="0"
        allowFullScreen
        data-uk-responsive
        data-uk-video="automute: true"
      />
    </div>
  </div>
);

export default Video;
