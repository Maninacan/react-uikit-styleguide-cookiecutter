import React from "react";

const today = new Date();
const sevenDaysFromNow = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() + 7,
  today.getHours(),
  today.getMinutes(),
  today.getSeconds()
).toLocaleString();

const Countdowm = () => (
  <div>
    <div
      className="uk-grid-small uk-child-width-auto uk-margin"
      data-uk-grid
      data-uk-countdown={`date: ${sevenDaysFromNow}`}
    >
      <div>
        <div className="uk-countdown-number uk-countdown-days" />
      </div>
      <div>
        <div className="uk-countdown-number uk-countdown-hours" />
      </div>
      <div>
        <div className="uk-countdown-number uk-countdown-minutes" />
      </div>
      <div>
        <div className="uk-countdown-number uk-countdown-seconds" />
      </div>
    </div>
    <div
      className="uk-grid-small uk-child-width-auto uk-margin"
      data-uk-grid
      data-uk-countdown={`date: ${sevenDaysFromNow}`}
    >
      <div>
        <div className="uk-countdown-number uk-countdown-days" />
      </div>
      <div className="uk-countdown-separator">:</div>
      <div>
        <div className="uk-countdown-number uk-countdown-hours" />
      </div>
      <div className="uk-countdown-separator">:</div>
      <div>
        <div className="uk-countdown-number uk-countdown-minutes" />
      </div>
      <div className="uk-countdown-separator">:</div>
      <div>
        <div className="uk-countdown-number uk-countdown-seconds" />
      </div>
    </div>
    <div
      className="uk-grid-small uk-child-width-auto"
      data-uk-grid
      data-uk-countdown={`date: ${sevenDaysFromNow}`}
    >
      <div>
        <div className="uk-countdown-number uk-countdown-days" />
        <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">
          Days
        </div>
      </div>
      <div className="uk-countdown-separator">:</div>
      <div>
        <div className="uk-countdown-number uk-countdown-hours" />
        <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">
          Hours
        </div>
      </div>
      <div className="uk-countdown-separator">:</div>
      <div>
        <div className="uk-countdown-number uk-countdown-minutes" />
        <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">
          Minutes
        </div>
      </div>
      <div className="uk-countdown-separator">:</div>
      <div>
        <div className="uk-countdown-number uk-countdown-seconds" />
        <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">
          Seconds
        </div>
      </div>
    </div>
  </div>
);

export default Countdowm;
