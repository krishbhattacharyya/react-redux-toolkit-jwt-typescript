import React from "react"
import type { Preview } from "@storybook/react"
import ThemeProvider from "react-bootstrap/ThemeProvider"
import { Provider } from "react-redux"
import { store } from "../src/app/store"
import { BrowserRouter } from "react-router-dom"
import "../src/index.scss"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider
            breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
            minBreakpoint="xxs"
          >
            <Story />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    ),
  ],
}

export default preview
