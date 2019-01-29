import React from "react";

const Spinner = () => (
  <div>
    <span data-uk-spinner="" />
    <div>
      <span className="uk-margin-small-right" data-uk-spinner="ratio: 3" />
      <span data-uk-spinner="ratio: 4.5" />
    </div>
  </div>
);

export default Spinner;
