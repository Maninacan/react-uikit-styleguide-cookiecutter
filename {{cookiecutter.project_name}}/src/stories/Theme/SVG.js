import React from "react";
import cloudDownloadSVG from "../../images/cloud-download.svg";
import cloudUploadSVG from "../../images/cloud-upload.svg";

const SVG = () => (
  <div>
    <div>
      {/* Targets the SVG image */}
      <img
        src={cloudDownloadSVG}
        width="40"
        height="40"
        data-uk-svg=""
        alt=""
      />

      {/* Targets a symbol inside the SVG image */}
      <img src={cloudUploadSVG} width="40" height="40" data-uk-svg="" alt="" />
    </div>
  </div>
);

export default SVG;
