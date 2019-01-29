import React from "react";

const Alert = () => {
  return (
    <>
      <div className="uk-alert-primary" data-uk-alert>
        <a className="uk-alert-close" data-uk-close />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>

      <div className="uk-alert-success" data-uk-alert>
        <a className="uk-alert-close" data-uk-close />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>

      <div className="uk-alert-warning" data-uk-alert>
        <a className="uk-alert-close" data-uk-close />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>

      <div className="uk-alert-danger" data-uk-alert>
        <a className="uk-alert-close" data-uk-close />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
    </>
  );
};

export default Alert;
