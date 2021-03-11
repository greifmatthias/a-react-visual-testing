import React from "react";
import { CSSObject } from "styled-components";

import { Text } from ".";

export default {
  title: "Text",
  component: Text,
};

const content = `
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the
1500s, when an unknown printer took a galley of type and scrambled it to
make a type specimen book. It has survived not only five centuries, but
also the leap into electronic typesetting, remaining essentially
unchanged. It was popularised in the 1960s with the release of Letraset
sheets containing Lorem Ipsum passages, and more recently with desktop
publishing software like Aldus PageMaker including versions of Lorem
Ipsum.
`;

// This one contains all the other stories beneath
export const All = () => (
  <>
    <Title />
    <Subtitle />
    <Styled />
    <Body />
  </>
);

// Title: text--title
export const Title = () => <Text variant="title">I am your next article</Text>;

// Subtitle: text--subtitle
export const Subtitle = () => (
  <Text variant="subtitle">Why you should read this</Text>
);

// Body: text--body
export const Body = () => <Text variant="body">{content}</Text>;

// Default: text--default
export const Default = () => <Text>{content}</Text>;

// Styled: text--styled
export const Styled = () => {
  const textStyle: CSSObject = {
    fontSize: "0.9rem",
    fontStyle: "italic",
    color: "blue",
  };

  return <Text style={textStyle}>{content}</Text>;
};
