import styled from "styled-components";

export const AppWrapper = styled.div`
  height: 100vh;
  background-image: url("/images/stardewDesktop.jpg");
  background-size: cover;
  color: white;
`;

export const AppContent = styled.main`
  padding: 100px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const SearchResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserDisplay = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px grey;
`;
