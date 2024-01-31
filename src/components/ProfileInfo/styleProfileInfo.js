import styled from "styled-components"
import breakpoints from "../../style/responsive"

const StyledProfileInfo = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: ${({ $footer }) => ($footer ? "row" : "column")};
  justify-content: ${({ $footer }) => ($footer ? "space-around" : "center")};
  align-items: ${({ $footer }) => ($footer ? "center" : "flex-start")};
  max-width: ${({ $footer }) => ($footer ? "unset" : "900px")};
  text-align: ${({ $footer }) => ($footer ? "center" : "left")};
  ${({ $footer }) => $footer && "width: 100%;"}

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
      align-items: flex-start;
      max-width:900px;
      text-align: left;
      `}

  div:first-child {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  h2 {
    color: ${({ theme, $footer }) =>
      theme.theme === "light" && !$footer
        ? theme.colors.blue3
        : theme.colors.white1};
    font-family: Inter;
    font-size: 8rem;
    font-weight: 700;
    line-height: 100%;
    white-space: nowrap;

    span {
      display: ${({ $footer }) => ($footer ? "none" : "inline")};
    }
  }

  h3 {
    color: ${({ theme, $footer }) =>
      theme.theme === "light" && !$footer
        ? theme.colors.blue3
        : theme.colors.white1};
    font-family: Inter;
    font-size: 4rem;
    font-weight: 600;
    line-height: 100%;
    white-space: nowrap;

    span {
      display: ${({ $footer }) => ($footer ? "none" : "inline")};
    }
  }

  h4 {
    display: ${({ $footer }) => ($footer ? "none" : "block")};
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.blue3 : theme.colors.white1};
    font-family: Inter;
    font-size: 4.8rem;
    font-weight: 500;
    line-height: 100%;
  }

  p {
    display: ${({ $footer }) => ($footer ? "none" : "block")};
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.blue1 : theme.colors.white1};
    font-family: Inter;
    font-size: 2.5rem;
    font-weight: 400;
    margin-bottom: 10px;
  }

  @media (max-width: ${breakpoints.large2}px) {
    flex-direction: column;
  }

  @media (max-width: ${breakpoints.medium1}px) {
    align-items: center;

    div {
      align-items: center;
    }

    h2 {
      font-size: 7rem;

      span {
        display: none;
      }
    }

    h3 {
      font-size: 3.5rem;

      span {
        display: none;
      }
    }

    h4 {
      display: none;
    }

    p {
      text-align: center;
      max-width: 600px;
    }
  }

  @media (max-width: ${breakpoints.small1}px) {
    h2 {
      font-size: 30px;
    }

    h3 {
      font-size: 20px;
    }

    p {
      max-width: 600px;
      font-size: 15px;
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
