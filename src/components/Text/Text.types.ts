import { CSSObject } from "styled-components";

export type TextVariant = "title" | "subtitle" | "body";

export interface TextProps {
  variant?: TextVariant;
  children?: React.ReactNode;
  style?: CSSObject;
}
