import React from "react";

import { TextProps } from "./Text.types";
import S from "./Text.style";

export const Text = ({ variant = "body", children, ...props }: TextProps) => (
  <S.Root {...props} variant={variant}>
    {children}
  </S.Root>
);
