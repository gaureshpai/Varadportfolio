import { Container } from "./styles";
import VinayakSingh from "../../assets/pfp.jpg";
import nestIcon from "../../assets/nest.png";
import sqlIcon from "../../assets/sql.png";
import jsIcon from "../../assets/js-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import postmanIcon from "../../assets/postman.png";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Varadraj, a backend software developer with a passion for creating robust and scalable applications. My expertise lies in API development using NestJS, and I'm skilled in working with SQL databases to ensure efficient data management.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I am proficient in TypeScript and JavaScript, allowing me to write clean, maintainable code. Additionally, I utilize Postman for effective API testing and collaboration, ensuring that the services I develop are reliable and user-friendly.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            If you're looking for someone to build a powerful backend for your web application or to enhance your existing systems, I'd love to discuss how we can work together to achieve your goals!
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={nestIcon} alt="NestJS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={sqlIcon} alt="SQL" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={typescriptIcon} alt="TypeScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={postmanIcon} alt="Postman" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={VinayakSingh} alt="G Varadraj Kamath" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
