import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  background: ${(props) => props.theme.bg.secondary};
  z-index: 500;
  height: 62px;
  padding: ${(props) => props.theme.padding.xs};
  border: 1px solid #d8dee7;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MediaBtn = styled.div`
  height: 100%;
  aspect-ratio: 1/1;
  color: ${(props) => props.theme.bg.secondary};
  background-color: ${(props) => props.theme.bg.body};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-size: ${(props) => props.theme.fonts.l};
`;

export const CommentInput = styled.input`
  color: #333333;
  border: none;
  height: 100%;
  /* width: 100%; */
  flex-grow: 1;
  padding: 0 ${(props) => props.theme.padding.s};
  background: transparent;
  outline: none;
  color: ${(props) => props.theme.colors.secondary};
`;

export const SendButton = styled.button`
  /* width: 196px; */
  height: 100%;
  display: flex;
  color: ${(props) => props.theme.bg.secondary};
  background-color: ${(props) => props.theme.bg.body};
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.s};
  border-radius: 6px;
  padding: ${(props) => props.theme.padding.s};
  font-weight: 600;
`;

export const SendIcon = styled.div`
  height: 15px;
  width: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateZ(45deg);
  @media (min-width: 700px) {
    height: 20px;
    width: 20px;
  }
`;

export const ButtonText = styled.p`
  font-size: ${(props) => props.theme.fonts.xs};
  display: flex;
  align-items: center;
  justify-content: center;
`;
