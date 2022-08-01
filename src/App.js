import React, { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

import GlobalStyles from "./styles/Global";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

import ErrorFallbackComponent from "./components/ErrorFallback";
import {
  Header,
  HeaderContainer,
  ThemeButton,
} from "./components/Comments/CommentElements";
import LoadingSpinner from "./components/LoadingSpinner";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";

// Lazy loading and Fallback definition //
const Comments = React.lazy(() => import("./components/Comments"));

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <ErrorFallbackComponent error={error} onClick={resetErrorBoundary} />
    </>
  );
}
//////////////////////////////////////////

function App() {
  const [defaultTheme, setDefaultTheme] = useState(false);
  // const handleError = useErrorHandler();

  const themeHandler = () => {
    setDefaultTheme((prevValue) => !prevValue);
  };

  return (
    <ThemeProvider theme={!defaultTheme ? theme.light : theme.dark}>
      <div className="container">
        <GlobalStyles />
        <HeaderContainer>
          <Header>Comments component</Header>
          <ThemeButton onClick={() => themeHandler()}>
            {!defaultTheme ? <MoonIcon /> : <SunIcon />}
          </ThemeButton>
        </HeaderContainer>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<LoadingSpinner />}>
            <Comments />
          </Suspense>
        </ErrorBoundary>
      </div>
    </ThemeProvider>
  );
}

export default App;
