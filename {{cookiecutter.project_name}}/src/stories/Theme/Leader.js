import React from "react";

const Leader = () => (
  <div>
    <div className="uk-grid-small" data-uk-grid>
      <div className="uk-width-expand" data-uk-leader>
        Lorem ipsum dolor sit amet
      </div>
      <div>$20.90</div>
    </div>

    <div className="uk-grid-small" data-uk-grid>
      <div className="uk-width-expand" data-uk-leader="fill: -">
        Lorem ipsum dolor sit amet
      </div>
      <div>$20.90</div>
    </div>
  </div>
);

export default Leader;
