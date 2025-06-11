import styled from "styled-components";

export const AppWrapper = styled.div`
  height: 100vh;
  background-image: url("/images/stardewDesktop.jpg");
  background-size: cover;
  color: white;
  font-weight: 500;
`;

export const AppContent = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  font-family: "Courier New", Courier, monospace;
`;

export const SearchResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 10px;
  box-sizing: border-box;
  padding: 40px;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserDisplay = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px grey;
  min-width: 200px;
`;
