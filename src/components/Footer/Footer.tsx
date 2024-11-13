import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
export function Footer() {
  return (
    <Container className="footer">
      <div>
        <p>
          Developed by <a href="https://kreekarvat.in" rel='noopener noreferrer' target='_blank' className='paaa'>Kreekarvat Technologies</a> using <img src={reactIcon} alt="React" />
        </p>
      </div>
    </Container>
  )
}
