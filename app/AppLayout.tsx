"use client";
import { usePathname } from "next/navigation";
import {
  AppContent,
  AppWrapper,
  StyledTabLink,
  StyledTabLinkWrapper,
} from "./AppLayout.style";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  console.log(pathname === "/");
  return (
    <AppWrapper>
      <StyledTabLinkWrapper>
        <StyledTabLink href={"/"} currLink={(pathname === "/").toString()}>
          Home
        </StyledTabLink>
        <StyledTabLink
          href={"/characterView"}
          currLink={(pathname === "/characterView").toString()}
        >
          Character View
        </StyledTabLink>
      </StyledTabLinkWrapper>
      <AppContent>{children}</AppContent>
    </AppWrapper>
  );
};
