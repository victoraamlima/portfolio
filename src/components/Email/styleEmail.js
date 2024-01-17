import styled from "styled-components"

const StyledEmail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 886px;
  padding: 25px;
  gap: 25px;
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
    font-size: 24px;
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
    font-size: 24px;

    &::placeholder {
      color: ${({ theme }) =>
        theme.theme === "light" ? theme.colors.white7 : theme.colors.blue1};
      font-family: Inter;
      font-size: 24px;
    }
  }

  textarea {
    height: 150px;
  }
`
export { StyledEmail }
