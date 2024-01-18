import styled from "styled-components"
import breakpoints from "../../style/responsive"

const StyledEmail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 750px;
  padding: 2.5rem;
  gap: 2.5rem;
  background-color: ${({ theme }) =>
    theme.theme === "light" ? theme.colors.white1 : theme.colors.blue4};

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 10px;
  }

  label {
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.blue3 : theme.colors.white1};
    text-align: center;
    font-family: Inter;
    font-size: 2.4rem;
    font-weight: 400;
  }

  input,
  textarea {
    all: unset;
    text-align: left;
    padding: 10px;
    width: calc(100% - 20px);
    height: 60px;
    background-color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.blue4 : theme.colors.white6};
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.white7 : theme.colors.blue1};
    font-family: Inter;
    font-size: 2.4rem;

    &::placeholder {
      color: ${({ theme }) =>
        theme.theme === "light" ? theme.colors.white7 : theme.colors.blue1};
      font-family: Inter;
      font-size: 2.4rem;
    }
  }

  input:-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0 100px
      ${({ theme }) =>
        theme.theme === "light" ? theme.colors.blue4 : theme.colors.white6};
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) =>
      theme.theme === "light" ? theme.colors.white7 : theme.colors.blue1};
  }

  textarea {
    height: 150px;
  }

  @media (max-width: ${breakpoints.medium1}px) {
    width: 100%;

    input {
      height: 30px;
    }
  }

  @media (max-width: ${breakpoints.small1}px) {
    padding: 10px;
    align-items: center;

    div {
      align-items: center;
    }

    input,
    textarea {
      font-size: 12px;
      text-align: center;

      &::placeholder {
        text-align: center;
      }
    }

    textarea {
      text-align: left;
    }
  }
`
export { StyledEmail }
