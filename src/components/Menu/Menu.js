import { useState } from "react"
import { LabelMenuHamburger, StyledMenu } from "./styleMenu"

const Menu = () => {
  const [checked, setChecked] = useState(false)

  const handleHamburgerFilter = (event) => {
    setChecked(event.target.checked)
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      setChecked(false)
    }
  })

  return (
    <>
      <LabelMenuHamburger htmlFor="menu-hamburger">
        <input
          checked={checked}
          type="checkbox"
          id="menu-hamburger"
          onChange={handleHamburgerFilter}
        />

        <StyledMenu>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#footer">Contatos</a>
          </li>
        </StyledMenu>

        <span></span>
      </LabelMenuHamburger>
    </>
  )
}

export default Menu
