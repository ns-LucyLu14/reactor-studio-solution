import React, { Suspense, useState } from "react";
import GlobalStyles from "./styles/Global";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import {
  Header,
  HeaderContainer,
  ThemeButton,
} from "./components/Comments/CommentElements";
import LoadingSpinner from "./components/LoadingSpinner";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";

const Comments = React.lazy(() => import("./components/Comments"));

function App() {
  const [defaultTheme, setDefaultTheme] = useState(false);

  const themeHandler = () => {
    setDefaultTheme((prevValue) => !prevValue);
  };
  return (
    <ThemeProvider theme={!defaultTheme ? theme.light : theme.dark}>
      <div className="container">
        <GlobalStyles />
        <HeaderContainer>
          <Header>Comments component</Header>
          <ThemeButton onClick={themeHandler}>
            {!defaultTheme ? <MoonIcon /> : <SunIcon />}
          </ThemeButton>
        </HeaderContainer>
        <Suspense fallback={<LoadingSpinner />}>
          <Comments themeHandler={themeHandler} />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
