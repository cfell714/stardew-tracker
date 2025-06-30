import Link from "next/link";
import styled from "styled-components";

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

export const StyledTabLink = styled(Link)`
  text-decoration: none;
  color: pink;
`;

export const StyledTabLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 20px 0 20px 40px;
`;

export const AppContent = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
