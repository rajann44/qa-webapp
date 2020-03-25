import React from "react";
import styled from "styled-components";

import { colors, weights } from "../global-style";

export enum SignType {
  Income,
  Expense,
}

export interface SignProps {
  sign: SignType;
  top: number;
  left: number;
}

export const Legend = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;

export const LegendItem = styled.li<{ color: string }>`
  display: flex;

  &::before {
    content: "";
    flex-shrink: 0;
    margin-right: 5px;
    width: 14px;
    height: 14px;
    background-color: ${(props) => props.color};
    border-radius: 2px;
  }
`;

const StyledSign = styled.div<{ sign: SignType; top: number; left: number }>`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  font-size: 42px;
  font-weight: ${weights.semibold};
  line-height: 6px;
  color: ${(props) =>
    props.sign === SignType.Income ? colors.defaultText : colors.destructive};
`;

export const Sign = ({ sign, top, left }: SignProps) => (
  <StyledSign sign={sign} top={top} left={left}>
    {sign === SignType.Income ? "+" : "-"}
  </StyledSign>
);
