import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"

export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:vkbantwal021@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:vkbantwal021@gmail.com">vkbantwal021@gmail.com</a>
        </div>
        <div>
        <a href="tel:+917090789012"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+917090789012">(+91) 7090789012</a>
        </div>  
      </div>
    </Container>
  )
}