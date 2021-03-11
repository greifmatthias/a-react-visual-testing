import { CSSObject } from "styled-components";

export interface ButtonProps {
  children?: React.ReactNode;
  style?: CSSObject;
  onClick?: () => void;
}
