import React from "react"

const ThemeContainer = ({ title, contents }) => {
  return (
    <div className="uk-padding uk-padding-remove-horizontal uk-padding-remove-bottom">
      <h1 className="uk-h1">{title}</h1>
      {contents}
    </div>
  )
}

export default ThemeContainer
