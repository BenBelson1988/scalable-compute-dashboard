// test-utils.js
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// import userReducer from '../userSlice'
import userSlicer from "./stores/userSlicer";
import ec2ListSlicer from "./stores/ec2Slicer";

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: { user: userSlicer, ec2list: ec2ListSlicer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
