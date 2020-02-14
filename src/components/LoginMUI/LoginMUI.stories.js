import React from "react";
import LoginMUI from "./LoginMUI";
import ApiDoc from "./LoginMUI.md";

export default {
  component: LoginMUI,
  title: "LoginMUI",
  parameters: { notes: ApiDoc }
};

export const Default = () => <LoginMUI />;
