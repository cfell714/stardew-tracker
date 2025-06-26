"use client";
import {
  AppWrapper,
  StyledTabLink,
  StyledTabLinkWrapper,
} from "./AppLayout.style";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppWrapper>
      <StyledTabLinkWrapper>
        <StyledTabLink href={"/"}>Home</StyledTabLink>{" "}
        <StyledTabLink href={"/characterView"}>Character View</StyledTabLink>
      </StyledTabLinkWrapper>
      {children}
    </AppWrapper>
  );
};
