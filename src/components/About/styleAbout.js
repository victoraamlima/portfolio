import styled from "styled-components"
import breakpoints from "../../style/responsive"

const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 10rem;
  gap: 5rem;

  h2 {
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.blue3 : theme.colors.white1};
    text-align: center;
    font-family: Inter;
    font-size: 9.6rem;
    font-weight: 600;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 85%;
    box-sizing: border-box;
    display: block;
    background-color: transparent;
    background-image: unset;
    z-index: -1;
    transform: translateY(calc(-10rem + 0px)) matrix(1, 0, 0, -1, 0, 0);
  }



  @media (max-width: ${breakpoints.medium1}px) {
    padding: 0 30px;

    h2 {
      font-size: 5rem;
    }

    svg {
      height: 50%;
    }
  }

  @media (max-width: ${breakpoints.small1}px) {
    padding: 0 10px;

    svg {
      height: 45%;
    }
  }
`
const AboutInfo = styled.div`
  display: flex;
  gap: 100px;
  width: 100%;
  justify-content: space-between;
  max-height: 135rem;

  & > div {
    max-width: 50%;
    min-width: 40%;
  }

  h3 {
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.blue3 : theme.colors.white1};
    margin-bottom: 5rem;
    font-family: Inter;
    font-size: 4rem;
    font-weight: 500;
  }

  p {
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.blue1 : theme.colors.white1};
    font-family: Inter;
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 175%;
    height: 90%;
    overflow-y: overlay;
    padding: 0 30px 0 0;
  }

  @media (max-width: ${breakpoints.medium1}px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
    max-height: unset;

    & > div {
      width: 100%;
      max-width: 100%;
      text-align: center;
    }

    h3 {
      font-size: 3rem;
    }

    p {
      max-height: 300px;
      padding: 0 10px 0 0;
    }

    p::-webkit-scrollbar {
      width: 5px;
    }
  }
`
const Technologies = styled.div`
  display: grid;
  justify-items: start;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  gap: 75px;

  @media (max-width: ${breakpoints.large1}px) {
    gap: 40px;
  }

  @media (max-width: ${breakpoints.medium1}px) {
    gap: 30px;
  }
`
const TechnologyInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  img {
    width: 9rem;
    height: 9rem;
  }

  span {
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.black1 : theme.colors.white1};
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-weight: 500;
  }

  @media (max-width: ${breakpoints.large1}px) {
    img {
      width: 80%;
    }

    span {
      font-size: 15px;
    }
  }

  @media (max-width: ${breakpoints.medium1}px) {
    gap: 10px;

    img {
      width: 60%;
    }

    span {
      font-size: 12px;
    }
  }
`

export { StyledAbout, AboutInfo, Technologies, TechnologyInfo }
