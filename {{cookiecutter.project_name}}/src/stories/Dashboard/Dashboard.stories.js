import React from "react"
import { storiesOf } from "@storybook/react"
import { withReadme, withDocs } from "storybook-readme"

import DashboardReadme from "./README.md"

storiesOf("Dashboard", module)
  .addDecorator(withReadme(DashboardReadme))
  .addDecorator(withDocs(DashboardReadme))
  .add("Basic", () => <div>thing</div>)
