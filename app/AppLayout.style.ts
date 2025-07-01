import Link from "next/link";
import styled, { css } from "styled-components";

export const AppWrapper = styled.div`
  height: 100vh;
  background-image: url("/images/stardewDesktop.jpg");
  background-size: cover;
  color: white;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  font-family: "Courier New", Courier, monospace;
`;

export const StyledTabLink = styled(Link)<{ currLink?: string }>`
  text-decoration: none;
  color: #fdb9c8;

  ${({ currLink }) =>
    currLink === "true" &&
    css`
      border-bottom: solid 1px #fdb9c8;
    `}
`;

export const StyledTabLinkWrapper = styled.div`
  position: sticky;
  top: 10px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 20px 0 20px 40px;
  background: rgba(0, 0, 139, 0.7);
  width: fit-content;
`;

export const AppContent = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
