import { useSelector } from "react-redux"
import { StyledMenu } from "./styleMenu"

const Menu = () => {
  const theme = useSelector((state) => state.themeColors)

  return (
      <StyledMenu theme={theme}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#projetos">Projetos</a>
        </li>
        <li>
          <a href="#contatos">Contatos</a>
        </li>
      </StyledMenu>
  )
}

export default Menu
