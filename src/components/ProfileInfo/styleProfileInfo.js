import styled from "styled-components"

const StyledProfileInfo = styled.div`
  display: flex;
  flex-direction: ${({ $footer }) => ($footer ? "row" : "column")};
  justify-content: center;
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
    font-size: 80px;
    font-weight: 700;
    line-height: 100%;

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
    font-size: 40px;
    font-weight: 600;
    line-height: 100%;

    span {
      display: ${({ $footer }) => ($footer ? "none" : "inline")};
    }
  }

  h4 {
    display: ${({ $footer }) => ($footer ? "none" : "block")};
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.blue3 : theme.colors.white1};
    font-family: Inter;
    font-size: 48px;
    font-weight: 500;
    line-height: 100%;
  }

  p {
    display: ${({ $footer }) => ($footer ? "none" : "block")};
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.blue1 : theme.colors.white1};
    font-family: Inter;
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 10px;
  }
`
export { StyledProfileInfo }
