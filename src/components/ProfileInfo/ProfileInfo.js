import { ContactBtn } from "../ContactBtn/ContactBtn"
import { StyledProfileInfo } from "./styleProfileInfo"

const ProfileInfo = ({ footer }) => {
  return (
    <StyledProfileInfo $footer={footer}>
      <div>
        <h4>Oi, eu sou</h4>
        <h2>Victor Meireles<span>.</span></h2>
        <h3>Desenvolvedor Front-End<span>.</span></h3>
      </div>

      <p>
        Desde que interessei-me pela área da programação, há um ano, tenho
        estudado e praticado diariamente. Além de, ter feito diversos projetos.
      </p>

      <ContactBtn footer={footer} />
    </StyledProfileInfo>
  )
}

export default ProfileInfo
