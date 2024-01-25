import { useState } from "react"
import { LabelMenuHamburger, StyledMenu, StyledMenuList } from "./styleMenu"
import { Link } from "react-scroll"

const Menu = () => {
  const [checked, setChecked] = useState(false)
  const [layoutMobile, setLayoutMobile] = useState(
    window.innerWidth > 900 ? false : true
  )

  const handleHamburgerFilter = (event) => {
    setChecked(event.target.checked)
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      setChecked(false)
      setLayoutMobile(false)
    } else {
      setLayoutMobile(true)
    }
  })

  return (
    <StyledMenu>
      <LabelMenuHamburger htmlFor="menu-hamburger">
        <input
          checked={checked}
          type="checkbox"
          id="menu-hamburger"
          onChange={handleHamburgerFilter}
        />

        <span></span>
      </LabelMenuHamburger>

      <StyledMenuList $inputChecked={checked}>
        <li>
          <Link to="home" smooth={true} duration={500} offset={-210}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={layoutMobile ? -100 : -200}
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={layoutMobile ? -100 : -200}
          >
            Projetos
          </Link>
        </li>
        <li>
          <Link to="footer" smooth={true} duration={500}>
            Contatos
          </Link>
        </li>
      </StyledMenuList>
    </StyledMenu>
  )
}

export default Menu
