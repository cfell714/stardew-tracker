import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-width: 100px;
`;

export const CharacterTable = styled.table`
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  overflow: scroll;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
`;

export const CharacterColumn = styled.tr<{ borderRight?: string }>`
  display: flex;
  flex-direction: column;
  border-left: solid 1px grey;
  height: 100%;
  width: 100%;
  border-right: ${({ borderRight }) =>
    borderRight ? "solid 1px grey" : "none"};
`;

export const CharacterTableBody = styled.tbody`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

export const CharacterList = styled.div`
  left: 40px;
  background: darkgray;
  position: absolute;
  width: 100px;
  gap: 4px;
`;

export const CharDropDown = styled.div`
  &:hover {
    background: pink;
  }
`;

export const CharSearchListContainer = styled.div`
  width: 100%;
  position: relative;
`;
