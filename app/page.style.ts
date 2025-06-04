import styled from "styled-components";

export const AppWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(
    120deg,
    rgba(255, 161, 208, 1) 0%,
    rgba(171, 247, 203, 1) 51%,
    rgba(158, 215, 230, 1) 100%
  );
`;

export const AppContent = styled.main`
  padding: 100px;
  display: flex;
  overflow: auto;
`;
