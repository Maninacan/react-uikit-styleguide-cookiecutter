import React from "react";
import PropTypes from "prop-types";

const ThemeContainer = ({ title, contents }) => {
  return (
    <div className="uk-padding uk-padding-remove-horizontal uk-padding-remove-bottom">
      <h1 className="uk-h1">{title}</h1>
      {contents}
    </div>
  );
};

ThemeContainer.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.any.isRequired
};

export default ThemeContainer;
