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
        <h4>Oi, eu sou</h4>
        <h2>
          Victor Meireles<span>.</span>
        </h2>
        <h3>
          Desenvolvedor Full-Stack<span>.</span>
        </h3>
      </div>

      <p>
        Sou um desenvolvedor full-stack e designer gráfico
        freelancer que descobriu a sua paixão pela programação. Comecei a
        estudar desenvolvimento web e me apaixonei pela área. Até o final de
        2023, já tinha completado dois cursos de front-end e back-end e me tornei
        um desenvolvedor full-stack. Ainda tenho muito a aprender, mas estou
        determinado a seguir a minha vocação.
      </p>

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
