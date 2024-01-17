import { StyledButton } from "../Button/styleButton"
import { StyledEmail } from "./styleEmail"

const Email = () => {
  return (
    <StyledEmail>
      <div>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" name="name" placeholder="Seu nome" />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Seu email" />
      </div>

      <div>
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          placeholder="Sua mensagem"
        ></textarea>
      </div>

      <StyledButton $width="300px" $height="78px" $fontesize="30px">
        Enviar
      </StyledButton>
    </StyledEmail>
  )
}

export default Email
