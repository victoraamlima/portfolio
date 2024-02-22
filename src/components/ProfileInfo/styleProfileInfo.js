import styled from "styled-components"
import breakpoints from "../../style/responsive"

const StyledProfileInfo = styled.div`
  display: flex;
  gap: 40px;

  ${({ $footer }) =>
    $footer
      ? `
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      max-width: unset;
      text-align: center;
      width: 100%;
      `
      : `
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 1200px;
      text-align: left;
      `}

  div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
  }

  h2 {
    color: ${({ theme }) => theme.colors.orange1};
    font-family: Inter;
    font-size: 8rem;
    font-weight: 700;
    line-height: 100%;
    white-space: nowrap;

    span {
      display: ${({ $footer }) => ($footer ? "none" : "inline")};
      color: ${({ theme }) => theme.colors.white1};
      font-weight: 600;
      line-height: 100%;
      white-space: wrap;
    }
  }

  p {
    color: ${({ theme, $footer }) =>
      $footer ? theme.colors.white1 : theme.colors.orange1};
    font-size: ${({ $footer }) => ($footer ? "4rem" : "2.5rem")};

    font-family: Inter;
    font-weight: 700;
    text-align: center;
    white-space: nowrap;

    span {
      display: ${({ $footer }) => ($footer ? "none" : "inline")};
      color: ${({ theme }) => theme.colors.white1};
      font-weight: 500;
      line-height: 100%;
      white-space: wrap;
    }
  }

  @media (max-width: ${breakpoints.large2}px) {
    flex-direction: column;
  }

  @media (max-width: ${breakpoints.medium1}px) {
    div {
      align-items: center;
    }

    h2 {
      font-size: 7rem;
    }

    p {
      // text-align: start;
      max-width: 600px;
    }
  }

  @media (max-width: ${breakpoints.medium1 - 293}px) {
    p {
      text-align: start;
      max-width: 600px;
    }
  }

  @media (max-width: ${breakpoints.small1}px) {
    h2 {
      font-size: 30px;
    }

    p {
      max-width: 600px;
      font-size: 15px;
      text-align: start;
    }
  }
`
const Line = styled.span`
  height: 20rem;
  width: 3px;
  background-color: ${({ theme }) => theme.colors.white1};

  @media (max-width: ${breakpoints.large2}px) {
    width: 400px;
    height: 3px;
  }

  @media (max-width: ${breakpoints.medium2}px) {
    width: 250px;
  }
`

const StyledCallMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;

  h5 {
    color: ${({ theme }) => theme.colors.white1};
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
  }

  @media (max-width: ${breakpoints.large2}px) {
    div {
      flex-direction: column;
      gap: 25px;
    }
  }
`

const EmailLink = styled.a`
  color: ${({ theme }) => theme.colors.white1};
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  text-decoration-line: underline;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${breakpoints.medium1}px) {
    font-size: 16px;
  }
`
export { StyledProfileInfo, Line, StyledCallMe, EmailLink }
