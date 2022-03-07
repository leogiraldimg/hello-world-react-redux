import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

describe("App", () => {
  it("should render Hello World title", () => {
    const { getByText } = render(<App />);

    getByText("Hello World!");
  });
});
