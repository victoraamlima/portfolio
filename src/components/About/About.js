import technologiesSvgs from "../../utils/projectsIcons/projectsIcons"
import {
  AboutInfo,
  StyledAbout,
  Technologies,
  TechnologyInfo,
} from "./styleAbout"

const About = () => {
  return (
    <StyledAbout>
      <h2>Sobre</h2>

      <AboutInfo>
        <div>
          <h3>Um pouco da minha História</h3>

          <p>
            Desde que interessei-me pela área da programação, tenho estudado e
            praticado diariamente. Além de, ter feito diversos projetos. Agora
            busco aplicar os meus conhecimentos no mercado de trabalho, visando
            adquirir novas experiências. Sou dedicado, adoro resolver problemas
            difíceis, tenho facilidade de aprendizado e sempre procuro maneiras
            de capacitar-me. Com isso, acredito que posso ser um grande ativo
            para sua equipe.
          </p>
        </div>

        <div>
          <h3>Minhas Habilidades</h3>

          <Technologies>
            {technologiesSvgs.map((tech, index) => (
              <TechnologyInfo key={index}>
                <img src={tech.svg} alt={tech.name} />

                <span>{tech.name}</span>
              </TechnologyInfo>
            ))}
          </Technologies>
        </div>
      </AboutInfo>
    </StyledAbout>
  )
}

export default About
