import './styles.css';
import { ReactComponent as YoutubeIcon} from './youtube.svg';
import { ReactComponent as InstagramIcon} from './instagram.svg';
import { ReactComponent as LinkedinIcon} from './linkedin.svg';

function Footer() {
  return (
    <>
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="https://youtube.com/c/DevSuperior" target="_new">
          <YoutubeIcon />
        </a>
        <a href="https://www.linkedin.com/in/marcos-kloss-483b67202/" target="-new">
          <LinkedinIcon />
        </a>
        <a href="https://www.instagram.com/devsuperior.ig/">
          <InstagramIcon />
        </a>
      </div>
    </footer>
    </>
  );
}

export default Footer;