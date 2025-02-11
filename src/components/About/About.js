import technologiesSvgs from "../../utils/projectsIcons/projectsIcons";
import {
  AboutInfo,
  StyledAbout,
  Technologies,
  TechnologyInfo,
} from "./styleAbout";

const About = () => {
  return (
    <StyledAbout id="about">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 1600 775"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="bg">
            <stop
              offset="0%"
              style={{ stopColor: "rgba(130, 158, 249, 0.06)" }}
            ></stop>
            <stop
              offset="50%"
              style={{ stopColor: "rgba(76, 190, 255, 0.6)" }}
            ></stop>
            <stop
              offset="100%"
              style={{ stopColor: "rgba(115, 209, 72, 0.2)" }}
            ></stop>
          </linearGradient>
          <path
            id="wave"
            fill="url(#bg)"
            d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
	s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
          />
        </defs>
        <g>
          <use xlinkHref="#wave" opacity=".3">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="10s"
              calcMode="spline"
              values="270 230; -334 180; 270 230"
              keyTimes="0; .5; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
          <use xlinkHref="#wave" opacity=".6">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="8s"
              calcMode="spline"
              values="-270 230;243 220;-270 230"
              keyTimes="0; .6; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
          <use xlinkHref="#wave" opacity=".9">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="6s"
              calcMode="spline"
              values="0 230;-140 200;0 230"
              keyTimes="0; .4; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
        </g>
      </svg>

      <h2>Sobre</h2>

      <AboutInfo>
        <div>
          <h3>Quem sou eu:</h3>

          <p>
            Meu nome é Victor Meireles, sou desenvolvedor full-stack e designer
            gráfico freelancer com uma paixão inabalável por tecnologia e
            inovação.
          </p>

          <h3>O que eu faço:</h3>

          <p>
            Desenvolvo soluções completas tanto para front-end quanto para
            back-end. Utilizo tecnologias como HTML, CSS, JavaScript, React,
            TypeScript, Next.js, Node.js, APIs REST e bancos de dados SQL e
            NoSQL. Crio landpages, desenvolvimento e utilizo APIs, e construo
            sites dinâmicos e responsivos. Além disso, tenho habilidades em
            edição de imagem, criação de vetores e edição de vídeos,
            proporcionando uma abordagem holística ao design e desenvolvimento.
          </p>
          
          <h3>O que já fiz:</h3>

          <p>
            Já desenvolvi diversos projetos tanto de front-end quanto de
            back-end, incluindo bancos de dados SQL e NoSQL, landpages, criação
            e utilização de APIs, e sites dinâmicos. Para expandir meus
            conhecimentos, estou cursando Engenharia de Software. Sou um
            desenvolvedor dedicado, criativo e sempre em busca de novos
            desafios.
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
  );
};

export default About;
