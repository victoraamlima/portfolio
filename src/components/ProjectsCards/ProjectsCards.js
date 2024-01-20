import projectsInfoJson from "../../json/projects.json"
import technologiesSvgs from "../../utils/projectsIcons/projectsIcons"
import { StyledButton } from "../Button/styleButton"
import {
  ButtonMoreInformations,
  ProjectCard,
  ProjectImage,
  ProjectLinks,
  ProjectTechnologies,
  ProjectsCardsContainer,
  ProjectsCardsInfo,
  StyledLink,
} from "./styleProjectsCards"

const ProjectsCards = () => {
  const projectsInfo = projectsInfoJson.projectsInfo

  return (
    <ProjectsCardsContainer>
      {projectsInfo.map((project) => {
        return (
          <ProjectCard key={project.id}>
            <ProjectImage
              src={require(`../../images/projects/${project.image}`)}
              alt={project.name}
            />

            <ProjectsCardsInfo>
              <h4>{project.name}</h4>

              {project.type.map((type) => {
                return <h5 key={type}>{type}</h5>
              })}

              <p>{project.description}</p>

              <ProjectTechnologies>
                {technologiesSvgs
                  .filter((tech) => {
                    return project.techs.includes(tech.id)
                  })
                  .map((tech) => {
                    return <img src={tech.svg} alt={tech.name} key={tech.id} />
                  })}
              </ProjectTechnologies>

              <ProjectLinks>
                <StyledLink
                  target="_blank"
                  $width="18.4rem"
                  $fontesize="2rem"
                  $height="4.8rem"
                  $local={"card"}
                  href={project.deploy}
                >
                  deploy
                </StyledLink>
                <StyledLink
                  target="_blank"
                  $width="18.4rem"
                  $fontesize="2rem"
                  $height="4.8rem"
                  $local={"card"}
                  href={project.repository}
                >
                  repositório
                </StyledLink>
              </ProjectLinks>
              <ButtonMoreInformations>SAIBA MAIS</ButtonMoreInformations>
            </ProjectsCardsInfo>
          </ProjectCard>
        )
      })}
    </ProjectsCardsContainer>
  )
}

export default ProjectsCards
