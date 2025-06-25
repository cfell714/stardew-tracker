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
  padding: 0 40px 40px 40px;
`;

export const FilterWrapper = styled.div`
  padding: 40px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

export const UserDisplay = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px grey;
  min-width: 200px;
`;

export const SearchBar = styled.input`
  border: none;
  width: 100%;
  background: transparent;
  color: white;
  outline: none;
  height: 30px;
  border-bottom: solid 1px grey;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-width: 100px;
`;

export const CheckboxInput = styled.input``;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
