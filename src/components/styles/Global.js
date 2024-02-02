import { createGlobalStyle } from "styled-components"

const styled = { createGlobalStyle }

const GlobalStyles = styled.createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap");
  :root {
    background-color: #242424;
    background-color: #fafafa;
    color: black;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    font-family: "DM Sans", sans-serif;
    padding: 0 6rem;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      padding: 0 1rem;
    }
  }
`

export default GlobalStyles
