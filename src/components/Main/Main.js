import { useSelector } from "react-redux"
import Header from "../Header/Header"
import Home from "../Home/Home"
import { StyledMain } from "./styleMain"
import { ThemeProvider } from "styled-components"
import About from "../About/About"
import Projects from "../Projects/Projects"

const Main = () => {
  const themeInfo = useSelector((state) => state.themeColors)

  return (
    <ThemeProvider theme={themeInfo}>
      <StyledMain>
        <Header />
        <Home />
        <About />
        <Projects />
      </StyledMain>
    </ThemeProvider>
  )
}

export default Main
