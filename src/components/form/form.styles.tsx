import styled, { css } from "styled-components";
import { rgba, darken } from "polished";
import { colors, weights, delays } from "../global-style";
import { ModeType } from "./form.types";

import DropdownArrowsSvg from "./img/dropdown-arrows.svg";

export const StyledContainer = styled.div<{ width?: string }>`
  display: block;
  position: relative;

  ${(props) =>
    props.width !== undefined &&
    css`
      width: ${props.width};
    `};
`;

export const StyledLabel = styled.label<{ mode: ModeType; disabled?: boolean }>`
    position: absolute;
    top: 14px;
    left: 13px;
    color: ${colors.inputLabelText};
    font-weight: ${weights.medium};

    pointer-events: none;
    transition: all ${delays.short};
    transform-origin: top left;

    ${(props) =>
      (props.mode === ModeType.Active || props.mode === ModeType.FilledIn) &&
      css`
        top: 6px;
        transform: scale(0.8);
      `}

    ${(props) =>
      props.mode === ModeType.Active &&
      css`
        color: ${colors.accent};
      `}

    ${(props) =>
      props.disabled &&
      css`
        color: ${rgba(colors.inputLabelText, 0.4)};
      `}
`;

const baseInputStyle = css`
  display: block;
  height: 42px;
  width: 100%;

  padding: 24px 12px 12px 12px;
  border: solid 1px ${colors.inputLine};
  border-radius: 8px;
  background-color: ${colors.inputBkg};

  &:hover {
    border-color: ${darken(0.08, colors.inputLine)};
  }

  &:focus {
    border-color: ${rgba(colors.accent, 0.2)};
    box-shadow: 0 0 0 3px ${rgba(colors.accent, 0.2)};
    outline: none;
  }

  &[disabled] {
    background-color: ${colors.inputDisabledBkg};
    border-color: ${rgba(colors.inputLine, 0.4)};
  }
`;

export const StyledInput = styled.input`
  ${baseInputStyle}
`;

export const StyledSelect = styled.select`
  ${baseInputStyle}

  appearance: none;
  padding: 12px 12px 0 12px;
  background-image: url(${DropdownArrowsSvg});
  background-position: right 6px center;
  background-repeat: no-repeat;
`;
