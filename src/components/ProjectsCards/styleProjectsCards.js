import styled from "styled-components"
import breakpoints from "../../style/responsive"

const ProjectsCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(51.5rem, 1fr));
  gap: 6rem;
  width: 100%;
  justify-items: center;

  @media (max-width: ${breakpoints.small1}px) {
    grid-template-columns: 1fr;
  }
`

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 51.5rem;
  height: 78.2rem;
  align-items: center;
  border-radius: 1rem;
  background-color: ${({ theme }) =>
    theme.theme === "light" ? theme.colors.blue6 : theme.colors.blue2};

  @media (max-width: ${breakpoints.small1}px) {
    width: 275px;
  }
`
const ProjectsCardsInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 3rem 2rem;
  align-items: center;
  gap: 1.5rem;

  h4 {
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.blue1 : theme.colors.white1};
    text-align: center;
    font-family: Inter;
    font-size: 3.6rem;
    font-weight: 600;
    text-transform: capitalize;
  }

  h5 {
    color: ${({ theme }) => theme.colors.white1};
    text-align: center;
    font-family: Inter;
    font-size: 3rem;
    font-weight: 500;
    border-radius: 0.7rem;
    width: 185px;
    padding: 0.7rem 0;
    text-transform: capitalize;
    background: ${({ theme }) => theme.colors.orange1};
  }

  p {
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.blue1 : theme.colors.white1};
    text-align: center;
    font-family: Inter;
    font-size: 2rem;
    font-weight: 400;
    padding: 0.5rem 0;
  }
`

const ProjectImage = styled.img`
  width: 100%;
  height: 29rem;
  border-radius: 1rem 1rem 0 0;

  @media (max-width: ${breakpoints.small1}px) {
    height: 100%;
    max-height: 170px;
  }
`

const ProjectTechnologies = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 2.5rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white5};

  img {
    width: 5rem;
    height: 5rem;
  }
`
const ProjectLinks = styled.div`
  display: flex;
  padding: 1rem 0;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
`
const ButtonMoreInformations = styled.button`
  all: unset;
  color: ${({ theme }) =>
    theme.theme === "light" ? theme.colors.blue1 : theme.colors.blue6};
  text-align: center;
  font-family: Inter;
  font-size: 2rem;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
  cursor: pointer;
`

export {
  ProjectsCardsContainer,
  ProjectCard,
  ProjectsCardsInfo,
  ProjectImage,
  ProjectTechnologies,
  ProjectLinks,
  ButtonMoreInformations,
}
