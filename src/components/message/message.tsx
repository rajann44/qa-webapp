import styled, { css } from "styled-components";
import { colors, weights } from "../global-style";

import iconErrorSvg from "./img/icon-error.svg";
export enum MessageType {
  Info,
  Warning,
  Error,
}

export interface MessageProps {
  type?: MessageType;
}

const badges = {
  [MessageType.Info]: { color: "transparent", icon: "none" }, //unused
  [MessageType.Warning]: { color: "transparent", icon: "none" }, //unused
  [MessageType.Error]: { color: colors.destructive, icon: iconErrorSvg },
};

const Message = styled.div<MessageProps>`
  a {
    color: ${colors.accent};
    font-weight: ${weights.semibold};
    text-decoration: none;

    :hover {
      filter: brightness(120%);
    }
  }

  ${(props) =>
    props.type !== undefined &&
    css`
      padding-left: 34px;
      font-weight: ${weights.medium};
      color: ${badges[props.type].color};
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: -8px;
        left: 0;
        width: 28px;
        height: 28px;
        background: url(${badges[props.type].icon}) no-repeat center;
        background-color: ${badges[props.type].color};
        border-radius: 50%;
      }
    `}
`;

export default Message;
