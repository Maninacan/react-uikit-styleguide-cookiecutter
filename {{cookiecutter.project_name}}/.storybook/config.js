import * as storybook from "@storybook/react";

import { setOptions } from "@storybook/addon-options";
import { withInfo, setDefaults } from "@storybook/addon-info";

// addon-info
setDefaults({
  inline: true,
  source: true
});

// Options
setOptions({
  name: "Style Guide",
  addonPanelInRight: true
});

// Load all fontello files in order to get the icons to show up.
import "../src/fontello/css/fontello.css";
import "../src/fontello/css/animation.css";
import "../src/fontello/css/fontello-codes.css";
import "../src/fontello/css/fontello-embedded.css";
import "../src/fontello/css/fontello-ie7-codes.css";
import "../src/fontello/css/fontello-ie7.css";
import "../src/fontello/font/fontello.svg";
import "../src/fontello/font/fontello.eot";
import "../src/fontello/font/fontello.ttf";
import "../src/fontello/font/fontello.woff";
import "../src/fontello/font/fontello.woff2";

// Load xyngular theme
import "../dist/css/theme.css";
import "./storybook.css";

const req = require.context("../src", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

storybook.configure(loadStories, module);
