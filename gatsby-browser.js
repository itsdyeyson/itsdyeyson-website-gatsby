/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import { SiteContextProvider } from "./src/context/SiteContext"
const wrapRootElement = ({ element }) => (
  <SiteContextProvider>{element}</SiteContextProvider>
)

export { wrapRootElement }

// You can delete this file if you're not using it
