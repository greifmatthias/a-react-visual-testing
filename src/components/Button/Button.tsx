import React from "react";

import { ButtonProps } from "./Button.types";
import S from "./Button.style";

export const Button = ({ children, ...props }: ButtonProps) => (
  <S.Root {...props}>{children}</S.Root>
);
