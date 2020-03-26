import React from "react";
import { render } from "@testing-library/react";
import Validation3 from "./Validation3";

it("has a Validation3 component", () => {
  const { getByText } = render(<Validation3 />);
  expect(getByText("Validation3")).toBeInTheDocument();
});
