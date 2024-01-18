import { StyledButton } from "../Button/styleButton"
import ProjectsCards from "../ProjectsCards/ProjectsCards"
import { StyledProjects } from "./styleProjects"

const Projects = () => {
  return (
    <StyledProjects>
      <h2>Projetos</h2>

      <ProjectsCards />

      <StyledButton $width="30rem" $height="7.8rem" $fontesize="3rem">
        MOSTRAR MAIS
      </StyledButton>
    </StyledProjects>
  )
}

export default Projects
