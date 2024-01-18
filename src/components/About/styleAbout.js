import styled from "styled-components"
import breakpoints from "../../style/responsive"

const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10rem;
  gap: 5rem;

  h2 {
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.blue3 : theme.colors.white1};
    text-align: center;
    font-family: Inter;
    font-size: 9.6rem;
    font-weight: 400;
  }

  @media (max-width: ${breakpoints.medium1}px) {
    padding: 0 30px;

    h2 {
      font-size: 5rem;
    }
  }

  @media (max-width: ${breakpoints.small1}px) {
    padding: 0 10px;
  }
`
const AboutInfo = styled.div`
  display: flex;
  gap: 100px;
  width: 100%;
  justify-content: space-between;

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
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 175%;
  }

  @media (max-width: ${breakpoints.medium1}px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;

    & > div {
      width: 100%;
      max-width: 100%;
      text-align: center;
    }

    h3 {
      font-size: 3rem;
    }

    p {
      font-size: 2.5rem;
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
