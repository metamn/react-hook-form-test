import React from "react";
import { render } from "@testing-library/react";
import Validation2 from "./Validation2";

it("has a Validation2 component", () => {
  const { getByText } = render(<Validation2 />);
  expect(getByText("Validation2")).toBeInTheDocument();
});
