import styled, { css } from "styled-components"
import breakpoints from "../../style/responsive"
import { StyledButtonCss } from "../Button/styleButton"

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

const ProjectCardCss = css`
  display: flex;
  flex-direction: column;
  width: 51.5rem;
  height: 78.2rem;
  align-items: center;
  border-radius: 1rem;
  background-color: ${({ theme }) =>
    theme.theme === "light" ? theme.colors.blue6 : theme.colors.blue2};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 30px 0px ${({ theme }) => theme.colors.black2};
  }

  @media (max-width: ${breakpoints.small1}px) {
    width: 275px;
  }
`

const ProjectCard = styled.div`
  ${ProjectCardCss}
`
const ProjectCardInfoCss = css`
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
const ProjectCardInfo = styled.div`
  ${ProjectCardInfoCss}
`

const ProjectType = styled.h5`
  color: ${({ theme }) => theme.colors.white1};
  text-align: center;
  font-family: Inter;
  font-size: 3rem;
  font-weight: 500;
  border-radius: 0.7rem;
  width: 18.5rem;
  padding: 0.7rem 0;
  text-transform: capitalize;
  background: ${({ theme, $type }) => {
    if ($type === "front-end") {
      return theme.colors.orange1
    } else if ($type === "back-end") {
      return theme.colors.orange2
    } else if ($type === "full-stack") {
      return theme.colors.orange3
    }
  }};
`

const ProjectImage = styled.img`
  width: 100%;
  height: 29rem;
  border-radius: 1rem 1rem 0 0;
  object-fit: cover;

  @media (max-width: ${breakpoints.small1}px) {
    height: 100%;
    max-height: 170px;
  }
`

const ProjectTechnologiesCss = css`
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
const ProjectTechnologies = styled.div`
  ${ProjectTechnologiesCss}
`
const ProjectLinksCss = css`
  display: flex;
  padding: 1rem 0;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
`
const ProjectLinks = styled.div`
  ${ProjectLinksCss}
`

const StyledLink = styled.a`
  ${StyledButtonCss}
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

  &:hover {
    transform: scale(1.05);
  }
`

const ComingSoonContainer = styled.div`
  position: relative;

  span {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);

    font-family: Inter;
    font-weight: 900;
    font-size: 5rem;
    z-index: 9;
  }
`
const ComingSoonCard = styled.div`
  ${ProjectCardCss}
  position: relative;
  filter: grayscale(100%) blur(4px);

  &:hover {
    transform: scale(1);
    box-shadow: none;

    ${StyledLink}, ${ButtonMoreInformations} {
      transform: scale(1);
      cursor: default;
    }
  }
`
const ComingSoonStrip = styled.img`
  width: 100%;
  position: absolute;
  z-index: 9;
  top: 30%;
`

export {
  ProjectsCardsContainer,
  ProjectCardCss,
  ProjectCard,
  ProjectCardInfoCss,
  ProjectCardInfo,
  ProjectType,
  ProjectImage,
  ProjectTechnologiesCss,
  ProjectTechnologies,
  ProjectLinksCss,
  ProjectLinks,
  StyledLink,
  ButtonMoreInformations,
  ComingSoonContainer,
  ComingSoonCard,
  ComingSoonStrip,
}
