import styled from "styled-components";

const Root = styled.button(({ style }) => ({
  backgroundColor: "blue",
  border: 0,
  padding: "0.6rem 1.5rem",
  borderRadius: "1.5rem",
  color: "#FFFFFF",

  ...style,
}));

export default {
  Root,
};
