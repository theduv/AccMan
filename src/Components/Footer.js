import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div id="divFooter">
      <a
        href="https://www.github.com/theduv/accman"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub id="githubIcon" />
      </a>
      <a
        href="https://www.linkedin.com/in/theduv/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiLinkedin id="linkedinIcon" />
      </a>
    </div>
  );
};

export default Footer;
