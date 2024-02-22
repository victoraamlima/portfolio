import technologiesSvgs from "../../utils/projectsIcons/projectsIcons"
import {
  AboutInfo,
  StyledAbout,
  Technologies,
  TechnologyInfo,
} from "./styleAbout"

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
          <use xlinkHref="#wave" opacty=".9">
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
          <h3>Um pouco da minha História</h3>

          <p>
            Meu nome é Victor Meireles e sou um desenvolvedor full-stack e
            designer gráfico freelancer. Neste texto, vou contar um pouco da
            minha trajetória e como descobri a minha vocação para a programação.
            <br />
            <br />
            Desde a infância, sempre fui fascinado por tecnologias e suas
            aplicações. Em 2019, consegui passar no vestibular para Engenharia
            Mecatrônica na federal de Santa Catarina, mas não tive condições
            financeiras de me mudar para lá. Na minha cidade, Belém do Pará, não
            havia esse curso. Por isso, optei por Engenharia Mecânica na UFPA,
            onde ingressei em 2019.
            <br />
            <br />
            Porém, logo percebi que não era o que eu queria. Não me sentia
            satisfeito nem motivado com a faculdade. Em 2020, com a pandemia, me
            afastei dos estudos e comecei a trabalhar como designer gráfico.
            Aproveitando os conhecimentos que adquiri em dois cursos de
            computação no ensino médio, fiz vários trabalhos de edição de
            imagem, criação de vetores e edição de vídeos para as mídias
            sociais. Mas ainda me sentia limitado e insatisfeito.No final do
            ano, descobri a minha paixão pela programação.
            <br />
            <br />
            Quanto mais pesquisava e aprendia sobre a carreira de programador,
            mais me interessava. Foi então que admiti para mim mesmo: Engenharia
            Mecânica não era para mim. Não me identificava com a faculdade nem
            com a profissão de engenheiro mecânico. Gosto de Engenharia
            Mecânica, mas como hobby, não como trabalho.
            <br />
            <br />
            Em 2022, decidi mudar de rumo e comecei um curso de desenvolvedor
            front-end web, onde aprendi HTML, CSS, JavaScript e React. Como já
            tinha experiência em design gráfico, achei que seria o melhor
            caminho para começar. Sabia que a profissão de desenvolvedor não era
            fácil, como muitos diziam. Sabia que teria que me esforçar muito e
            dar o meu melhor. Sabia que não seria simples conseguir a primeira
            vaga como desenvolvedor. Mas também sabia que era isso que eu
            queria. Eu amava programar, planejar e resolver os bugs. Finalmente,
            me encontrei.
            <br />
            <br />
            Quanto mais aprendia, mais gostava da área. No meio do ano, tranquei
            a faculdade para me dedicar à carreira de desenvolvedor. Foi um ano
            difícil, pois muitos me criticaram por sair da faculdade. Mas eu
            sabia que lá não era o meu lugar e que tinha que focar no meu
            objetivo.
            <br />
            <br />
            No final do primeiro semestre de 2023, terminei o meu curso na Dev
            Em Dobro, mas não quis parar por aí. Eu queria ser um desenvolvedor
            full-stack. Estava me organizando para continuar estudando por conta
            própria e procurar vagas de desenvolvedor front-end, quando surgiu
            uma oportunidade. Concorri e ganhei uma bolsa integral para o curso
            de desenvolvedor back-end intensivo da Cubos Academy, com foco em
            Node.js, pacotes npm, API REST e banco de dados. Não podia perder
            essa chance. Deixei a procura de vagas para depois e me dediquei
            totalmente ao curso. Estudava de manhã, de tarde e de noite. E
            assim, 2023 passou voando.
            <br />
            <br />
            Agora que terminei o curso na Cubos, sei o que quero e quem quero
            ser. Ainda tenho uma longa jornada pela frente, mas tenho certeza de
            que vou sempre aprender mais e me tornar um desenvolvedor melhor.
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
