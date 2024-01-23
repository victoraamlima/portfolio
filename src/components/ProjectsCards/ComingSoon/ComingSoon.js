import technologiesSvgs from "../../../utils/projectsIcons/projectsIcons"
import ComingSoonSvg from "../../../images/coming-soon/coming-soon.svg"
import {
  ProjectCardInfo,
  ProjectImage,
  ProjectTechnologies,
  ProjectLinks,
  StyledLink,
  ButtonMoreInformations,
  ComingSoonContainer,
  ComingSoonCard,
  ComingSoonStrip,
} from "../styleProjectsCards"

const ComingSoon = () => {
  const comingSoonCardInfo = {
    id: "coming soon",
    name: "coming soon",
    type: ["front-end"],
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. sed id ultrices nisl, eget ultricies nisl.",
    image: "evaluation.png",
    techs: ["react", "js", "css", "nodejs"],
    deploy: "",
    repository: "",
  }

  return (
    <>
      <ComingSoonContainer>
        <ComingSoonStrip src={ComingSoonSvg} alt="Coming Soon strip" />

        <span>EM BREVE</span>

        <ComingSoonCard>
          <ProjectImage
            src={require(`../../../images/coming-soon/image-coming-soon.png`)}
            alt="Coming Soon card"
          />
          <ProjectCardInfo>
            <h4>{comingSoonCardInfo.name}</h4>

            {comingSoonCardInfo.type.map((type) => {
              return <h5 key={type}>{type}</h5>
            })}

            <p>{comingSoonCardInfo.description}</p>

            <ProjectTechnologies>
              {technologiesSvgs
                .filter((tech) => {
                  return comingSoonCardInfo.techs.includes(tech.id)
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
                href={comingSoonCardInfo.deploy}
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
                href={comingSoonCardInfo.repository}
              >
                repositório
              </StyledLink>
            </ProjectLinks>
            <ButtonMoreInformations>SAIBA MAIS</ButtonMoreInformations>
          </ProjectCardInfo>
        </ComingSoonCard>
      </ComingSoonContainer>
    </>
  )
}

export default ComingSoon
