import { ThemeProvider } from "styled-components"
import GlobalStyles from "./components/styles/Global"
import Header from "./components/Header"
import Nav from "./components/Nav"
import BottomArticles from "./components/BottomArticles"
import Footer from "./components/Footer"

const theme = {
  colors: {
    primary: "#0070f3",
    lightText: "#babbcc",
    darkText: "#000018",
    accent: "#000018",
    goldText: "#e2a85e",
  },
  mobile: "768px",
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Nav />
        <Header />
        <BottomArticles />
        <Footer />
      </>
    </ThemeProvider>
  )
}
