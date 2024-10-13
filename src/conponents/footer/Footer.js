import "./style.css";

import instagram from "./../../img/icons/instagram.png";
import facebook from "./../../img/icons/facebook.png";
import gitHub from "./../../img/icons/gitHub.png";
import linkedin from "./../../img/icons/linkedin.png";
import twiter from "./../../img/icons/twiter.png";
import youtube from "./../../img/icons/youtube.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!"><img src={instagram} alt="Link" /></a>
              <a href="#!"><img src={linkedin} alt="Link" /></a>
              <a href="#!"><img src={twiter} alt="Link" /></a>
              <a href="#!"><img src={gitHub} alt="Link" /></a>
              <a href="#!"><img src={facebook} alt="Link" /></a>
              <a href="#!"><img src={youtube} alt="Link" /></a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024 Houston TX</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;