import { AboutInfo, StyledAbout, Technologies, TechnologyInfo } from "./styleAbout"
import ReduxSvg from "../../images/technologies/redux.svg"
import CssSvg from "../../images/technologies/css.svg"
import FigmaSvg from "../../images/technologies/figma.svg"
import GitSvg from "../../images/technologies/git.svg"
import HtmlSvg from "../../images/technologies/html.svg"
import JsSvg from "../../images/technologies/js.svg"
import JestSvg from "../../images/technologies/jest.svg"
import JquerySvg from "../../images/technologies/jquery.svg"
import NodejsSvg from "../../images/technologies/nodejs.svg"
import NpmSvg from "../../images/technologies/npm.svg"
import ReactSvg from "../../images/technologies/react.svg"
import PhotoshopSvg from "../../images/technologies/photoshop.svg"

const About = () => {
  const technologiesSvgs = [
    { name: "Redux", svg: ReduxSvg },
    { name: "CSS", svg: CssSvg },
    { name: "Figma", svg: FigmaSvg },
    { name: "Git", svg: GitSvg },
    { name: "HTML", svg: HtmlSvg },
    { name: "JavaScript", svg: JsSvg },
    { name: "Jest", svg: JestSvg },
    { name: "jQuery", svg: JquerySvg },
    { name: "Node.js", svg: NodejsSvg },
    { name: "NPM", svg: NpmSvg },
    { name: "React", svg: ReactSvg },
    { name: "Photoshop", svg: PhotoshopSvg },
  ]

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
