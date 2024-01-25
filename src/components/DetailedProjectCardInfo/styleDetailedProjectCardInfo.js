import styled from "styled-components"
import {
  ProjectCardCss,
  ProjectCardInfoCss,
  ProjectLinksCss,
  ProjectTechnologiesCss,
} from "../ProjectsCards/styleProjectsCards"
import breakpoints from "../../style/responsive"

const DetailedProjectCardInfoContainer = styled.div`
  ${ProjectCardCss}

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 6rem 3rem 3rem;
  gap: 3rem;
  width: unset;
  height: unset;
  max-height: 95vh;
  background-color: ${({ theme }) =>
    theme.theme === "light" ? theme.colors.blue4 : theme.colors.blue2};
  z-index: 10;

  filter: blur(0) !important;

  * {
    filter: blur(0) !important;
  }

  & > div:first-child {
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    cursor: pointer;

    span {
      transform: rotate(45deg);
      width: 4rem;
      height: 0.3rem;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.white1};
      z-index: 10;

      &::before {
        content: "";
        position: absolute;
        width: 4rem;
        height: 0.3rem;
        border-radius: 5px;
        transform: rotate(90deg);
        background-color: ${({ theme }) => theme.colors.white1};
      }
    }
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }

  p {
    color: ${({ theme }) => theme.colors.white1};
    text-align: center;
    font-family: Inter;
    font-size: 2rem;
    font-weight: 400;
    line-height: 150%;
    overflow-y: overlay;
  }

  &:hover {
    transform: translate(-50%, -50%) scale(1);
  }

  @media (max-width: ${breakpoints.medium1}px) {
    width: 90vw;

    & > div {
      flex-wrap: wrap;
    }
  }
`

const StyledDetailedProjectCardInfo = styled.div`
  ${ProjectCardInfoCss}

  flex-direction: column;
  gap: 5rem;
  padding: 0;

  & > div:first-child {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    & > h4 {
      font-size: 5rem;
      color: ${({ theme }) => theme.colors.white1};
    }
  }

  @media (max-width: ${breakpoints.medium1}px) {
    flex-direction: row;
  }

  @media (max-width: ${breakpoints.small1}px) {
    & > div:first-child > h4 {
      font-size: 3rem;
    }
  }
`
const DetailedProjectLinks = styled.div`
  ${ProjectLinksCss}
  flex-direction: column;
`

const ProjectImgs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  & > img:first-child {
    width: 50rem;
  }

  & > div {
    display: flex;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: min-content;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.white5};

    & > img {
      width: 10rem;
    }
  }

  @media (max-width: ${breakpoints.medium2}px) {
    flex-direction: column;

    & > div {
      flex-direction: row;
    }
  }

  @media (max-width: ${breakpoints.small1}px) {
    & > img:first-child {
      width: 35rem;
    }
  }
`
const DetailedProjectTechnologies = styled.div`
  ${ProjectTechnologiesCss}

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: ${breakpoints.medium1}px) {
    grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
    justify-items: center;
    width: 100%;
    min-width: 50%;
  }
`

export {
  DetailedProjectCardInfoContainer,
  StyledDetailedProjectCardInfo,
  DetailedProjectLinks,
  ProjectImgs,
  DetailedProjectTechnologies,
}
