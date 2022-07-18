import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
0% {
    transform: rotateZ(0deg);
}
100% {
    transform: rotateZ(360deg);
}
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  animation-name: ${spinAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;
