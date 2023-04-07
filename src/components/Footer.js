import "../components/Footer.css";
import { ReactComponent as JustSoYouKnowLogo } from "../images/logo_jsyk.svg";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-content-container">
            <div className="logo-spacing">
              <JustSoYouKnowLogo
                className="footer-logo"
                alt="just so you know logo"
              />
            </div>
            <div className="email-link">
              <div>
                <MailOutlineRoundedIcon />
              </div>
              <div className="email-spacing">
                <a href="mailto:hello@justsoyouknow.com">
                  hello@justsoyouknow.com
                </a>
              </div>
            </div>
          </div>
          <div className="footer-content-container">
            <ul>
              <li className="quick-links">Quick links</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Policy</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
