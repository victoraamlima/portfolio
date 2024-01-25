import { useSelector } from "react-redux"
import { StyledMain } from "./styleMain"
import { ThemeProvider } from "styled-components"
import Header from "../Header/Header"
import Home from "../Home/Home"
import About from "../About/About"
import Projects from "../Projects/Projects"
import Footer from "../Footer/Footer"
import { useEffect, useState } from "react"
import DetailedProjectCardInfo from "../DetailedProjectCardInfo/DetailedProjectCardInfo"

const Main = () => {
  const themeInfo = useSelector((state) => state.themeColors)
  const selectedProject = useSelector((state) => state.selectedProject)

  useEffect(() => {
    localStorage.setItem(
      "themePortfolioVictorMeireles",
      JSON.stringify(themeInfo)
    )
  }, [themeInfo])

  const [isSelectedDetailedProject, setIsSelectedDetailedProject] =
    useState(false)

  useEffect(() => {
    if (Object.keys(selectedProject).length !== 0) {
      setIsSelectedDetailedProject(true)
    } else {
      setIsSelectedDetailedProject(false)
    }
  }, [selectedProject])

  return (
    <ThemeProvider theme={themeInfo}>
      <StyledMain $isSelectedDetailedProject={isSelectedDetailedProject} >
        <Header />
        <Home />
        <About />
        <Projects />
        <Footer />
        {isSelectedDetailedProject && <DetailedProjectCardInfo />}
        {/* <DetailedProjectCardInfo /> */}
      </StyledMain>
    </ThemeProvider>
  )
}

export default Main
