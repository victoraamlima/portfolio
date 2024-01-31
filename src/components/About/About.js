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
