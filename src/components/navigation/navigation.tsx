import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import styled from "styled-components";
import { rgba } from "polished";
import { colors, weights, delays, misc } from "../global-style";

type ChildrenProps = {
  children: React.ReactNode;
};

const StyledNav = styled.nav`
  display: flex;
  padding: 8px;
  background-color: ${colors.navBkg};
  box-shadow: 0 2px 8px ${rgba(colors.shadow, 0.08)};

  & > ul {
    display: flex;
    align-items: center;
    width: 960px;
    margin: 0 auto;
    padding: 0 32px;

    li:last-child {
      margin-left: auto;
    }
  }
`;

export const Navigation = ({ children }: ChildrenProps) => (
  <StyledNav>
    <ul>{children}</ul>
  </StyledNav>
);

const StyledNavLink = styled(NavLink)<
  NavLinkProps & { activeClassName: string }
>`
  display: block;
  margin-right: 8px;
  padding: 16px 40px;
  color: ${colors.navItemText};
  font-size: 16px;
  font-weight: ${weights.semibold};
  text-decoration: none;
  border-radius: ${misc.borderRadius};
  transition: all ${delays.short};

  &:hover {
    background-color: ${rgba(colors.navActiveItemBkg, 0.08)};
  }

  &.${(props) => props.activeClassName} {
    color: ${colors.navActiveItemText};
    background-color: ${colors.navActiveItemBkg};
  }
`;

export const Item = ({ children, ...rest }: NavLinkProps) => (
  <li>
    <StyledNavLink activeClassName="selected" {...rest}>
      {children}
    </StyledNavLink>
  </li>
);

export const Auth = styled.li`
  display: flex;
  align-items: center;
`;
