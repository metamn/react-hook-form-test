import React from "react";
import { render } from "@testing-library/react";
import LoginMUI from "./LoginMUI";

it("has a LoginMUI component", () => {
  const { getByText } = render(<LoginMUI />);
  expect(getByText("LoginMUI")).toBeInTheDocument();
});
