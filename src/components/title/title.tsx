import styled from "styled-components";
import { colors, weights } from "../global-style";

export const PageTitle = styled.h1`
  color: ${colors.defaultText};
  font-size: 30px;
  font-weight: ${weights.heavy};
  margin: 24px 8px;
`;

export const SectionTitle = styled.h2`
  color: ${colors.defaultText};
  font-size: 18px;
  font-weight: ${weights.heavy};
  margin: 30px 8px 26px 8px;
`;

export const CardTitle = styled.h3`
  font-size: 15px;
  font-weight: ${weights.medium};
  color: ${colors.defaultText};
  padding: 8px;
`;

export const CardSubTitle = styled.span`
  font-size: 13px;
  font-weight: ${weights.regular};
  color: ${colors.fadedText};
  padding: 9px 8px 6px 8px;
`;
