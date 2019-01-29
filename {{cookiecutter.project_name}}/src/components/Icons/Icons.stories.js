import React from "react";
import { storiesOf } from "@storybook/react";
import Icons from "./Icons";

import { withKnobs } from "@storybook/addon-knobs/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { withInfo } from "@storybook/addon-info";
import { withReadme } from "storybook-readme";
import IconsReadme from "./README.md";

storiesOf("Icons", module)
  .addDecorator(withReadme(IconsReadme))
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .add(
    "Component",
    withInfo({})(() => {
      return <Icons />;
    })
  );
