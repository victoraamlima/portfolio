import GithubLogo from "../../images/github-logo.svg"
import LinkedinLogo from "../../images/linkedin-logo.svg"
import WhatsappLogo from "../../images/whatsapp-logo.svg"
import { ContactIcon, StyledContactBtn } from "./styleContactBtn"

const ContactBtn = ({ footer }) => {
  const contactsInfo = [
    {
      icon: GithubLogo,
      alt: "Github logo",
      link: "https://github.com/victoraamlima",
    },
    {
      icon: LinkedinLogo,
      alt: "Linkedin logo",
      link: "https://www.linkedin.com/in/victor-meireles-dev/",
    },
    {
      icon: WhatsappLogo,
      alt: "Whatsapp logo",
      link: "https://wa.me/5591984023422",
    },
  ]

  return (
    <StyledContactBtn $footer={footer}>
      {contactsInfo.map((contactInfo, index) => {
        return (
          <li key={index}>
            <a href={contactInfo.link} target="blank">
              <ContactIcon src={contactInfo.icon} alt={contactInfo.alt} />
            </a>
          </li>
        )
      })}
    </StyledContactBtn>
  )
}

export { ContactBtn }
