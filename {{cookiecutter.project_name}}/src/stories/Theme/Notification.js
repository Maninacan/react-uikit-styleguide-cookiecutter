import React from "react";
import UIkit from "uikit";

const Notification = () => {
  const handleNotification = type => {
    switch (type) {
      case "basic":
        UIkit.notification({ message: "Notification message" });
        break;
      case "with-html":
        UIkit.notification({
          message: `<span class="icon-ok" uk-icon/> Message with an icon`
        });
        break;
      case "topLeft":
        UIkit.notification({ message: "Top Left...", pos: "top-left" });
        break;
      case "topCenter":
        UIkit.notification({ message: "Top Center...", pos: "top-center" });
        break;
      case "topRight":
        UIkit.notification({ message: "Top Right...", pos: "top-right" });
        break;
      case "bottomLeft":
        UIkit.notification({ message: "Bottom Left...", pos: "bottom-left" });
        break;
      case "bottomCenter":
        UIkit.notification({
          message: "Bottom Center...",
          pos: "bottom-center"
        });
        break;
      case "bottomRight":
        UIkit.notification({ message: "Bottom Right...", pos: "bottom-right" });
        break;
      case "primary":
        UIkit.notification({
          message: "Primary message...",
          status: "primary"
        });
        break;
      case "success":
        UIkit.notification({
          message: "Success message...",
          status: "success"
        });
        break;
      case "warning":
        UIkit.notification({
          message: "Warning message...",
          status: "warning"
        });
        break;
      case "danger":
        UIkit.notification({ message: "Danger message...", status: "danger" });
        break;
      case "close-all":
        UIkit.notification.closeAll();
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <div>
        <button
          className="demo uk-button uk-button-default"
          type="button"
          onClick={() => handleNotification("basic")}
        >
          Click me
        </button>
      </div>
      <div>
        <button
          className="uk-button uk-button-default demo"
          type="button"
          onClick={() => handleNotification("with-html")}
        >
          With icon
        </button>
      </div>
      <div>
        <p data-uk-margin>
          <button
            className="uk-button uk-button-default"
            type="button"
            onClick={() => handleNotification("topLeft")}
          >
            Top Left
          </button>
          <button
            className="uk-button uk-button-default"
            type="button"
            onClick={() => handleNotification("topCenter")}
          >
            Top Center
          </button>
          <button
            className="uk-button uk-button-default"
            type="button"
            onClick={() => handleNotification("topRight")}
          >
            Top Right
          </button>
          <button
            className="uk-button uk-button-default"
            type="button"
            onClick={() => handleNotification("bottomLeft")}
          >
            Bottom Left
          </button>
          <button
            className="uk-button uk-button-default"
            type="button"
            onClick={() => handleNotification("bottomCenter")}
          >
            Bottom Center
          </button>
          <button
            className="uk-button uk-button-default"
            type="button"
            onClick={() => handleNotification("bottomRight")}
          >
            Bottom Right
          </button>
        </p>
      </div>
      <div>
        <p data-uk-margin>
          <button
            className="uk-button uk-button-default demo"
            type="button"
            onClick={() => handleNotification("primary")}
          >
            Primary
          </button>
          <button
            className="uk-button uk-button-default demo"
            type="button"
            onClick={() => handleNotification("success")}
          >
            Success
          </button>
          <button
            className="uk-button uk-button-default demo"
            type="button"
            onClick={() => handleNotification("warning")}
          >
            Warning
          </button>
          <button
            className="uk-button uk-button-default demo"
            type="button"
            onClick={() => handleNotification("danger")}
          >
            Danger
          </button>
        </p>
      </div>
      <div>
        <button
          className="uk-button uk-button-default close"
          onClick={() => handleNotification("close-all")}
        >
          Close All
        </button>
      </div>
    </div>
  );
};

export default Notification;
