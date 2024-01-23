import { useSelector } from "react-redux"
import { StyledMain } from "./styleMain"
import { ThemeProvider } from "styled-components"
import Header from "../Header/Header"
import Home from "../Home/Home"
import About from "../About/About"
import Projects from "../Projects/Projects"
import Footer from "../Footer/Footer"
import { useEffect } from "react"

const Main = () => {
  const themeInfo = useSelector((state) => state.themeColors)

  useEffect(() => {
    localStorage.setItem(
      "themePortfolioVictorMeireles",
      JSON.stringify(themeInfo)
    )
  }, [themeInfo])

  return (
    <ThemeProvider theme={themeInfo}>
      <StyledMain>
        <Header />
        <Home />
        <About />
        <Projects />
        <Footer />
      </StyledMain>
    </ThemeProvider>
  )
}

export default Main
