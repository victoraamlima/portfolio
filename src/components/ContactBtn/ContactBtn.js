import GithubLogo from "../../images/github-logo.svg"
import LinkedinLogo from "../../images/linkedin-logo.svg"
import WhatsappLogo from "../../images/whatsapp-logo.svg"
import { ContactIcon, StyledContactBtn } from "./styleContactBtn"

const ContactBtn = ({ footer }) => {
  const contactIcons = [GithubLogo, LinkedinLogo, WhatsappLogo]

  return (
    <StyledContactBtn $footer={footer}>
      {contactIcons.map((icon, index) => {
        return (
          <li key={index}>
            <a href="#home">
              <ContactIcon src={icon} alt="Github logo" />
            </a>
          </li>
        )
      })}
    </StyledContactBtn>
  )
}

export { ContactBtn }
