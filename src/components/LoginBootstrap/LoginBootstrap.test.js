import React from "react";
import { render } from "@testing-library/react";
import LoginBootstrap from "./LoginBootstrap";

it("has a LoginBootstrap component", () => {
  const { getByText } = render(<LoginBootstrap />);
  expect(getByText("LoginBootstrap")).toBeInTheDocument();
});
