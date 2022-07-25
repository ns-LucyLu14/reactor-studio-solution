import React from "react";
import { SpinnerContainer, SpinnerIcon } from "./LoadingSpinnerElements";
import { CogIcon } from "@heroicons/react/outline";

const LoadingSpinner = () => {
  return (
    <>
      <SpinnerContainer>
        <SpinnerIcon>
          <CogIcon />
        </SpinnerIcon>
      </SpinnerContainer>
    </>
  );
};

export default LoadingSpinner;
