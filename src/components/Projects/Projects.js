import { StyledButton } from "../Button/styleButton"
import ProjectsCards from "../ProjectsCards/ProjectsCards"
import { StyledProjects } from "./styleProjects"

const Projects = () => {
  return (
    <StyledProjects>
      <h2>Projetos</h2>

      <ProjectsCards />

      <StyledButton $width="300px" $height="78px" $fontesize="30px">
        MOSTRAR MAIS
      </StyledButton>
    </StyledProjects>
  )
}

export default Projects
