import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.l};
  height: 400px;
  width: 100%;
`;

export const ErrorMessage = styled.h1`
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
`;

export const ErrorSubtitle = styled.h2`
  font-weight: 400;
  color: ${(props) => props.theme.colors.primary};
`;

export const ErrorResetBtn = styled.button`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.spacing.m};
`;
