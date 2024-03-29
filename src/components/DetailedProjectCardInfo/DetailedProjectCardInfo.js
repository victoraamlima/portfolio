import { useDispatch, useSelector } from "react-redux"
import technologiesSvgs from "../../utils/projectsIcons/projectsIcons"
import { closeSelectProject } from "../store/actions/DetailedProjectCardInfo"
import { ProjectType, StyledLink } from "../ProjectsCards/styleProjectsCards"
import {
  DetailedProjectCardInfoContainer,
  DetailedProjectLinks,
  DetailedProjectTechnologies,
  ProjectImgs,
  StyledDetailedProjectCardInfo,
} from "./styleDetailedProjectCardInfo"

const DetailedProjectCardInfo = () => {
  const selectedProject = useSelector((state) => state.selectedProject)

  const dispatch = useDispatch()

  return (
    <DetailedProjectCardInfoContainer>
      <div
        onClick={() => {
          dispatch(closeSelectProject())
        }}
      >
        <span />
      </div>

      <div>
        <StyledDetailedProjectCardInfo>
          <div>
            <h4>{selectedProject.name}</h4>

            {selectedProject.type?.map((type) => {
              return (
                <ProjectType $type={type} key={type}>
                  {type}
                </ProjectType>
              )
            })}
          </div>

          <DetailedProjectLinks>
            <StyledLink
              target="_blank"
              rel="noreferrer"
              $width="18.4rem"
              $fontesize="2rem"
              $height="4.8rem"
              $local={"card"}
              href={selectedProject.deploy}
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
              href={selectedProject.repository}
            >
              repositório
            </StyledLink>
          </DetailedProjectLinks>
        </StyledDetailedProjectCardInfo>

        <ProjectImgs>
          <img
            src={require(`../../images/projects/${
              selectedProject.images ? selectedProject.images[0] : "pokedex-1.png"
            }`)}
            alt="test"
          />

          <div>
            {selectedProject.images?.map((image, i) => (
              <img
                key={i}
                src={require(`../../images/projects/${image}`)}
                alt="test"
              />
            ))}
          </div>
        </ProjectImgs>

        <DetailedProjectTechnologies>
          {technologiesSvgs
            .filter((tech) => {
              return selectedProject.techs?.includes(tech.id)
            })
            .map((tech) => {
              return <img src={tech.svg} alt={tech.name} key={tech.id} />
            })}
        </DetailedProjectTechnologies>
      </div>

      <p>{selectedProject.description}</p>
    </DetailedProjectCardInfoContainer>
  )
}

export default DetailedProjectCardInfo
