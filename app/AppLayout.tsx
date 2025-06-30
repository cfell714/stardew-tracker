"use client";
import {
  AppContent,
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
      <AppContent>{children}</AppContent>
    </AppWrapper>
  );
};
