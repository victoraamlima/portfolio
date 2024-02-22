import { ContactBtn } from "../ContactBtn/ContactBtn"
import {
  StyledCallMe,
  EmailLink,
  StyledProfileInfo,
  Line,
} from "./styleProfileInfo"

const ProfileInfo = ({ footer }) => {
  return (
    <StyledProfileInfo $footer={footer}>
      <div>
        <h2>
          <span>Olá, eu sou</span> Victor Meireles
        </h2>
        <p>
          <span>Sou um</span> Desenvolvedor Full-Stack{" "}
          <span>
            {" "}
            e desenvolvo interfaces de usuário web e aplicações Back-end
          </span>
        </p>
      </div>

      {footer && <Line />}

      <StyledCallMe>
        {footer && <h5>Contate Me</h5>}

        <div>
          <ContactBtn footer={footer} />

          {footer && (
            <EmailLink href="mailto:victoraamlima@gmail.com">
              Victoraamlima@Gmail.com
            </EmailLink>
          )}
        </div>
      </StyledCallMe>
    </StyledProfileInfo>
  )
}

export default ProfileInfo
