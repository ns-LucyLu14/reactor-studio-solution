import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: ${(props) => props.theme.transition}
    }
    
    body {
        background: ${(props) => props.theme.bg.body};
        font-family: 'Inter', sans-serif;
        font-style: normal;
        overflow-x: hidden;
        
    }
    
    li {
        list-style: none;
        text-decoration: none;
    }
    
    .container {
        width: 90%;
        max-width: 1032px;
        max-height: 864px;
        margin: 0 auto;
        padding: 20px;
        border-radius: 8px;
        background: ${(props) => props.theme.bg.primary};

    }
    

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background: #C7CDD8;
    }


    @media (min-width: 700px) {
        .container {
            padding: 32px;
        }
    }
    
`;

export default GlobalStyles;
