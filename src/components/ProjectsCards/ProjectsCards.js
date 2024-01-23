import { useState } from "react"
import projectsInfoJson from "../../json/projects.json"
import technologiesSvgs from "../../utils/projectsIcons/projectsIcons"
import ComingSoon from "./ComingSoon/ComingSoon"
import {
  ButtonMoreInformations,
  ProjectCard,
  ProjectImage,
  ProjectLinks,
  ProjectTechnologies,
  ProjectType,
  ProjectsCardsContainer,
  ProjectCardInfo,
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

            <ProjectCardInfo>
              <h4>{project.name}</h4>

              {project.type.map((type) => {
                return (
                  <ProjectType $type={type} key={type}>
                    {type}
                  </ProjectType>
                )
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
                  rel="noreferrer"
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
                  rel="noreferrer"
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
            </ProjectCardInfo>
          </ProjectCard>
        )
      })}

      <ComingSoon />
    </ProjectsCardsContainer>
  )
}

export default ProjectsCards
