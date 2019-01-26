import React from "react"
import { storiesOf } from "@storybook/react"
import { withReadme, withDocs } from "storybook-readme"

import BackgroundColorsReadme from "./README.md"

storiesOf("Background Colors", module)
  .addDecorator(withReadme(BackgroundColorsReadme))
  .addDecorator(withDocs(BackgroundColorsReadme))
  .add("CSS Classes", () => (
    <div className="uk-grid-match uk-child-width-1-2 uk-text-center" uk-grid>
      <div>
        <div className="uk-background-default uk-padding uk-panel">
          <p className="uk-h4">Default</p>
        </div>
      </div>
      <div>
        <div className="uk-background-muted uk-padding uk-panel">
          <p className="uk-h4">Muted</p>
        </div>
      </div>
      <div>
        <div className="uk-background-primary uk-light uk-padding uk-panel">
          <p className="uk-h4">Primary</p>
        </div>
      </div>
      <div>
        <div className="uk-background-secondary uk-light uk-padding uk-panel">
          <p className="uk-h4">Secondary</p>
        </div>
      </div>
    </div>
  ))
