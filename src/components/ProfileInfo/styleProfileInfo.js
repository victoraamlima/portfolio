import styled from "styled-components"
import breakpoints from "../../style/responsive"

const StyledProfileInfo = styled.div`
  display: flex;
  flex-direction: ${({ $footer }) => ($footer ? "row" : "column")};
  justify-content: center;
  align-items: ${({ $footer }) => ($footer ? "center" : "flex-start")};
  gap: 40px;
  max-width: 900px;
  text-align: ${({ $footer }) => ($footer ? "center" : "left")};

  div {
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
    font-size: 3.2rem;
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
export { StyledProfileInfo }
