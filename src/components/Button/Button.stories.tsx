import React from "react";
import { CSSObject } from "styled-components";

import { Button } from ".";

export default {
  title: "Button",
  component: Button,
};

export const Default = () => <Button>Press me</Button>;

export const Styled = () => {
  const buttonStyle: CSSObject = {
    backgroundColor: "green",
    padding: "1rem",
    borderRadius: "0.35rem",
  };

  return <Button style={buttonStyle}>Press me</Button>;
};
