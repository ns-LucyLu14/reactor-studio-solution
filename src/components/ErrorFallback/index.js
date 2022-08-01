import React from "react";
import {
  ErrorContainer,
  ErrorMessage,
  ErrorResetBtn,
  ErrorSubtitle,
} from "./ErrorFallbackElements";

function ErrorFallbackComponent(props) {
  return (
    <ErrorContainer>
      <ErrorMessage>Oops...something went wrong. </ErrorMessage>
      <ErrorSubtitle>{props.error.message}</ErrorSubtitle>
      <ErrorSubtitle>Please try again.</ErrorSubtitle>
      <ErrorResetBtn onClick={() => props.onClick()}>Try Again</ErrorResetBtn>
    </ErrorContainer>
  );
}

export default ErrorFallbackComponent;
