import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                fill="#23ce6b"
              >
                <title>Blood Drop</title>
                <path d="M12 2C10.3 2 8.7 3 7.5 4.5C6.3 6 5.5 8 5.5 10C5.5 14 12 20 12 20C12 20 18.5 14 18.5 10C18.5 8 17.7 6 16.5 4.5C15.3 3 13.7 2 12 2ZM12 10C11.3 10 10.5 10.8 10.5 11.5C10.5 12.2 11.3 13 12 13C12.7 13 13.5 12.2 13.5 11.5C13.5 10.8 12.7 10 12 10ZM12 16C11.5 16 11 16.5 11 17C11 17.5 11.5 18 12 18C12.5 18 13 17.5 13 17C13 16.5 12.5 16 12 16Z" />
              </svg>
            </header>
            <div className="body">
              <h3>Blood Bank Management System</h3>
              <p>
                Developed a comprehensive Blood Bank Management System utilizing React for the frontend and MySQL for the backend. The application facilitates the management of blood donations, donor information, and inventory tracking, allowing users to easily register, search for donors, and manage blood stock levels efficiently.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>MySQL</li>
                <li>React</li>
                <li>Node.js</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/CodeVinayak/AI-Chatbot-Assistant" target="_blank" rel="noreferrer noopener">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://ai-chatbot-t8fn.onrender.com" target="_blank" rel="noreferrer noopener">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>GeniusBot: AI-Powered Assistance with PDF Insight</h3>
              <p>
                Developed an interactive chatbot application using Streamlit, OpenAI's GPT-3.5-turbo language model, and PyPDF2 for PDF text extraction, enabling users to ask context-based questions on uploaded PDFs and general queries.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Streamlit</li>
                <li>PyPDF2</li>
                <li>LangChain</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>*/
        }

      </div>
    </Container>
  );
}