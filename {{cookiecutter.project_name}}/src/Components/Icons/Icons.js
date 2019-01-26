import React from "react"
import Clipboard from "react-clipboard.js"
import UIkit from "uikit"

const Icons = () => {
  return (
    <div className="sb-icons uk-flex uk-flex-row uk-flex-wrap">
      <Clipboard data-clipboard-text={`<span className="icon-user"/>`}>
        <div
          className="sb-icon-card uk-card uk-card-default uk-card-hover uk-card-body uk-card-small"
          onClick={() => {
            UIkit.notification({
              message: "user icon copied to clipboard",
              status: "success",
            })
          }}
        >
          <strong>user</strong>
          <span className="icon-user" />
        </div>
      </Clipboard>
    </div>
  )
}

export default Icons
