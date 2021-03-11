import styled, { CSSObject } from "styled-components";

import { TextVariant } from "./Text.types";

interface StyledRootProps {
  variant: TextVariant;
}

// This takes one of the variants (title, subtitle, body)
// and returns the corresponding HTML-tag that needs to be rendered
const getAs = (variant: TextVariant) => {
  switch (variant) {
    case "title":
      return "h1";
    case "subtitle":
      return "h2";
    default:
      return "p";
  }
};

// Each variant is rendered differently??
const variantStyles: Record<string, CSSObject> = {
  title: {
    // textTransform: "uppercase", This was original style
    textTransform: "lowercase",
  },
  subtitle: {},
  body: {
    color: "green",
  },
};

// The actual TextComponent
const Root = styled.p.attrs<StyledRootProps>(({ variant }) => ({
  as: getAs(variant),
}))<StyledRootProps>(({ variant, style }) => ({
  // Default styles
  maxWidth: 550,
  fontFamily: "Arial",
  lineHeight: 1.5,

  ...variantStyles[variant], // Style by variant
  ...style, // Style from props
}));

export default {
  Root,
};
